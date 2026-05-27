(function () {
  var el = document.getElementById('last-updated');
  if (el) {
    el.textContent = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
  }
})();
