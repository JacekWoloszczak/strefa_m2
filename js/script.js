const container= document.querySelector(".demo_container");
const pallette= ["#a7a896", "#636a72", "#090808", "#4f545c"];
const mosaic= document.querySelector(".mosaic");
const mosaicMain= document.querySelector(".mosaic_main");
const mosaicPallette= ["#a89574", "#902000", "#9e6000", "#470c00","#6e4204"];
const unseenList= document.querySelector(".navigation_second_deep_container")
const importantLi= document.querySelector(".important_li")
const navigationDiv= document.querySelector(".navigation");
const mosaicDown= document.querySelector(".mosaic_footer");

const MOSAIC= 400;
let MOSAICFOOTER;

const MOSAICMAIN=1400;




const mediaQueryList = window.matchMedia("(max-width: 376px)");
const mediaQueryHight = window.matchMedia("(min-width: 2000px)");
const mediaQueryMedium = window.matchMedia("(min-width: 377px) and (max-width: 1999px)");

function updateMosaicFooter(mediaQueryList, mediaQueryHight, mediaQueryMedium) {
  if (mediaQueryList.matches) {
    MOSAICFOOTER = 10;
  } else if (mediaQueryHight.matches) {
    MOSAICFOOTER = 200;
  } else if (mediaQueryMedium.matches) {
    MOSAICFOOTER = 100;
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



const weAreHere = document.querySelector(".we_are_here");
const hideMap = document.querySelector(".container_with_map_wrapper");

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
    unseenList.classList.toggle("is-hidden");
});

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".important_li") && !e.target.closest(".navigation_second_deep_container")) {
      liClose();
    }
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
      
    });
    closeMenuButton.addEventListener("click", (e) => {
      menuOverlay.classList.add("d_none");
      openMenuBtn.style.display = "block";
      closeMenuButton.style.display="none"
    });
  })();
 



  

