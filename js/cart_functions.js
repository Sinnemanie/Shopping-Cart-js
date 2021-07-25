"use strict";

function displayCart() {
    let cartArray = shoppingCart.listCart();
    // console.log(cartArray);
    let output = "";

    for (let i in cartArray) {
        output += "<li class='list-group-item'>"
            + cartArray[i].name + "<br />"
            + "<div class='btn-group' role='group' aria-label='cart buttons'>"
            + " <input min='0' class='item-count form-control' type='number' data-name='"
            + cartArray[i].name
            + "' value='" + cartArray[i].count + "' >"
            + " <button class='plus-item btn btn-sm btn-primary' data-name='"
            + cartArray[i].name + "'>+</button>"
            + " <button class='subtract-item btn btn-sm btn-primary' data-name='"
            + cartArray[i].name + "'>-</button>"
            + " <button class='delete-item btn btn-sm btn-primary text-end' data-name='"
            + cartArray[i].name + "'>löschen</button>"
            + "</div>"
            + "<br />"
            + " x " + cartArray[i].price
            + " = " + cartArray[i].total
            + "</li>";
    }

    $("#show-cart").html(output);
    $("#count-cart").html(shoppingCart.countCart());
    $("#total-cart").html(shoppingCart.totalCart());

    const discount = 10;
    $("#discount-cart").html(shoppingCart.discountCart(discount));

    $("#rabattEingabe").on("change", function(){
        let eingabe = $(this).val();
        alert(eingabe);
        $("#discount-cart").html(shoppingCart.discountCart(eingabe));
    });
    
    const voucher_JUL = 15;
    $("#voucher-cart").html(shoppingCart.voucherCart(voucher_JUL));
}