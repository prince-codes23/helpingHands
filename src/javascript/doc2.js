

// var form = document.querySelector(".formexist");
// function handleForm(event) { event.preventDefault(); } 
// form.addEventListener('submit', handleForm);



function addempty(hello){
     document.querySelector(hello).innerHTML=`<div class="card">
    <div class="card - content">
    <h3 class="emptymess">CURRENTLY , NO FORMS HERE</h3>
    </div>
    </div>`;
    console.log('nothing')
}

if (document.getElementById("page1").getElementsByClassName("formexist")[0] == null) {
  addempty(".hello1")
} else {
    console.log('no nothing')
    var userid = document.getElementById("getuserid").value;
let allforms = document.querySelectorAll(".formexist");
allforms.forEach(form =>{
// form.setAttribute("action",`/doc2/${userid}`);
})}

if (document.getElementById("page2").getElementsByClassName("formexist")[0] == null) {
  addempty(".hello2")
} else {
    console.log('no nothing')
}

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})



var popbuttons = document.querySelectorAll(".card-btn");
var bodyback = document.querySelector("body");
popbuttons.forEach(popbox=>{
  popbox.addEventListener('click',()=>{
    popbox.nextElementSibling.style.display="flex";
    bodyback.style.overflowY="hidden";
  })
  popbox.nextElementSibling.querySelector(".btns").querySelector(".btn1").addEventListener("click",()=>{
    popbox.nextElementSibling.innerHTML=`
    <div id="body" class="grey lighten-2 valign-wrapper">
  <div id="opty_hands" class="valign">
    <div id="left-arm">
      <div class="left-hand"><span>...</span></div>
      <div class="left-shake"><span>_<br>_<br>_</span></div>
    </div>
    <div id="right-arm">
      <div class="right-hand"><span>...</span></div>
      <div class="right-shake"></div>
    </div>
  </div>
  </div>
`;
    popbox.nextElementSibling.nextElementSibling.click();
    setTimeout(() => {
      document.location.reload(true);
    }, 5000);

  },true)
  popbox.nextElementSibling.querySelector(".btns").querySelector(".btn2").addEventListener("click",()=>{
    popbox.nextElementSibling.style.display="none";
    bodyback.style.overflowY="scroll";
  })
})

let tekeidof = document.getElementById("takeid").value;
let allhistory = document.querySelectorAll(".idofaccepter");
allhistory.forEach((forms) =>{
  forms.setAttribute("value", tekeidof);
})