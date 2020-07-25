function myFunction() {
  console.log('hey');
  var x = document.getElementById("myLinks");
  var icon = document.querySelector(".icon")
  if (x.style.display === "block") {
    x.style.display = "none";
    icon.style.bottom = "0";
  } else {
    x.style.display = "block";
    icon.style.bottom = "144px";
  }
}