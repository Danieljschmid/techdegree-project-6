
//Get the video Element
const vid = document.getElementsByTagName('video');

// Select Span Elements
const span = document.getElementsByTagName('span')

//Add time Update Event Listener
vid.ontimeupdate = () => {
  const vidTime = vid.currentTime;
  for (let i = 0; i < span.length; i += 1 ) {
    if(vidTime > span[i].getAttrbute('data-start') && vidTime < span[i].getAttrbute('data-end') ) {
      span[i].style.color = '#e8743a'
    }
  }
}
