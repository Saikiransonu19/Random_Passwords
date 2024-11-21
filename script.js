const passwordBox = document.getElementById("Password");
const lengthh = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!#$%&()*+,-<=>@[]^_{|}~";

const addAll = upperCase + lowerCase + numbers + symbols;

const copiedMessage = document.createElement('span');
const copyIcon = document.getElementById("copyId");

function createPassword(){
    let RandomPassword = "";
    RandomPassword += upperCase[Math.floor(Math.random()* upperCase.length)];
    RandomPassword += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    RandomPassword += numbers[Math.floor(Math.random()* numbers.length)];
    RandomPassword += symbols[Math.floor(Math.random()* symbols.length)];

    while(lengthh > RandomPassword.length){

        RandomPassword += addAll[Math.floor(Math.random()* addAll.length)];
    }

    passwordBox.value = RandomPassword;
}

copyIcon.addEventListener('click',function(){
    passwordBox.select();
    document.execCommand("copy");
    copiedMessage.textContent = 'Copied!';
    copyIcon.parentNode.insertBefore(copiedMessage, copyIcon.nextSibling);

    setTimeout(() => {
        copiedMessage.remove();
      }, 700);

    this.style.visibility = 'hidden';
    
    setTimeout(() => {
      this.style.visibility = 'visible';
    }, 700);
  });
