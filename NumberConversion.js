function dec2bin(dec){
    return (dec >>> 0).toString(2);
}
// Number Conversion related function
function NumberConvert(){
    var input_1 = document.getElementById("input_1");
    var input_2 = document.getElementById("input_2");
    var num = document.getElementById("input_N").value;
    if(input_1.options[input_1.selectedIndex].value == 0 || input_2.options[input_2.selectedIndex].value == 0){
        alert("Please select the number form");
        return false;
    }
    else if(input_1.options[input_1.selectedIndex].value == 1){
        if(input_2.options[input_2.selectedIndex].value == 1){
            console.log("ans B to B = " + num);
            document.getElementById("output_box").style.visibility = "visible";
            for(var i=0;i<=num2.length;i++){
                if(num.charAt(i) != '0' || num.charAt(i) != '1'){
                    document.getElementById("output_N").innerHTML = "ERROR";        
                    return false;
                }
            }
            document.getElementById("output_N").innerHTML = num;
        }
        else if(input_2.options[input_2.selectedIndex].value == 2){
            var num2 = num.split(".")[0];
            var num3 = num.split(".")[1];
            var ans = 0.0;
            for(var i=num2.length-1;i>=0;i--){
                if(num2.charAt(i) == '1')
                    ans += Math.pow(2,num2.length-1-i);
                else if(num2.charAt(i) == '0')
                    continue;
                else{
                    document.getElementById("output_box").style.visibility = "visible";
                    document.getElementById("output_N").innerHTML = "ERROR";
                    return false;
                }
            }
            if(num3 != null){
                for(var i=0;i<=num3.length-1;i++){
                    if(num3.charAt(i) == '1'){
                        ans = ans +  parseFloat(Math.pow(2,-1*(i+1)));
                    }
                    else if(num3.charAt(i) == '0')
                        continue;
                    else{
                        document.getElementById("output_box").style.visibility = "visible";
                        document.getElementById("output_N").innerHTML = "ERROR";
                        return false;
                    }
                }
            }
            console.log(num + " ans B to D = " + ans);
            document.getElementById("output_box").style.visibility = "visible";
            document.getElementById("output_N").innerHTML = ans;
        }
        else if(input_2.options[input_2.selectedIndex].value == 3){
            var num2 = String(num).split(".")[0];
            var num3 = String(num).split(".")[1];
            console.log(num2 + " " + num3);
            var ans = "";
            var i=num2.length-1;
            while(i>=0){
                var k = 0;
                for(var j=i;j>=i-2 && j >=0 ;j--){
                    if(num2.charAt(j) == '1')
                        k += Math.pow(2,i-j);
                    else if(num2.charAt(j) == '0')
                        continue;
                    else{
                        document.getElementById("output_box").style.visibility = "visible";
                        document.getElementById("output_N").innerHTML = "ERROR";
                        return false;
                    }
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
                        else if(num3.charAt(j) == '0')
                            continue;
                        else{
                            document.getElementById("output_box").style.visibility = "visible";
                            document.getElementById("output_N").innerHTML = "ERROR";
                            return false;
                        }
                    }
                    ans += String(k);
                    i += 3;
                }
            }
            console.log(ans);
            console.log(num + " ans B to O = " + ans);
            document.getElementById("output_box").style.visibility = "visible";
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
                    else if(num2.charAt(j) == '0')
                        continue;
                    else{
                        console.log(num + " ans B to H ");
                        document.getElementById("output_box").style.visibility = "visible";
                        document.getElementById("output_N").innerHTML = "ERROR";
                        return false;
                    }
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
                        else if(num3.charAt(j) == '0')
                            continue;
                        else{
                            console.log(num + " ans B to H ");
                            document.getElementById("output_box").style.visibility = "visible";
                            document.getElementById("output_N").innerHTML = "ERROR";
                            return false;
                        }
                    }
                    console.log("k = " + arr[k]);
                    ans += String(arr[k]);
                    i += 4;
                }
            }
            console.log(num + " ans B to H = " + ans);
            document.getElementById("output_box").style.visibility = "visible";
            document.getElementById("output_N").innerHTML = ans;
        }
    }
    else if(input_1.options[input_1.selectedIndex].value == 2){
        try{
            if(input_2.options[input_2.selectedIndex].value == 1){
                var num2 = parseFloat(num);
                console.log(num2);
                if(isNaN(num2))
                    throw Error("Input Mismatch");
                var ans = "";
                ans = dec2bin(num);
                console.log(num + " ans B to H = " + ans);
                document.getElementById("output_box").style.visibility = "visible";
                document.getElementById("output_N").innerHTML = ans;
            }
            else if(input_2.options[input_2.selectedIndex].value == 2){
                var num2 = parseFloat(num);
                console.log(num2);
                if(isNaN(num2))
                    throw Error("Input Mismatch");
                document.getElementById("output_box").style.visibility = "visible";
                document.getElementById("output_N").innerHTML = num;
            }
            
            else if(input_2.options[input_2.selectedIndex].value == 3){

            }
            else if(input_2.options[input_2.selectedIndex].value == 4){

            }
        }catch{
            alert("Please give decimal input");
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


