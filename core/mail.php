<?php
require_once('./lib/NMailing.api.php');

use Mindsers\API\NMailingApi\NContact;
use Mindsers\API\NMailingApi\NMail;

if((isset($_POST['mail-nom']) && $_POST['mail-nom'] != '') && (isset($_POST['mail-addr']) && $_POST['mail-addr'] != '')){
    $nom_emetteur = $_POST['mail-nom'];
    $addr_emetteur = $_POST['mail-addr'];
    $objet_email = 'nathanaelcherrier.com : ' . (isset($_POST['mail-objet'])?$_POST['mail-objet']:'objet vide');
    $message_email = isset($_POST['mail-message'])?$_POST['mail-message']:'';
    
    $emetteur = new NContact();
    $me = new NContact();
    
    $me->setName($nom_emetteur);
    $emetteur->setAddrMail($addr_emetteur);
    
    $me->setName('Nathanaël Cherrier');
    $me->setAddrMail('dev@nathanaelcherrier.com');
    
    $mail = new NMail();
    $mail->setParams($emetteur, $me, $objet_email, $message_email)->send();
    
    exit('{ "status": 0 }');
}
else
{
    exit('{ "status": 1 }');
}

header('Location: /en/');