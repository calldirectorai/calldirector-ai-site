(function(){
  var t = document.getElementById('vera-teaser');
  if (!t) { return; }
  setTimeout(function(){
    t.style.display = 'block';
    requestAnimationFrame(function(){ t.style.opacity = '1'; t.style.transform = 'none'; });
  }, 2500);
  setTimeout(function(){ if (t) { t.style.display = 'none'; } }, 15000);
})();