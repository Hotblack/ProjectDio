using UnityEngine;
using System.Collections;

public class PlatformerController : MonoBehaviour
{
	PlatformerPhysics mPlayer;
	bool mHasControl;
	//Vector3 distToGround;

	void Start () 
	{
		mHasControl = true;
		mPlayer = GetComponent<PlatformerPhysics>();
		if (mPlayer == null)
			Debug.LogError("This object also needs a PlatformerPhysics component attached for the controller to function properly");
		
	}
	
	void isGrounded () {
		
	}

	void Update () 
	{
		//distToGround = transform.TransformDirection(Vector3.down);
		//if(Physics.Raycast(transform.position,2))
			//print("There is a ground there");
		//here are the actions that are triggered by a press or a release
		if (mPlayer && mHasControl)
		{
			if (Input.GetButtonDown("Sprint"))
				mPlayer.StartSprint();
			if (Input.GetButtonUp("Sprint"))
				mPlayer.StopSprint();

			if (Input.GetKeyUp(KeyCode.LeftShift) || Input.GetKeyUp(KeyCode.RightShift))
				mPlayer.StopSprint();

			if (Input.GetKeyDown(KeyCode.S) || Input.GetKeyDown(KeyCode.DownArrow))
				mPlayer.Crouch();

			if (Input.GetKeyUp(KeyCode.S) || Input.GetKeyUp(KeyCode.DownArrow))
				mPlayer.UnCrouch();
		}
	}

	void FixedUpdate()
	{
		//here are actions where the buttons can be held for a longer period
		if (mPlayer && mHasControl)
		{
			
			if (Input.GetButton("Jump"))
				mPlayer.Jump();

			mPlayer.Walk(Input.GetAxisRaw("Horizontal"));
			
		}
	}

	public void GiveControl() { mHasControl = true; }
	public void RemoveControl() { mHasControl = false; }
	public bool HasControl() { return mHasControl; }
}

