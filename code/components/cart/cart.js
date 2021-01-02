// components/cart/cart.js
const computedBehavior = require('miniprogram-computed')
Component({
    behaviors: [computedBehavior],
    properties: {
        products: {  // 购物车商品数量
            type: Array,
            value: [],
        }
    },
    data: {
        totalPrice: 0,
        totalNum: 0,
        allChecked: false,
    },
    computed: {
        totalPrice(properties) {
            // 计算总价钱
            let totalPrice = 0;
            properties.products.map((item, index) => {
                item.checked ? totalPrice += parseInt(item.price) * parseInt(item.num) : "";
            })
            return totalPrice;
        },
        totalNum(properties) {
            // 计算总个数
            let totalNum = 0;
            properties.products.map((item, index) => {
                item.checked ? totalNum += parseInt(item.num) : "";
            })
            return totalNum;
        },
        allChecked(properties) {
            // 计算全部状态
            let ind = properties.products.findIndex((item) => {
                return item.checked == false
            })
            if(properties.products.length <=0) return  false;
            return ind == -1 ? true : false;
        }
    },
    methods: {
        desc(e) {
            let {
                index
            } = e.currentTarget.dataset;
            this.properties.products[index].num--;
            if (this.properties.products[index].num <= 1) {
                this.properties.products[index].num = 1;
            }
            this.setData({
                products: this.properties.products
            })
        },
        asc(e) {
            let {
                index
            } = e.currentTarget.dataset;
            this.properties.products[index].num++;
            this.setData({
                products: this.properties.products
            })
        },
        _changeChecked(e) {
            // console.log(e)
            let index = e.currentTarget.dataset.index;
            let val = e.detail.value;
            this.properties.products[index].checked = val;
            this.setData({
                products:this.properties.products
            })
        },
        _changeAllChecked(e){
            let val = e.detail.value;
            this.properties.products.map((item,index)=>{
                this.properties.products[index].checked = val;
            })
            this.setData({
                products:this.properties.products
            })
        },
        // 购物车提交
        formSubmit(){
            var myEventDetail = {
                totalPrice:this.data.totalPrice,
                totalNum:this.data.totalNum
            } // detail对象，提供给事件监听函数
            var myEventOption = {} // 触发事件的选项
            this.triggerEvent('submit', myEventDetail, myEventOption)
        },
        // 购物车删除
        _cartDelete(e){
            let  {id,index} =  e.currentTarget.dataset;
            var myEventDetail = {
               id,index
            } // detail对象，提供给事件监听函数
            var myEventOption = {} // 触发事件的选项
            this.triggerEvent('delete', myEventDetail, myEventOption)
        }
    }

})