window.addEventListener("load", function() {
  // Oculta el preloader
  var preloader = document.getElementById("preloader");
  if (preloader) preloader.style.display = "none";

  // Muestra el contenedor principal
  var page = document.getElementById("page-container");
  if (page) page.style.display = "block";
});
