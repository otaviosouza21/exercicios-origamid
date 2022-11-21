<?php

$pasta = 'Atividades';

if(!is_dir($pasta)){
  mkdir($pasta, 0755);
}

if(isset($_POST["nome"]) && ($_POST["rgm"]) && ($_POST["turma"]) && ($_POST["historia"])){

  $nome =$_POST['nome'];
  $rgm = $_POST['rgm'];
  $turma =$_POST['turma'];
  $historia =$_POST['historia'];
 

$nome_arquivo = $nome.".txt";
$aberto = fopen ($nome_arquivo, mode:'a');

if ($aberto == true)
{
  

  fwrite ($aberto,"ALUNO: ".$nome . PHP_EOL);
  fwrite ($aberto,"REGISTRO: ".$rgm. PHP_EOL);
  fwrite ($aberto,"TURMA: ".$turma. PHP_EOL);
  fwrite ($aberto,"HISTORIA 'MINHAS FERIAS': ".$historia. PHP_EOL);
  fwrite($aberto,"=========================".PHP_EOL);
  
}
  else
  {
    print "Arquivo inexistente";
    exit(0);
  }

}else {
  echo"não ha variaveis";
}

fclose($aberto);

$move_arquivo = "$pasta/$turma/$nome_arquivo";
rename($nome_arquivo, $move_arquivo);


?>


  
</body>
</html>
