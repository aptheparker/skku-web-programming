let tID; //we will use this variable to clear the setInterval()
let image = document.getElementById('image');
let direction = document.getElementById('direction');
let keyDirection;

window.onload = function () {
  keyDirection = 0;
  direction.innerHTML = 'right';
  animateScript();
};

function onEvent(event) {
  if (event.key === 'ArrowLeft') {
    direction.innerHTML = 'left';
    keyDirection = 0;
    animateScript();
  } else if (event.key === 'ArrowRight') {
    direction.innerHTML = 'right';
    keyDirection = 141;
    animateScript();
  }
}

function animateScript() {
  let position = 108; //start position for the image slicer
  const interval = 100; //100 ms of interval for the setInterval()

  tID = setInterval(() => {
    document.getElementById(
      'image'
    ).style.backgroundPosition = `-${position}px ${keyDirection}px`;
    //we use the ES6 template literal to insert the variable "position"
    if (position < 864) {
      position = position + 108;
    }
    //we increment the position by 256 each time
    else {
      position = 108;
    }
    //reset the position to 256px, once position exceeds 1536px
  }, interval); //end of setInterval
} //end of animateScript()

window.addEventListener('keypress', onEvent);
