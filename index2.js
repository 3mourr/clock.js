const minHand = document.querySelector('.min-hand');

function setTo7PM() {
  const minutes = 0; // 0 minutes for 7:00
  const degrees = (minutes / 60) * 360;
  minHand.style.transform = `rotate(${degrees}deg)`;
}

setTo7PM();
