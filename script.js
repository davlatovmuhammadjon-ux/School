function handleForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = '✓ Отправлено!';
  btn.style.background = '#1d4e89';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Отправить сообщение';
    btn.style.background = '';
    btn.disabled = false;
    e.target.reset();
  }, 3000);
}
