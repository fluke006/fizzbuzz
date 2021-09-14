var elForm = document.querySelector('.form');
var elUserInput = document.querySelector('.form__input');
var elResult = document.querySelector('.result');

function calculated(num = 0){

   var result = '';

   if( num % 3 === 0 && num % 5 ===0){
    result = 'fizzbuzz'
   }else if(num % 3 === 0){
      result = 'fizz'
   }else if(num % 3 === 0){
      result = 'buzz'
   }else{
      result = num
   }

      return  result
   }

   elForm.addEventListener('submit', function (evt) {
      evt.preventDefault();

      var inputValue = Number(elUserInput.value.trim());

      elResult.textContent =`${calculated(inputValue)}`;

   })
