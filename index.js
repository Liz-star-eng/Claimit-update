function openUpdate(evt, releaseMonth) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(releaseMonth).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

//Responsiveness

var modal = document.getElementById("mySidenav");
function openNav() {
  modal.style.width = "60%";
}

function closeNav() {
  modal.style.width = "0";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.width = "0";
  }
}
