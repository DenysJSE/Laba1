// Task 1
/*function isPalindrome(str) {
  for(var i = 0, j = str.length - 1; i < str.length; i++, j--) {
    if (str[i] === str[j]) 
      return true;
    else
      return false;
  } 
  
}*/


// Task 2
/*const numberInput = document.getElementById('numberInput');
const errorText = document.getElementById('errorText');

numberInput.addEventListener('input', () => {
  const inputValue = numberInput.value;
  if (!/^\d*\.?\d*$/.test(inputValue)) {
    numberInput.value = inputValue.slice(0, -1);
    errorText.style.display = 'block';
  } else {
    errorText.style.display = 'none';
  }
});*/


// // Task 3
/*function left(str, n) {
  return str.slice(0, n);
}

function right(str, n) {
  return str.slice(str.length - n);
}*/