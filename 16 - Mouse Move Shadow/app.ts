export {}

const hero: HTMLDivElement = document.querySelector(".hero");
const text: HTMLHeadElement = document.querySelector("h1");
const walk: number = 100;

function shadow(e: any){
  const width: number = hero.offsetWidth;
  const height: number = hero.offsetHeight;
  let x: number = e.offsetX;
  let y: number = e.offsetY;
  if(this !== e.target){
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const xWalk: number = Math.round(x / width * walk) - (walk / 2)
  const yWalk: number = Math.round(y / height * walk) - (walk / 2)
  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `;
}

hero.addEventListener('mousemove', shadow);


