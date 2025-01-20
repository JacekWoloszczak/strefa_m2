const container= document.querySelector(".demo_container");
const pallette= ["#a7a896", "#636a72", "#090808", "#4f545c"];
const mosaic= document.querySelector(".mosaic");
const mosaicMain= document.querySelector(".mosaic_main");
const mosaicPallette= ["#a89574", "#902000", "#9e6000", "#470c00","#6e4204"];
const unseenList= document.querySelector(".navigation_second_deep")
const importantLi= document.querySelector(".important_li")
const navigationDiv= document.querySelector(".navigation");
const mosaicDown= document.querySelector(".mosaic_footer");
// const SQUARE= 5508;
const MOSAIC= 400;
const MOSAICMAIN=1200;
const MOSAICFOOTER= 100;

// function getRandomColor() {
    
//   const color= Math.floor(Math.random() * pallette.length);
//   return pallette[color];
  

//   }


// for (let i = 0; i < SQUARE; i++){
//     const squares= document.createElement("div");
//     squares.classList.add("squares");
//     squares.style.backgroundColor=getRandomColor();
//     container.appendChild(squares);
        
// }
function getFromMosaicPallete(){
  const colorMosaic= Math.floor(Math.random() * mosaicPallette.length);
  return mosaicPallette[colorMosaic];
}

for (let i = 0; i < MOSAIC; i++){
  const squares= document.createElement("div");
  squares.classList.add("squaresMosaic");
  squares.style.backgroundColor=getFromMosaicPallete();
  mosaic.appendChild(squares);
      
}
for (let i = 0; i < MOSAICMAIN; i++){
  const squares= document.createElement("div");
  squares.classList.add("squaresMosaic");
  squares.style.backgroundColor=getFromMosaicPallete();
  mosaicMain.appendChild(squares);
      
}
for (let i = 0; i < MOSAICFOOTER; i++){
  const squares= document.createElement("div");
  squares.classList.add("squaresFooter");
  squares.style.backgroundColor=getFromMosaicPallete();
  mosaicDown.appendChild(squares);
      
}
  importantLi.addEventListener("click", ()=>{
    unseenList.classList.toggle("d_none");
    unseenList.classList.toggle("d_flex");
   
 
  });


