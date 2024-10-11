$(document).ready(function() {
    
    // focus
    $('#mua-vao').focus();
    $('input[type="button"][value="State"]').prop('disabled', true);

    $('#mua-vao').blur(function() {
        let valueBuy = $(this).val();
        if ($.isNumeric(valueBuy) && valueBuy != '') {
            $('input[type="button"][value="State"]').prop('disabled', false);
        }
    });

    // car
    $('#car-type').change(function() {
        const selectedCarType = $(this).val();
        
        const carInfo = {
            'Toyota': { image: '../images/car1.jpg', price: '35000'},
            'KIA': { image: '../images/car2.jpg', price: '15000'},
            'Ford': { image: '../images/car3.jpg', price: '40000'},
            'Civic': { image: '../images/car4.jpg', price: '32000'},
            'Ferrari': { image: '../images/car5.jpg', price: '50000'},
            'Mercedes': { image: '../images/car7.jpg', price: '45000'}
        };

        const selectedCarInfo = carInfo[selectedCarType];

        $('#price').text(selectedCarInfo.price);
        $('#car-image').attr('src', selectedCarInfo.image);

    // update price
        $('input[type="button"][value="Update"]').click(function() {
            let valueBuy = $('#mua-vao').val();
            let valueSold = $('#ban-ra').val();
            
            if(valueBuy != '')
            {
                if($('input[type="radio"][value="Vàng"]').is(":checked")) 
                    $('#mua-vao-vang-update').val(valueBuy)
                if($('input[type="radio"][value="USD"]').is(":checked"))
                    $('#mua-vao-usd-update').val(valueBuy)
            }
            if(valueSold != '')
            {
                if($('input[type="radio"][value="Vàng"]').is(":checked")) 
                    $('#ban-ra-vang-update').val(valueSold)
                if($('input[type="radio"][value="USD"]').is(":checked")) 
                    $('#ban-ra-usd-update').val(valueSold)
               
            }
        })
    });
});
