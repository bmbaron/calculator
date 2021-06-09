let mainContainer = document.getElementById('main-container');

  let display = document.createElement('div');
  display.classList.add('display');

    let show = document.createElement('h1');
    show.textContent = "hello";
    show.id = 'display-text';
    display.appendChild(show);
    
  mainContainer.appendChild(display);
  
  
let numberKeysContainer = document.getElementById('number-keys-container');
  
  for (let i=0; i<11; i++) {
    

    let numberButton = document.createElement('button');
    numberButton.classList.add('number-key');
    numberButton.id = i;
    
    if(i == 10) {
      numberButton.id = '.';
    }
    
    numberKeysContainer.appendChild(numberButton);
    
    numberButton.onclick = function(){handleNumber(this.id)};

    
    
  }
  
  function handleNumber(id) {
    
    console.log('clicked');
    
    show.textContent += id;
    
    
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

    
    
  }
  
  function handleOperator(id) {
    
    console.log('operator clicked');
    
    show.textContent += id;
    
    
  }

  