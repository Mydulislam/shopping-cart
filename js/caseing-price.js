// case price
document.getElementById('case-quantity-increase').addEventListener('click',function(){
    casePlus('case-quantity');
    price()
})

document.getElementById('case-quantity-decrease').addEventListener('click',function(){
    caseMinus('case-quantity');
    price()
})