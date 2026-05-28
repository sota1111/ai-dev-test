/**
 * @typedef {'ok' | 'error' | 'unknown'} HealthStatusCode
 */

function getJapanTimeString() {
  return new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
}

/**
 * @param {string} status
 * @returns {string}
 */
function getHealthStatus(status) {
  if (status === 'ok') return 'OK';
  return 'Unknown';
}

function updateHealthDisplay() {
  var statusEl = typeof document !== 'undefined' ? document.getElementById('health-status') : null;
  var checkedAtEl = typeof document !== 'undefined' ? document.getElementById('health-checked-at') : null;
  if (statusEl) statusEl.textContent = getHealthStatus('ok');
  if (checkedAtEl) checkedAtEl.textContent = getJapanTimeString();
}

(function () {
  if (typeof document === 'undefined') return;
  var el = document.getElementById('last-updated');
  if (el) {
    el.textContent = getJapanTimeString();
  }
  updateHealthDisplay();
  var btn = document.getElementById('check-health-btn');
  if (btn) {
    btn.addEventListener('click', function () {
      updateHealthDisplay();
    });
  }
})();

if (typeof module !== 'undefined') {
  module.exports = { getJapanTimeString, getHealthStatus, updateHealthDisplay }; // eslint-disable-line no-undef
}
