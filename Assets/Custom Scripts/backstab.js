#pragma strict

var backstab : boolean = false;
var nextbackstab : float;
var stabrate : float = 1.5;

function Start () {

}

function Update () {

	if(backstab && Input.GetButton("Fire1") && Time.time > nextbackstab){
		nextbackstab = Time.time + stabrate;
		print("Dude I got so backstabbed");
		transform.parent.SendMessage("beenBackstabbed");
	}

}

function OnTriggerEnter (other:Collider){
	if(other.tag == "Player"){
		backstab = true;
	}
}

function OnTriggerExit (other:Collider){
	if(other.tag == "Player"){
		backstab = false;
	}
}