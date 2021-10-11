// Number Conversion related function
function NumberConvert(){
    var input_1 = document.getElementById("input_1");
    var input_2 = document.getElementById("input_2");
    var i=0;
    if(input_1.options[input_1.selectedIndex].value == 0 || input_2.options[input_2.selectedIndex].value == 0){
        alert("Please select the number form");
        return false;
    }
    var num = "";
    num = document.getElementById("input_N").value;
    console.log("num = " + num);
    if(num == ""){
        alert("Please provide input");
        return false;       
    }
    //binary to different number form
    else if(input_1.options[input_1.selectedIndex].value == 1){
        var count=0;
        document.getElementById("output_box").style.visibility = "visible";
        for(i=0;i<num.length;i++){
            if(num.charAt(i) != '0' && num.charAt(i) != '1' && (num.charAt(i) != '.' || count>=1)){
                document.getElementById("output_N").innerHTML = "ERROR";
                console.log(num + " " + num.charAt(i) + " " + i);        
                return false;
            }
            if(num.charAt(i) == '.')
                count += 1;
        }
        if(input_2.options[input_2.selectedIndex].value == 1){
            console.log("ans B to B = " + num);
            document.getElementById("output_N").innerHTML = num;
        }
        else if(input_2.options[input_2.selectedIndex].value == 2){
            var num2 = num.split(".")[0];
            var num3 = num.split(".")[1];
            var ans = 0.0;
            for(i=num2.length-1;i>=0;i--){
                if(num2.charAt(i) == '1')
                    ans += Math.pow(2,num2.length-1-i);
                else
                    continue;
            }
            if(num3 != null){
                for(i=0;i<=num3.length-1;i++){
                    if(num3.charAt(i) == '1'){
                        ans = ans +  parseFloat(Math.pow(2,-1*(i+1)));
                    }
                    else
                        continue;
                }
            }
            console.log(num + " ans B to D = " + ans);
            document.getElementById("output_N").innerHTML = ans;
        }
        else if(input_2.options[input_2.selectedIndex].value == 3){
            var num2 = String(num).split(".")[0];
            var num3 = String(num).split(".")[1];
            console.log(num2 + " " + num3);
            var ans = "";
            i=num2.length-1;
            while(i>=0){
                var k = 0;
                for(var j=i;j>=i-2 && j >=0 ;j--){
                    if(num2.charAt(j) == '1')
                        k += Math.pow(2,i-j);
                    else
                        continue;
                }
                ans += String(k);
                i -= 3;
            }
            ans = String(ans).split("").reverse().join("");
            if(num3 != null){
                ans += ".";
                var n = num3.length;
                if(n%3 != 0){
                    var j=3-n%3;
                    while(j-- > 0)
                        num3 += "0";
                }
                console.log(num3 + " " + num3.length);
                i = 0;
                while(i<num3.length){
                    var k = 0;
                    for(var j=i+2; j>=i && j<=num3.length-1;j--){
                        if(num3.charAt(j) == '1'){
                            k += Math.pow(2,i+2-j);
                            console.log(k);
                        }
                        else
                            continue;
                    }
                    ans += String(k);
                    i += 3;
                }
            }
            console.log(ans);
            console.log(num + " ans B to O = " + ans);
            document.getElementById("output_N").innerHTML = ans;
        }
        else if(input_2.options[input_2.selectedIndex].value == 4){
            var num2 = String(num).split(".")[0];
            var num3 = String(num).split(".")[1];
            var ans = "";
            var arr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
            var i=num2.length-1;
            while(i>=0){
                var k = 0;
                for(var j=i;j>=i-3 && j >=0 ;j--){
                    if(num2.charAt(j) == '1')
                        k += Math.pow(2,i-j);
                    else
                        continue;
                }
                console.log("k = " + arr[k]);
                ans += String(arr[k]);
                i -= 4;
            }
            ans = String(ans).split("").reverse().join("");
            if(num3 != null){
                ans += ".";
                var n = num3.length;
                if(n%4 != 0){
                    var j = 4 - (n%4);
                    while(j-- >0){
                        num3 += "0";
                    }
                }
                console.log(num3);
                i=0;
                while(i<num3.length){
                    var k = 0;
                    for(var j=i+3;j>=i && j <num3.length ;j--){
                        if(num3.charAt(j) == '1')
                            k += Math.pow(2,i+3-j);
                        else
                            continue;
                    }
                    console.log("k = " + arr[k]);
                    ans += String(arr[k]);
                    i += 4;
                }
            }
            console.log(num + " ans B to H = " + ans);
            document.getElementById("output_N").innerHTML = ans;
        }
    }
    //decimal to different number form
    else if(input_1.options[input_1.selectedIndex].value == 2){
        var count=0;
        document.getElementById("output_box").style.visibility = "visible";
        console.log(num.length);
        for(i=0;i<num.length;i++){
            if((num.charAt(i) < '0' || num.charAt(i) >'9') && (num.charAt(i) != '.' || count>=1)){
                document.getElementById("output_N").innerHTML = "ERROR";
                console.log(num + " " + num.charAt(i) + " " + i);        
                return false;
            }
            if(num.charAt(i) == '.')
                count += 1;
        }
        console.log(count);
        var num2 = parseFloat(num);
        console.log(num2);
        if(input_2.options[input_2.selectedIndex].value == 1){
            var ans = num2.toString(2);
            console.log(num + " ans B to H = " + ans);
            document.getElementById("output_N").innerHTML = ans;
        }
        else if(input_2.options[input_2.selectedIndex].value == 2){
            document.getElementById("output_N").innerHTML = num2;
        }
        
        else if(input_2.options[input_2.selectedIndex].value == 3){
            var octal = num2.toString(8);
            document.getElementById("output_N").innerHTML = octal;
        }
        else if(input_2.options[input_2.selectedIndex].value == 4){
            var hexadecimal = num2.toString(16);
            document.getElementById("output_N").innerHTML = String(hexadecimal).toUpperCase();
        }
    }
    else if(input_1.options[input_1.selectedIndex] == 3){
        if(input_2.options[input_2.selectedIndex].value == 1){

        }
        else if(input_2.options[input_2.selectedIndex].value == 2){

        }
        else if(input_2.options[input_2.selectedIndex].value == 3){
            document.getElementById("output_N").innerHTML = num;
        }
        else if(input_2.options[input_2.selectedIndex].value == 4){

        }
    }
    else if(input_1.options[input_1.selectedIndex] == 4){
        if(input_2.options[input_2.selectedIndex].value == 1){

        }
        else if(input_2.options[input_2.selectedIndex].value == 2){

        }
        else if(input_2.options[input_2.selectedIndex].value == 3){

        }
        else if(input_2.options[input_2.selectedIndex].value == 4){
            document.getElementById("output_N").innerHTML = num;
        }
    }
}


