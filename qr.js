const image = document.getElementById("QRcode");
var qr = localStorage.getItem("imageQR");
console.log(qr);
image.src = qr;


setTimeout(() => {
    const box = document.getElementById('ttest');
  
    // 👇️ removes element from DOM
    box.style.display = 'none';
  
    // 👇️ hides element (still takes up space on page)
    // box.style.visibility = 'hidden';
  }, 1600); // 👈️ time in milliseconds