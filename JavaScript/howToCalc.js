// var Main = document.getElementById(Main);

var htmlTitle = document.getElementById("htmlTitle"); //HTML Title
var htmlHeader1 = document.getElementById("htmlHeader1");
var htmlHeader2 = document.getElementById("htmlHeader2");
var htmlHeader3 = document.getElementById("htmlHeader3");
var htmlHeader4 = document.getElementById("htmlHeader4");
var htmlHeaders = document.getElementById("htmlHeaders")

var cssTitle = document.getElementById("cssTitle"); //CSS Title

var jsTitle = document.getElementById("jsTitle"); //JavaScript Title

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
    text.innerHTML = "";
    code.innerHTML = "";
    result.innerHTML = "";
}


// cssTitle.addEventListener("click", cssClass);
// function cssClass() {
//     document.getElementById("cssHeaders").style.display = "block";
//     document.getElementById("htmlHeaders").style.display = "none";
//     document.getElementById("jsHeaders").style.display = "none";
//     cssTitle.style.color = "#F08080";
//     cssTitle.style.textDecoration = "underline";
//     htmlTitle.style.color = "white";
//     htmlTitle.style.textDecoration = "none";
//     jsTitle.style.color = "white";
//     jsTitle.style.textDecoration = "none";
//     text.innerHTML = "";
//     code.innerHTML = "";
// }
jsTitle.addEventListener("click", jsClass);
function jsClass() {
    document.getElementById("jsHeaders").style.display = "block";
    document.getElementById("htmlHeaders").style.display = "none";
    // document.getElementById("cssHeaders").style.display = "none";
    htmlTitle.style.color = "white";
    htmlTitle.style.textDecoration = "none";
    jsTitle.style.color = "#F08080";
    jsTitle.style.textDecoration = "underline";
    text.innerHTML = "";
    code.innerHTML = "";
    result.innerHTML = "";
}


document.getElementById("htmlHeader1").addEventListener("click", htmlStep1);
function htmlStep1() {
    // document.getElementById("htmlHeader1Info").style.display = "block";
    // document.getElementById("htmlHeader2Info").style.display = "none";
    // document.getElementById("htmlHeader3Info").style.display = "none";
    // document.getElementById("htmlHeader4Info").style.display = "none";    
    htmlHeader1.style.color = "#F08080";
    htmlHeader1.style.textDecoration = "underline";
    htmlHeader2.style.color = "white";
    htmlHeader2.style.textDecoration = "none";
    htmlHeader3.style.color = "white";
    htmlHeader3.style.textDecoration = "none";
    htmlHeader4.style.color = "white";
    htmlHeader4.style.textDecoration = "none";
    text.innerHTML = "<p style='width: 475px;'> First we start out by creating a div to hold our entire calculator together. This will give us a specified amount of space to work with but you can also adjust the width and height in the class we called &quot;calculator&quot; if you believe you need more room. </p>";
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
    text.innerHTML = "";
    code.innerHTML = "";
    result.innerHTML = "";
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
}