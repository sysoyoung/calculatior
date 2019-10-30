isAns = true;

function firstAns(){
    if(isAns){
        showAns('Ans = 0');
        isAns = false;
    }
}

function isSign(from_id){
    let signs = ['+','-','×','÷','%'];
    let is = false;
    signs.forEach(element => {
        if(from_id == element){
            is = true;
        }
    });
    return is;
}

function AnsEqualResult(from_id = '0'){
    let answer = document.getElementById("ans").innerHTML;

    let from_result = document.getElementById("result").innerHTML;

    if(answer.indexOf('Ans') == -1 && from_result != ''){
        showAns('Ans = ' + from_result);
        if(!isSign(from_id)){
            document.getElementById("result").innerHTML = '';
        }
    }
}

function ACCE(){
    let answer = document.getElementById("ans").innerHTML;
    if(answer.indexOf('Ans') == -1){
        document.getElementById("CE").innerHTML = 'AC';
    }else{
        document.getElementById("CE").innerHTML = 'CE';
    }
}

function addChar(from_id){
    let from_result = document.getElementById("result").innerHTML;

    firstAns();
    AnsEqualResult(from_id);
    ACCE();

    let from_length = from_result.length;
    if(from_length > 32){faile;}

    if(from_result === "0"){
        document.getElementById("result").innerHTML = "";
    }
    document.getElementById("result").innerHTML += from_id;

    let count = document.getElementById("result").innerHTML;
    count = count.length;

    let numberLength = (731 + 22) - (count * 22);
    document.getElementById("result").setAttribute("style", "margin-left:" + numberLength + "px");
}

function isLastCharRightB(){
    let from_result = document.getElementById("result").innerHTML;
    if(from_result[from_result.length - 1] == ')'){
        foo_multi();
    }
}

function foo0(){
    let from_id = document.getElementById("numb0").innerHTML;
    isLastCharRightB();
    addChar(from_id);
}

function foo1(){
    let from_id = document.getElementById("numb1").innerHTML;
    isLastCharRightB();
    addChar(from_id);
}

function foo2(){
    let from_id = document.getElementById("numb2").innerHTML;
    isLastCharRightB();
    addChar(from_id);
}

function foo3(){
    let from_id = document.getElementById("numb3").innerHTML;
    isLastCharRightB();
    addChar(from_id);
}

function foo4(){
    let from_id = document.getElementById("numb4").innerHTML;
    isLastCharRightB();
    addChar(from_id);
}

function foo5(){
    let from_id = document.getElementById("numb5").innerHTML;
    isLastCharRightB();
    addChar(from_id);
}

function foo6(){
    let from_id = document.getElementById("numb6").innerHTML;
    isLastCharRightB();
    addChar(from_id);
}

function foo7(){
    let from_id = document.getElementById("numb7").innerHTML;
    isLastCharRightB();
    addChar(from_id);
}

function foo8(){
    let from_id = document.getElementById("numb8").innerHTML;
    isLastCharRightB();
    addChar(from_id);    
}

function foo9(){
    let from_id = document.getElementById("numb9").innerHTML;
    isLastCharRightB();
    addChar(from_id);    
}

function signEqual(from_id){
    let from_result = document.getElementById("result").innerHTML;
    if(from_result[from_result.length - 1] == from_id){
        faile;
    }
}

function signReplace(from_id){
    let from_result = document.getElementById("result").innerHTML;
    let last = from_result[from_result.length - 1];
    let signs = ['+','-','×','÷'];
    signs.forEach(element => {
        if(last == element && last != from_id){
            from_result = from_result.slice(0, from_result.length - 1);
            document.getElementById("result").innerHTML = from_result + from_id;
            faile;
        }
    });
}

function addMinus(){
    let from_result = document.getElementById("result").innerHTML;
    let last = from_result[from_result.length - 1];
    if(last != '+'){
        return true;
    }else{
        return false;
    }
}

function ifMinusStop(){
    let from_result = document.getElementById("result").innerHTML;
    let prelast =  from_result[from_result.length - 2];
    if(from_result[from_result.length - 1] == '-' && (prelast == '×' || prelast ==  '÷')){
        faile;
    }
}

function isZero(from_id){
    let from_result = document.getElementById("result").innerHTML;
    if(from_result == "0"){
        return from_id = '0' + from_id;
    }
    return from_id;
}

function foo_plus(){
    let from_id = '+';
    ifMinusStop();
    signEqual(from_id);
    signReplace(from_id);
    from_id = isZero(from_id);
    addChar(from_id);
}

function foo_minus(){
    let from_id = '-';
    signEqual(from_id);
    if(addMinus()){
        from_id = isZero(from_id);
        addChar(from_id);
    }else{
        signReplace(from_id);
    }
}

function foo_multi(){
    let from_id = '×';
    ifMinusStop();
    signEqual(from_id);
    signReplace(from_id);
    from_id = isZero(from_id);
    addChar(from_id);
}

function foo_division(){
    let from_id = '÷';
    ifMinusStop();
    signEqual(from_id);
    signReplace(from_id);
    from_id = isZero(from_id);
    addChar(from_id);
}

function foo_percent(){
    let from_id = '%';
    ifMinusStop();
    signReplace(from_id);
    from_id = isZero(from_id);
    addChar(from_id);
}

function leftNoSignForDot(){
    let signs = ['+','-','×','÷'];
    let from_result = document.getElementById("result").innerHTML;

    for(let i = from_result.length - 1; i >= 0; i--){
        for(let j = 0; j < signs.length; j++){
            if(from_result[i] == signs[j]){
                return true;
            }
        }
        if(from_result[i] == '.'){
            return false;
        }
    }
    return true;
}

function isLastPercent(){
    let from_result = document.getElementById("result").innerHTML;

    if(from_result[from_result.length - 1] == '%'){
        return true;
    }
    return false;
}

function foo_dot(){
    let from_id = '.';
    signEqual(from_id);
    if(isLastPercent()){
        foo_multi();
    }
    if(leftNoSignForDot()){
        addChar(from_id);
    }
}

function ifLeftNoSign(){
    let from_result = document.getElementById("result").innerHTML;
    let signs = ['+','-','×','÷','('];
    let last = from_result[from_result.length - 1];
    let isSign = false;

    signs.forEach(element => {
        if(last == element){
            isSign = true;
        }
    });

    if(from_result.length == 1 && from_result == '0'){
        isSign = true;
    }
        
    return isSign;
}
 
function foo_leftB(){
    let from_id = '(';
   
    if(!ifLeftNoSign()){
        foo_multi();
    }
    addChar(from_id);
}

function isLeftB(){
    let from_result = document.getElementById("result").innerHTML;
    let leftCounter = 0;
    let rightCounter = 0;
    let pos = -1;
    while ((pos = from_result.indexOf('(', pos + 1)) != -1) {
        leftCounter++;
    }
    pos = -1;
    while ((pos = from_result.indexOf(')', pos + 1)) != -1) {
        rightCounter++;
    }
    if(leftCounter > rightCounter){
        return true;
    }else{
        return false;
    }
}

function foo_rightB(){
    let from_id = ')';
    if(isLeftB() && !ifLeftNoSign()){
        addChar(from_id);
    }
}

function foo_CE(){
    let from_result = document.getElementById("result").innerHTML;
    let answer = document.getElementById("ans").innerHTML;

    AnsEqualResult();
    ACCE();

    document.getElementById("result").innerHTML = from_result.slice(0, from_result.length - 1);

    if(from_result == 'Infinity' || answer.indexOf('Ans') == -1){
        document.getElementById("result").innerHTML = '0';
    }

    let count = document.getElementById("result").innerHTML;
    count = count.length;
    if(count == 0){
        document.getElementById("result").innerHTML = '0';
        count++;
    }
    let numberLength = (731 + 22) - (count * 22);
    document.getElementById("result").setAttribute("style", "margin-left:" + numberLength + "px");
}

function closeBrackets(){
    let from_result = document.getElementById("result").innerHTML;
    let leftCounter = 0;
    let rightCounter = 0;
    let pos = -1;
    while ((pos = from_result.indexOf('(', pos + 1)) != -1) {
        leftCounter++;
    }
    pos = -1;
    while ((pos = from_result.indexOf(')', pos + 1)) != -1) {
        rightCounter++;
    }
    
    for(let i = leftCounter - rightCounter; i > 0; i--){
        foo_rightB();
    }
}

function foo_equal(){
    closeBrackets();
    let from_result = document.getElementById("result").innerHTML;
    let resultClone = from_result + ' = ';
    from_result = from_result.replace(/×/g,'*');
    from_result = from_result.replace(/÷/g,'/');
    from_result = from_result.replace(/%/g,'/100');

    let answer = document.getElementById("ans").innerHTML;
    answer = answer.replace(/×/g,'*');
    answer = answer.replace(/÷/g,'/');
    answer = answer.replace(/Ans/g,'');
    answer = answer.replace(/=/g,'');
    answer = answer.replace(/%/g,'/100');

    document.getElementById("result").innerHTML = eval(from_result);
 
    if(answer != '' && eval(answer) != from_result){
        showAns(resultClone);
    }
    
    ACCE();

    let equal = document.getElementById("result").innerHTML;
    count = equal.length;

    let numberLength = (731 + 22) - (count * 22);
    document.getElementById("result").setAttribute("style", "margin-left:" + numberLength + "px");
}

function showAns(ans){
    document.getElementById("ans").innerHTML = ans;

    let count = document.getElementById("ans").innerHTML;
    count = count.length;

    let numberLength = (731 + 11) - (count * 11);
    document.getElementById("ans").setAttribute("style", "margin-left:" + numberLength + "px");
}