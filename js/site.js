
(function(){
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav){
    toggle.addEventListener('click', function(){
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
  var path = location.pathname.replace(/\/+$/, '');
  document.querySelectorAll('.nav a').forEach(function(a){
    var href = a.getAttribute('href');
    if (!href) return;
    var full = href.replace(/\/+$/, '');
    if (full === '' && path === '') { a.setAttribute('aria-current','page'); }
    else if (full === path || (full !== '/' && path.endsWith(full))) {
      a.setAttribute('aria-current','page');
    }
  });
})();
