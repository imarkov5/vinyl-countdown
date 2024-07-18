function hide(element) {
  element.remove();
}
function changeText(element) {
  if (element.textContent === "Login") {
    element.textContent = "Logout";
  } else {
    element.textContent = "Login";
  }
}
function addingLikes(id) {
  const span = document.getElementById(id);
  span.textContent++;
}
