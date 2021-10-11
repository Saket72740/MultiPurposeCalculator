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

    else if(input_1.options[input_1.selectedIndex].value == 3){
        var count=0;
        document.getElementById("output_box").style.visibility = "visible";
        console.log(num.length);
        for(i=0;i<num.length;i++){
            if((num.charAt(i) < '0' || num.charAt(i) >'7') && (num.charAt(i) != '.' || count>=1)){
                document.getElementById("output_N").innerHTML = "ERROR";
                console.log(num + " " + num.charAt(i) + " " + i);        
                return false;
            }
            if(num.charAt(i) == '.')
                count += 1;
        }
        console.log(count);
        var num2 = num.split(".")[0];
        var num3 = num.split(".")[1];
        console.log(num2.length + " " + num2 + " ");
        var ans = 0.0;
        for(i=num2.length-1;i>=0;i--){
            ans += parseInt(num2.charAt(i))*Math.pow(8,num2.length-1-i);
        }
        if(num3 != null){
            for(i=0;i<=num3.length-1;i++){
                ans+=  parseFloat(num3.charAt(i))*parseFloat(Math.pow(8,-1*(i+1)));
            }
        }
        if(input_2.options[input_2.selectedIndex].value == 1){
            // var ans = "";
            // var arr = ["000","001","010","011","100","101","110","111"];
            // for(var i=0;i<num.length;i++){
            //     if(num.charAt(i) == ".")
            //         ans += ".";
            //     else 
            //         ans += arr[parseInt(num.charAt(i))];
            // }
            var bin = ans.toString(2);
            console.log(num + " ans O to B = " + ans);
            document.getElementById("output_N").innerHTML = bin;

        }
        else if(input_2.options[input_2.selectedIndex].value == 2){
            console.log(num + " ans O to D = " + ans);
            document.getElementById("output_N").innerHTML = ans;
        }
        else if(input_2.options[input_2.selectedIndex].value == 3){
            document.getElementById("output_N").innerHTML = num;
        }
        else if(input_2.options[input_2.selectedIndex].value == 4){
            var hex = ans.toString(16).toUpperCase();
            document.getElementById("output_N").innerHTML = hex;
        }
    }

    else{
        var count=0;
        document.getElementById("output_box").style.visibility = "visible";
        console.log(num.length + " Kumar");
        for(i=0;i<num.length;i++){
            if((num.charAt(i) < '0' || num.charAt(i) >'9') && (num.charAt(i) <'A' || num.charAt(i) >'F') && (num.charAt(i) < 'a' || num.charAt(i) >'f') && (num.charAt(i) != '.' || count>=1)){
                document.getElementById("output_N").innerHTML = "ERROR";
                console.log(num + " " + num.charAt(i) + " " + i);        
                return false;
            }
            if(num.charAt(i) == '.')
                count += 1;
        }
        num = String(num).toUpperCase();
        console.log(count + " " + num);
        var num2 = num.split(".")[0];
        var num3 = num.split(".")[1];
        console.log(num2.length + " " + num2 + " ");
        var ans = 0.0;
        for(i=num2.length-1;i>=0;i--){
            if(num2.charAt(i)>='0' && num2.charAt(i) <='9')
                ans += parseInt(num2.charAt(i))*Math.pow(16,num2.length-1-i);
            else{
                var a = num2.charAt(i)-'A';
                ans +=  (10+a)*Math.pow(16,num2.length-1-i);
            }
        }
        console.log("ans " + ans);
        if(num3 != null){
            for(i=0;i<=num3.length-1;i++){
                if(num3.charAt(i)>='0' && num3.charAt(i) <='9')
                    ans+=  parseFloat(num3.charAt(i))*parseFloat(Math.pow(16,-1*(i+1)));
                else{
                    var a = 0;
                    switch(num3.charAt(i)){
                        case 'A' || 'a':
                            a = 10;
                            break;
                        case 'B' || 'b':
                            a = 11;
                            break;
                        case 'C' || 'c':
                            a = 12;
                            break;
                        case 'D' || 'd':
                            a = 13;
                            break;
                        case 'E' || 'e':
                            a = 14;
                            break;
                        case 'F' || 'f':
                            a = 15;
                            break;
                        default:
                            a=999;
                    }
                    console.log(a);
                    ans +=  parseFloat(a)*parseFloat(Math.pow(16,-1*(i+1)));
                }
            }
        }
        console.log(ans);
        if(input_2.options[input_2.selectedIndex].value == 1){
            var bin = ans.toString(2);
            document.getElementById("output_N").innerHTML = bin;
        }
        else if(input_2.options[input_2.selectedIndex].value == 2){
            document.getElementById("output_N").innerHTML = ans;
        }
        else if(input_2.options[input_2.selectedIndex].value == 3){
            var oct = ans.toString(8);
            document.getElementById("output_N").innerHTML = oct;
        }
        else if(input_2.options[input_2.selectedIndex].value == 4){
            document.getElementById("output_N").innerHTML = num;
        }
    }
}


