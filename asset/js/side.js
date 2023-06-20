var isClose = false;
$(document).ready(function () {

  sidebarOpen();
});
function sidebarOpen() {
  if (!isClose) {
    isClose = true;
    document.getElementById("content").style.marginLeft = "15%";
    document.getElementById("mySidebar").style.width = "15%";
    document.getElementById("mySidebar").style.display = "block";
  } else {
    isClose = false;
    sidebarClose();
  }
}

function sidebarClose() {
  document.getElementById("content").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}
