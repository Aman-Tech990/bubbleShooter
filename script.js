let hit = 0;
let timer = 60;
let score = 0;

function makeBubble() {
    let clutter = "";
    for (let i = 1; i <= 160; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`
    }
    const panelBottom = document.querySelector(".panelBottom");
    panelBottom.innerHTML = clutter;
}

function runTimer() {
    const timerId = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        } else {
            clearInterval(timerId);
            document.querySelector(".panelBottom").innerHTML = `
                <h1>
                Game Over! Your Score: ${score}.
                </h1>
            `
        }
    }, 1000);
}

function generateHit() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector('#hit').textContent = hit;
}

function incrementScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
    makeBubble();
    generateHit();
}

const panelBottom = document.querySelector(".panelBottom");
panelBottom.addEventListener("click", (e) => {
    const val = Number(e.target.textContent);
    if (val === hit) {
        incrementScore();
    }
});

makeBubble();
runTimer();
generateHit();