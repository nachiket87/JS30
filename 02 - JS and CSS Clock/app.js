const secondHand = document.querySelector(".second-hand")
const minHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")
const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minDegrees = ((mins / 60) * 360) + 90;
  const hourDegrees = ((hours / 12) * 360) + 90 ;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  minHand.style.transform = `rotate(${minDegrees}deg)`
  hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

setInterval(setDate, 1000);
