window.onload = function() {
  document.getElementById("c").classList.add("slideLeft");
  document.getElementById("s").classList.add("slideRight");
  var chunks = document.getElementsByClassName("chunks");
  Array.prototype.forEach.call( chunks, el => {
    el.classList.add("appear")
  }); 
}
