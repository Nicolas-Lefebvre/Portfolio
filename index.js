const navbar = document.querySelector('nav');

const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

console.log(vh);
console.log(event);

console.log(navbar.getBoundingClientRect());

document.addEventListener(
  'scroll',
  (event) => {
      // handle scroll event
      // console.log('scroll');
      // console.log(window.pageYOffset);

      if(window.pageYOffset < vh) {
        navbar.classList.remove("sticky-top-navbar");
        
        console.log('PAS STICKY !');
      }
      else {
        navbar.classList.add("sticky-top-navbar");
        console.log('STICKY !');
      }
  }
);




