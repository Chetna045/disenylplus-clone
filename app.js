const carousel =document.querySelector('.carousel');
let sliders=[];
let slideIndex=0;
const createSlide = ()=>
{
    if(slideIndex>=movies.length)
   { slideIndex= 0;}
   //creating DOM element

  let slide = document.createElement('div');
  let imgElement =document .createElement('img');
  let content =document .createElement('div');
  let h1=document .createElement('h1');
  let p=document .createElement('p');

imgElement.appendChild(document.createTextNode(''));
h1.appendChild(document.createTextNode(movies[slideIndex].name));
p.appendChild(document.createTextNode(movies[slideIndex].des));
content.appendChild(h1);
content.appendChild(p);
slide.appendChild(content);
slide.appendChild(imgElement);
carousel.appendChild(slide);
//setting img source
imgElement.src=movies[slideIndex].image;
slideIndex++;
//setting elements classname
slide.className='slider';
content.className='slider-content';
h1.className='movie-title';
p.className='movie-des';
sliders.push(slide);
//adding sliding effect

/*if(sliders.length){
    sliders[0].style.marginLeft =`calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    /*calc is a css formula
    -ve sign indicates we want -ve margin
    100 because we want slider to go 100 percent off screen multiplying 100 with this calculation as we want 100% negative per slide
    sub by 2 from sliders,length because we want slide to be in middle
    % sign to indicate its a percentage value
    subtract the margin value from 100 % 
    //doing same we multiply 30  as we have 30 px margin on right

}}

for(let i=0;i<3;i++)
{createSlide();}
setInterval(()=>{createSlide();},3000);*/

    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
         /*calc is a css formula
    -ve sign indicates we want -ve margin
    100 because we want slider to go 100 percent off screen multiplying 100 with this calculation as we want 100% negative per slide
    sub by 2 from sliders,length because we want slide to be in middle
    % sign to indicate its a percentage value
    subtract the margin value from 100 % 
    //doing same we multiply 30  as we have 30 px margin on right
*/
}


}
for(let i = 0; i < 3; i++){
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    })
})
//card sliders
let cardContainers=[...document.querySelectorAll('.card-container')];
let preBtns=[...document.querySelectorAll('.pre-btn')];
let nxtBtns=[...document.querySelectorAll('.nxt-btn')];
cardContainers.forEach((item,i)=>{

let containerDimensions=item.getBoundingClientRect();//dimensions and position of element
let containerWidth=containerDimensions.width;

nxtBtns[i].addEventListener('click',() =>{
    item.scrollLeft += containerWidth - 200;
})
preBtns[i].addEventListener('click',() =>{
    item.scrollLeft -= containerWidth + 200;
})
})