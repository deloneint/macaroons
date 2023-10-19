'use strict'

$(document).ready(function () {

    $('#submit').click(function () {
        let product = $('#product');
        let name = $('#name');
        let phone = $('#phone');
        $('.error-input').hide();
        $('.input').css('border-color', 'rgb(130, 19, 40)');
        let hasError = false;

        if (!product.val()) {
            $('#error-input-product').show();
            product.css('border-color', 'red');
            let hasError = true;
        }
        if (!name.val()) {
            $('#error-input-name').show();
            name.css('border-color', 'red');
            let hasError = true;
        }
        if (!phone.val()) {
            $('#error-input-phone').show();
            phone.css('border-color', 'red');
            let hasError = true;
        }

        if (!hasError) {
            let loader = $('.loader-block');
            loader.css('display', 'flex');
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: { product: product.val(), name: name.val(), phone: phone.val() }
            })
                .done(function (msg) {
                    loader.hide();
                    if (msg.success) {
                        $('.order-form').hide();
                        $('.order-form-thanks').css('display', 'flex');
                    } else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ.');
                    }
                });
        }
    })

})