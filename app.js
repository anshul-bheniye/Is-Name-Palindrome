let userInput = document.querySelector('#user-name');
let button = document.querySelector('.btn');
let outputUsername = document.querySelector('.output-user-name');
let palindromeName = document.querySelector('.output-palindrome-name');
let finalMessage = document.querySelector('.end-message');
let show = document.querySelector('.show-div');
let buttonCheck = document.querySelector('.btn-check');

button.addEventListener('click', function(){
    let uInput = userInput.value.toUpperCase(); 
     // shows username in output username and converts to upper Case

    let listOfChar = uInput.split("");
    // splits in array format ['a', 'n', 's', 'h', 'u', 'l']

    let reversedList = listOfChar.reverse();
    // reverse the array format ['l', 'u', 'h', 's', 'n', 'a']

    let reverseChar = reversedList.join("");
    // joins reversed array to a string luhsna

    outputUsername.innerHTML = uInput;
    palindromeName.innerHTML = reverseChar.toUpperCase();


    let expectionChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'z', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
//    array of exceptional characters which are palindrome
  
    if(uInput === reverseChar || uInput === expectionChar ){
        finalMessage.textContent="🥳🎉Congratulations! Your Name Is Palindrome. 🥳🎉";
     
    } else{
        finalMessage.textContent="😞Your Name Is Not A Palindrome.😞";
        
    }

    return show.style.display = 'block';
});

buttonCheck.addEventListener('click', function(){
    userInput.value = "";
    
  if (show.style.display === 'block') {
    show.style.display = 'none';
  } else {
    show.style.display = 'block';
  }
});
