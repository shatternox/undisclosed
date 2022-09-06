$("#mask1").on("click", () => {
  $.ajax({
    type: "POST",
    url: "../controller/cartController.php",
    data: "item_id=1&item_name=Secret Protector 50%&item_price=20&item_desc=Protect your secrecy with 50% efficiency&qty=1&action=add_to_cart",
    success: () => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Secret Protector 50% added to cart",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });
});


$("#mask2").on("click", () => {
    $.ajax({
      type: "POST",
      url: "../controller/cartController.php",
      data: "item_id=2&item_name=Secret Protector 20%&item_price=15&item_desc=Protect your secrecy with 20% efficiency&qty=1&action=add_to_cart",
      success: () => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Secret Protector 20% added to cart",
          showConfirmButton: false,
          timer: 1500,
        });
      },
    });
  });

  $("#mask3").on("click", () => {
    $.ajax({
      type: "POST",
      url: "../controller/cartController.php",
      data: "item_id=3&item_name=Hackerman 100%&item_price=9999&item_desc=No one will ever know your secret&qty=1&action=add_to_cart",
      success: () => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Hackerman 100% added to cart",
          showConfirmButton: false,
          timer: 1500,
        });
      },
    });
  });

  $("#mask4").on("click", () => {
    $.ajax({
      type: "POST",
      url: "../controller/cartController.php",
      data: "item_id=4&item_name=Classic 45%&item_price=18&item_desc=Protect your secrecy with 45% efficiency&qty=1&action=add_to_cart",
      success: () => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Classic 45% added to cart",
          showConfirmButton: false,
          timer: 1500,
        });
      },
    });
  });

  $("#mask5").on("click", () => {
    $.ajax({
      type: "POST",
      url: "../controller/cartController.php",
      data: "item_id=5&item_name=Classic 40%&item_price=10&item_desc=Protect your secrecy with 40% efficiency&qty=1&action=add_to_cart",
      success: () => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Classic 40% added to cart",
          showConfirmButton: false,
          timer: 1500,
        });
      },
    });
  });

  $("#mask6").on("click", () => {
    $.ajax({
      type: "POST",
      url: "../controller/cartController.php",
      data: "item_id=6&item_name=The Anti-social&item_price=1&item_desc=No one would even want to know you&qty=1&action=add_to_cart",
      success: () => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "The Anti-social added to cart",
          showConfirmButton: false,
          timer: 1500,
        });
      },
    });
  });

  $("#mask7").on("click", () => {
    $.ajax({
      type: "POST",
      url: "../controller/cartController.php",
      data: "item_id=7&item_name=Apocalyptic Mask 98%&item_price=150&item_desc=Protect your secrecy with 98% efficiency&qty=1&action=add_to_cart",
      success: () => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Apocalyptic Mask 98% added to cart",
          showConfirmButton: false,
          timer: 1500,
        });
      },
    });
  });

  $("#mask8").on("click", () => {
    $.ajax({
      type: "POST",
      url: "../controller/cartController.php",
      data: "item_id=8&item_name=The Developer Mask 90%&item_price=50&item_desc=A little smelly but quite effective&qty=1&action=add_to_cart",
      success: () => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "The Developer Mask 90% added to cart",
          showConfirmButton: false,
          timer: 1500,
        });
      },
    });
  });

  $("#mask9").on("click", () => {
    $.ajax({
      type: "POST",
      url: "../controller/cartController.php",
      data: "item_id=9&item_name=The Robbing Hood -99%&item_price=30&item_desc=You will attract everyone's attention&qty=1&action=add_to_cart",
      success: () => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "The Robbing Hood -99% added to cart",
          showConfirmButton: false,
          timer: 1500,
        });
      },
    });
  });


  $("#emptycart").on("click", () => {
    $.ajax({
      type: "POST",
      url: "../controller/cartController.php",
      data: "action=empty_cart",
      success: () => {
        Swal.fire({
          position: "top-end",
          icon: "warning",
          title: "Cart have been emptied!",
          showConfirmButton: false,
          timer: 1500,
        });
      },
    });
  });