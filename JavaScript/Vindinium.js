// JavaScript File
//"Global" Variables
var text = document.getElementById("text");
var photo = document.getElementById("photo");
var photo2 = document.getElementById("photo2");
var text2 = document.getElementById("text2")

//General Information Headers + Info + EventListeners 
var generalInfo = document.getElementById("generalInfo");
var generalInfoSubHeaders = document.getElementById("generalInfoSubHeaders");
var vindInfo = document.getElementById("vindInfo");
var whatIsAi = document.getElementById("whatIsAi");

generalInfo.addEventListener("click", generalInfoVisible);
vindInfo.addEventListener("click", vindiniumInfo);
whatIsAi.addEventListener("click", whatIsAiInfo);


//Bot Alex Headers + Info + EventListeners
var botAlex = document.getElementById("botAlex");
var botAlexSubHeaders = document.getElementById("botAlexSubHeaders");
var start = document.getElementById("starting");
var taskDecider = document.getElementById("taskDecider");
var attacking = document.getElementById("attacking");
var taverns = document.getElementById("taverns");
var mining = document.getElementById("mining");
var blitzing = document.getElementById("blitzing");
var fullCode = document.getElementById("fullCode");
var fullCodeStuff = document.getElementById("fullCodeStuff");

botAlex.addEventListener("click", botAlexVisible);
start.addEventListener("click", startInfo);
taskDecider.addEventListener("click", taskDeciderInfo);
attacking.addEventListener("click", attackInfo);
taverns.addEventListener("click", tavernsInfo);
mining.addEventListener("click", miningInfo);
blitzing.addEventListener("click", blitzInfo);
fullCode.addEventListener("click", fullCodeInfo);

//Global functions to reset and hide all the headers. 
function reset() {
    vindInfo.className = "allHeaders";
    whatIsAi.className = "allHeaders";
    start.className = "allHeaders";
    taskDecider.className = "allHeaders";
    attacking.className = "allHeaders";
    taverns.className = "allHeaders";
    mining.className = "allHeaders";
    blitzing.className = "allHeaders";
    fullCode.className = "allHeaders";
    fullCodeStuff.className = "hidden";
    photo.innerHTML = "";
    photo2.innerHTML = "";
    text.innerHTML = "";
    text2.innerHTML = "";
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
    text2.innerHTML = "I've learned a lot about AI from this project. Using our knowledge of JavaScript we were able to have created a fully functionable bot. AI has many different forms. ";
}

function vindiniumInfo() {
    reset();
    hideBotAlex();
    vindInfo.className = "selectedHeader";
    photo.innerHTML = "<img style='position: absolute; top: 230px; left: 375px;width: 463.32px; height: 343.2px;'src='http://image.prntscr.com/image/aab61f5e41504b15977611c007afbf5c.png'>";
    text.innerHTML = "<p style='position: absolute; top: -20px; left: 440px; width: 630px; font-size: 20px;'>Vindinium is an Artificial Intelligence multi-lingual programming challenge. You use different types of programming languages to create and control bots using your code. Every game, a new map is randomly generated along with the positions of mines and taverns. Every player gets 300 turns and every action you do is counted as a turn, and collectively the game will stop when the total amount of turns is reached, usually being 1200 and the player/bot with the most gold at the wins. Typically you want to be able to do three simple tasks: attack, heal, and mine. There are multiple ways of strategizing in Vindinium. You can prioritize farming which usually means focusing on mining, or you could prioritize attacking and that typically refers to going after the person with the most mines or both actually!</p>";
}


//The information for the sub headers of Bot Alex. 
function startInfo() {
    reset();
    hideGeneralInfo();
    start.className = "selectedHeader";
    text.innerHTML = "<p style='position: absolute; top: -25px; left: 350px; width: 550px;'>The variables at the top declare the variable Bot and PF require the folder called 'bot' and the folder called 'pathfinding' respectively or the bot can not and will not run. Next up we have the way we connect our code/bot to the server. You register on the vindinium site or the private server and use that key and put it in the place where it says 'YOUR_KEY_HERE', next up we have the what I call the \"mode type\" you set it to training when you want to do just training which is basically you against other built-in vindinium bots. You can also put arena in place of training and that will queue you up with other players on the same server as you. And then that url that you see after training is the url/server that you're connecting to which will allow you to compete against other players and gain elo. The line directly under that is for the private server that you may use if you're doing it with a class. You can only connect to one server a time, when you don't want to queue up on the vindinium server comment it out and and uncomment the private server and vice versa. We then declare the variable goDir which is referencing go in direction. Then we have a promise function which basically means that you when blank is finished do blank. Typically that will mean that it sends information to it, and then requests callback information/information back. </p>";
    photo.innerHTML = "<img style='width: 441.54px; height: 137.25px; position: absolute; top: 230px; left: 300px;' src='http://image.prntscr.com/image/08f6fcc7b2914dde999cc7b5819b74da.png'>"
    photo2.innerHTML = "";
}

function taskDeciderInfo() {
    reset();
    hideGeneralInfo();
    taskDecider.className = "selectedHeader";
    text.innerHTML = "<p style='position: absolute; top: -10px; left: 540px; font-size: 15px; width: 500px;'>This is our task decider its very similar to something like a decision tree. At the very top we declared a variable called task with no value. That is because we will be assigning values to it very soon. We start out by creating an if statement. I felt that I wanted to somewhat prioritize attacking so it will be the first thing in line. Think of this as first come first serve. My condition for my attack function is if my bot's health is greater than the closest bot's health and the distance from my position to the closest bot is less than or equal to 2 spaces then I will attack. Directly following, I will only go to a tavern if my health is less than or equal to 40HP, or if my mine count is greater than or equal to 50% of all mines which is what I call my camping strategy. Next up is claiming mines, but not just any mines, all mines. I originally had mining as the last task but it would never claim mines so I needed to figure out a way for it to mine with my blitz function still in place. I thought, why don't I just prioritize mines over blitzing other enemies. In order to have it prioritized above blitzMode I needed a condition that being if my mine count is less than 50% of all mines I will continue mining till I reach 50% of all mines. Last but not least, blitzMode the last function because it screws with all the other tasks. I created a condition that if my bot healh was greater than 35 and my blitz target's mine count was greater than mine and my bot's mineCount was less than 50% of all mines it would run and tunnel vision for the person with the most mines. </p>";
    text2.innerHTML = "";
    photo.innerHTML = "<img style='position: absolute; top: 230px; left: 325px; width: 622px; height: 179.8px;'src='http://image.prntscr.com/image/6dc6df2c02bd4470b648b5b283763228.png'>";
    photo2.innerHTML = "";
}

function attackInfo() {
    reset();
    hideGeneralInfo();
    attacking.className = "selectedHeader";
    text.innerHTML = "<p style='position: absolute; top: -10px; left: 325px; font-size: 15px; width: 450px;'>I created an if statement with task strictly equaling \"attack\". I put a console log under this if statement so that I know when it will be attacking. In addition to that, I also needed a way for my bot to path to that bot right? I set myDir (my direction). </p>";
    text2.innerHTML = "<p style='position: absolute; top: -10px; left: 590px; font-size: 15px; width: 450px;'>I decided to name our new variable closestBot, we made closestBot equal enemyBots[0] it will then in turn access the value of the first element in enemyBots[0]</p>";
    photo.innerHTML = "<img style = 'position: absolute; top: 230px; left: 300px; width: 423px; height: 85px;' src = 'http://image.prntscr.com/image/fee86b46725d44afb6549189c1e7adcd.png'>";
    photo2.innerHTML = "<img style = 'position: absolute; top: 450px; left: 300px; width: 743.16px; height: 69.96px;' src = 'http://image.prntscr.com/image/e66078c1e8504ab1b16539805cdd4677.png'>";
}

function tavernsInfo() {
    reset();
    hideGeneralInfo();
    taverns.className = "selectedHeader";
    text.innerHTML = "<p style='position: absolute; top: -10px; left: 435px; font-size: 15px; width: 450px;'>So we created an if statement and made task stricly equal to \"tavern\" and then declared variable closestTavern equal to bot.taverns[0]. I then created a for loop that set i=0, and if i was greater than the amount of taverns there are it would add 1 everytime. Then we have a if codeblock that finds the distance from my position to the closestTavern and if it's greater than the distance from my position to the other taverns it will set the closestTavern equal to bot.taverns[i]. If all goes swell it will set my direction towards the closestTavern and log that I am going to the nearest tavern.  </p>";
    text2.innerHTML = "";
    photo.innerHTML = "<img style='position: absolute; top: 230px; left: 300px; width: 543.75px;'src='http://image.prntscr.com/image/f05e5f5557aa481fa3898c4beb0bbfab.png'>";
    photo2.innerHTML = "";
}

function miningInfo() {
    reset();
    hideGeneralInfo();
    mining.className = "selectedHeader";
    text.innerHTML = "<p style='position: absolute; top: -10px; left: 540px; font-size: 15px; width: 450px;'>I created an if statement that had task strictly equal allMines. I then declared the variable closestMine = enemyMines[0]. I then created a for loop, and set i=0, and if  i is less than the amount of enemyMines it will run the if codeblock. The distance from my position to the closestMine is greater than the distance from my position to enemyMines and it finds the path from my position to an enemyMine. If the if codeblock is true than closestMine will equal enemyMines[i].</p>";
    text2.innerHTML = "";
    photo.innerHTML = "<img style='position: absolute; top: 230px; left: 300px; width: 650px; height: 149.25px;' src='http://image.prntscr.com/image/cc10a33a11404ce888664f2d49ffc5a4.png'>";
    photo2.innerHTML = "";
}

function blitzInfo() {
    reset();
    hideGeneralInfo();
    blitzing.className = "selectedHeader";
    text.innerHTML = "<p style='position: absolute; top: -10px; left: 335px; font-size: 15px; width: 450px;'>If my task is stricly equal to blitzMode it will set my direction from my position to my blitzTarget's position. I also set up a console log because I wanted to know when blitz mode activated. </p>";
    text2.innerHTML = "<p style='position: absolute; top: -10px; left: 280px; font-size: 15px; width: 450px;'>I declare my variable blitzTarget equal to enemyBots[0]. And then created a for loop that set i equal to 0. If the number of enemyBots is greater than i it will run the if codeblock. If my blitzTargets mineCount is less than enemyBots[i] minecount is true then blitzTarget = enemyBots[i]. </p>";
    photo.innerHTML = "<img style = 'position: absolute; top: 230px; left: 300px; width: 450px; height: 85px;' src = 'http://image.prntscr.com/image/55ae14c8a6774e58923559d1d4d49469.png'>";
    photo2.innerHTML = "<img style = 'position: absolute; top: 450px; left: 300px; ' src = 'http://image.prntscr.com/image/3ae08b64b19948469ff244a63033101e.png'>";
}

function fullCodeInfo() {
    reset();
    hideGeneralInfo();
    fullCode.className = "selectedHeader";
    fullCodeStuff.className = "visible";
    text.innerHTML = "";
    text2.innerHTML = "";
    photo.innerHTML = "";
    photo2.innerHTML = "";
}
