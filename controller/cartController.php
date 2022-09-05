<?php
    session_start();

    /*
    
        [
            [
            "item_id" => 1, 
            "item_name"=> "asd", 
            "qty"=> 1
            ],[
            "item_id" => 1, 
            "item_name"=> "asd", 
            "qty"=> 1
            ],[
            "item_id" => 1, 
            "item_name"=> "asd", 
            "qty"=> 1
            ],
        ]
    
    */

    if(!isset($_SESSION['cart'])){
        $_SESSION['cart'] = array();
    }

    if(isset($_POST) && $_POST['action'] === "add_to_cart"){

        
        $item_id = $_POST['item_id'];
        $item_name = $_POST['item_name'];
        $qty = $_POST['qty'];

        $available = true;

        $index = 0;
        foreach($_SESSION['cart'] as $item){

            if($item["item_id"] === $item_id){
                $available = false;
                
                $_SESSION['cart'][$index]['qty'] += $qty;

                break;
            }

            $index += 1;

        }

        if($available){

            $item_add = ["item_id"=>$item_id, "item_name"=>$item_name, "qty"=>qty];

            array_push($_SESSION['cart'], $item_add);

        }



    }

?>