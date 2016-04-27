//alert("Ready");
var BgnEuro = 0.511181127;
var BgnUsd = 0.579204;
var BgnGbp = 0.401941003;
var EuroBgn = 1.95625414;
var EuroUsd = 1.13307;
var EuroGbp = 0.787486666;
var UsdBgn = 1.72650741;
var UsdEuro = 0.882558006;
var UsdGbp = 0.69719935;
var GbpBgn = 2.48792731;
var GbpEuro = 1.26986277;
var GbpUsd = 1.43431;
var value1 = document.getElementById('value1');
var value2 = document.getElementById('value2');
var value3 = document.getElementById('value3');
var value4 = document.getElementById('value4');
var BGN = document.getElementById("BGN");
var EURO = document.getElementById("EURO");
var USD = document.getElementById("USD");
var GBP = document.getElementById("GBP");

    function bgngo(){
        var bg = BGN.value;
        BGN.value = "";
        EURO.value = "";
        USD.value = "";
        GBP.value = "";
        var eu = bg * BgnEuro;
        var us = bg * BgnUsd;
        var gb = bg * BgnGbp;
        bg = Math.round(bg * 100) / 100;
        eu = Math.round(eu * 100) / 100;
        us = Math.round(us * 100) / 100;
        gb = Math.round(gb * 100) / 100;
        value1.innerHTML = bg + " лв";
        value2.innerHTML = eu + " €";
        value3.innerHTML = us + " $";
        value4.innerHTML = gb + " £";
}
    function eurogo(){
        var eu = EURO.value;
        BGN.value = "";
        EURO.value = "";
        USD.value = "";
        GBP.value = "";
        var bg = eu * EuroBgn;
        var us = eu * EuroUsd;
        var gb = eu * EuroGbp;
        bg = Math.round(bg * 100) / 100;
        eu = Math.round(eu * 100) / 100;
        us = Math.round(us * 100) / 100;
        gb = Math.round(gb * 100) / 100;
        value1.innerHTML = bg + " лв";
        value2.innerHTML = eu + " €";
        value3.innerHTML = us + " $";
        value4.innerHTML = gb + " £";
}
    function usdgo(){
        var us = USD.value;
        BGN.value = "";
        EURO.value = "";
        USD.value = "";
        GBP.value = "";
        var bg = us * UsdBgn;
        var eu = us * UsdEuro;
        var gb = us * UsdGbp;
        bg = Math.round(bg * 100) / 100;
        eu = Math.round(eu * 100) / 100;
        us = Math.round(us * 100) / 100;
        gb = Math.round(gb * 100) / 100;
        value1.innerHTML = bg + " лв";
        value2.innerHTML = eu + " €";
        value3.innerHTML = us + " $";
        value4.innerHTML = gb + " £";
}
    function gbpgo(){
        var gb = GBP.value;
        BGN.value = "";
        EURO.value = "";
        USD.value = "";
        GBP.value = "";
        var bg = gb * GbpBgn;
        var eu = gb * GbpEuro;
        var us = gb * GbpUsd;
        bg = Math.round(bg * 100) / 100;
        eu = Math.round(eu * 100) / 100;
        us = Math.round(us * 100) / 100;
        gb = Math.round(gb * 100) / 100;
        value1.innerHTML = bg + " лв";
        value2.innerHTML = eu + " €";
        value3.innerHTML = us + " $";
        value4.innerHTML = gb + " £";
}
/// OTHER HOMEWORK
var a = [1,2,3,4,5];
//Function for multiplying values in our Array
function MultiplyArr(arr){
    var multiply = 1;
    for (i = 0 ; i < arr.length ; i++) {
    multiply = arr[i] * multiply;
}
    return multiply;
}
//Function for Summing values in our Array
function SumArr(arr){
    var sum = 1;
    for (i = 0 ; i < arr.length ; i++) {
    sum = arr[i] * sum;
}
    return sum;
}
//Function for finding max value in our Array
function MaxArr(arr){
    var max = 1;
    for (i = 0 ; i < arr.length ; i++) {
    if (arr[i] > max) {
    max = arr[i];
}
}
    return max;
}
//Function for finding min value in our Array
function MinArr(arr){
    var min = 1;
    for (i = 0 ; i < arr.length ; i++) {
    if (arr[i] < min) {
    min = arr[i];
}
}
    return min;
}
//function for adding words in string
    var final = "" ;
function translate(string) {
    final = "" ;
    for (i = 0 ; i < string.length ; i++) {
        switch ( string[i] ) {
            case ' ': final = final + string[i] ;
                break;
            case '  ': final = final + string[i] ;
                break;
            case '.': final = final + string[i] ;
                break;
            case ',': final = final + string[i] ;
                break;
            case '!': final = final + string[i] ;
                break;
            case '?': final = final + string[i] ;
                break;
            case '@': final = final + string[i] ;
                break;
            case 'a': final = final + string[i] ;
                break;
            case 'y': final = final + string[i] ;
                break;
            case 'o': final = final + string[i] ;
                break;
            case 'u': final = final + string[i] ;
                break;
            case 'e': final = final + string[i] ;
                break;
            case 'i': final = final + string[i] ;
                break;
            case 'а': final = final + string[i] ;
                break;
            case 'ъ': final = final + string[i] ;
                break;
            case 'о': final = final + string[i] ;
                break;
            case 'у': final = final + string[i] ;
                break;
            case 'е': final = final + string[i] ;
                break;
            case 'и': final = final + string[i] ;
                break;
            default: final = final + string[i] + "0" + string[i] ;
        }
    }
    return final;
}
    var finalBack = "" ;
function translateBack (string) {
    finalBack = "" ;
    for ( i = 0 ; i < string.length ; i++ ) {
        switch ( string[i] ) {
            case '0': i++ ;
                break;
            default: finalBack = finalBack + string[i] ;
        }
    }
    return finalBack;
}