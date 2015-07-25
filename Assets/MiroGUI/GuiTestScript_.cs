using UnityEngine;
using System.Collections;

public class GuiTestScript_ : MonoBehaviour {

	
void Start (){
}

void Update (){
if(!PlayTest)return;  
}
	
public Font fontLabel;
public Color colorLabel;
void OnGUI (){
if(!PlayTest)return;
GUI.skin.label.font=fontLabel;
GUI.skin.label.normal.textColor=colorLabel;
//	don't miss to call all function
		
		
		
}	
//	here you paste the code generated
























//	* this section must be changed *
void doFunction (){print("you change doFunction with your instruction");}
float pcx ( float xx  ){return (xx*Screen.width*0.01f);}
float pcy ( float xx  ){return (xx*Screen.height*0.01f);}
//this section must be deleted in the end *
public bool  PlayTest=false; 	void PlayTestFunc ( bool PlayTestR  ){ PlayTest=PlayTestR;}

}