var butttt = document.getElementById("butttton");
var woah = document.getElementById("class");
var nums= [document.getElementById("text1"), document.getElementById("text2"), document.getElementById("text3"),
    document.getElementById("text4"), document.getElementById("text5"), document.getElementById("text6")/*, document.getElementById("text7")*/];
//const dots = document.getElementsByClassName("theDots");
let dots = [document.getElementById("dot1"), document.getElementById("dot2"), document.getElementById("dot3"),
     document.getElementById("dot4"), document.getElementById("dot5"), document.getElementById("dot6")/*, document.getElementById("dot7")*/];
let traits = [document.getElementById("str"), document.getElementById("dex"), document.getElementById("con"),
    document.getElementById("int"), document.getElementById("wis"), document.getElementById("cha")]
let className = document.getElementById("ClassName");
let raceName = document.getElementById("RaceName");




let theJson = ('./info.json');

fetch(theJson)
.then(resp => resp.json())
.then(json => theJson = json)


butttt.addEventListener("click", rollDice);

function rollDice(event){
    for(let i=0; i<dots.length; i++){
        dots[i].classList.add("hidden");
        if(nums[i].classList.contains("hidden")){
            nums[i].classList.remove("hidden");
        }
        nums[i].innerText = getRand();
    }
    changeText();
}

function getRand(){
    return Math.floor(Math.random() * 20) +1;
}
function getClass(){
    var obj_keys = Object.keys(theJson.classes);
    var ran_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
    theJson.selectedclass = theJson.classes[ran_key];
    return theJson.selectedclass.name;
}
function getRace(){
    var obj_keys = Object.keys(theJson.races);
    var ran_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
    theJson.selectedrace = theJson.races[ran_key];
    return theJson.selectedrace.name;
}

function changeText(){
    className.innerText = getClass();
    raceName.innerText=getRace();
    for(let i=0; i<traits.length; i++){
        traits[i].innerText=nums[i].innerText;
    }

}