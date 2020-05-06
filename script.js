/* 
Thanks: 
https://stackoverflow.com/questions/49916259/show-element-when-in-viewport-on-scroll
*/

var myElement = document.querySelector( '.article-info-wrapper' );
let chapterElement = document.querySelector( '.chapter-list-wrapper' );

// Listen for the scroll event
document.addEventListener( 'scroll', event => {
  // Check the viewport status
  if( inViewport( myElement ) ){
    chapterElement.style.opacity = 1;
  } else {
    chapterElement.style.opacity = 0;
  }
})

function inViewport( element ){
  // Get the elements position relative to the viewport
  let height = element.offsetHeight;
  let bb = element.getBoundingClientRect();
  // Return true when element div is scrolled above viewport
  return (bb.top < -height);
}

