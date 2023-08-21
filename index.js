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
// Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("bar");
var span = document.getElementsByClassName("close")[0];

 function openNav() {
  modal.style.display =  "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}