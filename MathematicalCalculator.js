//Mathematical Calculator related function
var arr = "";   //to store the input for the html;
var inf = "";   //used for making infix notation;
console.log(arr);
var infix = [];     //contains infix elements
var postfix = [];   //contain postfix elements
function addNumber(a){
    if(arr.charAt(arr.length-1) == '+' || arr.charAt(arr.length-1) == '-' || arr.charAt(arr.length-1) == 'x' || arr.charAt(arr.length-1) == '/' || arr.charAt(arr.length-1) == '.'){
        if(a == '+' || a == '-' || a == 'x' || a == '/' || a == '.'){
            arr = arr.substring(0, arr.length-1);
            console.log(arr);  
        }

    }
    if(a == '.' && arr.charAt(arr.length-1) == '.')
        arr = arr.substring(0, arr.length-1);
    arr += a;
    console.log(arr);
    document.getElementById("pwd").value = arr;
}

function deleteLastNumber(){
    arr = arr.substring(0,arr.length-1);
    document.getElementById("pwd").value = arr;
}

function deleteAll(){
    arr="";
    inf = "";
    stack = [];
    infix = [];
    postfix = [];
    tp = -1;
    document.getElementById("pwd").value = arr;
}

function calculate(){
    for(var i=0;i<arr.length;i++){
        //for giving space between two opeator or operand
        if(arr.charAt(i) == '+' || arr.charAt(i) == '-' || arr.charAt(i) == 'x' || arr.charAt(i) == '/' || arr.charAt(i) == '(' || arr.charAt(i) == ')'){
            inf += " ";
            inf += arr.charAt(i);
            inf += " ";
        }
        else
            inf += arr.charAt(i);
    }
    console.log(inf);
    infix = String(inf).split(" "); //storing operand and operator value in infix array
    console.log(infix);
    var count=0;    //checking for '(' and ')' validation
    for(var i=0;i<infix.length;i++){
        if(infix[i] == "(")
            count++;
        else if(infix[i] == ")")
            count--;
        if(!isValid(infix[i])){     // checking if '.' is typed once for float type.
            document.getElementById("pwd").value = "ERROR";
            return false; 
        }
    }
    if(count != 0){
        document.getElementById("pwd").value = "ERROR 2";
        return false;
    }
    document.getElementById("inp_oup").innerHTML = "<b>Output</b>";
    infix_to_postfix();     //changing infix to postfix expression
    console.log(infix);
    console.log("postfix " + postfix);
    var value = eval_postfix();     //evaluating the value of postfix        
    document.getElementById("pwd").value = value;
    arr = value.toString();     //changin value to arr;
    inf = "";
    infix = [];
    postfix = [];
}

function isValid(a){
    //console.log("a " + a);
    if(a == "+" || a == "-" || a == "x" || a == "/" || a == "(" || a == ")" || a == "")
        return true;
    else{
        var A = String(a).split(".");
        //console.log("A " + A + " "  + A.length);
        if(A.length > 2){
            //console.log(A.length)
            return false;
        }
        return true;
    }
}

var stack = [];
function infix_to_postfix(){
    var i,p=0;
    var next;
    var symbol;
    for(i=0;i<infix.length;i++){
        symbol = infix[i];
        if(symbol != "" || symbol != "\t"){
            switch(symbol){
                case "(":
                    stack.push(symbol);
                    break;
                case ")":
                    while(stack.length >=1 && (next=stack.pop()) != "(")
                        postfix.push(next);
                    break;
                case "+":
                case "-":
                case "x":
                case "/":
                    while(stack != undefined && priority(peek()) >= priority(symbol))
                        postfix.push(stack.pop());
                    stack.push(symbol);
                    break;
                case "":
                    break;
                default:
                    postfix.push(symbol);
            }
        }
    }   
    while(stack.length >= 1){
        postfix.push(stack.pop());
    } 
}

function peek(){
    if(stack == undefined || stack.length == 0){
        return -9999955999999;
    }
    return stack[stack.length-1];

}
function priority(a){
    switch(a){
        case '(':
            return 0;
        case '+':
        case '-' :
            return 1;
        case 'x':
        case '/':
            return 2;
        default:
            return 0;
    }
}

function eval_postfix(){
    var a;
    var b;
    var temp;
    for(var i=0;i<postfix.length;i++){
        if(isNumerical(postfix[i])) 
            stack.push(postfix[i]);
        else{
            a = parseFloat(stack.pop());
            b = parseFloat(stack.pop());
            //condition needed to be added bugs find here e.x : -6*5;
            if(b == NaN){
                var def = postfix[i];
                def += a;
                return def;
            }
            switch(postfix[i]){
                case '+':
                    temp = b+a;
                    break;
                case '-':
                    temp = b-a;
                    break;
                case 'x':
                    temp = b*a;
                    break;
                case '/':
                    temp = b/a;
                    break;
                default:
                    temp = temp;               
            }
            stack.push(temp);
        }        
    }
    return stack.pop();
}

function isNumerical(a){
    if(a == '+' || a == '-' || a == 'x' || a == '/' || a == "")
        return false;
    return true;
}