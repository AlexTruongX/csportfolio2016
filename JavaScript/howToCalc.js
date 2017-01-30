// var Main = document.getElementById(Main);

var htmlTitle = document.getElementById("htmlTitle"); //HTML Title
var htmlHeader1 = document.getElementById("htmlHeader1");
var htmlHeader2 = document.getElementById("htmlHeader2");
var htmlHeader3 = document.getElementById("htmlHeader3");
var htmlHeader4 = document.getElementById("htmlHeader4");
var htmlHeaders = document.getElementById("htmlHeaders")

var jsTitle = document.getElementById("jsTitle"); //JavaScript Title
var jsHeaders = document.getElementById("jsHeaders");
var jsHeader1 = document.getElementById("jsHeader1");
var jsHeader2 = document.getElementById("jsHeader2");
var jsHeader3 = document.getElementById("jsHeader3");
var jsHeader4 = document.getElementById("jsHeader4");
var jsHeader5 = document.getElementById("jsHeader5");

var textJs = document.getElementById("textJs");
var text = document.getElementById("text");
var code = document.getElementById("code");
var result = document.getElementById("result")

htmlTitle.addEventListener("click", htmlClass);
function htmlClass() {
    document.getElementById("htmlHeaders").style.display = "block";
    // document.getElementById("cssHeaders").style.display = "none";
    document.getElementById("jsHeaders").style.display = "none";
    htmlTitle.style.color = "#F08080";
    htmlTitle.style.textDecoration = "underline";
    jsTitle.style.color = "white";
    jsTitle.style.textDecoration = "none";
    jsHeader1.style.color = "white";
    jsHeader1.style.textDecoration = "none";
    jsHeader2.style.color = "white";
    jsHeader2.style.textDecoration = "none";  
    jsHeader3.style.color = "white";
    jsHeader3.style.textDecoration = "none";
    jsHeader4.style.color = "white";
    jsHeader4.style.textDecoration = "none";
    jsHeader5.style.color = "white";
    jsHeader5.style.textDecoration = "none";
    textJs.innerHTML = "";
    text.innerHTML = "";
    code.innerHTML = "";
    result.innerHTML = "";
}

document.getElementById("htmlHeader1").addEventListener("click", htmlStep1);
function htmlStep1() {
    htmlHeader1.style.color = "#F08080";
    htmlHeader1.style.textDecoration = "underline";
    htmlHeader2.style.color = "white";
    htmlHeader2.style.textDecoration = "none";
    htmlHeader3.style.color = "white";
    htmlHeader3.style.textDecoration = "none";
    htmlHeader4.style.color = "white";
    htmlHeader4.style.textDecoration = "none";
    textJs.innerHTML = "";
    text.innerHTML = "<p style='width: 475px;'> First we started out by creating a div to hold our entire calculator together, essentially the base/foundation of it. This will give us a specified amount of space to work with but is still adjustable in the class called &quot;calculator&quot; if you believe you need more room. I myself used in-line css because I wanted to position the calculator well... where I wanted it to be.</p>";
    code.innerHTML = "<img style='width: 300px; height: 100px;' src='http://image.prntscr.com/image/525325b0ff9442359015aadd5e5b1a39.png'>";
    result.innerHTML = "<img style='position: relative; left: -10px; width: 200px; height: 306px;'src='http://image.prntscr.com/image/4db51b6c23db448887bb19e997089be8.png'>";
}
document.getElementById("htmlHeader2").addEventListener("click", htmlStep2);
function htmlStep2() {
    htmlHeader2.style.color = "#F08080";
    htmlHeader2.style.textDecoration = "underline";
    htmlHeader1.style.color = "white";
    htmlHeader1.style.textDecoration = "none";
    htmlHeader3.style.color = "white";
    htmlHeader3.style.textDecoration = "none";
    htmlHeader4.style.color = "white";
    htmlHeader4.style.textDecoration = "none";
    textJs.innerHTML = "";
    text.innerHTML = "<p style='width: 475px; text-align: left;'>We then created an input tag which acts more like an output for our case. The disabled part following the id=&quot;screen&quot; you can choose to either put enabled or disabled. All it does it either allow the user to type inside the input box or not allow them to type inside the input box.</p>";
    code.innerHTML = "<img style='width: 300px; height: 126.5px;' src='http://image.prntscr.com/image/6b960858da3e4f01820f7a76b409eb0d.png'>";
    result.innerHTML = "<img style='width: 198.5px; height: 307px;' src='http://image.prntscr.com/image/1c3f23eaf63941499de763b0df74d2aa.png'>";
}
document.getElementById("htmlHeader3").addEventListener("click", htmlStep3);
function htmlStep3() {
    htmlHeader3.style.color = "#F08080";
    htmlHeader3.style.textDecoration = "underline";
    htmlHeader1.style.color = "white";
    htmlHeader1.style.textDecoration = "none";
    htmlHeader2.style.color = "white";
    htmlHeader2.style.textDecoration = "none";
    htmlHeader4.style.color = "white";
    htmlHeader4.style.textDecoration = "none";
    textJs.innerhtml = "";
    text.innerHTML = "<p style='position: absolute; left: -49px; top: -15px;'> We created a class called rows to seperate a set of 4 buttons in a horizontal line from another set of 4 buttons in a horizontal line in a vertical way similar to book over book. I like to think of it as like a grid system. It just helps overall in establishing the look and process we want our calculator to have and pretty much simplifies the process and really helps in not having to worry about needing to potentially position each and every button individually. </p>";
    code.innerHTML = "<img style='width: 231px; height: 316.5px;'src='http://image.prntscr.com/image/9d87095277e34671922be68460beca78.png'>";
    result.innerHTML = "<img style='width: 217.6px; height: 351.2px; position: absolute; left: -50px;'src='http://image.prntscr.com/image/16375428296a43799c09fb24b404f98b.png'>";
}
document.getElementById("htmlHeader4").addEventListener("click", htmlStep4);
function htmlStep4() {
    htmlHeader4.style.color = "#F08080";
    htmlHeader4.style.textDecoration = "underline";
    htmlHeader1.style.color = "white";
    htmlHeader1.style.textDecoration = "none";
    htmlHeader2.style.color = "white";
    htmlHeader2.style.textDecoration = "none";
    htmlHeader3.style.color = "white";
    htmlHeader3.style.textDecoration = "none";
    textJs.innerHTML = "";
    text.innerHTML = "<p style='width: 600px; font-size: 14.25px; position: absolute; left: -25px; top: -14px;'>We created two main classes, numbers, and operators. Numbers.. well obviously refer to numbers e.g. 1, 2, 3, 4, ... Operators refer to things like the + sign, the - sign, &#215; sign, and so on. The benefits of having these two classes is that it will help in making the javascript portion easier for us and the calculation of it in addition to having more than one number or operator so id's are purely out of the question. We would know that anything with the class of numbers will only or should only output a number. I have clearly differntiated numbers from operators. The numbers are <a style='color: white;'>plain white<a>, when hovered over the button becomes <a style='color: #9999ff;'>blueish purple<a>, and the operators are kind of <a style='color: #ffe6ee'>light pink</a> and when hovered over becomes <a style='color: #ffcc99;'>light orange</a>. Now, let's move on to the buttons that the arrow is pointing to, the <a style='color: #ff9fa8;'>clear button</a> and the <a style='color: #f1ff92;'>equal button</a>. The classes aren't really used in the javascript portion, although you can use it. It's a bit misleading but it still proves the point that I previously have made. It could make it much easier on you. In my case, I used id's because they're singular instances that need to perform different singular functions. Let's than move on to setting values and such. As you can see in the image on your left it is boxed in, and on your right you will see the button itself and the screen displaying it. Anything can be the content that goes in between the tag and the closing tag bracket. As you can see, I put the name <a style='color: white;'>BOB</a> in between &lt;button&gt; &lt;/button&gt; but it still displays 7 on the screen because the value of that particular button is set to value=&quot;7&quot;. Essentially, you can put anything in between the tag brackets and the closing tag brackets as long as the value is set correctly(if you need help finding values W3Schools can help a lot). But I highly recommend just putting the samething you put as the value of the button in between the tag brackets and the closing tag brackets. </p>";
    code.innerHTML = "<img style='width: 250.8px; height: 394.02px;'src='http://image.prntscr.com/image/8f681b85bff342d699f9b76bde2658b5.png'>";
    result.innerHTML = "<img style='width: 287.6px; height: 441.2px; position: absolute; left: 87.5px;'src='http://image.prntscr.com/image/8c9d70fc62ad4af984327707e69f29ac.png'>";
}

jsTitle.addEventListener("click", jsClass);
function jsClass() {
    document.getElementById("jsHeaders").style.display = "block";
    document.getElementById("htmlHeaders").style.display = "none";
    jsTitle.style.color = "#F08080";
    jsTitle.style.textDecoration = "underline";
    htmlTitle.style.color = "white";
    htmlTitle.style.textDecoration = "none";
    htmlHeader1.style.color = "white";
    htmlHeader1.style.textDecoration = "none";
    htmlHeader2.style.color = "white";
    htmlHeader2.style.textDecoration = "none";  
    htmlHeader3.style.color = "white";
    htmlHeader3.style.textDecoration = "none";
    htmlHeader4.style.color = "white";
    htmlHeader4.style.textDecoration = "none";
    textJs.innerHTML = "";
    text.innerHTML = "";
    code.innerHTML = "";
    result.innerHTML = "";
}
document.getElementById("jsHeader1").addEventListener("click", jsStep1);
function jsStep1() {
    jsHeader1.style.color = "#F08080";
    jsHeader1.style.textDecoration = "underline";
    jsHeader2.style.color = "white";
    jsHeader2.style.textDecoration = "none";
    jsHeader3.style.color = "white";
    jsHeader3.style.textDecoration = "none";
    jsHeader4.style.color = "white";
    jsHeader4.style.textDecoration = "none";
    jsHeader5.style.color = "white";
    jsHeader5.style.textDecoration = "none";
    textJs.innerHTML = "<p style='position: relative; top: 225px; width: 650px;'>First we created all the variables we needed to make our calculator function. As seen in the HTML portion, we had two main classes numbers, and operators. We used classes because we had more than one button/number/operator. Using the <a style='color: white;'>document.querySelectorAll(<a style=\'color: #98FB98;\'>\"button.operators\"<\/a><a style=\'color: white;\'>);<\/a> it will return all elements in our calc.html page that is a button and has class of operators. It is also best to name the variable the same thing that you named the class/id. We used <a style='color: white;'>document.getElementById(<a style=\'color: #98FB98;\'>\"INSERT ID HERE\"<\/a><a style=\'color: white;\'>);<\/a> multiple times it returns the FIRST element with the id that you have specified in the parentheses. Here you can see that we did exactly that. We used the id's screen, equal, clear, and sqrt only once because they'll have a seperate singular function/action than numbers and operators. </p>"
    text.innerHTML = "";
    code.innerHTML = "<img style='width: 384.3px; height: 89.6px;'src='http://image.prntscr.com/image/2ddb2f04464249159af12e46191e9c90.png'>";
    result.innerHTML = "";
}
document.getElementById("jsHeader2").addEventListener("click", jsStep2);
function jsStep2() {
    jsHeader2.style.color = "#F08080";
    jsHeader2.style.textDecoration = "underline";
    jsHeader1.style.color = "white";
    jsHeader1.style.textDecoration = "none";
    jsHeader3.style.color = "white";
    jsHeader3.style.textDecoration = "none";
    jsHeader4.style.color = "white";
    jsHeader4.style.textDecoration = "none";
    jsHeader5.style.color = "white";
    jsHeader5.style.textDecoration = "none";
    textJs.innerHTML = "<p style='position: relative; top: 220px; left: -110px;width: 650px;'>Now that we have created all of our variables. We have created two functions. One called numbers, and another called operators. Both of these functions do the same exact thing but one is purely for numbers and another for operators. It's main job is to determine the value of each button/the button clicked and then add it/display it onto the screen. We will discuss more about how this goes into play in the next step.</p>";
    text.innerHTML = "";
    code.innerHTML = "<img style='width: 264.8px; height: 157.6px;' src='http://image.prntscr.com/image/eb38d6d1aa8549aab3c52d700417f5c7.png'>";
    result.innerHTML = "";
}
document.getElementById("jsHeader3").addEventListener("click", jsStep3);
function jsStep3() {
    jsHeader3.style.color = "#F08080";
    jsHeader3.style.textDecoration = "underline";
    jsHeader2.style.color = "white";
    jsHeader2.style.textDecoration = "none";
    jsHeader1.style.color = "white";
    jsHeader1.style.textDecoration = "none";
    jsHeader4.style.color = "white";
    jsHeader4.style.textDecoration = "none";
    jsHeader5.style.color = "white";
    jsHeader5.style.textDecoration = "none";
    textJs.innerHTML = "<p style='position: relative; top: 220px; left: -130px; width: 650px;'>Here are the for loops. Both of these for loops do the same thing except one is for numbers and another is for operators. We first set a variable before the loop starts, so we declare var i = 0; and then we define the condition for running the loop. In our case the loop will only run if variable i is less than the length of numbers which really just determines how many things we will have in numbers, and operators respectively. And then we have our third statement which is executed each time after the loop is ran/executed it will increase the value each time the codeblock, the things inside the curly brackets are ran. Then we have the things inside our curly brackets, for an example I will use Numbers to describe it. First up we have the Numbers part infront of the parentheses which is the name of the function from the last step. It will take the number of options possible and derive the actual value of them. Same thing goes for operators. </p>";
    text.innerHTML = "";
    code.innerHTML = "<img style='width: 239.2px; height: 84px;'src='http://image.prntscr.com/image/13fe1dedd7d0433986b7ded9b25ce831.png'></img>";
    result.innerHTML = "";
}
document.getElementById("jsHeader4").addEventListener("click", jsStep4);
function jsStep4() {
    jsHeader4.style.color = "#F08080";
    jsHeader4.style.textDecoration = "underline";
    jsHeader2.style.color = "white";
    jsHeader2.style.textDecoration = "none";
    jsHeader1.style.color = "white";
    jsHeader1.style.textDecoration = "none";
    jsHeader3.style.color = "white";
    jsHeader3.style.textDecoration = "none";
    jsHeader5.style.color = "white";
    jsHeader5.style.textDecoration = "none";
    textJs.innerHTML = "<p style='position: relative; top: 220px; left: -150px; width: 650px;'>We have defined these two variables in Step 1. We first get the name of the variable we want to add an event listener too. In our case this will be equal and clear, but I will mainly be using equal as a model. We declared equal.addEventListener(\"click\", function() and whenever it is clicked it will perform the specified function. In the equal addEventListener it makes the display's value equal to the way we calculate our math which is through using the eval function. Which will automatically calculate whatever was inputted/is currently on the display/screen presently/right now. So basically it makes the display's value, basically how we come up with the answer equal to the calculation of what is already on the screen. In the clear.addEventListener it sets the display's value/whatever is on the screen currently to blank e.g nothing, empty. </p>";
    text.innerHTML = "";
    code.innerHTML = "<img style='width: 234.4px; height: 100px;' src='http://image.prntscr.com/image/46c7884343a142b0a09c91ac1e44c958.png'>";
    result.innerHTML = "";
}
document.getElementById("jsHeader5").addEventListener("click", jsStep5);
function jsStep5() {
    jsHeader5.style.color = "#F08080";
    jsHeader5.style.textDecoration = "underline";
    jsHeader2.style.color = "white";
    jsHeader2.style.textDecoration = "none";
    jsHeader1.style.color = "white";
    jsHeader1.style.textDecoration = "none";
    jsHeader3.style.color = "white";
    jsHeader3.style.textDecoration = "none";
    jsHeader4.style.color = "white";
    jsHeader4.style.textDecoration = "none";
    textJs.innerHTML = "<p style='position: relative; top: 220px; left: -115px; width: 650px;'>Now we have our last extra function/operator. We forgot to declare it at the top but oh well. Traditionally it would be more organized to declare all your variables at the top but this is a secret between me and you. Ok? Ok. Once again we created an addEventListener so that everytime the mean/avg button is clicked it will perform our specified function. First we needed the value of all the numbers added altogether. It's recommended to use only the addition ( + ) operator because it is the most accurate. We then needed to know how many numbers were inputted, we developed a formula being n/2 + 0.5, n refers to the numbers inputed/the value of them on the display at one time. The original answer is then divided by the amount of numbers, and then displayed onto the screen.  </p>";
    text.innerHTML = "";
    code.innerHTML = "<img style='width: 269.6px; height: 107.2px;' src='http://image.prntscr.com/image/cf1c4747ece140359b764eaa39670470.png'>";
    result.innerHTML = "";
}