/* This is a fix for detecting when an input field has a value filled */
document.addEventListener('input', function(e) {
  e.target.setAttribute('value', e.target.value);
});
document.querySelectorAll('input').forEach(function(el) {
  el.setAttribute('value', el.value || '');
});