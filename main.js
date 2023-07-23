let time = document.getElementById("worldclock");

setInterval(() =>{
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
},1000)




const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const projectA = document.querySelector("#project-tradingviewapi");
const projectB = document.querySelector("#project-idlebreakoutcheat");
const projectC = document.querySelector("#project-instagramcrossrefrence")
const projectD = document.querySelector("#project-csgonoflash")
const projectE = document.querySelector("#project-flowgptapi")
const contact = document.querySelector("#contact");

about.addEventListener("click", () => {
    new WinBox({
        title: "Ab0uTM3.txt",
        background: "#bf3737",
        border: 2,
        mount: document.getElementById("aboutcontent")
    });
})



projects.addEventListener("click", () => {
    new WinBox({
        title: "Projects",
        background: "#bf3737",
        border: 4,
        mount: document.getElementById("projectscontent")
    });
})

projectA.addEventListener("click", () => {
    new WinBox({
        title: "TradingView API",
        background: "#bf3737",
        border: 4,
        mount: document.getElementById("tradingviewapicontent")
    });
})

projectB.addEventListener("click", () => {
    new WinBox({
        title: "Idle-Breakout Cheat",
        background: "#bf3737",
        border: 4,
        mount: document.getElementById("idlebreakoutcheatcontent")
    });
})

projectC.addEventListener("click", () => {
    new WinBox({
        title: "IG Cross Reference",
        background: "#bf3737",
        border: 4,
        mount: document.getElementById("instagramcrossrefrencecontent")
    });
})

projectD.addEventListener("click", () => {
    new WinBox({
        title: "CSGO No-Flash",
        background: "#bf3737",
        border: 4,
        mount: document.getElementById("csgonoflashcontent")
    });
})

projectE.addEventListener("click", () => {
    new WinBox({
        title: "FlowGPT API",
        background: "#bf3737",
        border: 4,
        mount: document.getElementById("flowgptapicontent")
    });
})



contact.addEventListener("click", () => {
    new WinBox({
        title: "C0nt4cT.txt",
        background: "#bf3737",
        border: 2,
        mount: document.getElementById("contactcontent")
    });
})