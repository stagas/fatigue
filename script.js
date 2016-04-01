/* example app */

function blink(el) {
  var i = 0;
  return setInterval(function() {
    i = 1 - i;
    el.style.visibility = i ? 'hidden' : 'visible';
  }, 500);
}

var el = document.createElement('span');

el.textContent = 'with support for JavaScript!';

document.body.appendChild(el);

blink(el);
