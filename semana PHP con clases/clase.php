
<?php
//nombre
class persona{
//atributos
public $nombre;
public $cedula;
public $apellido;
public $correo;


//constructr
    public function __construct($nombre, $cedula, $apellido, $correo)
    {
        $this -> $nombre=$nombre;
        $this -> $cedula= $cedula;
        $this -> $apellido= $apellido;
        $this -> $correo= $correo;

    }

    // metodos void y set

    public function setNombre($nombre){
        $this ->nombre=$nombre;
    }
    public function getNombre(){
        return  $this->nombre;

    }

}//fin de a clase
$persona=new persona('','','','');

$persona ->setNombre('Geo');

echo $persona -> getNombre();



?>


