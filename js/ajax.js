$("#mask1").on("click", () => {
  $.ajax({
    type: "POST",
    url: "../controller/cartController.php",
    data: "item_id=1&item_name=Secret Protector 50%&qty=1&action=add_to_cart",
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
      data: "item_id=2&item_name=Secret Protector 20%&qty=1&action=add_to_cart",
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
      data: "item_id=3&item_name=Hackerman 100%&qty=1&action=add_to_cart",
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
      data: "item_id=4&item_name=Classic 45%&qty=1&action=add_to_cart",
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
      data: "item_id=5&item_name=Classic 40%&qty=1&action=add_to_cart",
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
      data: "item_id=6&item_name=The Anti-social&qty=1&action=add_to_cart",
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
      data: "item_id=7&item_name=Apocalyptic Mask 98%&qty=1&action=add_to_cart",
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
      data: "item_id=8&item_name=The Developer Mask 90%&qty=1&action=add_to_cart",
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
      data: "item_id=9&item_name=The Robbing Hood -99%&qty=1&action=add_to_cart",
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