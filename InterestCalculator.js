
// Interest Calculator related functions
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
    var ci = 0.0;
    var amount;
    var select = document.getElementById("selectbox");
    if(select.options[select.selectedIndex].value == 0){
        alert("Please Choose Interest Type");
        return false;
    }
    if(select.options[select.selectedIndex].value == 1){
        try{
        p = parseFloat(document.getElementById("principle").value);
        r = parseFloat(document.getElementById("roi").value);
        t = parseFloat(document.getElementById("tp").value);
        if(isNaN(p) || isNaN(r) || isNaN(t))
            throw "error";
        document.getElementById("inter").style.visibility = "visible";
        si = p*r*t/100;
        console.log("si = " + si + " p*r*t = " + p*r*t);
        document.getElementById("interest_header").innerHTML = "<b>Simple Interest</b>";
        document.getElementById("interest").innerHTML = si;
        document.getElementById("amo").style.visibility = "visible";
        amount = p+si;
        document.getElementById("amount").innerHTML = amount;
        }catch{
            alert("Wrong Input");
        }
    }
    else if(select.options[select.selectedIndex].value == 2){
        try{
            p = parseFloat(document.getElementById("principle").value);
            r = parseFloat(document.getElementById("roi").value);
            t = parseFloat(document.getElementById("tp").value);
            n = parseFloat(document.getElementById("notic").value);
            document.getElementById("inter").style.visibility = "visible";
            amount = p*Math.pow((1+r/(n*100)),n*t);
            ci = amount-p;
            console.log("ci = " + ci + " amount = " + amount);
            document.getElementById("interest_header").innerHTML = "<b>Compound Interest</b>";
            document.getElementById("interest").innerHTML = ci;
            document.getElementById("amo").style.visibility = "visible";
            document.getElementById("amount").innerHTML = amount;
        }catch{
            alert("Wrong Input");
        }
    }       
}
