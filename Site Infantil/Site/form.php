<?php


$pasta = 'Atividades';

if(!is_dir($pasta)){
  mkdir($pasta, 0755);
}

if(isset($_POST["nome"]) && ($_POST["rgm"]) && ($_POST["turma"])){

  $nome =$_POST['nome'];
  $rgm = $_POST['rgm'];
  $turma =$_POST['turma'];


$nome_arquivo = $nome.".txt";
$aberto = fopen ($nome_arquivo, mode:'a');

if ($aberto == true)
{
  

  fwrite ($aberto,"ALUNO: ".$nome . PHP_EOL);
  fwrite ($aberto,"REGISTRO: ".$rgm. PHP_EOL);
  fwrite ($aberto,"TURMA: ".$turma. PHP_EOL);
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

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./stylephp.css">
  <title>Exercicio enviado com sucesso</title>
</head>
<body>
  <main class="resposta">
    <div>
      <h3>Obrigado</h3>
      <h2>O Aluno <?php echo $nome ?> completou a atividade</h2>
     <a href="./index.html">Voltar para o site<a>
    </div>

</main>
<?php


?>

  
</body>
</html>
