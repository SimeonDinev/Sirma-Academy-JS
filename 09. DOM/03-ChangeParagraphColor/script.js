function changeParagraphBackgroundColor() {
  const x = document.querySelector("p");

  if (x.style.backgroundColor === "aquamarine") {
    x.style.backgroundColor = "antiquewhite";
  } else {
    x.style.backgroundColor = "aquamarine";
  }
}
