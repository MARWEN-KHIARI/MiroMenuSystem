#pragma strict
//Created by Khiari Marwen email:maroien88@gmail.com
function Start () {
}

function Update(){
if(!PlayTest)return;  
}


function OnGUI () {
if(!PlayTest)return;
//	don't miss to call all function
imageTest_bgFunc ();
imageTest_menuFunc();
Button_yesFunc();
Button_noFunc();
imageTest_buttonFunc();

}

public var imageTest_bg :Texture2D;	 
function imageTest_bgFunc () {	 
GUI.DrawTexture(Rect(pcx(0),pcy(0),pcx(100),pcy(100)),imageTest_bg, ScaleMode.StretchToFill,true);	
}
public var imageTest_menu :Texture2D;
function imageTest_menuFunc () {	 
GUI.DrawTexture(Rect(pcx(4.765625),pcy(11.74497),pcx(57.26563),pcy(34.89933)),imageTest_menu, ScaleMode.StretchToFill,true);	
}

function Button_noFunc () {	 
if(Rect(pcx(38.82813),pcy(38.36689),pcx(10.3125),pcy(6.487698)).Contains(Event.current.mousePosition)){	
if(Input.GetKeyUp(KeyCode.Mouse0)){	doFunction();  } }}

function Button_yesFunc () {	 
if(Rect(pcx(50.23438),pcy(38.25504),pcx(10.54688),pcy(6.375835)).Contains(Event.current.mousePosition)){	
if(Input.GetKeyUp(KeyCode.Mouse0)){	doFunction();  } }}


public var imageTest_button :Texture2D;	 
public var imageTest_button_onClick :Texture2D;	 
public var imageTest_button_onOver :Texture2D;
private var imageTest_buttonTmp :Texture2D;
function imageTest_buttonFunc ()  {	
 	 GUI.DrawTexture(Rect(pcx(87.84),pcy(3.62),pcx(4.88),pcy(6.24)),imageTest_buttonTmp, ScaleMode.StretchToFill,true);	
 	 if(Rect(pcx(87.84),pcy(3.62),pcx(4.88),pcy(6.24)).Contains(Event.current.mousePosition)){	
 	 imageTest_buttonTmp=imageTest_button_onOver;if(Input.GetMouseButtonDown(0)){	
 	 imageTest_buttonTmp=imageTest_button_onClick;  
 	 }if(Input.GetKeyUp(KeyCode.Mouse0)){	doFunction();  }  
 	 }	else imageTest_buttonTmp=imageTest_button;	 
}


function pcx(xx:float):float{
return (xx*Screen.width*0.01);
}
function pcy(xx:float):float{
return (xx*Screen.height*0.01);
}




//	* this section must be deleted in the end *
var PlayTest:boolean=false;
function PlayTestFunc (PlayTestR:boolean) {
PlayTest=PlayTestR;
}
//  *

//	* this section must be changed *
function doFunction () {
print("you change doFunction with your instruction");
}	
//  *