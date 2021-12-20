<template>
  <div class="warp">
    <div class="palette-row">
      <div class="palette">
        <div class="title">
          <div class="main-title">Dust Red / 薄暮</div>
          <span class="description">斗志、奔放</span>
        </div>
        <div class="main-color">
          <div @click="changeColor('red1')" class="main-color-item" style="background-color:#fff1f0"><span class="main-color-text">red-1</span></div>
          <div @click="changeColor('red2')" class="main-color-item" style="background-color:#ffccc7"><span class="main-color-text">red-2</span></div>
          <div @click="changeColor('red3')" class="main-color-item" style="background-color:#ffa39e"><span class="main-color-text">red-3</span></div>
          <div @click="changeColor('red4')" class="main-color-item" style="background-color:#ff7875"><span class="main-color-text">red-4</span></div>
          <div @click="changeColor('red5')" class="main-color-item" style="background-color:#ff4d4f"><span class="main-color-text">red-5</span></div>
          <div @click="changeColor('red6')" class="main-color-item" style="background-color:#f5222d"><span class="main-color-text">red-6</span></div>
          <div @click="changeColor('red7')" class="main-color-item" style="background-color:#cf1322"><span class="main-color-text">red-7</span></div>
          <div @click="changeColor('red8')" class="main-color-item" style="background-color:#a8071a"><span class="main-color-text">red-8</span></div>
          <div @click="changeColor('red9')" class="main-color-item" style="background-color:#820014"><span class="main-color-text">red-9</span></div>
          <div @click="changeColor('red10')" class="main-color-item" style="background-color:#5c0011"><span class="main-color-text">red-10</span></div>
        </div>
      </div>
      <div class="palette">
        <div class="title">
          <div class="main-title">Volcano / 火山</div>
          <span class="description">醒目、澎湃</span>
        </div>
        <div class="main-color">
          <div @click="changeColor('volcano1')"  class="main-color-item" style="background-color:#fff2e8"><span class="main-color-text">volcano-1</span></div>
          <div @click="changeColor('volcano2')"  class="main-color-item" style="background-color:#ffd8bf"><span class="main-color-text">volcano-2</span></div>
          <div @click="changeColor('volcano3')"  class="main-color-item" style="background-color:#ffbb96"><span class="main-color-text">volcano-3</span></div>
          <div @click="changeColor('volcano4')"  class="main-color-item" style="background-color:#ff9c6e"><span class="main-color-text">volcano-4</span></div>
          <div @click="changeColor('volcano5')"  class="main-color-item" style="background-color:#ff7a45"><span class="main-color-text">volcano-5</span></div>
          <div @click="changeColor('volcano6')"  class="main-color-item" style="background-color:#fa541c"><span class="main-color-text">volcano-6</span></div>
          <div @click="changeColor('volcano7')"  class="main-color-item" style="background-color:#d4380d"><span class="main-color-text">volcano-7</span></div>
          <div @click="changeColor('volcano8')"  class="main-color-item" style="background-color:#ad2102"><span class="main-color-text">volcano-8</span></div>
          <div @click="changeColor('volcano9')"  class="main-color-item" style="background-color:#871400"><span class="main-color-text">volcano-9</span></div>
          <div @click="changeColor('volcano10')" class="main-color-item" style="background-color:#610b00"><span class="main-color-text">volcano-10</span></div>
        </div>
      </div>
      <div class="palette">
        <div class="title">
          <div class="main-title">Sunset Orange / 日暮</div>
          <span class="description">温暖、欢快</span>
        </div>
        <div class="main-color">
          <div @click="changeColor('orange1')" class="main-color-item" style="background-color:#fff7e6"><span class="main-color-text">orange-1</span></div>
          <div @click="changeColor('orange2')" class="main-color-item" style="background-color:#ffe7ba"><span class="main-color-text">orange-2</span></div>
          <div @click="changeColor('orange3')" class="main-color-item" style="background-color:#ffd591"><span class="main-color-text">orange-3</span></div>
          <div @click="changeColor('orange4')" class="main-color-item" style="background-color:#ffc069"><span class="main-color-text">orange-4</span></div>
          <div @click="changeColor('orange5')" class="main-color-item" style="background-color:#ffa940"><span class="main-color-text">orange-5</span></div>
          <div @click="changeColor('orange6')" class="main-color-item" style="background-color:#fa8c16"><span class="main-color-text">orange-6</span></div>
          <div @click="changeColor('orange7')" class="main-color-item" style="background-color:#d46b08"><span class="main-color-text">orange-7</span></div>
          <div @click="changeColor('orange8')" class="main-color-item" style="background-color:#ad4e00"><span class="main-color-text">orange-8</span></div>
          <div @click="changeColor('orange9')" class="main-color-item" style="background-color:#873800"><span class="main-color-text">orange-9</span></div>
          <div @click="changeColor('orange10')" class="main-color-item" style="background-color:#612500"><span class="main-color-text">orange-10</span></div>
        </div>
      </div>
    </div>
    <div class="palette-row">
      <div class="palette">
        <div class="title">
          <div class="main-title">Calendula Gold / 金盏花</div>
          <span class="description">活力、积极</span>
        </div>
        <div class="main-color">
          <div @click="changeColor('gold1')"  class="main-color-item" style="background-color:#fffbe6"><span class="main-color-text">gold-1</span></div>
          <div @click="changeColor('gold2')"  class="main-color-item" style="background-color:#fff1b8"><span class="main-color-text">gold-2</span></div>
          <div @click="changeColor('gold3')"  class="main-color-item" style="background-color:#ffe58f"><span class="main-color-text">gold-3</span></div>
          <div @click="changeColor('gold4')"  class="main-color-item" style="background-color:#ffd666"><span class="main-color-text">gold-4</span></div>
          <div @click="changeColor('gold5')"  class="main-color-item" style="background-color:#ffc53d"><span class="main-color-text">gold-5</span></div>
          <div @click="changeColor('gold6')"  class="main-color-item" style="background-color:#faad14"><span class="main-color-text">gold-6</span></div>
          <div @click="changeColor('gold7')"  class="main-color-item" style="background-color:#d48806"><span class="main-color-text">gold-7</span></div>
          <div @click="changeColor('gold8')"  class="main-color-item" style="background-color:#ad6800"><span class="main-color-text">gold-8</span></div>
          <div @click="changeColor('gold9')"  class="main-color-item" style="background-color:#874d00"><span class="main-color-text">gold-9</span></div>
          <div @click="changeColor('gold10')" class="main-color-item" style="background-color:#613400"><span class="main-color-text">gold-10</span></div>
        </div>
      </div>
      <div class="palette">
        <div class="title">
          <div class="main-title">Sunrise Yellow / 日出</div>
          <span class="description">出生、阳光</span>
        </div>
        <div class="main-color">
          <div @click="changeColor('yellow1')"  class="main-color-item" style="background-color:#feffe6"><span class="main-color-text">yellow-1</span></div>
          <div @click="changeColor('yellow2')"  class="main-color-item" style="background-color:#ffffb8"><span class="main-color-text">yellow-2</span></div>
          <div @click="changeColor('yellow3')"  class="main-color-item" style="background-color:#fffb8f"><span class="main-color-text">yellow-3</span></div>
          <div @click="changeColor('yellow4')"  class="main-color-item" style="background-color:#fff566"><span class="main-color-text">yellow-4</span></div>
          <div @click="changeColor('yellow5')"  class="main-color-item" style="background-color:#ffec3d"><span class="main-color-text">yellow-5</span></div>
          <div @click="changeColor('yellow6')"  class="main-color-item" style="background-color:#fadb14"><span class="main-color-text">yellow-6</span></div>
          <div @click="changeColor('yellow7')"  class="main-color-item" style="background-color:#d4b106"><span class="main-color-text">yellow-7</span></div>
          <div @click="changeColor('yellow8')"  class="main-color-item" style="background-color:#ad8b00"><span class="main-color-text">yellow-8</span></div>
          <div @click="changeColor('yellow9')"  class="main-color-item" style="background-color:#876800"><span class="main-color-text">yellow-9</span></div>
          <div @click="changeColor('yellow10')" class="main-color-item" style="background-color:#614700"><span class="main-color-text">yellow-10</span></div>
        </div>
      </div>
      <div class="palette">
        <div class="title">
          <div class="main-title">Lime / 青柠</div>
          <span class="description">自然、生机</span>
        </div>
        <div class="main-color">
          <div @click="changeColor('lime1')"  class="main-color-item" style="background-color:#fcffe6"><span class="main-color-text">lime-1</span></div>
          <div @click="changeColor('lime2')"  class="main-color-item" style="background-color:#f4ffb8"><span class="main-color-text">lime-2</span></div>
          <div @click="changeColor('lime3')"  class="main-color-item" style="background-color:#eaff8f"><span class="main-color-text">lime-3</span></div>
          <div @click="changeColor('lime4')"  class="main-color-item" style="background-color:#d3f261"><span class="main-color-text">lime-4</span></div>
          <div @click="changeColor('lime5')"  class="main-color-item" style="background-color:#bae637"><span class="main-color-text">lime-5</span></div>
          <div @click="changeColor('lime6')"  class="main-color-item" style="background-color:#a0d911"><span class="main-color-text">lime-6</span></div>
          <div @click="changeColor('lime7')"  class="main-color-item" style="background-color:#7cb305"><span class="main-color-text">lime-7</span></div>
          <div @click="changeColor('lime8')"  class="main-color-item" style="background-color:#5b8c00"><span class="main-color-text">lime-8</span></div>
          <div @click="changeColor('lime9')"  class="main-color-item" style="background-color:#3f6600"><span class="main-color-text">lime-9</span></div>
          <div @click="changeColor('lime10')" class="main-color-item" style="background-color:#254000"><span class="main-color-text">lime-10</span></div>
        </div>
      </div>
    </div>
    <div class="palette-row">
      <div class="palette">
        <div class="title">
          <div class="main-title">Polar Green / 极光绿</div>
          <span class="description">健康、创新</span>
        </div>
        <div class="main-color">
          <div @click="changeColor('green1')"  class="main-color-item" style="background-color:#f6ffed"><span class="main-color-text">green-1</span></div>
          <div @click="changeColor('green2')"  class="main-color-item" style="background-color:#d9f7be"><span class="main-color-text">green-2</span></div>
          <div @click="changeColor('green3')"  class="main-color-item" style="background-color:#b7eb8f"><span class="main-color-text">green-3</span></div>
          <div @click="changeColor('green4')"  class="main-color-item" style="background-color:#95de64"><span class="main-color-text">green-4</span></div>
          <div @click="changeColor('green5')"  class="main-color-item" style="background-color:#73d13d"><span class="main-color-text">green-5</span></div>
          <div @click="changeColor('green6')"  class="main-color-item" style="background-color:#52c41a"><span class="main-color-text">green-6</span></div>
          <div @click="changeColor('green7')"  class="main-color-item" style="background-color:#389e0d"><span class="main-color-text">green-7</span></div>
          <div @click="changeColor('green8')"  class="main-color-item" style="background-color:#237804"><span class="main-color-text">green-8</span></div>
          <div @click="changeColor('green9')"  class="main-color-item" style="background-color:#135200"><span class="main-color-text">green-9</span></div>
          <div @click="changeColor('green10')" class="main-color-item" style="background-color:#092b00"><span class="main-color-text">green-10</span></div>
        </div>
      </div>
      <div class="palette">
        <div class="title">
          <div class="main-title">Cyan / 明青</div>
          <span class="description">希望、坚强</span>
        </div>
        <div class="main-color">
          <div @click="changeColor('cyan1')"  class="main-color-item" style="background-color:#e6fffb"><span class="main-color-text">cyan-1</span></div>
          <div @click="changeColor('cyan2')"  class="main-color-item" style="background-color:#b5f5ec"><span class="main-color-text">cyan-2</span></div>
          <div @click="changeColor('cyan3')"  class="main-color-item" style="background-color:#87e8de"><span class="main-color-text">cyan-3</span></div>
          <div @click="changeColor('cyan4')"  class="main-color-item" style="background-color:#5cdbd3"><span class="main-color-text">cyan-4</span></div>
          <div @click="changeColor('cyan5')"  class="main-color-item" style="background-color:#36cfc9"><span class="main-color-text">cyan-5</span></div>
          <div @click="changeColor('cyan6')"  class="main-color-item" style="background-color:#13c2c2"><span class="main-color-text">cyan-6</span></div>
          <div @click="changeColor('cyan7')"  class="main-color-item" style="background-color:#08979c"><span class="main-color-text">cyan-7</span></div>
          <div @click="changeColor('cyan8')"  class="main-color-item" style="background-color:#006d75"><span class="main-color-text">cyan-8</span></div>
          <div @click="changeColor('cyan9')"  class="main-color-item" style="background-color:#00474f"><span class="main-color-text">cyan-9</span></div>
          <div @click="changeColor('cyan10')" class="main-color-item" style="background-color:#002329"><span class="main-color-text">cyan-10</span></div>
        </div>
      </div>
      <div class="palette">
        <div class="title">
          <div class="main-title">Daybreak Blue / 拂晓蓝</div>
          <span class="description">包容、科技、普惠</span>
        </div>
        <div class="main-color">
          <div @click="changeColor('blue1')"  class="main-color-item" style="background-color:#e6f7ff"><span class="main-color-text">blue-1</span></div>
          <div @click="changeColor('blue2')"  class="main-color-item" style="background-color:#bae7ff"><span class="main-color-text">blue-2</span></div>
          <div @click="changeColor('blue3')"  class="main-color-item" style="background-color:#91d5ff"><span class="main-color-text">blue-3</span></div>
          <div @click="changeColor('blue4')"  class="main-color-item" style="background-color:#69c0ff"><span class="main-color-text">blue-4</span></div>
          <div @click="changeColor('blue5')"  class="main-color-item" style="background-color:#40a9ff"><span class="main-color-text">blue-5</span></div>
          <div @click="changeColor('blue6')"  class="main-color-item" style="background-color:#1890ff"><span class="main-color-text">blue-6</span></div>
          <div @click="changeColor('blue7')"  class="main-color-item" style="background-color:#096dd9"><span class="main-color-text">blue-7</span></div>
          <div @click="changeColor('blue8')"  class="main-color-item" style="background-color:#0050b3"><span class="main-color-text">blue-8</span></div>
          <div @click="changeColor('blue9')"  class="main-color-item" style="background-color:#003a8c"><span class="main-color-text">blue-9</span></div>
          <div @click="changeColor('blue10')" class="main-color-item" style="background-color:#002766"><span class="main-color-text">blue-10</span></div>
        </div>
      </div>
    </div>
    <div class="palette-row">
      <div class="palette">
        <div class="title">
          <div class="main-title">Geek Blue / 极客蓝</div>
          <span class="description">探索、钻研</span>
        </div>
        <div class="main-color">
          <div @click="changeColor('geekblue1')"  class="main-color-item" style="background-color:#f0f5ff"><span class="main-color-text">geekblue-1</span></div>
          <div @click="changeColor('geekblue2')"  class="main-color-item" style="background-color:#d6e4ff"><span class="main-color-text">geekblue-2</span></div>
          <div @click="changeColor('geekblue3')"  class="main-color-item" style="background-color:#adc6ff"><span class="main-color-text">geekblue-3</span></div>
          <div @click="changeColor('geekblue4')"  class="main-color-item" style="background-color:#85a5ff"><span class="main-color-text">geekblue-4</span></div>
          <div @click="changeColor('geekblue5')"  class="main-color-item" style="background-color:#597ef7"><span class="main-color-text">geekblue-5</span></div>
          <div @click="changeColor('geekblue6')"  class="main-color-item" style="background-color:#2f54eb"><span class="main-color-text">geekblue-6</span></div>
          <div @click="changeColor('geekblue7')"  class="main-color-item" style="background-color:#1d39c4"><span class="main-color-text">geekblue-7</span></div>
          <div @click="changeColor('geekblue8')"  class="main-color-item" style="background-color:#10239e"><span class="main-color-text">geekblue-8</span></div>
          <div @click="changeColor('geekblue9')"  class="main-color-item" style="background-color:#061178"><span class="main-color-text">geekblue-9</span></div>
          <div @click="changeColor('geekblue10')" class="main-color-item" style="background-color:#030852"><span class="main-color-text">geekblue-10</span></div>
        </div>
      </div>
      <div class="palette">
        <div class="title">
          <div class="main-title">Golden Purple / 酱紫</div>
          <span class="description">优雅、浪漫</span>
        </div>
        <div class="main-color">
          <div @click="changeColor('purple1')"  class="main-color-item" style="background-color:#f9f0ff"><span class="main-color-text">purple-1</span></div>
          <div @click="changeColor('purple2')"  class="main-color-item" style="background-color:#efdbff"><span class="main-color-text">purple-2</span></div>
          <div @click="changeColor('purple3')"  class="main-color-item" style="background-color:#d3adf7"><span class="main-color-text">purple-3</span></div>
          <div @click="changeColor('purple4')"  class="main-color-item" style="background-color:#b37feb"><span class="main-color-text">purple-4</span></div>
          <div @click="changeColor('purple5')"  class="main-color-item" style="background-color:#9254de"><span class="main-color-text">purple-5</span></div>
          <div @click="changeColor('purple6')"  class="main-color-item" style="background-color:#722ed1"><span class="main-color-text">purple-6</span></div>
          <div @click="changeColor('purple7')"  class="main-color-item" style="background-color:#531dab"><span class="main-color-text">purple-7</span></div>
          <div @click="changeColor('purple8')"  class="main-color-item" style="background-color:#391085"><span class="main-color-text">purple-8</span></div>
          <div @click="changeColor('purple9')"  class="main-color-item" style="background-color:#22075e"><span class="main-color-text">purple-9</span></div>
          <div @click="changeColor('purple10')" class="main-color-item" style="background-color:#120338"><span class="main-color-text">purple-10</span></div>
        </div>
      </div>
      <div class="palette">
        <div class="title">
          <div class="main-title">Volcano / 火山</div>
          <span class="description">醒目、澎湃</span>
        </div>
        <div class="main-color">
          <div @click="changeColor('magenta1')"  class="main-color-item" style="background-color:#fff0f6"><span class="main-color-text">magenta-1</span></div>
          <div @click="changeColor('magenta2')"  class="main-color-item" style="background-color:#ffd6e7"><span class="main-color-text">magenta-2</span></div>
          <div @click="changeColor('magenta3')"  class="main-color-item" style="background-color:#ffadd2"><span class="main-color-text">magenta-3</span></div>
          <div @click="changeColor('magenta4')"  class="main-color-item" style="background-color:#ff85c0"><span class="main-color-text">magenta-4</span></div>
          <div @click="changeColor('magenta5')"  class="main-color-item" style="background-color:#f759ab"><span class="main-color-text">magenta-5</span></div>
          <div @click="changeColor('magenta6')"  class="main-color-item" style="background-color:#eb2f96"><span class="main-color-text">magenta-6</span></div>
          <div @click="changeColor('magenta7')"  class="main-color-item" style="background-color:#c41d7f"><span class="main-color-text">magenta-7</span></div>
          <div @click="changeColor('magenta8')"  class="main-color-item" style="background-color:#9e1068"><span class="main-color-text">magenta-8</span></div>
          <div @click="changeColor('magenta9')"  class="main-color-item" style="background-color:#780650"><span class="main-color-text">magenta-9</span></div>
          <div @click="changeColor('magenta10')" class="main-color-item" style="background-color:#520339"><span class="main-color-text">magenta-10</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/theme.scss'
export default {
  data(){
    return{

    }
  },
  methods:{
       changeColor(num) {
      let root = document.querySelector(":root");
      if (num == 'red1') {
        root.style.setProperty("--color", "rgb(255, 241, 240)");
        root.style.setProperty("--textcolor", "rgb(255, 77, 79)");
      } else if (num == 'red2') {
        root.style.setProperty("--color", "rgb(255, 204, 199)");
        root.style.setProperty("--textcolor", "rgb(255, 77, 79)");
      } else if (num == 'red3') {
        root.style.setProperty("--color", "rgb(255, 163, 158)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'red4') {
        root.style.setProperty("--color", "rgb(255, 120, 117)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'red5') {
        root.style.setProperty("--color", "rgb(255, 77, 79)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'red6') {
        root.style.setProperty("--color", "rgb(245, 34, 45)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'red7') {
        root.style.setProperty("--color", "rgb(207, 19, 34)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'red8') {
        root.style.setProperty("--color", "rgb(207, 19, 34)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'red9') {
        root.style.setProperty("--color", "rgb(130, 0, 20)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'red10') {
        root.style.setProperty("--color", "rgb(92, 0, 17)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'volcano1') {
        root.style.setProperty("--color", "rgb(255, 242, 232)");
        root.style.setProperty("--textcolor", "rgb(250, 84, 28)");
      } else if (num == 'volcano2') {
        root.style.setProperty("--color", "rgb(255, 216, 191)");
        root.style.setProperty("--textcolor", "rgb(250, 84, 28)");
      } else if (num == 'volcano3') {
        root.style.setProperty("--color", "rgb(255, 187, 150)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'volcano4') {
        root.style.setProperty("--color", "rgb(255, 156, 110)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'volcano5') {
        root.style.setProperty("--color", "rgb(255, 169, 64)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'volcano6') {
        root.style.setProperty("--color", "rgb(250, 84, 28)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'volcano7') {
        root.style.setProperty("--color", "rgb(212, 56, 13)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'volcano8') {
        root.style.setProperty("--color", "rgb(173, 33, 2)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'volcano9') {
        root.style.setProperty("--color", "rgb(135, 20, 0)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'volcano10') {
        root.style.setProperty("--color", "rgb(97, 11, 0)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'orange1') {
        root.style.setProperty("--color", "rgb(255, 247, 230)");
        root.style.setProperty("--textcolor", "rgb(250, 140, 22)");
      } else if (num == 'orange2') {
        root.style.setProperty("--color", "rgb(255, 231, 186)");
        root.style.setProperty("--textcolor", "rgb(250, 140, 22)");
      } else if (num == 'orange3') {
        root.style.setProperty("--color", "rgb(255, 213, 145)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'orange4') {
        root.style.setProperty("--color", "rgb(255, 192, 105)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'orange5') {
        root.style.setProperty("--color", "rgb(255, 169, 64)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'orange6') {
        root.style.setProperty("--color", "rgb(250, 140, 22)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'orange7') {
        root.style.setProperty("--color", "rgb(212, 107, 8)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'orange8') {
        root.style.setProperty("--color", "rgb(173, 78, 0)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'orange9') {
        root.style.setProperty("--color", "rgb(135, 56, 0)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'orange10') {
        root.style.setProperty("--color", "rgb(97, 37, 0)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } 
      else if (num == 'gold1') {
        root.style.setProperty("--color", "rgb(255, 251, 230)");
        root.style.setProperty("--textcolor", "rgb(250, 173, 20)");
      } else if (num == 'gold2') {
        root.style.setProperty("--color", "rgb(255, 241, 184)");
        root.style.setProperty("--textcolor", "rgb(250, 173, 20)");
      } else if (num == 'gold3') {
        root.style.setProperty("--color", "rgb(255, 229, 143)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'gold4') {
        root.style.setProperty("--color", "rgb(255, 214, 102)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'gold5') {
        root.style.setProperty("--color", "rgb(255, 197, 61)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'gold6') {
        root.style.setProperty("--color", "rgb(250, 173, 20)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'gold7') {
        root.style.setProperty("--color", "rgb(212, 136, 6)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'gold8') {
        root.style.setProperty("--color", "rgb(173, 104, 0)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'gold9') {
        root.style.setProperty("--color", "rgb(135, 77, 0)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'gold10') {
        root.style.setProperty("--color", "rgb(97, 52, 0)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      }
      else if (num == 'yellow1') {
        root.style.setProperty("--color", "rgb(254, 255, 230)");
        root.style.setProperty("--textcolor", "rgb(250, 173, 20)");
      } else if (num == 'yellow2') {
        root.style.setProperty("--color", "rgb(255, 255, 184)");
        root.style.setProperty("--textcolor", "rgb(250, 173, 20)");
      } else if (num == 'yellow3') {
        root.style.setProperty("--color", "rgb(255, 251, 143)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'yellow4') {
        root.style.setProperty("--color", "rgb(255, 245, 102)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'yellow5') {
        root.style.setProperty("--color", "rgb(255, 236, 61)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'yellow6') {
        root.style.setProperty("--color", "rgb(250, 219, 20)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'yellow7') {
        root.style.setProperty("--color", "rgb(212, 177, 6)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'yellow8') {
        root.style.setProperty("--color", "rgb(173, 139, 0)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'yellow9') {
        root.style.setProperty("--color", "rgb(135, 104, 0)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'yellow10') {
        root.style.setProperty("--color", "rgb(97, 71, 0)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      }
      else if (num == 'lime1') {
        root.style.setProperty("--color", "rgb(252, 255, 230)");
        root.style.setProperty("--textcolor", "rgb(250, 219, 20)");
      } else if (num == 'lime2') {
        root.style.setProperty("--color", "rgb(244, 255, 184)");
        root.style.setProperty("--textcolor", "rgb(250, 219, 20)");
      } else if (num == 'lime3') {
        root.style.setProperty("--color", "rgb(234, 255, 143)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'lime4') {
        root.style.setProperty("--color", "rgb(211, 242, 97)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'lime5') {
        root.style.setProperty("--color", "rgb(186, 230, 55)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'lime6') {
        root.style.setProperty("--color", "rgb(160, 217, 17)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'lime7') {
        root.style.setProperty("--color", "rgb(124, 179, 5)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'lime8') {
        root.style.setProperty("--color", "rgb(91, 140, 0)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'lime9') {
        root.style.setProperty("--color", "rgb(63, 102, 0)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'lime10') {
        root.style.setProperty("--color", "rgb(37, 64, 0)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      }
      else if (num == 'green1') {
        root.style.setProperty("--color", "rgb(246, 255, 237)");
        root.style.setProperty("--textcolor", "rgb(82, 196, 26)");
      } else if (num == 'green2') {
        root.style.setProperty("--color", "rgb(217, 247, 190)");
        root.style.setProperty("--textcolor", "rgb(82, 196, 26)");
      } else if (num == 'green3') {
        root.style.setProperty("--color", "rgb(183, 235, 143)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'green4') {
        root.style.setProperty("--color", "rgb(149, 222, 100)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'green5') {
        root.style.setProperty("--color", "rgb(115, 209, 61)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'green6') {
        root.style.setProperty("--color", "rgb(82, 196, 26)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'green7') {
        root.style.setProperty("--color", "rgb(56, 158, 13)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'green8') {
        root.style.setProperty("--color", "rgb(35, 120, 4)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'green9') {
        root.style.setProperty("--color", "rgb(19, 82, 0)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'green10') {
        root.style.setProperty("--color", "rgb(9, 43, 0)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      }
      else if (num == 'cyan1') {
        root.style.setProperty("--color", "rgb(230, 255, 251)");
        root.style.setProperty("--textcolor", "rgb(19, 194, 194)");
      } else if (num == 'cyan2') {
        root.style.setProperty("--color", "rgb(181, 245, 236)");
        root.style.setProperty("--textcolor", "rgb(19, 194, 194)");
      } else if (num == 'cyan3') {
        root.style.setProperty("--color", "rgb(135, 232, 222)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'cyan4') {
        root.style.setProperty("--color", "rgb(92, 219, 211)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'cyan5') {
        root.style.setProperty("--color", "rgb(54, 207, 201)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'cyan6') {
        root.style.setProperty("--color", "rgb(19, 194, 194)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'cyan7') {
        root.style.setProperty("--color", "rgb(8, 151, 156)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'cyan8') {
        root.style.setProperty("--color", "rgb(0, 109, 117)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'cyan9') {
        root.style.setProperty("--color", "rgb(0, 71, 79)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'cyan10') {
        root.style.setProperty("--color", "rgb(0, 35, 41)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      }
      else if (num == 'blue1') {
        root.style.setProperty("--color", "rgb(230, 247, 255)");
        root.style.setProperty("--textcolor", "rgb(24, 144, 255)");
      } else if (num == 'blue2') {
        root.style.setProperty("--color", "rgb(186, 231, 255)");
        root.style.setProperty("--textcolor", "rgb(24, 144, 255)");
      } else if (num == 'blue3') {
        root.style.setProperty("--color", "rgb(145, 213, 255)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'blue4') {
        root.style.setProperty("--color", "rgb(105, 192, 255)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'blue5') {
        root.style.setProperty("--color", "rgb(64, 169, 255)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'blue6') {
        root.style.setProperty("--color", "rgb(24, 144, 255)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'blue7') {
        root.style.setProperty("--color", "rgb(9, 109, 217)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'blue8') {
        root.style.setProperty("--color", "rgb(0, 80, 179)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'blue9') {
        root.style.setProperty("--color", "rgb(0, 58, 140)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'blue10') {
        root.style.setProperty("--color", "rgb(0, 39, 102)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      }
      else if (num == 'geekblue1') {
        root.style.setProperty("--color", "rgb(240, 245, 255)");
        root.style.setProperty("--textcolor", "rgb(47, 84, 235)");
      } else if (num == 'geekblue2') {
        root.style.setProperty("--color", "rgb(214, 228, 255)");
        root.style.setProperty("--textcolor", "rgb(47, 84, 235)");
      } else if (num == 'geekblue3') {
        root.style.setProperty("--color", "rgb(173, 198, 255)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'geekblue4') {
        root.style.setProperty("--color", "rgb(133, 165, 255)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'geekblue5') {
        root.style.setProperty("--color", "rgb(89, 126, 247)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'geekblue6') {
        root.style.setProperty("--color", "rgb(47, 84, 235)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'geekblue7') {
        root.style.setProperty("--color", "rgb(29, 57, 196)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'geekblue8') {
        root.style.setProperty("--color", "rgb(16, 35, 158)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'geekblue9') {
        root.style.setProperty("--color", "rgb(6, 17, 120)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'geekblue10') {
        root.style.setProperty("--color", "rgb(3, 8, 82)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      }
      else if (num == 'purple1') {
        root.style.setProperty("--color", "rgb(249, 240, 255)");
        root.style.setProperty("--textcolor", "rgb(114, 46, 209)");
      } else if (num == 'purple2') {
        root.style.setProperty("--color", "rgb(239, 219, 255)");
        root.style.setProperty("--textcolor", "rgb(114, 46, 209)");
      } else if (num == 'purple3') {
        root.style.setProperty("--color", "rgb(211, 173, 247)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'purple4') {
        root.style.setProperty("--color", "rgb(179, 127, 235)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'purple5') {
        root.style.setProperty("--color", "rgb(89, 126, 247)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'purple6') {
        root.style.setProperty("--color", "rgb(114, 46, 209)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'purple7') {
        root.style.setProperty("--color", "rgb(83, 29, 171)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'purple8') {
        root.style.setProperty("--color", "rgb(57, 16, 133)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'purple9') {
        root.style.setProperty("--color", "rgb(34, 7, 94)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'purple10') {
        root.style.setProperty("--color", "rgb(18, 3, 56)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      }
      else if (num == 'magenta1') {
        root.style.setProperty("--color", "rgb(255, 240, 246)");
        root.style.setProperty("--textcolor", "rgb(235, 47, 150)");
      } else if (num == 'magenta2') {
        root.style.setProperty("--color", "rgb(255, 214, 231)");
        root.style.setProperty("--textcolor", "rgb(235, 47, 150)");
      } else if (num == 'magenta3') {
        root.style.setProperty("--color", "rgb(255, 173, 210)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'magenta4') {
        root.style.setProperty("--color", "rgb(255, 133, 192)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'magenta5') {
        root.style.setProperty("--color", "rgb(247, 89, 171)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'magenta6') {
        root.style.setProperty("--color", "rgb(235, 47, 150)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'magenta7') {
        root.style.setProperty("--color", "rgb(196, 29, 127)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'magenta8') {
        root.style.setProperty("--color", "rgb(158, 16, 104)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'magenta9') {
        root.style.setProperty("--color", "rgb(120, 6, 80)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      } else if (num == 'magenta10') {
        root.style.setProperty("--color", "rgb(82, 3, 57)");
        root.style.setProperty("--textcolor", "rgb(255, 255, 255)");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/theme.scss"; 
:root{
  --theme-color_red:#ff4d4f;
  --theme-color_volcano:#ff7a45;
  --theme-color_orange:#ffa940;
  --theme-color_gold:#ffc53d;
  --theme-color_yellow:#ffec3d;
  --theme-color_lime:#bae637;
}
.warp{
  width: 100%;
  height: calc(100vh - 100px);
  overflow-y: auto;
  & .palette-row{
    width: 100%;
    height: 536px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    & .palette{
      width: 25%;
      height: 536px;
      margin-right: 5%;
      margin-left: 5%;
      & .title{
        margin: 0 0 24px;
        color: #777;
        font-weight: 500;
        height: 70px;
        font-size: 22px;
        text-align: center;
        & .main-title{
          height: 50px;
          line-height: 50px;
        }
        & .description{
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: 14px;
        }
      }
      & .main-color{
        width: 100%;
        height: 440px;
        & .main-color-item:hover{
          border-radius: 0px 5px 5px 0px;
          width: 102%;
        }
        & .main-color-item{
          width:100%;
          height: 44px;
          & .main-color-text{
            font-size: 14px;
            line-height: 44px;
            padding-left:20px ;
            color: #7e7e7e;
          }
        }
      }
    }
  }
}

</style>