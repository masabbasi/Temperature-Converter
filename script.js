let $ = document;
let headerItem = $.querySelector('.header');
let inputItem = $.querySelector('.enter');
let resultItem = $.querySelector('.result');
let convertItem = $.querySelector('.convert');
let resetItem = $.querySelector('.reset');
let changeItem = $.querySelector('.change');
let isC = true;

function reset (){
    inputItem.value='';
    resultItem.innerHTML='';
}

function change (){
    if (isC) {
        inputItem.setAttribute('placeholder','°F')
        $.title='Temperature Converter - Convert °F To °C'
        headerItem.innerHTML="Convert °F To °C"
        isC = false;
    } else {
        inputItem.setAttribute('placeholder','°C')
        $.title='Temperature Converter - Convert °C To °F'
        headerItem.innerHTML="Convert °C To °F"
        isC = true;
    }
}

function convert (){
    placeholderValue=inputItem.getAttribute('placeholder')
    if (inputItem.value==='' || isNaN(inputItem.value)) {
        resultItem.innerHTML="Enter the correct value."
        resultItem.style.color="red"
    } else {
        if (placeholderValue==='°C') {
            let resultC = ((inputItem.value*9)/5)+32;
            resultItem.innerHTML=resultC.toFixed(2) +' °F'
            resultItem.style.color="green"
        } else{
            let resultF =((inputItem.value-32)*5)/9
            resultItem.innerHTML=resultF.toFixed(2)+' °C'
            resultItem.style.color="green"
        }
    }
}

convertItem.addEventListener('click', convert)
resetItem.addEventListener('click', reset)
changeItem.addEventListener('click', change)
