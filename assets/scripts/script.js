function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function wait() {
    let newTime = new Promise(resolve => setTimeout(resolve, waited));
    return newTime;
}

async function loveButtonClicked() {
    setBackgroundColor("#DFB9B9");
    let timeWaited = wait();
    await timeWaited
    window.location.href = "self-love.html";
}


async function growthButtonClicked() {
    setBackgroundColor("#A0D3AF");
    let timeWaited = wait();
    await timeWaited
    window.location.href = "growth.html";
}

async function resilienceButtonClicked() {
    setBackgroundColor("#97CDDE");
    let timeWaited = wait();
    await timeWaited
    window.location.href = "resilience.html";
}

let waited = 1000;
let i = 0;
let j = 0;
let typethis = 'Welcome to Little Brave Things! Pick a word:'
let time = 50;

function type() {
    if (i < typethis.length) {
        let a = document.getElementById("a")
        a.innerHTML += typethis.charAt(i);
        i++;
        setTimeout(type, time);
    }
  }

  type();
document.getElementById("selflove").onclick = loveButtonClicked;
document.getElementById("growth").onclick = growthButtonClicked;
document.getElementById("resilience").onclick = resilienceButtonClicked;

