<?php

    require("includes/header.inc.php"); 

    if($_COOKIE['special_admin_cookie'] !== 'nYyjJdJoeMvftXFuY9mt'){
        die("You are not authorized");
    }


?>

<section class="book_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>
            Admin Special Feature
        </h2>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form_container">
            <form method="POST" action="./controller/maskController.php" enctype="multipart/form-data">
              <div>
                <input type="text" class="form-control" placeholder="Command" />
              </div>
              <div class="btn_box">
                <button>
                  Execute
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>


<?php




    require("includes/footer.inc.php");
    

?>