//canvas starter kit
const canvas = document.getElementById("disp");
const ctx = canvas.getContext("2d");
var ratio;
var resize =()=> {
    canvas.height = document.body.clientHeight; canvas.width = document.body.clientWidth;
    ratio = Math.min(canvas.width / 1600, canvas.height / 900);
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(ratio, ratio);
}
var mouseState = {}; var keydown = {};
canvas.addEventListener("mousedown", (event)=>{mouseState[["left","wheel","right"][event.button]] = true;});
canvas.addEventListener("mouseup", (event)=>{mouseState[["left","wheel","right"][event.button]] = false;});
document.addEventListener("keydown", (event)=>{keydown[event.key] = true;});
document.addEventListener("keyup", (event)=>{keydown[event.key] = false;});
document.addEventListener("mousemove", (event)=>{mouseX = (event.clientX - canvas.width / 2) / ratio; mouseY = (event.clientY - canvas.height / 2) / ratio;});
window.addEventListener("resize", ()=>{resize()});
canvas.oncontextmenu =()=> {return false;};
resize();
//end kit

var audioName = ["unicorn.mp3", "tick.mp3"];
var audio = {};
audioName.forEach(x=>{audio[x] = new Audio(x);});
var nowDate;
var played;
var debugTime = 0;
var effect = 1, lastSec = -1;
var dateList;
var testFrame = 0;
var targetTime = new Date("2019/05/01 00:00:00");
var adjust =(dateString)=> {debugTime = new Date(dateString).getTime() - new Date().getTime();}

ctx.textAlign = "center";
ctx.font = `30px 'Hiragino Mincho Pro'`;
ctx.fillStyle = "#ffffff";
ctx.fillText("〈クリックして完全勝利する〉", 0, -420);
ctx.font = `15px 'Hiragino Mincho Pro'`;
ctx.fillText("※このプログラムは音が出せないと成り立ちません。音の鳴らせる環境でお楽しみください", 0, -390);
ctx.font = `70px 'Hiragino Mincho Pro'`;
ctx.strokeStyle = "#888888";
ctx.lineWidth = 10;
ctx.strokeText(`令 和 完 全 勝 利 U C`, 0, 35);
ctx.fillText(`令 和 完 全 勝 利 U C`, 0, 35);

document.title = `まだ平成`;

function draw() {
    nowDate = new Date();
    nowDate.setTime(nowDate.getTime() + debugTime);
    ctx.clearRect(-canvas.width / 2 / ratio, -canvas.height / 2 / ratio, canvas.width / ratio, canvas.height / ratio);
    effect += 0 - effect / 20;
    ctx.fillStyle = "#ffffff";
    ctx.globalAlpha = effect * 0.5;
    ctx.fillRect(-canvas.width / 2 / ratio, effect * -25, canvas.width / ratio, effect * 50);
    if (lastSec != nowDate.getSeconds()) {
        effect = lastSec != -1 ? 1 : 0;
        if (lastSec != -1 && nowDate.getTime() < targetTime.getTime() - 41300) {audio["tick.mp3"].currentTime = 0; audio["tick.mp3"].play();}
        lastSec = nowDate.getSeconds();
    }
    ctx.globalAlpha = 1;
    ctx.lineWidth = 10;
    ctx.textAlign = "center";
    ctx.strokeStyle = "#888888";
    if (nowDate.getTime() > targetTime.getTime() - 41300 && !played) {
        document.title = "ん？";
        setTimeout(()=>document.title = "流れ変わったな", 10000);
        audio["unicorn.mp3"].currentTime = (nowDate.getTime() - targetTime.getTime()) / 1000 + 41.3;
        audio["unicorn.mp3"].volume = 1;
        audio["unicorn.mp3"].play();
        played = true;
    }
    if (nowDate.getTime() > targetTime.getTime()) {
        document.title = "完　全　勝　利";
        ctx.fillStyle = "#ee8800";
        ctx.fillRect(-canvas.width / 2 / ratio, -canvas.height / 2 / ratio, canvas.width / ratio, canvas.height / ratio);
        ctx.beginPath();
        ctx.arc(0,canvas.height/ratio/2,500,0,Math.PI*2,false);
        ctx.closePath();
        ctx.fillStyle = "#ee9900";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(0,canvas.height/ratio/2,450,0,Math.PI*2,false);
        ctx.closePath();
        ctx.fillStyle = "#eeaa00";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(0,canvas.height/ratio/2,400,0,Math.PI*2,false);
        ctx.closePath();
        ctx.fillStyle = "#eebb00";
        ctx.fill();
        ctx.fillStyle = "#ffffff";
        ctx.font = `150px 'Hiragino Mincho Pro'`;
        ctx.strokeText(`令和`, -500, -100);
        ctx.strokeText(`元年`, 500, -100);
        ctx.fillText(`令和`, -500, -100);
        ctx.fillText(`元年`, 500, -100);
        ctx.fillStyle = "#eebb00";
        dateList = [nowDate.getHours(), nowDate.getMinutes(), nowDate.getSeconds()].map(x => (x + "").length == 1 ? "0" + x : x);
        ctx.fillStyle = "#ffffff";
        ctx.font = `100px 'Hiragino Mincho Pro'`;
        ctx.strokeText(`${dateList.join(" : ")}`, 0, 40);
        ctx.fillText(`${dateList.join(" : ")}`, 0, 40);
        if (nowDate.getTime() < targetTime.getTime() + 7000) {
            ctx.globalAlpha = (targetTime.getTime() + 7000 - nowDate.getTime()) / 7000;
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(-canvas.width / 2 / ratio, -canvas.height / 2 / ratio, canvas.width / ratio, canvas.height / ratio);
        }
    } else {
        ctx.globalAlpha = 1;
        dateList = [23 - nowDate.getHours(), 59 - nowDate.getMinutes(), 59 - nowDate.getSeconds()].map(x => (x + "").length == 1 ? "0" + x : x);
        ctx.fillStyle = "#ffffff";
        ctx.font = `100px 'Hiragino Mincho Pro'`;
        ctx.fillText(`${dateList.join(" : ")}`, 0, 40);
        if (nowDate.getTime() > targetTime.getTime() - 3000) {
            ctx.globalAlpha =  1 - (targetTime.getTime() - 1000 - nowDate.getTime()) / 2000;
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(-canvas.width / 2 / ratio, -canvas.height / 2 / ratio, canvas.width / ratio, canvas.height / ratio);
        }
        if (nowDate.getTime() < targetTime.getTime() - 41300) {
            ctx.globalAlpha = mouseY > canvas.height / 2 / ratio - 50 ? 1 : 0.25;
            ctx.fillStyle = "#888888";
            ctx.fillRect(-canvas.width / 2 / ratio, canvas.height / 2 / ratio - 50, canvas.width / ratio, 50);
            ctx.fillStyle = "#ffffff";
            ctx.font = `30px 'Hiragino Mincho Pro'`;
                ctx.fillText("音声テストをする（ここをクリックしてすぐ流れれば準備完了）", 0, canvas.height / 2 / ratio - 15);
            if (mouseY > canvas.height / 2 / ratio - 50 && mouseState.left == true && testFrame == 0) {
                testFrame = 499;
                audio["unicorn.mp3"].currentTime = 0;
                audio["unicorn.mp3"].play();
                audio["unicorn.mp3"].volume = 1;
            }
        }
        if (testFrame > 0) {testFrame--; audio["unicorn.mp3"].volume -= 0.002;}
    }
    requestAnimationFrame(draw);
}

document.onclick =()=> {
    Object.keys(audio).forEach(x=>{audio[x].play(); audio[x].pause();});
    draw();
    audio["tick.mp3"].volume = 0.1;
    document.onclick = null;
}
