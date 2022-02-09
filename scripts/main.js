let mainContainer = document.getElementById('main-container');

  let display = document.createElement('div');
  display.classList.add('display');

    let show = document.createElement('h1');

    show.textContent = '';
    show.id = 'display-text';
    display.appendChild(show);
    
  mainContainer.appendChild(display);
  
  
let numberKeysContainer = document.getElementById('number-keys-container');


//variables to use with number input
let num1 = '';
let num2 = '';
let result = '';
let op = '';
let haveOp = false;
let saveShow = '';




  for (let i=0; i<11; i++) {

    let numberButton = document.createElement('button');
    numberButton.classList.add('number-key');
    numberButton.id = i;
    
    if(i == 10) {
      numberButton.id = '.';
    }
    
    numberKeysContainer.appendChild(numberButton);
    
    numberButton.onclick = function(){
      playWhite(this.id);
      handleNumber(this.id);
    };

    let kbd = document.createElement('kbd');
    kbd.innerHTML = i;
    numberButton.appendChild(kbd);
    
    if(i == 10) {
      numberButton.id = '.';
      kbd.innerHTML = '.';
    }
    
  }
  
  function handleNumber(id) {
    
    if (!haveOp) {
      num1 += id;
      show.textContent += id;

    }
    
    else {
      num2 += id;
      show.textContent = saveShow;
      show.textContent += num2;

      doMath();
      
    }
    
    if (show.textContent.length > 20) {
      show.classList.add('small-font');
    }
    if (show.textContent.length > 40) {
      show.classList.add('smaller-font');
    }


  }
  
  
  
  let operatorKeysContainer = document.getElementById('operator-keys-container');
  let operatorArray = ['+', '-', 'x', '', '/', 'clr', '', 'a', 'b', 'c'];
  
  for (let j=0; j<10; j++) {
    

    let operatorButton = document.createElement('button');
    operatorButton.classList.add('operator-key');
    
    if(j == 3 || j == 6) {
      operatorButton.classList.add('hidden');
    }
    
    
    operatorButton.id = operatorArray[j];
    
    
    
    operatorKeysContainer.appendChild(operatorButton);
    
    operatorButton.onclick = function(){
      playBlack(this.id);
      handleOperator(this.id);
    };

    let kbd = document.createElement('kbd');
    kbd.classList.add('on-black');
    kbd.innerHTML = operatorArray[j];
    operatorButton.appendChild(kbd);
    
    
  }
  
  function handleOperator(operator) {
    
    op = operator;
    
    if(operator == 'clr') {
      clearScreen();
      return;
    }
    
    if (haveOp) {
      num1 = result;
      num2 = '';
      show.textContent += operator;
      saveShow = show.textContent;

      return;
    }
    
    haveOp = true;
    
        
    show.textContent += operator;
    
    saveShow = show.textContent;
    
    if (show.textContent.length > 20) {
      show.classList.add('small-font');
    }
    if (show.textContent.length > 40) {
      show.classList.add('smaller-font');
    }
  }
  
  
  function doMath() {
    
    let a = Math.round(num1 * 100) / 100;
    let b = Math.round(num2 * 100) / 100;
    
    let c = '';
    
    switch (op) {
      
      case '+':
        c = a+b;
        break;
      case '-':
        c = a-b;
        break;
      case 'x':
        c = a*b;
        break;
      case '/':
        c = a/b;
        break;
    }
    
    result = Math.round(c * 100) / 100;
    
    show.textContent += '=' + result;
    
    if (show.textContent.length > 20) {
      show.classList.add('small-font');
    }
    if (show.textContent.length > 40) {
      show.classList.add('smaller-font');
    }
  }
  
  function clearScreen () {
    
    show.textContent = '';
    saveShow = '';
    num1 = '';
    num2 = '';
    op = '';
    haveOp = false;
    
    show.classList.remove('small-font', 'smaller-font');
    
  }
  
  
  function playWhite (id) {
    
    if (id == '.') {
      let audio = new Audio('sounds/10.flac');
      audio.play();
    }
    else {
      let audio = new Audio('sounds/' + id + '.flac');
      audio.play();
    }
  }
  
  function playBlack (id) {
    
    if (id == 'a') {
      let audio = new Audio('sounds/7a.flac');
      audio.play();
    }
    else if (id == 'b') {
      let audio = new Audio('sounds/8a.flac');
      audio.play();
    }
    else if (id == 'c') {
      let audio = new Audio('sounds/9a.flac');
      audio.play();
    }
    else {
      
    let num = operatorArray.indexOf(id);
    let audio = new Audio('sounds/' + num + 'a.flac');
    audio.play();
    }
    
  }