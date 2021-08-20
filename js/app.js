function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        // console.log('got less than 4 length of pin number', pin);
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
   document.getElementById('generate-input').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
   const number = event.target.innerText;
   const calcInput = document.getElementById('calculator-input');
   if(isNaN(number)){
       if(number == 'C'){
          calcInput.value = ''; 
       }
   }
   else{
    const previousNumbers = calcInput.value;
    const newNumbers = previousNumbers + number;
    calcInput.value = newNumbers;
   }
});

function verifyPin(){
    const pin = document.getElementById('generate-input').value;
    const typedNumbers = document.getElementById('calculator-input').value;
    const messageSuccess = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if(pin == typedNumbers){
        messageSuccess.style.display = 'block';
        failError.style.display = 'none';
    }
    else{
        failError.style.display = 'block';
        messageSuccess.style.display = 'none';
    }
}