import Home from '@/views/Home.vue'
export default class Router {
    constructor(routeList, metaList) {
        this.routeList = routeList.slice();
        this.metaList = metaList.slice()
        this.data = this.format(this.routeList, this.metaList);
    }
    _import(file, name) {
        return () =>
            import (`/* webpackChunkName: "${name}" */ "${file}"`)
    }
    format(routeList, metaList) {
        let res = routeList.slice();
        let result = metaList.slice();
        res.forEach(item => {
            if (item.component === '../views/Home.vue') {
                item.component = Home
            } else {
                item.component = this._import(item.component, item.name)
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