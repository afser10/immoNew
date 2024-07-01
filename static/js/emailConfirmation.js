document.addEventListener("DOMContentLoaded", function() {
  // Функция для извлечения токена подтверждения из URL
  function getTokenFromHash() {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    return params.get('confirmation_token');
  }

  // Функция для подтверждения электронной почты
  function confirmEmail(token) {
    fetch(`https://api.netlify.com/api/v1/verify/${token}`, {
      method: 'POST',
    })
    .then(response => response.json())
    .then(data => {
      if (data && data.status === 'confirmed') {
        alert('Email confirmed successfully!');
        // Перенаправление на главную страницу или другую страницу
        window.location.href = "/";
      } else {
        alert('Email confirmation failed!');
      }
    })
    .catch(error => {
      console.error('Error confirming email:', error);
      alert('Error confirming email');
    });
  }

  // Извлечение токена и подтверждение электронной почты
  const token = getTokenFromHash();
  if (token) {
    confirmEmail(token);
  }
});
