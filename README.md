# Ionic-PushNotification
Aplicação Ionic utilizando push notification


Esta aplicação demostra como registrar um APP no firebase, possibilitando o recebimento de notificações.

<h3> Passos necessários </h3>
Criar um projeto no Firebase <br>
Baixar o arquivo googleSerive.json gerado pelo firebase  <br>
Na aplicação Ionic, instalar os pacotes para PushNotification, conforme a documentação. <br>
Incluir no diretorio platforms\android\app o arquivo googleSerive.json <br>
No inicializar aplicação, fazer o registro do app passando o ID do projeto firebase <br>

<br>
Feito isso, é possivel através do site firebase, enviar notificações para um ou todos os dispositivos registrados. <br>
Caso queira enviar para um dispositivo específico, é necessário armazenar o código gerado no momento registro do dispositivo.

