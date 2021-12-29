export default class Task {
    constructor(target) {
        this.target = target.slice();
    }
    /**
     * @description 管理中心页面的任务列表渲染使用
     *  */
    get category() {
        this.target = this.target.slice();
        return this.iterator();
    }
    /**
     * @description 任务中心渲染列表使用
     */
    get data() {
        return this.iterator(
            (item, parent) => item.pid && parent.child.push(item)
        ).filter((task) => task.pid === null);
    }
}