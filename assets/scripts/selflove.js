function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

async function homeButtonClicked() {
    window.location.href = "index.html";
}

function fullClicked() {
    window.location.href = "https://www.instagram.com/p/CG6Pnl_pxCG/";
}

document.getElementById("home").onclick = homeButtonClicked;
document.getElementById("full-story").onclick = fullClicked;
