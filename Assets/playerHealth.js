#pragma strict

var hero : GameObject;
var health : int = 3;
var isDead : boolean = false;

function Start () {

}

function Update () {
	if(health <= 0){
		print("i died!");
		Destroy (gameObject, .1);
		isDead = true;
	}
//	if (isDead) {
//		yield WaitForSeconds(5);
//		var respawn : GameObject = Instantiate (hero, transform.position, transform.rotation);
//		
//	}
}

function killYourself () {
	health-=10;
	print("I've been hit");
}