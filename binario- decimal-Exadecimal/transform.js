function transformBinario() {
    const inputbinary = document.querySelector(".transform__button");
    let codigob = inputbinary.value;
    if (codigob.length > 8 || codigob.length < 8) {
        alert ("Este no es un codigo binario valido");
    } else if (codigob.length == 8) {
        if (codigob[0] < 2 && codigob[1] < 2 && codigob[2] < 2 && codigob[3] < 2 && codigob[4] < 2 && codigob[5] < 2 && codigob[6] < 2 && codigob[7] < 2) {
            let num1 = codigob[0]
            let num2 = codigob[1]
            let num3 = codigob[2]
            let num4 = codigob[3]
            let num5 = codigob[4]
            let num6 = codigob[5]
            let num7 = codigob[6]
            let num8 = codigob[7]
            if (num8 == 1) {num8 = 1}else if (num1 == 0){num8 = 0}
            if (num7 == 1) {num7 = 2}else if (num7 == 0){num7 = 0}
            if (num6 == 1) {num6 = 4}else if (num6 == 0){num6 = 0}
            if (num5 == 1) {num5 = 8}else if (num5 == 0){num5 = 0}
            if (num4 == 1) {num4 = 16}else if (num4 == 0){num4 = 0}
            if (num3 == 1) {num3 = 32}else if (num3 == 0){num3 = 0}
            if (num2 == 1) {num2 = 64}else if (num2 == 0){num2 = 0}
            if (num1 == 1) {num1 = 128}else if (num1 == 0){num1 = 0}
            let resultado = parseInt(num1)+parseInt(num2)+parseInt(num3)+parseInt(num4)+parseInt(num5)+parseInt(num6)+parseInt(num7)+parseInt(num8)
            alert(resultado);
        } else{
            alert ("Este no es un codigo binario valido");
        }
    } else {
        
    }
}

function transformBinario2() {
    const inputbinary = document.querySelector(".transform__button");
    let codigob = inputbinary.value;
    if (codigob.length > 8 || codigob.length < 8) {
        alert ("Este no es un codigo binario valido");
    } else if (codigob.length == 8) {
        if (codigob[0] < 2 && codigob[1] < 2 && codigob[2] < 2 && codigob[3] < 2 && codigob[4] < 2 && codigob[5] < 2 && codigob[6] < 2 && codigob[7] < 2) {
            let num1 = codigob[0]
            let num2 = codigob[1]
            let num3 = codigob[2]
            let num4 = codigob[3]
            let num5 = codigob[4]
            let num6 = codigob[5]
            let num7 = codigob[6]
            let num8 = codigob[7]
            if (num8 == 1) {num8 = 1}else if (num1 == 0){num8 = 0}
            if (num7 == 1) {num7 = 2}else if (num7 == 0){num7 = 0}
            if (num6 == 1) {num6 = 4}else if (num6 == 0){num6 = 0}
            if (num5 == 1) {num5 = 8}else if (num5 == 0){num5 = 0}
            if (num4 == 1) {num4 = 1}else if (num4 == 0){num4 = 0}
            if (num3 == 1) {num3 = 2}else if (num3 == 0){num3 = 0}
            if (num2 == 1) {num2 = 4}else if (num2 == 0){num2 = 0}
            if (num1 == 1) {num1 = 8}else if (num1 == 0){num1 = 0}
            let resultado1 = parseInt(num1)+parseInt(num2)+parseInt(num3)+parseInt(num4)
            let resultado2 = parseInt(num5)+parseInt(num6)+parseInt(num7)+parseInt(num8)
            if (resultado1 == 10) {resultado1 = "A"
            }else if (resultado1 == 11) {resultado1 = "B"}
            else if (resultado1 == 12) {resultado1 = "C"}
            else if (resultado1 == 13) {resultado1 = "D"}
            else if (resultado1 == 14) {resultado1 = "E"}
            else if (resultado1 == 15) {resultado1 = "F"}
            if (resultado2 == 10) {resultado2 = "A"
            }else if (resultado2 == 11) {resultado2 = "B"}
            else if (resultado2 == 12) {resultado2 = "C"}
            else if (resultado2 == 13) {resultado2 = "D"}
            else if (resultado2 == 14) {resultado2 = "E"}
            else if (resultado2 == 15) {resultado2 = "F"}
            resultadoFinal = "" + resultado1 + resultado2
            alert(resultadoFinal);
        } else{
            alert ("Este no es un codigo binario valido");
        }
    } else {
        
    }
}

function transformDecimal(){
    const inputbinary = document.querySelector(".transform__button");
    let codigob = inputbinary.value;
    if (codigob <= 255 && codigob >= 0) {
        r1 = codigob/2
        r1r1 = Math.trunc(codigob%2)
        r2 = r1/2
        r2r2 = Math.trunc(r1%2)
        r3 = r2/2
        r3r3 = Math.trunc(r2%2)
        r4 = r3/2
        r4r4 = Math.trunc(r3%2)
        r5 = r4/2
        r5r5 = Math.trunc(r4%2)
        r6 = r5/2
        r6r6 = Math.trunc(r5%2)
        r7 = r6/2
        r7r7 = Math.trunc(r6%2)
        r8 = r7/2
        r8r8 = Math.trunc(r7%2)
        let finaleRes = "" + r8r8 + r7r7 + r6r6 + r5r5 + r4r4 + r3r3 + r2r2 + r1r1
        alert(finaleRes);
    } else {
        alert("Este no es un codigo decimal valido");
    }
}

function transformDecima2(){
    const inputbinary = document.querySelector(".transform__button");
    let codigob = inputbinary.value;
    if (codigob <= 255 && codigob >= 0) {
        r1 = codigob/2
        r1r1 = Math.trunc(codigob%2)
        r2 = r1/2
        r2r2 = Math.trunc(r1%2)
        r3 = r2/2
        r3r3 = Math.trunc(r2%2)
        r4 = r3/2
        r4r4 = Math.trunc(r3%2)
        r5 = r4/2
        r5r5 = Math.trunc(r4%2)
        r6 = r5/2
        r6r6 = Math.trunc(r5%2)
        r7 = r6/2
        r7r7 = Math.trunc(r6%2)
        r8 = r7/2
        r8r8 = Math.trunc(r7%2)
        let num1 = r8r8
        let num2 = r7r7
        let num3 = r6r6
        let num4 = r5r5
        let num5 = r4r4
        let num6 = r3r3
        let num7 = r2r2
        let num8 = r1r1
        if (num8 == 1) {num8 = 1}else if (num1 == 0){num8 = 0}
        if (num7 == 1) {num7 = 2}else if (num7 == 0){num7 = 0}
        if (num6 == 1) {num6 = 4}else if (num6 == 0){num6 = 0}
        if (num5 == 1) {num5 = 8}else if (num5 == 0){num5 = 0}
        if (num4 == 1) {num4 = 1}else if (num4 == 0){num4 = 0}
        if (num3 == 1) {num3 = 2}else if (num3 == 0){num3 = 0}
        if (num2 == 1) {num2 = 4}else if (num2 == 0){num2 = 0}
        if (num1 == 1) {num1 = 8}else if (num1 == 0){num1 = 0}
        let resultado1 = parseInt(num1)+parseInt(num2)+parseInt(num3)+parseInt(num4)
            let resultado2 = parseInt(num5)+parseInt(num6)+parseInt(num7)+parseInt(num8)
            if (resultado1 == 10) {resultado1 = "A"
            }else if (resultado1 == 11) {resultado1 = "B"}
            else if (resultado1 == 12) {resultado1 = "C"}
            else if (resultado1 == 13) {resultado1 = "D"}
            else if (resultado1 == 14) {resultado1 = "E"}
            else if (resultado1 == 15) {resultado1 = "F"}
            if (resultado2 == 10) {resultado2 = "A"
            }else if (resultado2 == 11) {resultado2 = "B"}
            else if (resultado2 == 12) {resultado2 = "C"}
            else if (resultado2 == 13) {resultado2 = "D"}
            else if (resultado2 == 14) {resultado2 = "E"}
            else if (resultado2 == 15) {resultado2 = "F"}
            resultadoFinal = "" + resultado1 + resultado2
            alert(resultadoFinal);
    } else {
        alert("Este no es un codigo decimal valido");
    }
}

function transformHexadecimal(){
    const inputbinary = document.querySelector(".transform__button");
    let codigob = inputbinary.value;
    if (codigob.length <= 2) {
        if (codigob[0] == 0){num0 = "0000"}
    else if (codigob[0] == 1){num0 = "0001"}
    else if (codigob[0] == 2){num0 = "0010"}
    else if (codigob[0] == 3){num0 = "0011"}
    else if (codigob[0] == 4){num0 = "0100"}
    else if (codigob[0] == 5){num0 = "0101"}
    else if (codigob[0] == 6){num0 = "0110"}
    else if (codigob[0] == 7){num0 = "0111"}
    else if (codigob[0] == 8){num0 = "1000"}
    else if (codigob[0] == 9){num0 = "1001"}
    else if (codigob[0] == "A" || codigob[0] == "a"){num0 = "1010"}
    else if (codigob[0] == "B" || codigob[0] == "b"){num0 = "1011"}
    else if (codigob[0] == "C" || codigob[0] == "c"){num0 = "1100"}
    else if (codigob[0] == "D" || codigob[0] == "d"){num0 = "1101"}
    else if (codigob[0] == "E" || codigob[0] == "e"){num0 = "1110"}
    else if (codigob[0] == "F" || codigob[0] == "f"){num0 = "1111"}

    if (codigob[1] == 0){num10 = "0000"}
    else if (codigob[1] == 1){num10 = "0001"}
    else if (codigob[1] == 2){num10 = "0010"}
    else if (codigob[1] == 3){num10 = "0011"}
    else if (codigob[1] == 4){num10 = "0100"}
    else if (codigob[1] == 5){num10 = "0101"}
    else if (codigob[1] == 6){num10 = "0110"}
    else if (codigob[1] == 7){num10 = "0111"}
    else if (codigob[1] == 8){num10 = "1000"}
    else if (codigob[1] == 9){num10 = "1001"}
    else if (codigob[1] == "A" || codigob[1] == "a"){num10 = "1010"}
    else if (codigob[1] == "B" || codigob[1] == "b"){num10 = "1011"}
    else if (codigob[1] == "C" || codigob[1] == "c"){num10 = "1100"}
    else if (codigob[1] == "D" || codigob[1] == "d"){num10 = "1101"}
    else if (codigob[1] == "E" || codigob[1] == "e"){num10 = "1110"}
    else if (codigob[1] == "F" || codigob[1] == "f"){num10 = "1111"}
    let resultado = "" + num0 + num10
    alert(resultado);
    }else{
        alert("Este no es un codigo hexadecimal valido");
    }
}

function transformHexadecimal2(){
    const inputbinary = document.querySelector(".transform__button");
    let codigob = inputbinary.value;
    if (codigob.length <= 2) {
        if (codigob[0] == 0){num0 = "0000"}
        else if (codigob[0] == 1){num0 = "0001"}
        else if (codigob[0] == 2){num0 = "0010"}
        else if (codigob[0] == 3){num0 = "0011"}
        else if (codigob[0] == 4){num0 = "0100"}
        else if (codigob[0] == 5){num0 = "0101"}
        else if (codigob[0] == 6){num0 = "0110"}
        else if (codigob[0] == 7){num0 = "0111"}
        else if (codigob[0] == 8){num0 = "1000"}
        else if (codigob[0] == 9){num0 = "1001"}
        else if (codigob[0] == "A" || codigob[0] == "a"){num0 = "1010"}
        else if (codigob[0] == "B" || codigob[0] == "b"){num0 = "1011"}
        else if (codigob[0] == "C" || codigob[0] == "c"){num0 = "1100"}
        else if (codigob[0] == "D" || codigob[0] == "d"){num0 = "1101"}
        else if (codigob[0] == "E" || codigob[0] == "e"){num0 = "1110"}
        else if (codigob[0] == "F" || codigob[0] == "f"){num0 = "1111"}

        if (codigob[1] == 0){num10 = "0000"}
        else if (codigob[1] == 1){num10 = "0001"}
        else if (codigob[1] == 2){num10 = "0010"}
        else if (codigob[1] == 3){num10 = "0011"}
        else if (codigob[1] == 4){num10 = "0100"}
        else if (codigob[1] == 5){num10 = "0101"}
        else if (codigob[1] == 6){num10 = "0110"}
        else if (codigob[1] == 7){num10 = "0111"}
        else if (codigob[1] == 8){num10 = "1000"}
        else if (codigob[1] == 9){num10 = "1001"}
        else if (codigob[1] == "A" || codigob[1] == "a"){num10 = "1010"}
        else if (codigob[1] == "B" || codigob[1] == "b"){num10 = "1011"}
        else if (codigob[1] == "C" || codigob[1] == "c"){num10 = "1100"}
        else if (codigob[1] == "D" || codigob[1] == "d"){num10 = "1101"}
        else if (codigob[1] == "E" || codigob[1] == "e"){num10 = "1110"}
        else if (codigob[1] == "F" || codigob[1] == "f"){num10 = "1111"}
    let resultado = "" + num0 + num10

    let num1 = resultado[0]
    let num2 = resultado[1]
    let num3 = resultado[2]
    let num4 = resultado[3]
    let num5 = resultado[4]
    let num6 = resultado[5]
    let num7 = resultado[6]
    let num8 = resultado[7]
    if (num8 == 1) {num8 = 1}else if (num1 == 0){num8 = 0}
    if (num7 == 1) {num7 = 2}else if (num7 == 0){num7 = 0}
    if (num6 == 1) {num6 = 4}else if (num6 == 0){num6 = 0}
    if (num5 == 1) {num5 = 8}else if (num5 == 0){num5 = 0}
    if (num4 == 1) {num4 = 16}else if (num4 == 0){num4 = 0}
    if (num3 == 1) {num3 = 32}else if (num3 == 0){num3 = 0}
    if (num2 == 1) {num2 = 64}else if (num2 == 0){num2 = 0}
    if (num1 == 1) {num1 = 128}else if (num1 == 0){num1 = 0}
    let resultadof = parseInt(num1)+parseInt(num2)+parseInt(num3)+parseInt(num4)+parseInt(num5)+parseInt(num6)+parseInt(num7)+parseInt(num8)
    alert(resultadof);
    }else{
        alert("Este no es un codigo hexadecimal valido");
    }
}