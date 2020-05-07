/* 
Thanks: 
https://stackoverflow.com/questions/49916259/show-element-when-in-viewport-on-scroll
*/

let aboveElement = document.querySelector( '.article-cover' );
let infoHeight = document.querySelector( '.article-info-wrapper' ).offsetHeight;
let chapterWrapper = document.querySelector( '.chapter-list-wrapper' );

// Listen for the scroll event
document.addEventListener( 'scroll', event => {
  // Show/Hide chapter list
  if( inViewport( aboveElement ) && window.innerWidth >= 1024 ) {
    chapterWrapper.style.opacity = 1;
    chapterWrapper.style.visibility = 'visible';
  } else {
    chapterWrapper.style.opacity = 0;
    chapterWrapper.style.visibility = 'hidden';
  }
})

function inViewport( element ){
  // Get the elements position relative to the viewport
  let height = element.offsetHeight;
  let bb = element.getBoundingClientRect();
  // Return true when element div is scrolled above viewport
  return (bb.top < -(height + infoHeight));
}

function chapterScroll( chapter ) {
  let n = getChildIndex( chapter ); // Get n-th child
  let heading = document.querySelector( `h3:nth-of-type(${n / 2})` );
  let y = heading.offsetTop;
  let offset = 170;
  window.scrollTo(0, y - offset)
  return null;
}

function getChildIndex( child ) {
  // Returns 'n' for the n-th child
  let n = 1;
  while ( (child = child.previousSibling) != null ) {
    n++;
  }
  return n;
}

// document.querySelector('.chapter-list-wrapper li:nth-of-type(2)')
//
