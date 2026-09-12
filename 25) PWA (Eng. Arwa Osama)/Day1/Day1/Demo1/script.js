document.getElementById('startBtn').onclick=function(){
    let counter=0
    timer=setInterval(() => {
        counter++
        document.getElementById('timer').innerHTML=`Timer:${counter}`
    }, 1000);
}

document.getElementById('stopBtn').onclick=function(){
    clearInterval(timer)
}

let myWorker = new Worker('myScript.js')

document.getElementById('addBtn').onclick=function(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    myWorker.postMessage([num1,num2])
}

myWorker.onmessage=function(event){
    document.getElementById('result').innerHTML=event.data[0]
}