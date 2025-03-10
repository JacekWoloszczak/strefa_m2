const unseenList= document.querySelector(".navigation_second_deep_container_contact")
const importantLi= document.querySelector(".important_li")
const weAreHere = document.querySelector(".we_are_here");
const hideMap = document.querySelector(".container_with_map_wrapper");
const mosaic= document.querySelector(".mosaic");
const mosaicMain= document.querySelector(".mosaic_main");
const mosaicDown= document.querySelector(".mosaic_footer");
const mosaicPallette= ["#1f4dc2", "#ddd42e", "#20d4c2", "#3f13b5","#08065a"];
// const mosaicPallette= ["#a89574", "#902000", "#9e6000", "#470c00","#6e4204"];

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
      
};

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
  // =======================FORMULARZ==============================
  const form = document.querySelector("#contactForm");
const fields = form.querySelectorAll("[required]");
const formMessage = form.querySelector(".form-message");

const url = "send-script.php";
form.setAttribute("novalidate", true);

for (const field of fields) {
  field.addEventListener("input", () =>
    field.classList.toggle("is-invalid", !field.checkValidity())
  );
}
function showSubmitError() {
  formMessage.innerHTML = "Wysłanie wiadomości się nie powiodło";
}

function showSubmitSuccess() {
  const div = document.createElement("div");
  div.classList.add("form-send-success");
  form.after(div);
  div.innerHTML = `
      <strong>Wiadomość została wysłana</strong>
      <span>Dziękujemy za kontakt. Postaramy się odpowiedzieć jak najszybciej</span>
  `;
  form.remove();
}
function checkRequiredFields() {
  let formErrors = false;

  for (const field of fields) {
    if (!field.checkValidity()) {
      field.classList.add("form-error");
      formErrors = true;
    } else {
      field.classList.remove("form-error");
    }
  }

  return formErrors;
}

function afterSubmit(res) {
  if (res.errors) {
    const selectors = res.errors.map((el) => `[name="${el}"]`);
    const fieldsWithErrors = form.querySelectorAll(selectors.join(","));
    for (const field of fieldsWithErrors) {
      field.classList.add("is-invalid");
    }
  } else {
    if (res.status === "success") {
      showSubmitSuccess();
    }
    if (res.status === "error") {
      showSubmitError(res.status);
    }
  }
}
async function makeRequest(data) {
  const res = await fetch(url, {
    method: "post",
    body: data,
  });
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`${res.status}: ${res.statusText}`);
}
async function submitForm() {
  let formErrors = checkRequiredFields();

  if (!formErrors) {
    const formData = new FormData(form);

    const submit = form.querySelector(".form-submit");
    submit.disabled = true;
    submit.classList.add("loading");
    try {
      const response = await makeRequest(formData);
      afterSubmit(response);
    } catch (err) {
      showSubmitError();
    }

    submit.disabled = false;
    submit.classList.remove("loading");
  }
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
