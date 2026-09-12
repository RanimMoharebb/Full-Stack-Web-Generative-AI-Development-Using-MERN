let timer;
let counter = 0;

// =========================
// Service Worker Register
// =========================

if ("serviceWorker" in navigator) {

    navigator.serviceWorker
        .register("./sw.js")
        .then(() => {
            console.log("Service Worker Registered");
        })
        .catch(err => {
            console.log(err);
        });

}

// =========================
// Install App
// =========================

let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {

    event.preventDefault();

    deferredPrompt = event;

    document.getElementById("installBtn").hidden = false;

});

document
    .getElementById("installBtn")
    .addEventListener("click", async () => {

        if (!deferredPrompt) return;

        deferredPrompt.prompt();

        const result = await deferredPrompt.userChoice;

        console.log(result.outcome);

        deferredPrompt = null;

        document.getElementById("installBtn").hidden = true;
    });

// =========================
// Timer
// =========================

document.getElementById("startBtn").onclick = function () {

    clearInterval(timer);

    timer = setInterval(() => {

        counter++;

        document.getElementById(
            "timer"
        ).innerHTML = `Timer: ${counter}`;

    }, 1000);
};

document.getElementById("stopBtn").onclick = function () {

    clearInterval(timer);

};

// =========================
// Web Worker
// =========================

let myWorker = new Worker("myScript.js");

document.getElementById("addBtn").onclick = function () {

    let num1 =
        document.getElementById("num1").value;

    let num2 =
        document.getElementById("num2").value;

    myWorker.postMessage([num1, num2]);
};

myWorker.onmessage = function (event) {

    document.getElementById("result").innerHTML =
        "Result = " + event.data[0];

};