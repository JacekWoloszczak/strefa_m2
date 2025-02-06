const unseenList= document.querySelector(".navigation_second_deep_container_promotion")
const importantLi= document.querySelector(".important_li")
const weAreHere = document.querySelector(".we_are_here");
const hideMap = document.querySelector(".container_with_map_wrapper");
const mosaicDown= document.querySelector(".mosaic_footer");
const mosaicPallette= ["#a89574", "#902000", "#9e6000", "#470c00","#6e4204"];
const MOSAICFOOTER= 150;


function getFromMosaicPallete(){
  const colorMosaic= Math.floor(Math.random() * mosaicPallette.length);
  return mosaicPallette[colorMosaic];
}
function windowsClose() {
    hideMap.classList.remove("is-visibility");
  }
  function liClose(){
    unseenList.classList.add("is-hidden");
  
  }

  weAreHere.addEventListener("click", () => {
    hideMap.classList.toggle("is-visibility");
  });
  
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".we_are_here") && !e.target.closest(".container_with_map_wrapper")) {
      windowsClose();
    }
  });
  importantLi.addEventListener("click", ()=>{
    unseenList.classList.toggle("is-hidden");
    
 
   
 
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".important_li") && !e.target.closest(".navigation_second_deep_container")) {
      liClose();
    }
  });
  
  for (let i = 0; i < MOSAICFOOTER; i++){
    const squares= document.createElement("div");
    squares.classList.add("squaresFooter");
    squares.style.backgroundColor=getFromMosaicPallete();
    mosaicDown.appendChild(squares);
        
  };