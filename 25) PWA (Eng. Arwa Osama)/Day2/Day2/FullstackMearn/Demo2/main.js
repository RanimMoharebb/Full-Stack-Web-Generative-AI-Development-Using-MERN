let promiseDB = idb.open("MyProducts",4,upgradeDB=>{
    // upgradeDB.createObjectStore('Products',{keyPath:'id'})
    // upgradeDB.createObjectStore('Orders',{keyPath:'id'})
    let store = upgradeDB.transaction.objectStore('Products')
    store.createIndex('name','name',{unique:true})
})

document.getElementById('prdBtn').onclick = function(){
    promiseDB.then(DB=>{
        let tx = DB.transaction('Products','readwrite')
        let store = tx.objectStore('Products')

        var items = [
        {
          name: 'Couch',
          id: 'cch-blk-ma',
          price: 499.99,
          color: 'black',
          material: 'mahogany',
          description: 'A very comfy couch',
          quantity: 3
        },
        {
          name: 'Armchair',
          id: 'ac-gr-pin',
          price: 299.99,
          color: 'grey',
          material: 'pine',
          description: 'A plush recliner armchair',
          quantity: 7
        },
        {
          name: 'Stool',
          id: 'st-re-pin',
          price: 59.99,
          color: 'red',
          material: 'pine',
          description: 'A light, high-stool',
          quantity: 3
        },
        {
          name: 'Chair',
          id: 'ch-blu-pin',
          price: 49.99,
          color: 'blue',
          material: 'pine',
          description: 'A plain chair for the kitchen table',
          quantity: 1
        },
        {
          name: 'Dresser',
          id: 'dr-wht-ply',
          price: 399.99,
          color: 'white',
          material: 'plywood',
          description: 'A plain dresser with five drawers',
          quantity: 4
        },
        {
          name: 'Cabinet',
          id: 'ca-brn-ma',
          price: 799.99,
          color: 'brown',
          material: 'mahogany',
          description: 'An intricately-designed, antique cabinet',
          quantity: 11
        }
      ];


      Promise.all(items.map(item=>{
        console.log('adding item',item)
        return store.add(item)
      })).then(()=>{
        console.log('all items added')
      }).catch(err=>{
        tx.abort()
        console.log(err)
      })
    })
}


document.getElementById('ordBtn').onclick=function(){
  promiseDB.then(DB=>{
    let tx = DB.transaction('Orders','readwrite')
    let store = tx.objectStore('Orders')

    var items = [
        {
          name: 'Cabinet',
          id: 'ca-brn-ma',
          price: 799.99,
          color: 'brown',
          material: 'mahogany',
          description: 'An intricately-designed, antique cabinet',
          quantity: 7
        },
        {
          name: 'Armchair',
          id: 'ac-gr-pin',
          price: 299.99,
          color: 'grey',
          material: 'pine',
          description: 'A plush recliner armchair',
          quantity: 3
        },
        {
          name: 'Couch',
          id: 'cch-blk-ma',
          price: 499.99,
          color: 'black',
          material: 'mahogany',
          description: 'A very comfy couch',
          quantity: 3
        }
      ];

      Promise.all(items.map(item=>{
        return store.add(item)
      }))
      .catch(err=>{
        tx.abort()
      })
  })
}


document.getElementById('searchBtn').onclick=function(){
  var prdName=document.getElementById('prdName').value

  promiseDB.then(DB=>{
    tx = DB.transaction('Products','readonly')
    store = tx.objectStore('Products')
    // return store.get()//id
    index = store.index('name')
    return index.get(prdName)
  }).then(product=>{
    // console.log(product)
    document.getElementById('details').innerHTML=""
    if(product){
      for(var elem in product){
        document.getElementById('details').innerHTML+=`${elem}::${product[elem]}<br>`
      }
    }
    else{
      document.getElementById('details').innerHTML="not found"
    }
  })

 /* promiseDB.then(DB=>{
    let tx = DB.transaction('Products','readonly')
    let store = tx.objectStore('Products')
    return store.getAll()
  }).then(productList=>{
    // console.log(productList)
    let item
    for(var i=0;i<productList.length;i++){
      if(productList[i].name==prdName){
        item = productList[i]
      }
    }
    document.getElementById('details').innerHTML=""
    if(item){
      for(var elem in item){
        document.getElementById('details').innerHTML+=`${elem}::${item[elem]}<br>`
      }
    }
    else{
      document.getElementById('details').innerHTML="not found"
    }
    console.log(item)
  })*/
}


function ApplyOrders(){
  getOrders()
  .then(orders=>{
    // console.log(orders)
    processProducts(orders)
    .then(productList=>{
      // console.log(productList)
      updateProducts(productList)
    })
  })
}

function updateProducts(products){

  promiseDB.then(DB=>{
    let tx = DB.transaction('Products','readwrite')
    let store = tx.objectStore('Products')

    Promise.all( products.map(product=>{
      return store.put(product)
    }))
    .then(()=>{
      console.log('updated successfully')
    })
  })
}

function processProducts(orders){
   return promiseDB.then(DB=>{
      let tx = DB.transaction('Products','readonly')
      let store = tx.objectStore('Products')
      let index = store.index('name')
      
     return Promise.all(orders.map(order=>{
        return index.get(order.name).then(product=>{
         return checkQuantity(product,order)
        })
      }))
    })
}

function checkQuantity(product,order){
  return new Promise((resolve,reject)=>{
    let newQty=product.quantity-order.quantity
  if(newQty<0){
    //throw error
    reject('out of stock')
  }
  else{
    //update product
    let item = product
    item.quantity = newQty
    resolve(item)
  }
  })
  
}

function getOrders(){
  return promiseDB.then(DB=>{
    let tx = DB.transaction('Orders','readonly')
    let store = tx.objectStore('Orders')
    return store.getAll()
  })
}

/**
 * 1)getOrders
 * 2)getProducts according to Orders
 * 3)check Quantity
 * 4)update prdoucts
 * 5)delete Order
 */