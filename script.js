function sendForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const msg = document.getElementById('message').value;
  const result = document.getElementById('result');
  result.textContent = `Спасибо, ${name}! Мы с вами свяжемся.`;
}