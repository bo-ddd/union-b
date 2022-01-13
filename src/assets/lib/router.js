import Home from '@/views/Home.vue'
export default class Router {
    constructor(options) {
        const { routeList, metaList } = options;
        this.routeList = routeList.slice();
        this.metaList = metaList.slice()
        this.data = this.format(this.routeList, this.metaList);
    }
    format(routeList, metaList) {
        let res = routeList.slice();
        let result = metaList.slice();
        res.forEach(item => {
            if (item.component === 'Home') {
                item.component = Home
            } else {
                const com = item.component;
                item.component = () =>
                    import (`@/views/${com}`)
            }
        })
        result.forEach(el => {
            let obj = {};
            obj["routeId"] = el.routeId;
            obj[el.key] = el.value;
            let arr2 = result.filter((target) => {
                return target.routeId == el.routeId;
            })
            if (arr2) {
                for (let i = 0; i < arr2.length; i++) {
                    if (arr2[i].key != el.key) {
                        obj[arr2[i].key] = arr2[i].value;
                    }
                }
            }
            res.forEach(item => {
                item.children = [];
                if (item.id === obj.routeId) {
                    item.meta = obj
                }
                let p = res.find(route => route.id == item.pid);
                item.pid && p.children.push(item);
            })
        })
        return res.filter(router => router.pid == null)
    }

}