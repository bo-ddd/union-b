<template>
  <div id="wrap">
    <el-table :data="tableData" stripe style="width: 100% " >
      <el-table-column prop="date" width='150'>
           <template slot="header">
                <span>图标</span>
            </template>
             <template >
                <i class="el-icon-plus addBorder"></i>
            </template>
      </el-table-column>
      <el-table-column prop="date" >
           <template slot="header" >
                <span>名称</span>
            </template>
             <template slot-scope="scope">
                {{scope.row.date}}
            </template>
      </el-table-column>
      <el-table-column prop="date" >
           <template slot="header" >
                <span>排序</span>
            </template>
             <template slot-scope="scope">
                {{scope.row.date}}
            </template>
      </el-table-column>
      <el-table-column prop="date" >
           <template slot="header" >
                <span>关联页面</span>
            </template>
             <template slot-scope="scope">
                {{scope.row.date}}
            </template>
      </el-table-column>
      <el-table-column prop="date"  width="150">
           <template slot="header" >
                <span>操作</span>
            </template>
             <template slot-scope="scope">
                <el-link type="primary" @click="edit(scope.row)">编辑</el-link>
            </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="dialogFormVisible" >
        <template>
            <div class="title">
                <h3>编辑快接入口</h3>
            </div>
        </template>
        <div class="entrance">
            <div class="entrance_input">
                <div class="aaa"><div>入口名称</div></div>
                <div class="bbb"><el-input v-model="name" placeholder="10" ></el-input></div>
            </div>
            <div class="entrance_input">
                <div class="aaa"><div>关联页面</div></div>
                <div class="bbb">
                    <el-autocomplete
                        popper-class="my-autocomplete"
                        v-model="state"
                        :fetch-suggestions="querySearch"
                        placeholder="请输入内容"
                        @select="handleSelect">
                        <i
                            class="el-icon-arrow-down el-input__icon"
                            slot="suffix"
                            @click="handleIconClick">
                        </i>
                        <template slot-scope="{ item }">
                            <div class="name">{{ item.value }}</div>
                            <span class="addr">{{ item.address }}</span>
                        </template>
                    </el-autocomplete>
                </div>
            </div>
            <div class="entrance_input">
                <div class="aaa"><div>排序</div></div>
                <div class="bbb"><el-input v-model="name"  ></el-input></div>
            </div>
            <div class="entrance_input">
                <div class="aaa"> <div>上传图标</div> </div>
                <div class="ddd">

                    <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>




                </div>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button  @click="cancal">取 消</el-button>
                <el-button type="danger"  @click="preservation" class="ml-20">保 存</el-button>
            </div>
        </div>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>
// 编辑中的上传头像的加号
::v-deep .el-upload-list__item{
    width: 100px;
    height: 80px;
}
.addBorder{
    padding: 5px;
    border: 1px dashed #ccc;
    color: #ccc;
}
.ml-20{
    margin-left: 20px;
}
// 模态框中取消保存的样式
.dialog-footer{
    margin-left: 85px;
}
//  模态框中入口名称的input框的样式 
::v-deep .el-input__inner{
    width: 230px;
}
::v-deep .el-dialog__body{
    padding: 0;
}
h3{
    margin: 0;
    padding: 0;
}
#wrap{
    padding: 0 20px;
    padding-top: 20px;
    background-color: white;
}
::v-deep .is-leaf , ::v-deep .el-table__cell{
    text-align: center;
}
::v-deep .el-dialog{
    width: 30%;
    padding: 20px;
}
// 模态框中的标题样式
.title{
    text-align: center;
}
::v-deep .el-table__header{
    width: 100% !important;
}
::v-deep .el-table__body{
    width: 100% !important;
}
.entrance{
    padding: 30px 60px;
    & .entrance_input{
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        & .aaa{
            width: 30%;
            & div{
                float: right;
            }
            & div::before{
                content : '*';
                color : rgb(245, 108, 108);
                margin-right:'4px';
            }
        }
        & .bbb{
            width: 70%;
            margin-left: 20px;
        }
        & .ddd{
            margin-left: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            padding: 3;
            color: #ccc;

            & ::v-deep .el-upload{
                width: 100px;
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    } 
}
</style>
<script >
import { mapActions } from "vuex";
export default {
    data() {
        return {
            imageUrl: '',
            data : [],
            tableData: [
            {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
            },
            {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄",
            },
            {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄",
            },
            {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
            },
            ],
            // 模态框显示的状态
            dialogFormVisible: false,
            name : '',
            restaurants: [],
            state: '',
            dialogVisible : true,
            dialogImageUrl : '',
        };
    },
    methods: {
        ...mapActions(['getQuickList']),
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            console.log(file.url);
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        // 操作下编辑的点击事件 
        edit(a){
            console.log(a);
            this.dialogFormVisible = true;
        },
        querySearch(queryString, cb) {
            var restaurants = this.restaurants;
            var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        createFilter(queryString) {
            return (restaurant) => {
            return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        loadAll() {
            return [
            { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
            { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
            { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
            { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
            { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
            { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
            { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
            { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
            { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
            { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
            { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
            { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
            { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
            { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
            { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
            { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
            { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
            { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
            { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
            { "value": "枪会山", "address": "上海市普陀区棕榈路" },
            { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
            { "value": "钱记", "address": "上海市长宁区天山西路" },
            { "value": "壹杯加", "address": "上海市长宁区通协路" },
            { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
            { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
            { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
            { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
            { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
            { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
            { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
            { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
            { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
            { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
            { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
            { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
            { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
            { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
            { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
            { "value": "浏阳蒸菜", "address": "天山西路430号" },
            { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
            { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
            { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
            { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
            { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
            { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
            { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
            { "value": "阳阳麻辣烫", "address": "天山西路389号" },
            { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
            ];
        },
        // 模态框中关联页面的input框选中的值
        handleSelect(item) {
            console.log(item);
        },
        handleIconClick(ev) {
            console.log(ev);
        },
        // 编辑模块框的取消
        cancal(){
            this.dialogFormVisible = false;
        },
        // 编辑模态框的确定
        preservation(){
            this.restaurants = this.loadAll();
            this.dialogFormVisible = false;
        },
        
        // 获取所有数据
        async getData(){
            let res = await this.getQuickList({});
            this.data = res;
        }
    },
    async created(){
        this.getData();
        console.log(this.data);
    },
    mounted() {
        this.restaurants = this.loadAll();
    },
};
</script>