const unseenList= document.querySelector(".navigation_second_deep_container_kitchen")
const importantLi= document.querySelector(".important_li")
const weAreHere = document.querySelector(".we_are_here");


const mosaicPallette= ["#1f4dc2", "#ddd42e", "#20d4c2", "#3f13b5","#08065a"];
const hideMap = document.querySelector(".container_with_map_wrapper");
const mosaicDown= document.querySelector(".mosaic_footer");
// const mosaicPallette= ["#a89574", "#902000", "#9e6000", "#470c00","#6e4204"];
const sinkButton= document.querySelector(".sink_button_first");
const sinkPresentation= document.querySelector(".sink_presentation_first")
const sinkButtonSnd= document.querySelector(".sink_button_second");
const sinkPresentationSnd= document.querySelector(".sink_presentation_second")
const sinkButtonrd= document.querySelector(".sink_button_third");
const sinkPresentationrd= document.querySelector(".sink_presentation_third")


let MOSAICFOOTER;

const mediaQueryList = window.matchMedia("(max-width: 376px)");
const mediaQueryHight = window.matchMedia("(min-width: 2000px)");
const mediaQueryMedium = window.matchMedia("(min-width: 377px) and (max-width: 1999px)");

function updateMosaicFooter(mediaQueryList, mediaQueryHight, mediaQueryMedium) {
  if (mediaQueryList.matches) {
    MOSAICFOOTER = 10;
  } else if (mediaQueryHight.matches) {
    MOSAICFOOTER = 200;
  } else if (mediaQueryMedium.matches) {
    MOSAICFOOTER = 55;
  }



  updateMosaicFooterDOM(); // Aktualizacja DOM po zmianie wartości
}

function updateMosaicFooterDOM() {
  const mosaicDown = document.querySelector(".mosaic_footer");
  mosaicDown.innerHTML = ""; // Usuwa stare elementy

  for (let i = 0; i < MOSAICFOOTER; i++) {
    const squares = document.createElement("div");
    squares.classList.add("squaresFooter");
    squares.style.backgroundColor = getFromMosaicPallete();
    mosaicDown.appendChild(squares);
  }
}
// Ustawienie wartości na start
updateMosaicFooter(mediaQueryList, mediaQueryHight, mediaQueryMedium);

// Nasłuchiwanie zmian szerokości ekranu
mediaQueryList.addEventListener("change", () => updateMosaicFooter(mediaQueryList, mediaQueryHight, mediaQueryMedium));
mediaQueryHight.addEventListener("change", () => updateMosaicFooter(mediaQueryList, mediaQueryHight, mediaQueryMedium));
mediaQueryMedium.addEventListener("change", () => updateMosaicFooter(mediaQueryList, mediaQueryHight, mediaQueryMedium));

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
  function sinkContainerClose(){
    sinkPresentation.classList.add("is-hidden")
    sinkPresentationSnd.classList.add("is-hidden")
    sinkPresentationrd.classList.add("is-hidden")
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
  sinkButton.addEventListener("click", ()=>{
    sinkPresentation.classList.toggle("is-hidden");
  });
  sinkButtonSnd.addEventListener("click", ()=>{
    sinkPresentationSnd.classList.toggle("is-hidden");
  });
  sinkButtonrd.addEventListener("click", ()=>{
    sinkPresentationrd.classList.toggle("is-hidden");
  });
  document.addEventListener("click", (e)=>{
    if (!e.target.closest(".sink_button_first") && !e.target.closest(".sink_button_second")&& !e.target.closest(".sink_button_third")){sinkContainerClose();}
  });
  
  (() => {
    const menuOverlay = document.querySelector(".header__menu-mobile");
    const closeMenuButton = document.querySelector(".header__exit-btn");
    const openMenuBtn = document.querySelector(".header__mobile-btn");
    

   

    closeMenuButton.style.display="none"

    openMenuBtn.addEventListener("click", (e) => {
      menuOverlay.classList.remove("d_none");
      openMenuBtn.style.display = "none";
      closeMenuButton.style.display="flex";
      openMenuBtn.style.animation = "spinScale 0.5s ease";

      setTimeout(() => {
        openMenuBtn.style.animation = "spinScale 0.5s ease";
      }, 500);
    })
  
    closeMenuButton.addEventListener("click", (e) => {
      menuOverlay.classList.add("d_none");
      openMenuBtn.style.display = "block";
      closeMenuButton.style.display="none";
      closeMenuButton.style.animation="spinScale 0.5s ease"
   
      setTimeout(() => {
        closeMenuButton.style.animation = "spinScale 0.5s ease";
      }, 500);



    });

   
  })();
