let passwordSize = document.querySelector('#passwordSize');
let showSize = document.querySelector('#showSize');

passwordSize.addEventListener('input', function() {
  showSize.textContent = this.value;
});


let passwordQtd = document.querySelector('#passwordQtd');
let showQtd = document.querySelector('#showQtd');

passwordQtd.addEventListener('input', function() {
    showQtd.textContent = this.value;
})

const btnGerar = document.querySelector('#gerarSenha');

const labelPasswordSize = document.querySelector('#labelPasswordSize')
const checkSymbols = document.querySelector('#symbols');
const checkNumbers = document.querySelector('#numbers');
const checkUpperCase = document.querySelector('#upperCase');

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '<', '>', '.', ',', '/', '?'];
const caracters = Array.from(Array(26)).map((_, i) => i + 97);
const LowerCaseCaracters = caracters.map((item) => String.fromCharCode(item));
const UpperCaseCaracters = LowerCaseCaracters.map((item) => item.toUpperCase());

btnGerar.addEventListener('click', () => {
  for(let i = 0; i < passwordQtd.value; i++){
    generatePassword(checkNumbers.checked, checkSymbols.checked, checkUpperCase.checked, passwordSize.value);
  }
});

const generatePassword = (hasNumbers, hasSymbols, hasUpperCase, Length) => {
  const newArray = [
    ...(hasNumbers ? numbers : []),
    ...(hasSymbols ? symbols : []),
    ...(hasUpperCase ? UpperCaseCaracters : [])
  ];

  if(newArray.length === 0){
    return;
  }

  let password = '';

  for(let i = 0; i < Length; i++){
    const randomIndex = Math.floor(Math.random() * newArray.length);
    password += newArray[randomIndex];
  }

  

  let novaSenha = document.createElement('li');
  novaSenha.classList.add('senha');
  novaSenha.textContent = password;
  let listaSenhas = document.querySelector('#listaSenhas');
  listaSenhas.appendChild(novaSenha);
}; 

const limpar = document.querySelector('#limpar');

limpar.addEventListener('click', () => {
  location.reload();
})