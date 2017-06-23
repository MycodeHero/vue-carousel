//创建一个轮播图类
export function Carousel(dom, options) {
    this.dom = dom
    this.init()
}

//轮播图初始化，将其传入的不同结构进行重构
Carousel.prototype.init = function () {
   this.timer = setInterval(()=>{
       let arr
       if(arr = this.domToArray()){
           if(!arr[0]) {
             return
           }
           this.arrayToDom(arr)
           clearInterval(this.timer)
       }
   }, 20)
}

//获取父集结点中拥有多个结点的DOM元素
Carousel.prototype.domToArray = function () {
    let ele = this.dom
    while (ele.children.length === 1) {
        ele = ele.children[0]
    }
    return this.slice(ele.children)
}

//封装Array中slice方法，使得类数组可以转化为数组
Carousel.prototype.slice = function () {
    var _self = [].shift.call(arguments)
    let arr = Array.prototype.slice.call(_self, arguments)
    return arr
}

//将数组中DOM.outerHTML拼接， 并将其渲染到相应的carousel结点上
Carousel.prototype.arrayToDom = function (data) {
    let arrStr = data.map((ele, index)=>{
        if(/^<li>/.test(ele.outerHTML)) {
            return ele.outerHTML
        }
        return ('<li>' + ele.outerHTML + '</li>')
    })
    this.dom.innerHTML = '<ul class="slider-box">'+arrStr.join('')+'</ul>'
}

