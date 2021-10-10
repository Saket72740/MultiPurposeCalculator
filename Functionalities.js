function selected(){
    var select = document.getElementById("selectbox");
    if(select.options[select.selectedIndex].value == 2)
        document.getElementById("notiC").style.visibility="visible";
    else
        document.getElementById("notiC").style.visibility="hidden";
}
function calculateInterest(){
    var p = 0.0;
    var n = 0.0;
    var t = 0.0;
    var r = 0.0;
    var si = 0.0;
    var ci = 0;
    var amount;
    var flag = true;
    var select = document.getElementById("selectbox");
    if(select.options[select.selectedIndex].value == 2)
        flag = false;
    if(select.options[select.selectedIndex].value == 1){
        p = parseFloat(document.getElementById("principle").value);
        r = parseFloat(document.getElementById("roi").value);
        t = parseFloat(document.getElementById("tp").value);
        document.getElementById("inter").style.visibility = "visible";
        si = p*r*t/100;
        console.log("si = " + si + " p*r*t = " + p*r*t);
        document.getElementById("interest").innerHTML = si;
        document.getElementById("amo").style.visibility = "visible";
        amount = p+si;
        document.getElementById("amount").innerHTML = amount;
    }
        
}