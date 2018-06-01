function allowDrop(ev) {
ev.preventDefault();
}

function drag(ev) {
ev.dataTransfer.setData("content", ev.target.id);
}

function drop(ev) {
ev.preventDefault();
var data = ev.dataTransfer.getData("content");
ev.target.appendChild(document.getElementById(data));

}

function Square() {

document.getElementById("figure1").setAttribute('style', 'fill:black');
document.getElementById("figure2").setAttribute('style', 'fill:green');
document.getElementById("figure3").setAttribute('style', 'fill:black');
document.getElementById("answer").innerHTML = "Правилен отговор!";

}

function Circle() {

document.getElementById("figure1").setAttribute("style","fill:red");
document.getElementById("figure2").setAttribute('style', 'fill:black');
document.getElementById("figure3").setAttribute("style","fill:black");
document.getElementById("answer").innerHTML = "Грешен отговор!(квардат)";

}

function Rectangle() {

document.getElementById("figure1").setAttribute("style", "fill:black");
document.getElementById("figure2").setAttribute("style","fill:black");
document.getElementById("figure3").setAttribute('style', 'fill:red');
document.getElementById("answer").innerHTML = "Грешен отговор!(правоъгълник)";

}

function submit() {
var a = input1.value;
if (a == "256") {
document.getElementById("answer1").innerHTML = "Вярно!"
document.getElementById("input1").style.backgroundColor = "green";
document.getElementById("input1").style.color = "white";

} else {
document.getElementById("answer1").innerHTML = "Грешно!"
document.getElementById("input1").style.backgroundColor = "red";
document.getElementById("input1").style.color = "white";
}
}

function submit2() {
if (document.getElementById("capital1").checked) {
document.getElementById("answer2").innerHTML = "Грешен отговор!";
document.getElementById("answer2").style.color = "red";
}
if (document.getElementById("capital2").checked) {
document.getElementById("answer2").innerHTML = "Грешен отговор!";
document.getElementById("answer2").style.color = "red";

}
if (document.getElementById("capital3").checked) {
document.getElementById("answer2").innerHTML = "Грешен отговор!";
document.getElementById("answer2").style.color = "red";
}
if (document.getElementById("capital4").checked) {
document.getElementById("answer2").innerHTML = "Правилен отговор!";
document.getElementById("answer2").style.color = "green";
}


}

function submit3(){
if (document.getElementById("state1").checked&&document.getElementById("state3").checked){
document.getElementById("answer3").innerHTML="Правилен отговор!";
document.getElementById("answer3").style.color = "green";
}
else if (document.getElementById("state2").checked&&document.getElementById("state4").checked){
document.getElementById("answer3").innerHTML= "Грешен отговор!";
document.getElementById("answer3").style.color = "red";
}
else if (document.getElementById("state1").checked&&document.getElementById("state3").checked&&document.getElementById("state2").checked&&document.getElementById("state4").checked){
document.getElementById("answer3").innerHTML= "Грешен отговор!";
document.getElementById("answer3").style.color = "red";
}
else if (document.getElementById("state2").checked&&document.getElementById("state4").checked){
document.getElementById("answer3").innerHTML= "Грешен отговор!";
document.getElementById("answer3").style.color = "red";
}
else if (document.getElementById("state1").checked&&document.getElementById("state2").checked&&document.getElementById("state3").checked){
document.getElementById("answer3").innerHTML= "Грешен отговор!";
document.getElementById("answer3").style.color = "red";
}
else if (document.getElementById("state2").checked&&document.getElementById("state3").checked&&document.getElementById("state4").checked){
document.getElementById("answer3").innerHTML= "Грешен отговор!";
document.getElementById("answer3").style.color = "red";
}
else{
document.getElementById("answer3").innerHTML= "Грешен oтговор!";
document.getElementById("answer3").style.color = "red";
}
}
/*зад 6 не работи правилно при избиране на правилните отговори заедно с грешните*/