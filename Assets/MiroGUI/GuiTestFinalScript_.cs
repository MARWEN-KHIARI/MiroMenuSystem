using UnityEngine;
using System.Collections;

public class GuiTestFinalScript_ : MonoBehaviour {


void Start (){
}

void Update (){
if(!PlayTest)return;  
}
void OnGUI (){
if(!PlayTest)return;
//	don't miss to call all function
imageTest_bgFunc ()  ;		
}
//	here you paste the code generated
	
	
public Texture2D imageTest_bg ;	 
	void imageTest_bgFunc ()  
	{	GUI.DrawTexture(new Rect(pcx(11.78f),pcy(12.27f),pcx(67.67f),pcy(49.41f)),imageTest_bg, ScaleMode.StretchToFill,true);	
		if(new Rect(pcx(26.00575f),pcy(18.51107f),pcx(-7.758621f),pcy(14.88934f)).Contains(Event.current.mousePosition)){	
			if(Input.GetMouseButtonUp(0)){	doFunction();  } }
	}
	
float pcx ( float xx  ){
return (xx*Screen.width*0.01f);
}
float pcy ( float xx  ){
return (xx*Screen.height*0.01f);
}
//	* this section must be deleted in the end *
public bool  PlayTest=false;
void PlayTestFunc ( bool PlayTestR  ){
 PlayTest=PlayTestR;
}
//  *

//	* this section must be changed *
void doFunction (){
print("you change doFunction with your instruction");
}	
//  *
}