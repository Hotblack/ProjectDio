#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter(other:Collision) {
	if (other.gameObject.tag =="enemy"){
		other.transform.SendMessage("youGotShot");
		}
}