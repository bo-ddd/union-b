import Home from '@/views/Home.vue'
export default class Router {
    constructor(options) {
        const { routeList, metaList, baseUrl } = options;
        this.baseUrl = baseUrl || '@/views';
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
                // const file = `${this.baseUrl}/${com}`;
                item.component =  () => import(`@/views/${com}`)
            }
        })
        result.forEach(el => {
            let meta = {};
            el.forEach(key => {
                meta["routeId"] = key.routeId
                meta[key.key] = key.value
            })
            res.forEach(item => {
                item.children = [];
                if (item.id == meta.routeId) {
                    item.meta = meta
                }
                let p = res.find(route => route.id == item.pid);
                item.pid && p.children.push(item);
            })
        })
        return res.filter(router => router.pid == null)
        // return res
    }
}