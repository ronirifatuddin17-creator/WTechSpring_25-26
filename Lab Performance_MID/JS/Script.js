function calculate_total() {
    var price = document.getElementById("UnitPrice").value;
    var quantity = document.getElementById("Quantity").value;
}
if(quantity < 0) {
    alert("Quantity cannot be negative");
    document.getElementById("Quantity").value = 0;
    quantity = 0;
}
var total = price * quantity * 30;
document.getElementById("TotalPrice").value = total;
if(total > 1000) {
    alert("You are eligible for a gift coupon!");
}