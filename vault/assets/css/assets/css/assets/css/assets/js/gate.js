(() => {
  const env = document.getElementById('envelope');
  const fade = document.getElementById('fade');
  const returnMsg = document.getElementById('returnMsg');

  // visit count (3rd visit reward)
  const key = 'vault_visits';
  const visits = Number(localStorage.getItem(key) || '0') + 1;
  localStorage.setItem(key, String(visits));
  if (visits >= 3) returnMsg.hidden = false;

  let step = 0;
  // step 0: closed (open side down vibe)
  // step 1: flip
  // step 2: open + show note
  // step 3: fade + enter vault

  env.addEventListener('click', () => {
    step += 1;

    if (step === 1) {
      env.classList.add('is-flipped');
      return;
    }

    if (step === 2) {
      env.classList.add('is-open');
      env.setAttribute('aria-label', 'Envelope opened');
      return;
    }

    // step 3+
    fade.classList.add('is-on');
    window.setTimeout(() => {
      window.location.href = '/vault/';
    }, 650);
  });
})();
