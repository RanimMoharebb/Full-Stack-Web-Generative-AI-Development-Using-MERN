console.log(this)

onmessage=function(event){
    console.log(event)
    let sum = parseInt(event.data[0])+parseInt(event.data[1])
    this.postMessage([sum])
}