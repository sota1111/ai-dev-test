function getJapanTimeString() {
  return new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
}

(function () {
  if (typeof document === 'undefined') return;
  var el = document.getElementById('last-updated');
  if (el) {
    el.textContent = getJapanTimeString();
  }
})();

if (typeof module !== 'undefined') {
  module.exports = { getJapanTimeString }; // eslint-disable-line no-undef
}
