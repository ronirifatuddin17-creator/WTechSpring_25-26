function calculate_total() {
    var price = document.getElementById("UnitPrice").value;
    var quantity = document.getElementById("Quantity").value;
}
if(quantity < 0) {
    alert("Quantity cannot be negative");
    document.getElementById("Quantity").value = 0;
    quantity = 0;
}