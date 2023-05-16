
$(document).ready(function() {
    seeRoomInfo()
    
})

const confirmReservation = (res_status) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const formattedDate = year + '-' + month + '-' + day;
    $.ajax({
        type: 'POST',
        url: '../src/router.php',
        data: {
            choice: 'confirmRes',
            room_id: $('#room_id').val(),
            user_id: $('#user_id').val(),
            firstname: $('#firstname').val(),
            middlename: $('#middlename').val(),
            lastname: $('#lastname').val(),
            address: $('#address').val(),
            contact_no: $('#contact_no').val(),
            room_price: $('#room_price').val(),
            status: res_status,
            date: formattedDate,
            payment_process: $('#payment_process').val()
        }, 
        success: (data) => {
            console.log(data)
        },
        error: (xhr, ajaxOptions, thrownError) => {console.log(thrownError);}
    })
}
const seeRoomInfo = () => {

    $.ajax({
        type: 'POST',
        url: '../src/router.php',
        data: {
            choice: 'viewRoomDetails',
            roomId: $('#room_id').val()
        },
        success: (data) => {

            var jsonData = JSON.parse(data)
            var imgArr = jsonData.room_img.split(" ")
            var numericAmount = parseFloat(jsonData.room_price);
            var formattedAmount = numericAmount.toLocaleString(undefined, { minimumFractionDigits: 0, style: 'currency', currency: 'PHP' });
            let str = ''
            $('#room_price').val(jsonData.room_price)
            str += '<img src="../images/'+imgArr[0]+'" id="room_image" class="rounded m-4" style="width: 150px; height: 150px;">'+
                       '<label><h4>'+ jsonData.room_name +'</h4></label>'+
                    '<div class="row m-3">'+
                    '<hr>'+
                        '<h5>Price Details</h5>'+
                        '<h6>'+formattedAmount+'</h6>'+
                    '</div>'

            $('#paymentDetailDiv').append(str)

        },
        error: (xhr, ajaxOptions, thrownError) => {console.log(thrownError)}
    })

}

const checkForm = () => {
    return $('#firstname').val() != '' && $('#middlename').val() != '' && $('#lastname').val() != '' && $('#address').val() != '' && $('#contact_no').val() != '' && $('#payment_process').val() != '' ? true : false
} 
