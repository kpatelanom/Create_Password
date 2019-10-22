
let resultEl = document.getElementById('result');
let clickBoardEl = document.getElementById('Clickboard');
let password_lengthEl = document.getElementById('password_length');
let lowercaseEl = document.getElementById('lowercase');
let uppercaseEl = document.getElementById('uppercase');
let numberEl = document.getElementById('number')
let symbolEl = document.getElementById('symbol');
let generate = document.getElementById('generate');



clickBoardEl.addEventListener('click',()=>{
    if(resultEl.value==''){
        return;
    }
    const el = document.createElement('textarea');
    el.value = resultEl.value;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('password copied!!');
})


generate.addEventListener('click',()=>{
    console.log(password_lengthEl)
    let length = password_lengthEl.value;
    let lower = lowercaseEl.checked;
    let upper = uppercaseEl.checked;
    let symbol = symbolEl.checked;
    let number = numberEl.checked;

    console.log(length, lower, upper, symbol,number)
    let ar = [{lower},{upper},{number},{symbol}];
    let filterAr = ar.filter(a=>Object.values(a)[0])
    resultEl.value = generatePassword(length, filterAr);
})

function generatePassword(length,ar){
    let generatedPassword = '';
    if(ar.length===0){
        return generatedPassword;
    }
    for(let i=0; i<length; i++){
        ar.forEach(a => {
            const name = Object.keys(a)[0];
          generatedPassword += obj[name]();             
        });
    }

    return generatedPassword.slice(0,length);
}

const obj={
    lower:getLowerCase,
    upper:getUpperCase,
    number:getNumber,
    symbol:getSymbol
}

function getLowerCase(){
    return (String.fromCharCode(Math.floor(Math.random() * 26)+97))
}

function getUpperCase(){
    return (String.fromCharCode(Math.floor(Math.random() * 26)+65))
}

function getNumber(){
    return (String.fromCharCode(Math.floor(Math.random() * 10)+48))
}

function getSymbol(){
    const symbol = '!@#$%^&*(){}][`~?/'
    return symbol[Math.floor(Math.random() * symbol.length)]
}