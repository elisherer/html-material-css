/* This is a fix for detecting when an input field has a value filled */
document.addEventListener('input', e=> {
  e.target.setAttribute('value', e.target.value);
});