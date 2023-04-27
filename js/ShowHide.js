var screenWidth = window.innerWidth;

if (screenWidth < 800) {
  var elementsToHide = document.querySelectorAll(".menu");
  var elementsToHid = document.querySelectorAll(".items__main");
  var elementsToHi = document.querySelectorAll(".item__assistans__img__first");
  var elementsTo = document.querySelectorAll(".footer__quick__links_pc");
  
  for (var i = 0; i < elementsToHide.length; i++) {
    elementsToHide[i].style.display = "none";
    elementsToHid[i].style.display = "none";
    elementsToHi[i].style.display = "none";
    elementsTo[i].style.display = "none";
  }
if (screenWidth > 800) {
  var elementsToHidePc = document.querySelectorAll(".footer__quick__links__mobile");
  var elemToHidePc = document.querySelectorAll(".search");
  for (var i = 0; i < elementsToHidePc.length; i++) {
    elementsToHidePc[i].style.display = "none";
    elemToHidePc[i].style.display = "none";
  }
}
}