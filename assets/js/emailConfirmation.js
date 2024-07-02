document.addEventListener("DOMContentLoaded", function() {
  console.log('DOM fully loaded and parsed'); // Проверка загрузки DOM

  function getTokenFromHash() {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    return params.get('confirmation_token');
  }

  function confirmEmail(token) {
    console.log('Token received for confirmation:', token); // Проверка получения токена
    fetch(`https://api.netlify.com/api/v1/verify/${token}`, {
      method: 'POST',
    })
    .then(response => response.json())
    .then(data => {
      console.log('Response data:', data); // Проверка данных ответа
      if (data && data.status === 'confirmed') {
        alert('Email confirmed successfully!');
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

  const token = getTokenFromHash();
  console.log('Confirmation token:', token); // Проверка извлечения токена
  if (token) {
    confirmEmail(token);
  } else {
    console.log('No token found in URL');
  }
});
