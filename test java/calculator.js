function calculate(choice){
    console.log("Calculating ....");
let n1 = document.getElementById("f_value").value * 1;
let n2 = document.getElementById("s_value").value * 1;
let result;
switch(choice){
    case 1:
        result = n1 + n2;
        break;
        case 2:
        result = n1 - n2;
        break;
        case 3:
        result = n1 * n2;
        break;
        case 4:
        result = n1 / n2;
        break;
    }
    document.getElementById ("result").value = result;
}
