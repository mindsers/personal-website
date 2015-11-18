<?php

#
# NMailing.api.php
#
# Copyright (c) 2014, WINCIEL.
# All rights reserved.
#
# Created 24/09/2014 by Nathanael Cherrier.
# Updated 15/10/2014 by Nathanael Cherrier.
#
# Sample :
# $mail = new NMail();
# $mail->setParams($_from, $_to, $_obj, $_msg_tmp)->send();
#

namespace Mindsers\API\NMailingApi;

class NMail{

	private $boundary;
	private $nextline;
	private $mail;
	private $header;

	private $to;
	private $from;
	private $msg;
	private $object;

	function __construct(){
		$this->boundary = "-----=".md5(rand());

		$this->to = new NContact();
		$this->from = new NContact();
		$this->msg = "";
		$this->object = "";
		$this->mail = "";
		$this->header = "";
		$this->nextline = "";
	}

	public function send(){
		$this->mount();
		$result = FALSE;

		if($this->msg == "" || $this->to->getAddrMail() == "" || $this->from->getAddrMail() == "" || $this->object == ""){
		}else {
			$result = mail($this->to->getAddrMail(), $this->object, $this->mail, $this->header);
		}

		return $result;
	}

	private function mount(){
		$hdr = "From: \"". $this->from->getSocialName() ."\"<". $this->from->getAddrMail() .">".$this->nextline;
		$hdr.= "Reply-to: <" . $this->from->getAddrMail() .">". $this->nextline;
		$hdr.= "MIME-Version: 1.0 ".$this->nextline;
		$hdr.= "Content-Type: multipart/alternative; boundary=\"".$this->boundary."\"".$this->nextline;

		$this->header = $hdr;

		$mail_txt = "Bonjour ". $this->to->getSocialName() .",\n\nvotre client mail ne sait pas lire les mails HTML.\nNous vous conseillons de mettre votre client mail a jour.\n\nCordialement,\n\n". $this->from->getSocialName();

		//=====Création du message.
		$msg_tmp = $this->nextline."--".$this->boundary.$this->nextline;
		//=====Ajout du message au format texte.
		$msg_tmp.= "Content-Type: text/plain; charset=\"ISO-8859-1\"".$this->nextline;
		$msg_tmp.= "Content-Transfer-Encoding: 8bit".$this->nextline;
		$msg_tmp.= $this->nextline.$mail_txt.$this->nextline;
		//==========
		$msg_tmp.= $this->nextline."--".$this->boundary.$this->nextline;
		//=====Ajout du message au format HTML
		$msg_tmp.= "Content-Type: text/html; charset=\"ISO-8859-1\"".$this->nextline;
		$msg_tmp.= "Content-Transfer-Encoding: 8bit".$this->nextline;
		$msg_tmp.= $this->nextline.$this->msg.$this->nextline;
		//==========
		$msg_tmp.= $this->nextline."--".$this->boundary."--".$this->nextline;
		$msg_tmp.= $this->nextline."--".$this->boundary."--".$this->nextline;
		//==========

		$this->mail = $msg_tmp;

		return $this;
	}

	public function setParams(NContact $_from, NContact $_to, $_obj, $_msg_tmp){
		$this->setSender($_from);
		$this->setRecipient($_to);
		$this->setObject($_obj);
		$this->setMessage($_msg_tmp);

		return $this;
	}

	public function setSender(NContact $_from){
		$this->from = $_from;

		return $this;
	}

	public function getSender(){
		
		return $this->from;
	}

	public function setRecipient(NContact $_to){
		$this->to = $_to;

		if (!preg_match("#^[a-z0-9._-]+@(hotmail|live|msn).[a-z]{2,4}$#", $this->to->getAddrMail()))
		{
			$this->nextline = "\r\n";
		}
		else
		{
			$this->nextline = "\n";
		}

		return $this;
	}

	public function getRecipient(){

		return $this->to;
	}

	public function setMessage($_msg){
		$this->msg = $_msg;

		return $this;
	}

	public function getMessage(){

		return $this->msg;
	}

	public function setObject($_obj){
		$this->object = $_obj;

		return $this;
	}

	public function getObject(){

		return $this->object;
	}

	public function getMountMail(){
		$this->mount();

		if($this->msg == "" || $this->to->getAddrMail() == "" || $this->from->getAddrMail() == "" || $this->object == ""){
			return "";
		}

		return $this->mail;
	}

	public function getMountHeader(){
		$this->mount();

		if($this->msg == "" || $this->to->getAddrMail() == "" || $this->from->getAddrMail() == "" || $this->object == ""){
			return "";
		}

		return $this->header;
	}
}

class NContact{
	private $name;
	private $firstname;
	private $mail;
	private $id_infocloud;

	function __construct(){
		$this->name = "";
		$this->firstname = "";
		$this->mail = "";

	}

	public function setID($_id){
		$this->id_infocloud = $_id;

		return $this;
	}

	public function getID(){

		return $this->id_infocloud;
	}

	public function setName($_name){
		$this->name = $_name;

		return $this;
	}

	public function getName(){

		return $this->name;
	}

	public function setFirstname($_frstname){
		$this->firstname = $_frstname;

		return $this;
	}

	public function getFirstname(){

		return $this->firstname;
	}

	public function getSocialName(){
		if ($this->firstname == "") {
			return $this->name;
		}

		return $this->firstname . " " . $this->name;
	}

	public function setAddrMail($_addr){
		$this->mail = $_addr;

		return $this;
	}

	public function getAddrMail(){

		return $this->mail;
	}
}