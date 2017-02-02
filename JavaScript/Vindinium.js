// JavaScript File
//"Global" Variables
var text = document.getElementById("text");
var photo = document.getElementById("photo");
var textAi = document.getElementById("textAi")

//General Information Headers + Info + EventListeners 
var generalInfo = document.getElementById("generalInfo");
var generalInfoSubHeaders = document.getElementById("generalInfoSubHeaders");
var vindInfo = document.getElementById("vindInfo");
var whatIsAi = document.getElementById("whatIsAi");
var whatDoesThisDo = document.getElementById("whatDoesThisDo");

generalInfo.addEventListener("click", generalInfoVisible);
vindInfo.addEventListener("click", vindiniumInfo);
whatIsAi.addEventListener("click", whatIsAiInfo);
whatDoesThisDo.addEventListener("click", whatDoesThisDoInfo);


//Bot Alex Headers + Info + EventListeners
var botAlex = document.getElementById("botAlex");
var botAlexSubHeaders = document.getElementById("botAlexSubHeaders");
var start = document.getElementById("starting");
var taskDecider = document.getElementById("taskDecider");
var attacking = document.getElementById("attacking");
var taverns = document.getElementById("taverns");
var mining = document.getElementById("mining");
var blitzing = document.getElementById("blitzing");
var winning = document.getElementById("winning");
var extras = document.getElementById("extras");

botAlex.addEventListener("click", botAlexVisible);
start.addEventListener("click", startInfo);
taskDecider.addEventListener("click", taskDeciderInfo);
attacking.addEventListener("click", attackInfo);
taverns.addEventListener("click", tavernsInfo);
mining.addEventListener("click", miningInfo);
blitzing.addEventListener("click", blitzInfo);
winning.addEventListener("click", winningInfo);
extras.addEventListener("click", extrasInfo);

//Global functions to reset and hide all the headers. 
function reset() {
    vindInfo.className = "allHeaders";
    whatIsAi.className = "allHeaders";
    whatDoesThisDo.className = "allHeaders";
    start.className = "allHeaders";
    taskDecider.className = "allHeaders";
    attacking.className = "allHeaders";
    taverns.className = "allHeaders";
    mining.className = "allHeaders";
    blitzing.className = "allHeaders";
    winning.className = "allHeaders";
    extras.className = "allHeaders";
    photo.innerHTML = "";
    text.innerHTML = "";
    textAi.innerHTML = "";
}
function hideGeneralInfo() {
    generalInfoSubHeaders.className = "hidden"; 
    botAlexSubHeaders.className = "visible";
}

function hideBotAlex() {
    botAlexSubHeaders.className = "hidden";  
    generalInfoSubHeaders.className = "visible";
}

//The two main headers
function generalInfoVisible() {
    reset();
    hideBotAlex();
    generalInfoSubHeaders.className = "visible";
    generalInfo.className = "selectedTitleHeader";
    botAlexSubHeaders.className = "hidden";
    botAlex.className = "botAlex";
    text.innerHTML = "";
}
function botAlexVisible() {
    reset();
    hideGeneralInfo();
    botAlexSubHeaders.className = "visible";
    botAlex.className = "selectedTitleHeader";
    generalInfoSubHeaders.className = "hidden";
    generalInfo.className = "generalInfo";
    text.innerHTMl = "";
}
//The information for the sub headers of General Info. 
function whatIsAiInfo() {
    reset();
    hideBotAlex();
    whatIsAi.className = "selectedHeader";
    text.innerHTML = "<p style='font-size: 20px; position: absolute; left: 50px; top: -20px; width: 800px;'>AI is short for Artificial Intelligence. Artificial Intelligence typically refers to making computers do things that require human intellect. Artificial Intelligence is an attempt at mimicing human behavior, emotions, senses, and actions. Artificial Intelligence . Artificial Intelligence will soon be a normal and cultural thing in our everyday life whether that be healthcare, working in a factory, or doing our laundry. Some believe its very controversial and think that robots/AI will take over the world and some other crazy nonsense. </p>";
    textAi.innerHTML = "I've learned a lot about AI from this project. Using our knowledge of JavaScript we were able to have a fully functionable bot. ";
}

function vindiniumInfo() {
    reset();
    hideBotAlex();
    vindInfo.className = "selectedHeader";
    photo.innerHTML = "<img style='position: absolute; top: 230px; left: 375px;width: 463.32px; height: 343.2px;'src='http://image.prntscr.com/image/aab61f5e41504b15977611c007afbf5c.png'>";
    text.innerHTML = "<p style='position: absolute; top: -20px; left: 440px; width: 630px; font-size: 20px;'>Vindinium is an Artificial Intelligence multi-lingual programming challenge. You use different types of programming languages to create and control bots using your code. Every game, a new map is randomly generated along with the positions of mines and taverns. Every player gets 300 turns and every action you do is counted as a turn, and collectively the game will stop when the total amount of turns is reached, usually being 1200. Typically you want to be able to do three simple tasks: attack, heal, and mine. There are multiple ways of strategizing in Vindinium. You can prioritize farming which usually means focusing on mining, or you could prioritize attacking and that typically refers to going after the person with the most mines or both actually!</p>";
}

function whatDoesThisDoInfo() {
    reset();
    hideBotAlex();
    whatDoesThisDo.className = "selectedHeader";
    text.innerHTML = "<p></p>";
}
//The information for the sub headers of Bot Alex. 
function startInfo() {
    reset();
    hideGeneralInfo();
    start.className = "selectedHeader";
    text.innerHTML = "<p style='position: absolute; top: -25px; left: 350px;'>asdad</p>";
    photo.innerHTML = "<img style='width: 441.54px; height: 137.25px; position: absolute; top: 230px; left: 300px;' src='http://image.prntscr.com/image/08f6fcc7b2914dde999cc7b5819b74da.png'>"
}

function taskDeciderInfo() {
    reset();
    hideGeneralInfo();
    taskDecider.className = "selectedHeader";
    text.innerHTML = "";
    photo.innerHTML = "";
}
function attackInfo() {
    reset();
    hideGeneralInfo();
    attacking.className = "selectedHeader";
    text.innerHTML = "ddddd";
}

function tavernsInfo() {
    reset();
    hideGeneralInfo();
    taverns.className = "selectedHeader";
    text.innerHTML = "dddd";
}
function miningInfo() {
    reset();
    hideGeneralInfo();
    mining.className = "selectedHeader";
    text.innerHTML = "asdadasdas";
}
function blitzInfo() {
    reset();
    hideGeneralInfo();
    blitzing.className = "selectedHeader";
    text.innerHTML = "asdadadad";
}
function winningInfo() {
    reset();
    hideGeneralInfo();
    winning.className = "selectedHeader";
    text.innerHTML = "asdadad";
}
function extrasInfo() {
    reset();
    hideGeneralInfo();
    extras.className = "selectedHeader";
    text.innerHTML = "asdsadad";    
}