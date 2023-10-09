function clearMessage() {
  const messageDiv = document.querySelector('.message');
  if (messageDiv) {
    messageDiv.innerHTML = '';
    messageDiv.classList.remove('show');
  }
}

export function showMessage(message: string, time: number = 3000) {
  const messageDiv = document.querySelector('.message');
  if (messageDiv) {
    messageDiv.innerHTML = message;
    messageDiv.classList.add('show');
  }

  setTimeout(() => {
    clearMessage();
  }, time);
}
