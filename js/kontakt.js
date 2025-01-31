const unseenList= document.querySelector(".navigation_second_deep_container_contact")
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