"use strict"
// ***************************************************
// Shopping Cart functions

let shoppingCart = (function () {
    // Private methods and properties
    let cart = [];

    function Item(name, price, count) {
        this.name = name
        this.price = price
        this.count = count
    }

    function saveCart() {
        localStorage.setItem("shoppingCart", JSON.stringify(cart));

        // console.log(JSON.stringify(cart));
    }

    function loadCart() {
        cart = JSON.parse(localStorage.getItem("shoppingCart"));
        if (cart === null) {
            cart = []
        }
    }

    loadCart();


    /**
     * @description // Public methods and properties
     * @param {*} name 
     * @param {*} price 
     * @param {*} count 
     * @returns 
     */
    let obj = {};
    obj.addItemToCart = function (name, price, count) {
        for (let i in cart) {
            if (cart[i].name === name) {
                cart[i].count += count;
                saveCart();
                return;
            }
        }

        console.log("addItemToCart:", name, price, count);

        let item = new Item(name, price, count);
        cart.push(item);
        saveCart();
    };

    /**
     * @description
     * @param {*} name 
     * @param {*} count 
     */
    obj.setCountForItem = function (name, count) {
        for (let i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
        saveCart();
    };


    /**
     * @description Removes one item
     * @param {*} name 
     */
    obj.removeItemFromCart = function (name) {
        for (let i in cart) {
            if (cart[i].name === name) {
                cart[i].count--;
                if (cart[i].count === 0) {
                    cart.splice(i, 1);
                }
                break;
            }
        }
        saveCart();
    };

    /**
     * @description removes all item name
     * @param {*} name 
     */
    obj.removeItemFromCartAll = function (name) {
        for (let i in cart) {
            if (cart[i].name === name) {
                cart.splice(i, 1);
                break;
            }
        }
        saveCart();
    };

    /**
     * @description clear Cart
     */
    obj.clearCart = function () {
        cart = [];
        saveCart();
    }

    /**
     * @description Cart Counter return total count
     * @returns totalCount
     */
    obj.countCart = function () {
        let totalCount = 0;
        for (let i in cart) {
            totalCount += cart[i].count;
        }

        return totalCount;
    };

    /**
     * @description correct number format
     * @returns totalCost
     */
    obj.totalCart = function () { // -> return total cost
        let totalCost = 0;
        for (let i in cart) {
            totalCost += cart[i].price * cart[i].count;
        }
        return totalCost.toFixed(2);
    };

    obj.discountCart = function (discount) { // -> return discount cost
        let totalCost = 0;
        for (let i in cart) {
            totalCost += (cart[i].price * cart[i].count) * ((100 - discount) / 100);
        }
        return totalCost.toFixed(2);
    };

    obj.voucherCart = function (voucher) { // -> return total cost
        let totalCost = 0;

        for (let i in cart) {
            totalCost += (cart[i].price * cart[i].count) - voucher;
        }
        return totalCost.toFixed(2);
    };

    /**
     * 
     * @returns array of items
     */
    obj.listCart = function () { // -> array of Items
        let cartCopy = [];

        // console.log("Listing cart");
        // console.log(cart);

        for (let i in cart) {

            // console.log(i);

            let item = cart[i];
            let itemCopy = {};
            for (let p in item) {
                itemCopy[p] = item[p];
            }
            itemCopy.total = (item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy);
        }
        return cartCopy;
    };

    // ----------------------------
    return obj;
})();