# custom-cart### 1.安装计算属性

```
npm install --save miniprogram-computed
构建npm
```

### 2.封装即可

​	参考资源源码

### 3.参数

| 参数       | 默认值 | 是否必须 | 说明           |
| ---------- | ------ | -------- | -------------- |
| products   | 无     | 是       | 购物车数据     |
| bindsubmit | 无     | 否       | 结算提交事件   |
| binddelete | 无     | 否       | 删除购物车事件 |



### 4.请求数据格式

 products  数据中，对象内的元素字段必须是当前效果，如果要修改，需要对源码自行修改

```js
 products:[{
  // 商品数据格式，源码可根据实际情况更改
  id:2,
  goodsname:"苹果手机",
  goodspic:"/pages/cart/1.jpg",
  num:2,
  price:2000,
  checked:true
 }]
 
```

### 5.事件返回数据

**bindsubmit 事件**

detail为购物车提交事件，返回的总价钱及总数量

```js
type: "submit"
timeStamp: 6139
target: {id: "", dataset: {…}}
currentTarget: {id: "", dataset: {…}}
mark: {}
detail: {totalPrice: 5000, totalNum: 3}    // 自定义返回数据
touches: undefined
changedTouches: undefined
mut: false
_requireActive: undefined
```

**bindDelete事件**

detail为购物车删除事件，返回的是当前删除数据的id和索引位置

```js
type: "delete"
timeStamp: 16480
target: {id: "", dataset: {…}}
currentTarget: {id: "", dataset: {…}}
mark: {}
detail: {id: 1, index: 0}  // 自定义返回数据
touches: undefined
changedTouches: undefined
mut: false
_requireActive: undefined
```

