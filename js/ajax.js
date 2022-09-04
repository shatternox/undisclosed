$("#mask1").on("click", () => {
  $.ajax({
    type: "POST",
    url: "../controller/cartController.php",
    data: "item_id=1&item_name=Secret Protector 50%&qty=1",
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
