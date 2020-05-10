'use strict'

/* 
Thanks: 
https://stackoverflow.com/questions/49916259/show-element-when-in-viewport-on-scroll
*/

function scrollToId( id ) {
  // Check if browser supports scroll function
  let element = document.getElementById( id );
  if ('scrollBehavior' in document.documentElement.style) {
    element.scrollIntoView({behavior: 'smooth'});
  } else {
    let offset = parseInt(getComputedStyle(document.querySelector('html')).scrollPaddingTop);
    let y = element.getBoundingClientRect().top + window.scrollY - offset;
    smoothScrollTo(0, y, 800);
  }
}

window.smoothScrollTo = function(endX, endY, duration) {
  // Polyfill for scrollIntoView in Safari/Edge
  // https://stackoverflow.com/questions/49636727/why-is-scroll-behaviorsmooth-not-working-but-javascript-window-scroll-smooth-is
  let startX = window.scrollX || window.pageXOffset,
  startY = window.scrollY || window.pageYOffset,
  distanceX = endX - startX,
  distanceY = endY - startY,
  startTime = new Date().getTime();

  // Easing function
  let easeInOutQuart = function(time, from, distance, duration) {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  let timer = window.setInterval(function() {
      let time = new Date().getTime() - startTime,
      newX = easeInOutQuart(time, startX, distanceX, duration),
      newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
          window.clearInterval(timer);
      }
      window.scrollTo(newX, newY);
  }, 1000 / 60); // 60 fps
};

function makeHeadingHeights() {
  let offset = parseInt(getComputedStyle(document.querySelector('html')).scrollPaddingTop);
  let heights = [0];
  let i = 1;
  while (document.querySelector( `.chapter:nth-of-type(${i})` ) != null ) {
    let heading = document.querySelector( `h3:nth-of-type(${i})` );
    heights[i] = heading.getBoundingClientRect().top + window.scrollY - offset;
    i++;
  }
  return heights;
}

function inViewport( element ) {
  // Get the elements position relative to the viewport
  let infoHeight = 0 ;//document.querySelector( '.article-info-wrapper' ).offsetHeight;
  let height = element.offsetHeight;
  let bb = element.getBoundingClientRect();
  // Return true when element div is scrolled above viewport
  return (bb.top < -(height + infoHeight));
}

function inViewport2( element ) {
  let topEdge = element.getBoundingClientRect().top;
  let bottomEdge = element.getBoundingClientRect().bottom;
  return ( (topEdge > 0 && bottomEdge < window.innerHeight) );
}

// Need to add delay to make sure stuff is loaded before calculating
let headingHeights = makeHeadingHeights(); 

// Listen for the scroll event
document.addEventListener( 'scroll', event => {
  // Show/Hide chapter list
  let chapterWrapper = document.querySelector( '.chapter-list-wrapper' );
  let coverElement = document.querySelector( '.article-cover' );
  if ( coverElement.getBoundingClientRect().bottom < 0 && window.innerWidth >= 1024 ) {
    chapterWrapper.style.opacity = 1;
  } else {
    chapterWrapper.style.opacity = 0;
  }

  // Highlight current chapter
  let offset = parseInt(getComputedStyle(document.querySelector('html')).scrollPaddingTop);
  let numChapters = document.querySelector( '.chapter-list-wrapper ul' ).childElementCount;
  let n = numChapters;
  let height = document.querySelector( `h3:nth-of-type(${n})` ).getBoundingClientRect().top
             + window.scrollY - offset;
  while (window.scrollY <= height - 1 && n > 1) {
    n--;
    height = document.querySelector( `h3:nth-of-type(${n})` ).getBoundingClientRect().top 
             + window.scrollY - offset;
  }
  for (let i = 1; i <= numChapters; i++) {
    document.querySelector( `.chapter:nth-of-type(${i}) span` ).classList.remove('chapter-current');
  }
  document.querySelector( `.chapter:nth-of-type(${n}) span` ).classList.add('chapter-current');

})
