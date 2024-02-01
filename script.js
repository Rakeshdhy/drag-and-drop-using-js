const lists = document.getElementsByClassName("list");
const leftBox = document.getElementById("left-box");
const rightBox = document.getElementById("right-box");

for (list of lists) {
  list.addEventListener("dragstart", function (e) {
    let listSelected = e.target;

    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    rightBox.addEventListener("drop", function (e) {
      rightBox.appendChild(listSelected);
    });

    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    leftBox.addEventListener("drop", function (e) {
      leftBox.appendChild(listSelected);
    });
  });
}
