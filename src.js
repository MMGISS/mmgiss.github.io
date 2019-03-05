//init
const musicData = {
    "Exit The Premises":`
AUTHOR:Kevin MacLeod
BGM:exitThePremises.mp3
BPM:128
MEASURE:4/4
OFFSET:-0.5

score:
a0000000000511a00577a0,a0000000000511a00577a0,a0000000000511a00577a0,a0000000000511a00577a0,
a-12000230001400511a250577a0,a-16000250001400511a230577a0,a-12000230001400511a250577a0,a-160000025000001400000112213241526,
a002400024000511a-2500577a25,a002300023000511a-2200577a22,a002400024000511a-2500577a25,a002300023000511a-2600577a26,
a002400024000511a-2500577a25,a002300023000511a-2200577a22,a002400024000511a-2500577a25,a002300023000511a-2600577a26,
a-1300013014015015511a140577a-130,a-12000120001600511a150577a-140,a-1300013014015015511a140577a-130,a-120001201600016511a150577a-140,
a-1300013014015015511a140577a-130,a-120001201600016511a150577a-140,a-1300013014015015511a140577a-130,a-1200012016000160150140,
a-16012016012016012511a160577a-120,a-16012016012016012511a160577a-120,a-16012016012016012511a160577a-120,a-160120160120160120160120,
a-612b-667b002400024000512a-2500567a25,a002300023000512a-2200567a22,a002400024000512a-2500567a25,a002300023000512a-2600567a26,
a002400024000512a-2500567a25,a002300023000512a-2200567a22,a002400024000512a-2500567a25,a002300023000512a-2600567a26,
a-b-1300013014015015511a140577a-130,a-12000120001600511a150577a-140,a-1300013014015015511a140577a-130,a-120001201600016511a150577a-140,
a-1300013014015015511a140577a-130,a-120001201600016511a150577a-140,a-1300013014015015511a140577a-130,a-1200012016-2600016-26015-25014-240,
a-13-2600013-26014-26015-26015-26511a14-260577a-13-260,a-12-2200012-22016-2200016-22511a15-220577a-14-220,a-13-2600013-26014-26015-26015-26511a14-260577a-13-260,a-12-2200012-22016-2200016-22511a15-220577a-14-220,
a-13-2600013-26014-26015-26015-26511a14-260577a-13-260,a-12-2200012-22016-2200016-22511a15-220577a-14-220,a-13-2600013-26014-26015-26015-26511a14-260577a-13-260,a-12-2200012-22016-2200016-22511a15-220577a-14-220,
a-23-1600023-16024-16025-16025-16511a24-160577a-23-160,a-22-1200022-12026-1200026-12511a25-120577a-24-120,a-23-1600023-16024-16025-16025-16511a24-160577a-23-160,a-22-1200022-12026-1200026-12511a25-120577a-24-120,
a-23-1600023-16024-16025-16025-16511a24-160577a-23-160,a-22-1200022-12026-1200026-12511a25-120577a-24-120,a-23-1600023-16024-16025-16025-16511a24-160577a-23-160,a-22-1200022-12026-1200026-12511a25-120577a-24-120,
a-611b-677b240240240240250511a-25025577a25,a230230230230220511a-22022577a22,a240240240240250511a-25025577a25,a230230230230260511a-26026577a26,
a-240240240240250511a-25025577a25,a230230230230220511a-22022577a22,a240240240240250511a-25025577a25,a230230230230260511a-26026577a26,
a-1524142413241424152514511a-251325577a-1425,a-1523142313231423152214511a-221322577a-1422,a-1524142413241424152514511a-251325577a-1425,a-1523142313231423152614511a-261326577a-1426,
a-1524142413241424152514511a-251325577a-1425,a-1523142313231423152214511a-221322577a-1422,a-1524142413241424152514511a-251325577a-1425,a-1523142313231423152614511a-261326577a-1426,
a-b-512a-567a00000000a00611a622a633a644a655a666a,
a-13-2600013-26014-26015-26015-26511a14-260577a-13-260,a-12-2200012-22016-2200016-22511a15-220577a-14-220,a-13-2600013-26014-26015-26015-26511a14-260577a-13-260,a-12-2200012-22016-2200016-22511a15-220577a-14-220,
a-13-2600013-26014-26015-26015-26511a14-260577a-13-260,a-12-2200012-22016-2200016-22511a15-220577a-14-220,a-13-2600013-26014-26015-26015-26511a14-260577a-13-260,a-12-2200012-22016-2200016-22511a15-220577a-14-220,
a-23-1600023-16024-16025-16025-16511a24-160577a-23-160,a-22-1200022-12026-1200026-12511a25-120577a-24-120,a-23-1600023-16024-16025-16025-16511a24-160577a-23-160,a-22-1200022-12026-1200026-12511a25-120577a-24-120,
a-23-1600023-16024-16025-16025-16511a24-160577a-23-160,a-22-1200022-12026-1200026-12511a25-120577a-24-120,a-23-1600023-16024-16025-16025-16511a24-160577a-23-160,a-22-1200022-12026-1200026-12511a25-120577a-24-120,
a-13-3300013-33014-34015-35015-35511a14-340577a-13-330,a-12-3200012-32016-3600016-36511a15-360577a-14-360,a-13-3300013-33014-34015-35015-35511a14-340577a-13-330,a-12-3200012-32016-3600016-36511a15-360577a-14-360,
a-13-3300013-33014-34015-35015-35511a14-340577a-13-330,a-12-3200012-32016-3600016-36511a15-360577a-14-360,a-13-3300013-33014-34015-35015-35511a14-340577a-13-330,a-12-3200012-32016-3600016-36511a15-360577a-14-360,
a-23-4300023-43024-44025-45025-45511a24-440577a-23-430,a-22-4200022-42026-4600026-46511a2/5-460577a-24-460,a-23-4300023-43024-44025-45025-45511a24-440577a-23-430,a-22-4200022-42026-4600026-46511a25-460577a-24-460,
a-23-4300023-43024-44025-45025-45511a24-440577a-23-430,a-22-4200022-42026-4600026-46511a25-460577a-24-460,a-23-4300023-43024-44025-45025-45511a24-440577a-23-430,a-22-4200022-42026-4600026-46511a25-460577a-24-460,
a-3204203304303404403504503604603704700000677b666b655b644b633b622b000000000000000000000000,b
`,

    "infetterence":`
AUTHOR:Shrill Otter/jacknjellify (*Uncompleted* 348~)
BGM:infetterence.mp3
BPM:177
MEASURE:4/4
OFFSET:0

score:
0,0,0,0,
011027,012026,013025,0000141400000024611a00,0a15000230,016022,017021,0000313100000047000,
032046,033045,034044,0000353500000043511a00,0a36000420,037041,37041037041036042035433444,110022001400260017000,
0,0,0,0,
111200002726,252400003132,33340000410,0000434400,41000001716,151400002122,23240000370,0000003635,
111200002726,252400003132,33343536,0000434400,41000001716,151400002122,2324000014-240,0,
017210001127,0262524,232200,0161514,021170002711,0262524,23222322,0161412,
11121314,15164142,43444546,27262524,2322373635343332,1112131415164142,43444546272625242322373635343332,14-24-34-440014-24-34-440014-24-34-4400011-21-17-2700011-21-17-270,
512a-567a0a-1112270260,25024023612b-667b0b,512c-567c0c-212217016612d-667d,0d-1402411-21-17-27011-21-17-270,512e-567e0e-3132470460,45-511f044577f430f0,611g-677gg,511h-577h0000000522h566h533h555h0h0,
544i012-2611-2712-26013-250,12-26011-27012-26644a-i000,635a0a-31-4732-46031-47544c-a,0c-33-45033-4511-23-15-27021-13-25-170,644d000d-11-27017-21011-2700013152523,566e00522e00e0,613f,646f0f0677g666g655g644g,
g01201411016,11016121731-43-35-4700,0017131101215,11014022025272102402600,001401613012,1501411161400,3701517-3612016-3513,15-34111213-3312-32-421716-32-4214,
11221324,15261727,27162514,23122111,1121122213231424,1727162615251424,37363534474645443534333245444342,21-23-25-270022-24-260021-23-25-270627h0000000,
h-511a-577a,00522a566a533a555a0,a-611b-677b0111715131216-622b-666b,1713110120130,544c-b02327210270,533c00000555c000313233343536,511d-577d-c0141516151413,611e-677e-d0e0567f545f523ff,

`,
};

//canvas starter kit
const canvas = document.getElementById("disp");
const ctx = canvas.getContext("2d");
var ratio;
var resize =()=> {
    canvas.height = document.body.clientHeight; canvas.width = document.body.clientWidth;
    ratio = Math.min(canvas.width / 1100, canvas.height / 1100);
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(ratio, ratio);
}
var mouseState = {}; var keydown = {};
canvas.addEventListener("mousedown", (event)=>{mouseState[["left","wheel","right"][event.button]] = true;});
canvas.addEventListener("mouseup", (event)=>{mouseState[["left","wheel","right"][event.button]] = false;});
document.addEventListener("keydown", (event)=>{keydown[event.key] = true;});
document.addEventListener("keyup", (event)=>{keydown[event.key] = false;});
document.addEventListener("mousemove", (event)=>{mouseX = (event.clientX - canvas.width / 2) / ratio; mouseY = (event.clientY - canvas.height / 2) / ratio;});
var updatePos =()=> {mouseX = (event.changedTouches[0].pageX - canvas.width / 2) / ratio; mouseY = (event.changedTouches[0].pageY - canvas.height / 2) / ratio;};
document.addEventListener("touchstart", (event)=>{mouseState["left"] = true; updatePos()});
document.addEventListener("touchmove", (event)=>{event.preventDefault(); updatePos();}, {passive : false});
document.addEventListener("touchend", (event)=>{mouseState["left"] = false; updatePos();});
window.addEventListener("resize", ()=>{resize()});
canvas.oncontextmenu =()=> {return false;};
resize();
//end kit

document.title = "49"

//initalize
const endless = false; // for debugging

var vibration, mouseX, playerX, life, beat, timer, nowHazward, lastBeat, lineAlpha, damageEffect, vibration, title, score, hazwards, hazwardList, bullet, bgm, bpm, musicEnd, point, tags, clicked, ended;

function init() {
    vibration = 0;
    mouseX = mouseY = 0;
    playerX = playerY = targetPlayerX = targetPlayerY = 0;
    life = 1;
    beat = startBeat = 0;
    timer = 0;
    nowHazward = 0;
    lastBeat = -1;
    lineAlpha = 0;
    damageEffect = 0;
    vibration = 0;
    score = [];
    hazwards = [];
    hazwardList = [];
    bullet = [];
    musicEnd = false;
    point = damage = rank = 0;
    tags = {};
    clicked = false;
    ended = false;
}

init();

var audio = {};
var canplay = {};
audio["finger01.mp3"] = new Audio(`sounds/finger01.mp3`);
Object.values(musicData).forEach(x=>{audio[x.match(/bgm:(.*)/i)[1]] = new Audio(`sounds/${x.match(/bgm:(.*)/i)[1]}`); canplay[x.match(/bgm:(.*)/i)[1]] = false;});
Object.keys(audio).forEach(x=>audio[x].addEventListener("canplay", ()=>canplay[x] = true));

ctx.__proto__.line =(x0, y0, x1, y1)=> {
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.closePath();
    ctx.stroke();
};

var drawLines =()=> {
    if (beat >= 0 && Math.floor(beat) != lastBeat) {lineAlpha = 5; lastBeat = Math.floor(beat);}
    lineAlpha += (0.5 - lineAlpha) / 5;
    ctx.globalAlpha = lineAlpha;
    ctx.strokeStyle = "#ffffff";
    ctx.fillStyle = "#ffffff";
    ctx.lineWidth = 4;
    for (let i = -4; i < 4; i++) {ctx.line(i*100+50,-350,i*100+50,350); ctx.line(-350,i*100+50,350,i*100+50);}
    ctx.font = "30px 'Hiragino Mincho Pro'";
    ctx.fillText(Math.floor(beat*1000)/1000,-400,-400);
    ctx.textAlign = "right";
    ctx.fillText(`♫${title}`,400,425);
    let progress = audio[bgm].currentTime / audio[bgm].duration;
    switch(Math.floor(progress / 0.25)) {
        case 3: ctx.line(-375,375,-375,375-750*Math.min(progress-0.75,0.25)*4);
        case 2: ctx.line(375,375,375-750*Math.min(progress-0.5,0.25)*4,375);
        case 1: ctx.line(375,-375,375,-375+750*Math.min(progress-0.25,0.25)*4);
        case 0: ctx.line(-375,-375,-375+750*Math.min(progress,0.25)*4,-375);
    }
}

var drawHazards =()=> {
    ctx.fillStyle = "#ff8800";
    ctx.strokeStyle = "#ff8800";
    ctx.lineWidth = 3;
    while (hazwards[nowHazward] && hazwards[nowHazward][hazwards[nowHazward].length-1] < beat) {
        hazwards[nowHazward][hazwards[nowHazward].length-1] += 4;
        if (beat >= startBeat - 4) {
            if (["1","2","3","4"].indexOf(hazwards[nowHazward][0]) > -1) hazwardList.push(hazwards[nowHazward]);
            else if (["5","6"].indexOf(hazwards[nowHazward][0]) > -1) {
                tags[hazwards[nowHazward][hazwards[nowHazward].length-2]] = Infinity;
                hazwardList.push(hazwards[nowHazward]);
            }
            else tags[hazwards[nowHazward][0]] = beat;
        }
        nowHazward++;
    }
    let delList = [];
    let addVib = 0;
    hazwardList.forEach((x,y)=>{
        if (["1","2","3","4"].indexOf(x[0]) > -1) {
            ctx.globalAlpha = Math.max(0, 1 - (x[2] - beat) / 2)
            ctx.beginPath();
            let pos;
            switch (x[0]) {
                case "1": pos = [-400+x[1]*100,-400+(x[2]-beat)*-100]; ctx.line(-400+x[1]*100,-350,-400+x[1]*100,350); break;
                case "2": pos = [-400+x[1]*100,400+(x[2]-beat)*100]; ctx.line(-400+x[1]*100,-350,-400+x[1]*100,350); break;
                case "3": pos = [-400+(x[2]-beat)*-100,-400+x[1]*100]; ctx.line(-350,-400+x[1]*100,350,-400+x[1]*100); break;
                case "4": pos = [400+(x[2]-beat)*100,-400+x[1]*100]; ctx.line(-350,-400+x[1]*100,350,-400+x[1]*100); break;
            }
            ctx.arc(...pos,40,0,Math.PI*2,false);
            ctx.closePath();
            ctx.fill();
            if (beat >= x[2]) {
                delList.unshift(y);
                bullet.push([...pos,0,0,0,1]); bullet.push([...pos,0,0,0,-1]); bullet.push([...pos,0,0,1,0]); bullet.push([...pos,0,0,-1,0]);
                addVib += 16;
            }
        } if (["5","6"].indexOf(x[0]) > -1) {
            if (beat >= x[4]) {
                ctx.globalAlpha = 1;
                if (hazwardList[y][4] > 0) {addVib += 25; hazwardList[y][4] = -1; tags[x[3]] = Infinity;}
                if ((Math.round(playerX) >= x[1] && Math.round(playerX) <= x[2] && x[0] == "5") || (Math.round(playerY) >= x[1] && Math.round(playerY) <= x[2] && x[0] == "6")) {
                    life -= 0.025;
                    damage += 0.025;
                    addVib += 9;
                    damageEffect += 0.05;
                }
                if (beat >= tags[x[3]]) {addVib += 4; delList.unshift(y);}
            }
            else ctx.globalAlpha = 0.25 + Math.cos((x[4]+beat)*Math.PI*2) * 0.2;
            switch (x[0]) {
                case "5": ctx.fillRect(-450+x[1]*100,-350,(x[2]-x[1])*100+100,700); break;
                case "6": ctx.fillRect(-350,-450+x[1]*100,700,(x[2]-x[1])*100+100); break;
            }
        }
    });
    delList.forEach(x=>hazwardList.splice(x,1));
    delList = [];
    ctx.globalAlpha = 1;
    bullet.forEach((x,y)=>{
        ctx.beginPath();
        ctx.arc(x[0],x[1],10,0,Math.PI*2,false);
        ctx.closePath();
        ctx.fill();
        bullet[y][0] += bullet[y][2] += bullet[y][4];
        bullet[y][1] += bullet[y][3] += bullet[y][5];
        if (((-400+playerX*100 - bullet[y][0])**2+(-400+playerY*100 - bullet[y][1])**2)**0.5 < 35) {
            life -= 0.25;
            damage += 0.3;
            addVib += 100;
            damageEffect += 0.5;
            delList.unshift(y);
        }
        if (Math.abs(x[2]) > 120 || Math.abs(x[3]) > 120) delList.unshift(y);
    });
    delList.forEach(x=>bullet.splice(x,1));
    damageEffect = Math.min(damageEffect, 0.75);
    vibration += addVib ** 0.5;
}

var drawPlayer =()=> {
    life = Math.max(Math.min(life + 0.0005, 1), 0);
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#dd8800";
    ctx.beginPath();
    targetPlayerX = Math.min(Math.max(Math.round((mouseX + 400) / 100),1),7);
    targetPlayerY = Math.min(Math.max(Math.round((mouseY + 400) / 100),1),7);
    playerX += (targetPlayerX - playerX) / 2;
    playerY += (targetPlayerY - playerY) / 2;
    ctx.arc(-400+playerX*100,-400+playerY*100,35,0,Math.PI*2,false);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#ddbb00";
    ctx.beginPath();
    ctx.moveTo(-400+playerX*100,-400+playerY*100);
    ctx.arc(-400+playerX*100,-400+playerY*100,25,Math.PI/-2+Math.PI*2*life,Math.PI/-2,true);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.globalAlpha = damageEffect;
    ctx.fillRect(-canvas.width / 2 / ratio, -canvas.height / 2 / ratio, canvas.width / ratio, canvas.height / ratio);
    damageEffect += (0 - damageEffect) / 10;
}

var drawResults =()=> {
    if (!endless && (musicEnd || life <= 0 || hazwards[hazwards.length-1][hazwards[hazwards.length-1].length-1] < beat)) {
        if (!musicEnd) {
            musicEnd = true;
            point = [Math.floor(beat*1000)/1000, Math.floor(damage*1000)/1000, hazwards[hazwards.length-1][hazwards[hazwards.length-1].length-1]];
            if (point[2] < point[0]) {
                if (point[1] == 0) rank = "SSS";
                else if (point[1] < 0.5) rank = "SS";
                else if (point[1] < 1) rank = "S";
                else rank = "A";
            } else {
                if (point[0] > point[2] * 0.8) rank = "B";
                else if (point[0] > point[2] * 0.5) rank = "C";
                else if (point[0] > point[2] * 0.2) rank = "D";
                else rank = "E";
            }
        }
        audio[bgm].volume = Math.max(audio[bgm].volume - 0.0025, 0);
        ctx.fillStyle = "#202020";
        ctx.globalAlpha = 1 - audio[bgm].volume;
        ctx.fillRect(-canvas.width / 2 / ratio, -canvas.height / 2 / ratio, canvas.width / ratio, canvas.height / ratio);
        ctx.fillStyle = "#ffffff"
        ctx.font = "140px 'Hiragino Mincho Pro'";
        ctx.textAlign = "center"
        ctx.fillText("Results", 0, -200);
        ctx.font = "70px 'Hiragino Mincho Pro'";
        ctx.fillText(`final score: ${point[0]}`, 0, 0);
        ctx.fillText(`damages you got: ${point[1]}`, 0, 100);
        ctx.font = "100px 'Hiragino Mincho Pro'";
        ctx.fillText(`RANK: ${rank}`, 0, 250);
        if (audio[bgm].volume == 0) {
            audio[bgn].pause(); audio[bgm].volume = 1;
            ctx.font = "30px 'Hiragino Mincho Pro'";
            ctx.fillText(`~click to back~`,300,425);
            ended = true;
        }
    }
}

function board() {
    ctx.globalAlpha = 1;
    ctx.clearRect(-canvas.width / 2 / ratio, -canvas.height / 2 / ratio, canvas.width / ratio, canvas.height / ratio);
    ctx.save();
    let rand = Math.random() * Math.PI * 2;
    ctx.translate(vibration * Math.sin(rand), vibration * Math.cos(rand));
    timer = (new Date().getTime() - startTime) / 1000;
    beat = timer / (60 / bpm);
    drawHazards();
    drawLines();
    drawPlayer();
    ctx.restore();
    drawResults();
    vibration += (0 - vibration) / 5;
    if (ended && mouseState.left) {select(); audio["finger01.mp3"].play(); ended = false;}
    else requestAnimationFrame(board);
}

function start(soundTrack) {
    init();
    beat = startBeat;
    bpm = musicData[soundTrack].match(/bpm:(.*)/i)[1] * 1;
    startTime = 2500 + musicData[soundTrack].match(/offset:(.*)/i)[1] * 1 - (beat * (60 / bpm)) * 1000 + new Date().getTime();
    measure = musicData[soundTrack].match(/measure:(.*)\/(.*)/i).slice(1,3);
    score = (musicData[soundTrack].match(/score:\n?((.|\n)*)/i)[1].split(",")).map(x=>x.match(/-?(0|[a-z]|[1-4][1-7]|[5-6][1-7]{2}[a-z])/g));
    title = `${soundTrack} by ${musicData[soundTrack].match(/author:(.*)/i)[1]}`;
    if (score[score.length-1] == null) score.splice(score.length-1,1);
    score.forEach((x,j)=>{
        for (let i = score[j].length - 1; i > 0; i--) {
            if (score[j][i].charAt(0) == "-") {
                score[j][i-1] += score[j][i];
                score[j].splice(i,1);
            }
        }
        score[j] = score[j].map(x=>x.split("-"));
    })
    score.forEach((x,j)=>{
        x.forEach((x,i)=>{
            x.forEach(x=>{
                if (x != "0") hazwards.push([...x.split(""), measure[0] / score[j].length * i + measure[0] * (4 / measure[1]) * j - (["1","2","3","4","5","6"].indexOf(x.charAt(0)) > -1) * 4]);
            });
        });
    });
    hazwards.sort((x,y)=>{return x[x.length-1] > y[y.length-1] ? 1 : x[x.length-1] < y[y.length-1] ? -1 : 0});
    bgm = musicData[soundTrack].match(/bgm:(.*)/i)[1];
    audio[bgm].currentTime = beat * (60 / bpm);
    board();
}

function select() {
    ctx.globalAlpha = 1;
    ctx.clearRect(-canvas.width / 2 / ratio, -canvas.height / 2 / ratio, canvas.width / ratio, canvas.height / ratio);
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 3;
    ctx.font = "45px 'Hiragino Mincho Pro'";
    ctx.textAlign = "left";
    let selected = Math.floor((mouseY+402.5) / 75);
    Object.keys(musicData).forEach((x,y) => {
        ctx.fillText(`${x} by ${musicData[x].match(/author:(.*)/i)[1]}`,-350,-350+y*75);
        if (y == selected) ctx.strokeText(`${x} by ${musicData[x].match(/author:(.*)/i)[1]}`,-350,-350+y*75);
    });
    selected = Object.keys(musicData)[selected];
    ctx.beginPath();
    ctx.moveTo(-470,mouseY-25);
    ctx.lineTo(-425,mouseY);
    ctx.lineTo(-470,mouseY+25);
    ctx.closePath();
    ctx.fill();
    ctx.font = "30px 'Hiragino Mincho Pro'";
    ctx.fillText(`~click to start~`,300,425);
    let bgm = selected ? musicData[selected].match(/bgm:(.*)/i)[1] : 0;
    ctx.fillStyle = "#888888";
    ctx.textAlign = "right";
    ctx.fillText(bgm? canplay[bgm] ? "loaded" : "loading" : "", -490, mouseY+15);
    if (canplay[bgm] && mouseState.left) {
        audio["finger01.mp3"].play();
        setTimeout(()=>audio[bgm].play(),2500);
        canvas.onclick = "";
        start(selected);
    }
    else requestAnimationFrame(select);
}

select();