
<?php
//nombre
class plantilla{
//atributos
public $menu;
public $footer;



//constructr
    public function __construct()
    {
        $menu='<!-- Footer -->
        <footer class="page-footer font-small blue">
        
          <!-- Copyright -->
          <div class="footer-copyright text-center py-3 bg-info">© 2020 Copyright:
            <a href="/"> MDBootstrap.com</a>
          </div>
          <!-- Copyright -->
        
        </footer>
        <!-- Footer -->';
        $footer= '<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>';
      
    }

    // metodos void y set

    public function setMenu($menu){
        $this ->menu=$menu;
    }
    public function getMenu(){
        return  $this->menu;

    }

    public function setFooter($footer){
        $this ->footer=$footer;
    }
    public function getFooter(){
        return  $this->footer;

    }

}//fin de a clase
// $plantilla=new plantilla('','','','');

// $plantilla ->setMenu('Geo');

// echo $plantilla -> getMenu();



?>


