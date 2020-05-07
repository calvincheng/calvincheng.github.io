'use strict'

/* 
Thanks: 
https://stackoverflow.com/questions/49916259/show-element-when-in-viewport-on-scroll
*/

function inViewport( element ){
  // Get the elements position relative to the viewport
  let infoHeight = document.querySelector( '.article-info-wrapper' ).offsetHeight;
  let height = element.offsetHeight;
  let bb = element.getBoundingClientRect();
  // Return true when element div is scrolled above viewport
  return (bb.top < -(height + infoHeight));
}

function scrollToId( id ) {
  let heading = document.getElementById( id );
  heading.scrollIntoView({behavior: 'smooth'});
}

function makeHeadingHeights() {
  let heights = [0];
  let i = 1;
  let offset = 168;
  while (document.querySelector( `.chapter:nth-of-type(${i})` ) != null ) {
    let heading = document.querySelector( `h3:nth-of-type(${i})` );
    heights[i] = heading.getBoundingClientRect().top + window.scrollY - offset;
    i++;
  }
  return heights;
}

// Listen for the scroll event
document.addEventListener( 'scroll', event => {
  // Show/Hide chapter list
  let aboveElement = document.querySelector( '.article-cover' );
  let chapterWrapper = document.querySelector( '.chapter-list-wrapper' );
  if( inViewport( aboveElement ) && window.innerWidth >= 1024 ) {
    chapterWrapper.style.opacity = 1;
  } else {
    chapterWrapper.style.opacity = 0;
  }

  // Highlight current chapter
  let numChapters = document.querySelector( '.chapter-list-wrapper ul' ).childElementCount;
  let n = numChapters;
  while (window.scrollY < headingHeights[n] && n > 0) {
    n--;
  }
  for (let i = 1; i <= numChapters; i++) {
    document.querySelector( `.chapter:nth-of-type(${i}) span` ).classList.remove('active');
  }
  document.querySelector( `.chapter:nth-of-type(${n}) span` ).classList.add('active');
})

let headingHeights = makeHeadingHeights();
