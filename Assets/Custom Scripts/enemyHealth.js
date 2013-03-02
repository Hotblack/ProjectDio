#pragma strict

var enemyhealth : int = 5;
var isdead : boolean = false;

function Start () {

}

function Update () {
	if(enemyhealth <= 0){
		print("blargh i'm dead");
		Destroy (gameObject,.5);
	}
}

function beenBackstabbed () {
	enemyhealth -= 10;
	}

function youGotShot () {
	enemyhealth -=2;
	print(enemyhealth);
}