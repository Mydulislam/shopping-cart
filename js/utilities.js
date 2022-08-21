function innerText(priceId , value){
    let phonePrice = document.getElementById(priceId);
    phonePrice.innerText = value;
}
function pricePlus(buttonPlus){
    let inputQuantityIncrease = document.getElementById(buttonPlus);
    let inputQuantityStringIncrease = inputQuantityIncrease.value;
    let inpuQuantityNumberIncrease = parseInt(inputQuantityStringIncrease);
    let increaseInput = inpuQuantityNumberIncrease + 1;
    inputQuantityIncrease.value = increaseInput;
    let price = increaseInput * 1219;
    innerText('phone-price' , price)
}

function priceMinus(buttonMinus){
    let InputQuantityDecrease = document.getElementById(buttonMinus);
    let inputQuantityStringDecrease = InputQuantityDecrease.value;
    let inpuQuantityNumberDecrease = parseInt(inputQuantityStringDecrease);
    let decreaseInput = inpuQuantityNumberDecrease - 1;
    InputQuantityDecrease.value = decreaseInput;
    let price = decreaseInput * 1219;
    innerText('phone-price' , price)
}
function casePlus(buttonPlus){
    let inputQuantityIncrease = document.getElementById(buttonPlus);
    let inputQuantityStringIncrease = inputQuantityIncrease.value;
    let inpuQuantityNumberIncrease = parseInt(inputQuantityStringIncrease);
    let increaseInput = inpuQuantityNumberIncrease + 1;
    inputQuantityIncrease.value = increaseInput;
    let price = increaseInput * 59;
    innerText('case-price' , price)
}

function caseMinus(buttonMinus){
    let InputQuantityDecrease = document.getElementById(buttonMinus);
    let inputQuantityStringDecrease = InputQuantityDecrease.value;
    let inpuQuantityNumberDecrease = parseInt(inputQuantityStringDecrease);
    let decreaseInput = inpuQuantityNumberDecrease - 1;
    InputQuantityDecrease.value = decreaseInput;
    let price = decreaseInput * 59;
    innerText('case-price' , price)
}
function priceCalculate(priceId){
    let Price = document.getElementById(priceId);
    let PriceValue = Price.innerText;
    let priceNumber = parseInt(PriceValue);
    return priceNumber;
}
function price(){
    let phonePriceNumber = priceCalculate('phone-price')
    let casePriceNumber = priceCalculate('case-price');
    let totalPrice = phonePriceNumber + casePriceNumber;
    innerText('sub-total' , totalPrice)
    let taxPrice = (totalPrice * 0.1).toFixed(2);
    innerText('tax' , taxPrice);
    let totalPriceNumber = parseFloat(taxPrice)
    let finalTotal = totalPrice + totalPriceNumber;
    innerText('final-total' , finalTotal)
}
