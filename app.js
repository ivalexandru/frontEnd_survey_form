let backgroundToggle = true;

const changeThemeBtn = document.getElementById("change-theme-btn");
let bodyStyle = document.querySelector("body").style;

function changeBackgroundColor() {
  if (backgroundToggle) {
    bodyStyle.backgroundColor = "white";
    bodyStyle.color = "black";
    backgroundToggle = false;
  } else {
    bodyStyle.backgroundColor = "black";
    bodyStyle.color = "white";
    backgroundToggle = true;
  }
}

changeThemeBtn.addEventListener("click", changeBackgroundColor);
