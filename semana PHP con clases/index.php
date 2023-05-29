<?php
// include  'menu.php';
//  incluye el archivo pero si no lo encuentra se cae completamnt 


 require  'menu.php';
 require  'footer.php';
 require  'plantilla.php';
// con require si no lo encuentra no se caiga, la pagina sigue 
$plantilla=new plantilla();

?>

<!doctype html>
<html lang="en">

<head>
  <title>Clase PHP</title>
  <!-- Required meta tags --s>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS v5.2.1 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">

</head>

<body>
  <header>
  <?php 
    echo $plantilla  -> getMenu();
    ?>
  </header>
  <main>
    <?php 
    $nombrePagina='Clase HP';
    
    ?>
  </main>


  
  <footer >
    <?php
       echo $plantilla  -> getFooter();
      ?>
  </footer>
  <!-- Bootstrap JavaScript Libraries -->
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
    integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
  </script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
    integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
  </script>
</body>

</html>