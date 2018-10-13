


//Get the video Element
const vid = document.getElementsByTagName('video')[0];

// Select Span Elements
const span = document.querySelectorAll('span');



//highlight Text
vid.ontimeupdate = () => {
  const vidTime = vid.currentTime;
  for (let i = 0; i < span.length; i += 1 ) {
    if(vidTime > span[i].getAttribute('data-start') && vidTime < span[i].getAttribute('data-end') ) {
      span[i].style.color = '#e8743a';
    } else {
      span[i].style.color = '';
    }
  }
};

// jump to selected sentance in Video

for ( i = 0; i < span.length; i ++) {
  span[i].addEventListener('click', (event) => {
    vid.currentTime = event.target.getAttribute('data-start');
      vid.play();

  });
}
