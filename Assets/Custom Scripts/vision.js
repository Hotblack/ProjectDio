#pragma strict

var iseeyou : boolean = false;
var nextsee : float;
var seerate : float = .2;

function Start () {

}

function Update () {

	if(iseeyou && Time.time > nextsee){
		//nextsee = Time.time + seerate;
		print("I SEE YOU BRO");
		//transform.parent.SendMessage("iseeyou");
	}

}

function OnTriggerEnter (other:Collider){
	if(other.tag == "Player"){
		iseeyou = true;
	}
}

function OnTriggerExit (other:Collider){
	if(other.tag == "Player"){
		iseeyou = false;
		print("where'd he go?");
	}
}