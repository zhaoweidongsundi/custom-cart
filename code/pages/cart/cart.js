// pages/cart/cart.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        products:[
            {
                id:1,
                goodsname:"小米手机",
                goodspic:"/pages/cart/0.jpg",
                num:1,
                price:1000,
                checked:true
            },
            {
                id:2,
                goodsname:"苹果手机",
                goodspic:"/pages/cart/1.jpg",
                num:2,
                price:2000,
                checked:true
            }
        ]
    },
    // 购物车提交
    _cartSubmit(e){
        console.log(e,"购物车提交信息")
    },
    // 购物车删除
    _cartDelete(e){
        let {id,index} =  e.detail;
        this.data.products.splice(index,1);
        this.setData({
            products:this.data.products
        })
        // id 是用来删除数据库里面的数据的
    }

    
})