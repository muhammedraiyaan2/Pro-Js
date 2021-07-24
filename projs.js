/*This is pro js
Version: 1.0
Copyright@projs2021
By:Muhammad Raiyaan I
Note: Pro js don't work on internet explorer*/
//document write function
let out=(data)=>{
    document.write(data)
    }
//console log function
function conLog(text){
console.log(text)
}
//console error function
let conError=(ConError)=>{
    console.error(ConError)
}
//console warn function
function conWarn(text){
    console.warn(text)
}
//match function
let matchIt =(varname,text)=>{
    let a=varname.indexOf(text)
    if(a>-1){
        return "true"
    }
    else{
        return "false";
    }
}
//return function
function send(text){
    return text;
}
//document write function
let outln=(text)=>{
document.writeln(text)
}
//get element by id function
function getId(id){
    document.getElementById(id)
}
//class name function
function className(name){
    document.getElementsByClassName(name)
}
//create element
function createEle(element){
    document.createElement(element)
}
//average number function
function avg2(a,b){
    return (a+b)/2
}
function avg3(a,b,c){
    return (a+b+c)/3
}
function avg4(a,b,c,d){
    return (a+b+c+d)/4
}
function avg5(a,b,c,d,e){
    return (a+b+c+d+e)/5
}
function avg6(a,b,c,d,e,f){
    return (a+b+c+d+e+f)/6
}
function avg7(a,b,c,d,e,f,h){
    return (a+b+c+d+e+f+h)/7
}
function avg8(a,b,c,d,e,f,h,j){
    return (a+b+c+d+e+f+h,j)/8
}
//random number function 
function random(a){
    Math.floor(math.random()*a)
}
//max function
function max(a,b){
if(a<b){
    return b+" Is greater number"
}
else{
    return a+" Is greater number"
}
}
//min function
let min=(a,b)=>{
    if(a>b){
        return b+" Is small number"
    }
    else{
        return a+" Is small number"
    }
}
//tag name function
function tagName(Name){
    document.getElementsByTagName(Name)
}
//event listener funciton
function event(a,b){
    addEventListener(a,b)
}
//single page application
function spa(req){
let xhr=new XMLHttpRequest()
xhr.open("GET",req,true)
    xhr.onload=function(){
        document.write(this.responseText)
    }
    xhr.send()
}
function open(url){
   window.open(url);
}
