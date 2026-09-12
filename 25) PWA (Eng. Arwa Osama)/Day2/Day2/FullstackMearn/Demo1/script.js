Notification.requestPermission(status=>{
    console.log(status)
})

window.addEventListener('load',()=>{
    navigator.serviceWorker.register('sw.js')
})


document.getElementById('btn').onclick=function(){
    if(Notification.permission=='granted'){
    navigator.serviceWorker.getRegistration()
    .then(reg=>{
        const options={
            icon:'notification-flat.png',
            body:'extra data',
            actions:[
                {action:'explore',title:'open page'},
                {action:'close',title:"close"}
            ]
        }
        reg.showNotification('Hello World',options)
    })}
}