const unseenList= document.querySelector(".navigation_second_deep_container_bathroom")
const importantLi= document.querySelector(".important_li")
const weAreHere = document.querySelector(".we_are_here");
const hideMap = document.querySelector(".container_with_map_wrapper");
const mosaicDown= document.querySelector(".mosaic_footer");
// const mosaicPallette= ["#a89574", "#902000", "#9e6000", "#470c00","#6e4204"];

const mosaicPallette= ["#1f4dc2", "#ddd42e", "#20d4c2", "#3f13b5","#08065a"];

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
function windowsClose() {
    hideMap.classList.remove("is-visibility");
  }
  function liClose(){
    unseenList.classList.add("is-hidden");
  
  }
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".we_are_here") && !e.target.closest(".container_with_map_wrapper")) {
      windowsClose();
    }
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".important_li") && !e.target.closest(".navigation_second_deep_container")) {
      liClose();
    }
  });
  weAreHere.addEventListener("click", () => {
    hideMap.classList.toggle("is-visibility");
  });
  importantLi.addEventListener("click", ()=>{
    unseenList.classList.toggle("is-hidden");
    });
    
  function getFromMosaicPallete(){
    const colorMosaic= Math.floor(Math.random() * mosaicPallette.length);
    return mosaicPallette[colorMosaic];
  };
  for (let i = 0; i < MOSAICFOOTER; i++){
    const squares= document.createElement("div");
    squares.classList.add("squaresFooter");
    squares.style.backgroundColor=getFromMosaicPallete();
    mosaicDown.appendChild(squares);
        
  };

  const modalId=document.getElementById("myModal");
const xClose=document.querySelector(".close");


function openModal() {
    document.getElementById("myModal").style.visibility = "visible";
  }


  xClose.addEventListener("click", ()=>{
      modalId.style.visibility= "hidden";})
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";


  }
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
 
  
 