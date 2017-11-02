const hero = document.querySelector('.hero');
const text = hero.querySelector( '.something' );
const walk = 200; // 100px

function shadow(e) {
  // console.log(e)
  // const width = hero.offsetWidth;
  // const height = hero.offsetHeight;
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  // console.log(  x, y );

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  // console.log( xWalk, yWalk );

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 red,
  ${xWalk * -1}px ${yWalk}px 0 blue,
  ${yWalk}px ${xWalk * -1}px 0 rgba(128,0,248,0.7),
  ${yWalk * -1}px ${xWalk}px 0 hotpink
  `;

}

hero.addEventListener('mousemove', shadow);
