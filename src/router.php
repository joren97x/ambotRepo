<?php 
    session_start();
    require './backend.php';

    if (isset($_POST["choice"])) {
        switch ($_POST["choice"]) {
            case 'register':
                $back = new backend();
                echo $back->register($_POST["firstname"], $_POST["lastname"], $_POST['email'], $_POST['password'], $_POST['userType']);
                break;
            // case 'registeradmin':
            //     $back = new backend();
            //     echo $back->registeradmin($_POST["username_admin"], $_POST["password_admin"], $_POST["email_admin"]);
            //     break;
            case 'login':
                $back = new backend();
                echo $back->login($_POST["email"], $_POST["password"]);
                break;
            case 'adminLogin':
                $back = new backend();
                echo $back->adminLogin($_POST["email"], $_POST["password"]);
                break;
            case 'viewRooms':
                $back = new backend();
                echo $back->displayRooms();
                break;
            case 'viewRoomDetails':
                $back = new backend();
                echo $back->viewDetails($_POST['roomId']);
                break;
            case 'viewReservation':
                $back = new backend();
                echo $back->viewReservations();
                break;
            case 'viewReservationUser':
                $back = new backend();
                echo $back->viewReservation($_POST['user_id']);
                break;
            case 'deleteReservation':
                $back = new backend();
                echo $back->deleteRes($_POST['reservation_id']);
                break; 
            case 'deleteGuestHouse':
                $back = new backend();
                echo $back->deleteGuestHouse($_POST['room_id']);
                break;   
            case 'updateGuestHouse':
                $back = new backend();
                echo $back->updateGuestHouse($_POST['room_id'], $_POST["room_name"], $_POST["room_details"], $_POST["room_price"], $_POST["room_location"], $_POST["room_link"], $_POST['room_no']);
                break;
            case 'createRoom':
                $back = new backend();
                echo $back->createRoom($_POST["roomName"], $_POST["roomDetails"], $_POST["roomPrice"], $_POST["roomLocation"], $_POST["roomLink"], $_POST["roomImg"], $_POST['roomNo']);
                break;
            
            // case 'view':
                $back = new backend();
                echo $back->viewApplicants();
                break;
            // case 'changepassword':
                $back = new backend();
                echo $back->changepassword($_POST["newpassword"]);
                break;
            // case 'removeapplicant':
                $back = new backend();
                echo $back->deleteApplicant($_POST["id"]);
                break;
            // case 'displayCard':
                $back = new backend();
                echo $back->displayCard($_POST["contact"], $_POST["email"]);
                break;
            case 'confirmRes':
                $back = new backend();
                echo $back->confirmRes($_POST['room_id'], $_POST["firstname"], $_POST["middlename"], $_POST["lastname"], $_POST["address"], $_POST["contact_no"], $_POST["payment_process"], $_POST['room_price'], $_POST['user_id']);
                break;
            default:
                # code...
                break;
        }
    }


?>