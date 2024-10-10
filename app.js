// Geolocalização
document.getElementById('getLocationBtn').addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            document.getElementById('location').innerHTML = `Latitude: ${latitude}, Longitude: ${longitude}`;
        }, () => {
            alert("Não foi possível obter sua localização.");
        });
    } else {
        alert("Geolocalização não é suportada pelo seu navegador.");
    }
  });
  
  // Câmera
  const video = document.getElementById('video');
  const canvas = document.getElementById('canvas');
  const captureBtn = document.getElementById('captureBtn');
  
  // Acessando a câmera
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        console.log("Erro ao acessar a câmera: " + err);
    });
  
  // Capturando imagem
  captureBtn.addEventListener('click', () => {
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
  });
  