const inputText = document.getElementById('inputText');
const generateButton = document.getElementById('generateButton');
const qrContainer = document.getElementById('qr-container');

generateButton.addEventListener('click', () => {
  const text = inputText.value;
  if (text.trim() === '') {
    return;
  }

  qrContainer.innerHTML = '';

  const qrcode = new QRCode(qrContainer, {
    text: text,
    width: 256,
    height: 256,
    colorDark: '#000000',
    colorLight: '#ffffff'
  });

  // Add a button to download the QR code as an image
  const downloadButton = document.createElement('button');
  downloadButton.innerText = 'Download QR Code';
  downloadButton.classList.add('downloadBtn');
  qrContainer.appendChild(downloadButton);

  downloadButton.addEventListener('click', () => {
    const canvas = qrContainer.querySelector('canvas');
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'qr-code.png';
    link.click();
  });
});
