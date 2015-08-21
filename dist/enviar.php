<?php
 require_once "Mail.php";
 
  @$nombre = addslashes($_POST['nombre']);
  @$localidad = addslashes($_POST['localidad']);
  @$direccion = addslashes($_POST['direccion']);
  @$telefono = addslashes($_POST['telefono']);
  @$email = addslashes($_POST['email']);
  @$mensaje = addslashes($_POST['mensaje']);

 $from = "<$email>";
 $to = "<info@axelpasacalles.com.ar>";
 $subject = "Contacto Pasacalles";
 $body = "$nombre ha enviado un mensaje\n"
  . "\n"
  . "Nombre: $nombre\n"
  . "Localidad: $localidad\n"
  . "Direccion: $direccion\n"
  . "Telefono: $telefono\n"
  . "Email: $email\n"
  . "Mensaje: $mensaje\n"
  . "\n";
 
 $host = "mail.axelpasacalles.com.ar";
 $username = "axelpasc";
 $password = "576534";
 
 $headers = array ('From' => $from,
   'To' => $to,
   'Subject' => $subject);
 $smtp = Mail::factory('smtp',
   array ('host' => $host,
     'auth' => true,
     'username' => $username,
     'password' => $password));
 
 $mail = $smtp->send($to, $headers, $body);
 
 if (PEAR::isError($mail)) {
   echo("<p>" . $mail->getMessage() . "</p>");
  } else {
   echo("<script type=\"text/javascript\">alert(\"Gracias, su mensaje se envio correctamente.\");</script>");
   echo "<script language=\"JavaScript\" type=\"text/javascript\">

	var pagina=\"index.html\"
	function redireccionar() 
	{
	location.href=pagina
	} 
	setTimeout (\"redireccionar()\", 2000);
	
	</script>";
	  }
 ?>