let mainContainer = document.getElementById('main-container');

  let display = document.createElement('div');
  display.classList.add('display');

    let show = document.createElement('h1');

    show.textContent = "click on the keys to do math";
    show.id = 'display-text';
    display.appendChild(show);
    show.classList.add('small-font');

    
  mainContainer.appendChild(display);
  
  
let numberKeysContainer = document.getElementById('number-keys-container');


//variables to use with number input
let num1 = '';
let num2 = '';
let op = '';
let haveOp = false;
let screenSave = '';


setTimeout(loadAfterTime, 2000);


function loadAfterTime () {
  
show.textContent = '';
show.classList.remove('small-font');


  for (let i=0; i<11; i++) {

    let numberButton = document.createElement('button');
    numberButton.classList.add('number-key');
    numberButton.id = i;
    
    if(i == 10) {
      numberButton.id = '.';
    }
    
    numberKeysContainer.appendChild(numberButton);
    
    numberButton.onclick = function(){handleNumber(this.id)};

    let kbd = document.createElement('kbd');
    kbd.innerHTML = i;
    numberButton.appendChild(kbd);
    
    if(i == 10) {
      numberButton.id = '.';
      kbd.innerHTML = '.';
    }
    
  }
  
  function handleNumber(id) {
    
    if (haveOp == false) {
      num1 += id;
      show.textContent += id;
    }
    
    else {
      num2 += id;
      show.textContent += id;

      console.log(num2);
      doMath();
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
    
    operatorButton.onclick = function(){handleOperator(this.id)};

    let kbd = document.createElement('kbd');
    kbd.classList.add('on-black');
    kbd.innerHTML = operatorArray[j];
    operatorButton.appendChild(kbd);
    
    
  }
  
  function handleOperator(operator) {
    
    op = operator;
    
    haveOp = true;
    
    if(operator == 'clr') {
      clearScreen();
      return;
    }
    
    console.log('operator clicked');
    
    show.textContent += operator;
    
    
  }
  
  
  function doMath() {
    
    console.log('math');
    
    let a = parseInt(num1);
    let b = parseInt(num2);
    console.log(a, b);
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
    
    console.log('result: ' + '=' + c);
      
    
    
    show.textContent += '=' + c;
    
    
  }
  
  function clearScreen () {
    
    show.textContent = '';
    num1 = '';
    num2 = '';
    op = '';
    haveOp = false;
    
  }

}