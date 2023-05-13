$(document).ready(function() {
    viewRooms()
})

var viewRooms = () => {
    $.ajax({
        type: 'POST',
        url: '../src/router.php',
        data: {
            choice: 'viewRooms'
        },
        success: (data) => {
            var jsonData = JSON.parse(data)
            var str = ''
            if(jsonData == ''){
                let s = ''
                s += '<div class="container text-center"> <h1>NO GUEST HOUSES FOUND</h1> </div>'
                $('#roomDiv').append(s)
            }
            jsonData.forEach(room => {
                var imgArr = room.room_img.split(" ")
                str += 
                        
                            '<div class="room col-4 my-5">' +
                                '<div class="card">'  +
                                    '<img class="card-img-top" src="../images/'+imgArr[0]+'" style="height: 212px;" alt="Room Image">' +
                                    '<div class="card-body bg-white">'+ 
                                        ' <div "class="room-name">'+ room.room_name +'</div>' +
                                        //  '<div class="room-desc">'+ room.room_details +'</div>' +
                                        '<div class="room-price d-flex justify-content-end "><a href="roomDetails.php?room_id='+room.room_id+'" style="text-decoration: none;" class="text-dark "><button class="btn btn-success    "> ₱'+room.room_price+'</button></a></div>'+
                                    '</div>'+
                                '</div>' +
                            '</div>'
            }) 
            $('#roomDiv').append(str)
        },
        error: (xhr, ajaxOptions, thrownError) => {console.log(thrownError)}
    })
}

// const app = Vue.createApp({

//   data() {
//     return {
//         rooms: [
//             {room_name: "Guest House 1", room_id: 1, room_price: 1000},
//             {room_name: "Guest House 2", room_id: 2, room_price: 1000},
//             {room_name: "Guest House 3", room_id: 3, room_price: 1000}
//         ]
//     };
//   },
//   methods: {
//     viewRooms() {
//       axios
//         .post("../src/router.php", { choice: "viewRooms" })
//         .then((response) => {
//           console.log(response)
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     },
//   },
// })
// app.mount('#app')

