document.getElementById('phone-quantiy-increase').addEventListener('click',function(){
    pricePlus('phone-quantity');
    price()
})
document.getElementById('phone-quantity-decrease').addEventListener('click',function(){
    priceMinus('phone-quantity')
    price()
})

