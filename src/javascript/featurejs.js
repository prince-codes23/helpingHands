function addempty(){
  document.querySelector(".hello").innerHTML=`<div class="card">
 <div class="card - content">
 <h3 class="emptymess">YOU HAVE NOT SUBMITTED ANY FORMS</h3>
 </div>
 </div>`;
 console.log('nothing')
}

if (document.getElementById("myForm") == null) {
addempty()
} else {
 console.log('no nothing')

}


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    document.getElementById("locate").value = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    document.getElementById("locate").value = "https://maps.google.com/?q="+position.coords.latitude+","+position.coords.longitude;
  }

  var gettime = document.getElementById("timebox");
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;

  var yyyy = today.getFullYear();
  if (dd < 10) {
      dd = '0' + dd;
  }
  if (mm < 10) {
      mm = '0' + mm;
  }
  var today = dd + '/' + mm + '/' + yyyy;

gettime.value=today;

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

