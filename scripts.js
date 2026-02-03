window.addEventListener('load', function () {
  if (typeof confetti !== 'function') return;
  var origin = { x: 0.5, y: 0.58 };
  var img = document.querySelector('.screenshot img');
  if (img) {
    var rect = img.getBoundingClientRect();
    if (rect.height > 0) {
      origin.x = (rect.left + rect.width / 2) / window.innerWidth;
      origin.y = (rect.top + rect.height * 0.88) / window.innerHeight;
    }
  }
  confetti({
    origin: origin,
    particleCount: 280,
    spread: 120,
    startVelocity: 52
  });
});
