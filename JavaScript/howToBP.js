// JavaScript File
console.log("Linked JS");
//"Global" Variables
var text = document.getElementById("text");
var text2 = document.getElementById("text2")
var photo = document.getElementById("photo");
var photo2 = document.getElementById("photo2");


//General Information Headers + Info + EventListeners 
var generalInfo = document.getElementById("generalInfo");
var generalInfoSubHeaders = document.getElementById("generalInfoSubHeaders");
var hoverOverVind = document.getElementById("hoverOverVind");
var hoverOverBoth = document.getElementById("hoverOverBoth");
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


botAlex.addEventListener("click", botAlexVisible);
start.addEventListener("click", startInfo);
taskDecider.addEventListener("click", taskDeciderInfo);
attacking.addEventListener("click", attackInfo);
taverns.addEventListener("click", tavernsInfo);


//Global functions to reset and hide all the headers. 
function reset() {
    vindInfo.className = "allHeaders";
    whatIsAi.className = "allHeaders";
    start.className = "allHeaders";
    taskDecider.className = "allHeaders";
    attacking.className = "allHeaders";
    taverns.className = "allHeaders";
    photo.innerHTML = "";
    photo2.innerHTML = "";
    text.innerHTML = "";
    text2.innerHTML = "";
}

function hideGeneralInfo() {
    generalInfoSubHeaders.className = "hidden";
    botAlexSubHeaders.className = "visible";
    hoverOverBoth.className = "visible";
    hoverOverVind.lassName = "hidden";
}

function hideBotAlex() {
    botAlexSubHeaders.className = "hidden";
    generalInfoSubHeaders.className = "visible";
    hoverOverBoth.className = "hidden";
    hoverOverVind.className = "visible";
}

//The two main headers
function generalInfoVisible() {
    reset();
    hideBotAlex();
    generalInfoSubHeaders.className = "visible";
    generalInfo.className = "selectedTitleHeader";
    botAlexSubHeaders.className = "hidden";
    botAlex.className = "botAlex";
    hoverOverVind.className = "visible";
    hoverOverBoth.className = "hidden";
    text.innerHTML = "";
    text2.innerHTML = "";
    photo.innerHTML = "";
    photo2.innerHTML = "";
    
}

function botAlexVisible() {
    reset();
    hideGeneralInfo();
    botAlexSubHeaders.className = "visible";
    botAlex.className = "selectedTitleHeader";
    generalInfoSubHeaders.className = "hidden";
    generalInfo.className = "generalInfo";
    hoverOverVind.className = "hidden";
    hoverOverBoth.className = "visible";
    text.innerHTML = "";
    text2.innerHTML = "";
    photo.innerHTML = "";
    photo2.innerHTML = "";
}
//The information for the sub headers of General Info. 
function whatIsAiInfo() {
    reset();
    hideBotAlex();
    whatIsAi.className = "selectedHeader";
    text.innerHTML = "<p style='font-size: 17.5px; color: #87CEFA; position: absolute; left: 425px; top: -17px; width: 500px;'>Our first step was to create the div that everything would be contained in, in our case, that was the div with the id 'gameBox'. We then created another div that would contain everything for the game itself. And then comes our startScreen which is also where we will have the span with the id of 'startTitle' and the spans called 'newGame' and 'loadGame' be at our homepage or as its called in the id, the start screen and the 'mainpageImg' is our background image for the homepage.</p>";
    // text2.innerHTML = "<p style='position: absolute; top: -50px; color: #87CEFA;' id ='whatIsAiInfo'>I've learned a lot about AI from this project. Using our knowledge of JavaScript we were able to have created a fully functionable bot. This project from the get go was hard to pick up although I'm a some what experienced javascript user. I didn't really know what functions and things to make for my bot until I fully understood what I was doing. Once I was able to comprehend all the information I made a bot that competed in the Vindinium Tournament and survived till the Semi-Finals. When I finally figured out how to create the attack function I realized how easy it was and how I overcomplicated the entire thing. I also learned to hate vindinium because of how hard the skill floor was for me initially. The bot will act up and give you errors for the smallest of mistakes.</p>";
    photo.innerHTML = "<img id='whatIsAiImg' src='http://image.prntscr.com/image/15d59d4104b446ec99fb1457575f5b71.png' >"
}


function vindiniumInfo() {
    reset();
    hideBotAlex();
    vindInfo.className = "selectedHeader";
    photo.innerHTML = "<img id='vindImg'style='position: absolute; top: 230px; left: 395px; width: 312.75px; height: 372.75px;'src='http://image.prntscr.com/image/b887daa2723a4bae9e9d0a48b209ad6b.png' >";
    text.innerHTML = "<p id='vindInfo'style='color: #87CEFA; font-size: 17px; position: absolute; top: -20px; left: 300px; width: 500px;'>This is our menu for the game. The only times you can access the menu are when you are in the game. We have a levels tab that opens another menu to select levels only, a tab to save your progress in the game, and if you completely screw up to restart the level. In addition, we have also included additional instructions nad the purpose of the game if you find yourself in need of help. We masked all of this with a class called 'hide' so that when you click a certain button which you will find out in the JavaScript section </p>";
}


//The information for the sub headers of Bot Alex. 
function startInfo() {
    reset();
    hideGeneralInfo();
    start.className = "selectedHeader";
    text.innerHTML = "<p id = 'startInfo' style='position: absolute; top: -20px; left: 400px; width: 550px;'>If you've been reading all my past how-to's all of this should be relatively beginner stuff. As you can see, we declared a lot of variables. In the comments I've also specified what each general area of variables do or what purpose they fall under. For example, everything that I want to be on the start screen will fall under start screeen for the given purpose of lets say load the game, or start a new game.</p>";
    text2.innerHTML = ""
    photo.innerHTML = "<img id='startImg' style='width: 483.75px; height: 560.25px; position: absolute; top: 220px; left: 300px;' src='http://image.prntscr.com/image/02668b64d1504d4482e1eec49f40d94a.png'>"
    photo2.innerHTML = "";
}

function taskDeciderInfo() {
    reset();
    hideGeneralInfo();
    taskDecider.className = "selectedHeader";
    text.innerHTML = "<p id='taskDeciderInfo'style='position: absolute; top: -10px; left: 340px; font-size: 15px; width: 500px;'> Our first function is our new game function that is named load. In order to get that new game function working we had it so that if you were completely new to the game which would mean if your level number was undefined it would be start you off at level 1 but if you have already played the game it would set the startLevel to what was defined in your save file. Next we have the actual button when you click load game that it'll run the function loadGame and if your save file shows that you were last saved on level 3, it would put you back at level 3 upon clicking load game, and if you saved at level two, then so on.</p>";
    text2.innerHTML = "";
    photo.innerHTML = "<img id='taskDeciderImg'style='position: absolute; top: 230px; left: 325px; width: 417.5px; height: 320.25px;'src='http://image.prntscr.com/image/a7d51e865c6e4ae49aefd844cbc11860.png'>";
    photo2.innerHTML = "";
}

function attackInfo() {
    reset();
    hideGeneralInfo();
    attacking.className = "selectedHeader";
    text.innerHTML = "<p class='attackInfo'style='position: absolute; top: -10px; left: 250px; font-size: 15px; width: 450px;'>This function allows us to display the pre level one instructions before going level one. Upon clicking the new game button it will have this pop up and then you have to click through it before proceeding to the first level. .</p>";
    text2.innerHTML = "";
   // text2.innerHTML = "<p class='attackInfo2'style='position: absolute; top: -10px; left: 590px; font-size: 15px; width: 450px;'>I decided to name our new variable closestBot, we made closestBot equal enemyBots[0] it will then in turn access the value of the first element in enemyBots[0]. The for loop will check each bots position relative to mine and see which enemy bot is closer to me. If it's within 2 spaces it will attack. </p>";
    photo.innerHTML = "<img class='attackImg'style = 'position: absolute; top: 230px; left: 300px; width: 342px; height: 170px;' src = 'http://image.prntscr.com/image/1ce4ec85d965412f8615213ee7f80583.png'>";
    photo2.innerHTML = "";
    // photo2.innerHTML = "<img class='attackImg'style = 'position: absolute; top: 450px; left: 300px; width: 743.16px; height: 69.96px;' src = 'http://image.prntscr.com/image/e66078c1e8504ab1b16539805cdd4677.png'>";
}

function tavernsInfo() {
    reset();
    hideGeneralInfo();
    taverns.className = "selectedHeader";
    text.innerHTML = "<p id='tavernsInfo'style='position: absolute; top: -10px; left: 435px; font-size: 15px; width: 450px;'>For our first level, when the function is called it sets the currentLevel equal to 1 for the purpose of saving it, which is why we also have it run the save function directly after setting the currentLevel and having the level one function called. We then set the class of levelSelectOne to level options which basically now allows you to access level 1 in the escape menu. And then we have our actual first level. This was a bit tricky to get working because it required image stacking. In order to do this we had to have the first image being clicked be on top of all the other images code, and then the second image, and so on. We didn't really feel the need to assign global variables so instead we assigned local variables accustomed to that function only. Next we have all our images, pretty self explanatory. We had the code and the game setup so that you had to click the correct things in order. E.g. you can't skip the level by clicking the lock you had to first click the key and then the key would be hidden, and if the key was hidden then you could click the lock, and it would 'open'. And then if clickableOne was true it would allow you to click any part of the background image and it would pass you on to the next level. </p>";
    text2.innerHTML = "";
    photo.innerHTML = "<img id='tavernsImg'style='position: absolute; top: 230px; left: 300px; width: 526.5px; height: 376.5px;'src='http://image.prntscr.com/image/be352806b2fa4fa0a6b682e48c01ee0e.png'>";
    photo2.innerHTML = "";
}

