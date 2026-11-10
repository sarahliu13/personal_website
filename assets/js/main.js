// Lightbox for images, current-section highlight in the nav, one video at a time.
(function () {
  var dlg = document.querySelector('.lightbox');
  if (dlg && typeof dlg.showModal === 'function') {
    var img = dlg.querySelector('img');
    var cap = dlg.querySelector('.lb-caption');
    document.querySelectorAll('a[data-lightbox]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var thumb = a.querySelector('img');
        img.src = a.getAttribute('href');
        img.alt = thumb ? thumb.alt : '';
        cap.textContent = a.getAttribute('data-caption') || '';
        dlg.showModal();
      });
    });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('close', function () { img.removeAttribute('src'); });
  }

  var links = Array.prototype.slice.call(document.querySelectorAll('.topbar nav a'));
  if ('IntersectionObserver' in window && links.length) {
    var map = {};
    links.forEach(function (l) { map[l.getAttribute('href').slice(1)] = l; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && map[en.target.id]) {
          links.forEach(function (l) { l.removeAttribute('aria-current'); });
          map[en.target.id].setAttribute('aria-current', 'true');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(map).forEach(function (id) {
      var s = document.getElementById(id);
      if (s) io.observe(s);
    });
  }

  var vids = document.querySelectorAll('video');
  vids.forEach(function (v) {
    v.addEventListener('play', function () {
      vids.forEach(function (o) { if (o !== v) o.pause(); });
    });
  });
})();
