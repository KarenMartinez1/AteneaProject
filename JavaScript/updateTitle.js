
function updateTitle() {
    var selectElement = document.getElementById("products");
    var selectedOption = selectElement.options[selectElement.selectedIndex].text;
    document.getElementById("product-title").textContent = selectedOption;
}
