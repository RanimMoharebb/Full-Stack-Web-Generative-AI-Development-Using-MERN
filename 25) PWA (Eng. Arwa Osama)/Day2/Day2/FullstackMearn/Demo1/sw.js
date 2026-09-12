self.addEventListener('notificationclick',event=>{
    console.log(event)
    const action = event.action
    const notification = event.notification

    if(action == 'explore'){
        clients.openWindow('demo2.html')
    }
    notification.close()
})