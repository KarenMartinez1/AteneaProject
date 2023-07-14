var unitCount = 0;

function incrementUnit() {
  unitCount++;
  updateUnitCount();
  updateIcon();
}

function decrementUnit() {
  if (unitCount > 0) {
    unitCount--;
    updateUnitCount();
    updateIcon();
  }
}

function updateUnitCount() {
  var unitCountElement = document.getElementById("unit-count");
  unitCountElement.textContent = unitCount;
}

function updateIcon() {
  var iconElement = document.getElementById("icon");

  if (unitCount <=1 ) {
    iconElement.className = "fas fa-trash-alt";
  } else {
    iconElement.className = "fas fa-minus-circle";
  }
}

window.onload = function() {
    updateIcon();
  };