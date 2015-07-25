#pragma strict
 class MiroGUIEditor extends EditorWindow {
	 @MenuItem ("MiroGui/Copy Code %g") 
	 static function CopyCode () {
		 EditorGUIUtility.systemCopyBuffer = ""+MiroGUIScript.ScriptGenrated[MiroGUIScript.ScriptGenrated.length-1];
		 Debug.Log ("you can past the code generated...");
		 }
	 @MenuItem ("MiroGui/Copy Call Method %h") 
	 static function CopyCallMethod () {
		 EditorGUIUtility.systemCopyBuffer = ""+MiroGUIScript.FunctionScriptGenrated[MiroGUIScript.FunctionScriptGenrated.length-1];
		 Debug.Log ("you can past the call method in onGUI()...");
		 }
	 @MenuItem ("MiroGui/Copy All Call Method %j") 
	 static function CopyAllCallMethod () {
		 var message1:String="";
		 for(var i:int=0;
				i<MiroGUIScript.FunctionScriptGenrated.length;
				i++){
			 message1+=""+MiroGUIScript.FunctionScriptGenrated[i];
			 }
		 EditorGUIUtility.systemCopyBuffer = message1;
		 Debug.Log ("you can past the call method in onGUI()...");
		 }
	 @MenuItem ("MiroGui/Copy All Code %k") 
	 static function CopyAllCode () {
		 var message1:String="";
		 for(var i:int=0;
				i<MiroGUIScript.ScriptGenrated.length;
				i++){
			 message1+=""+MiroGUIScript.ScriptGenrated[i];
			 }
		 EditorGUIUtility.systemCopyBuffer = message1;
		 Debug.Log ("you can past all the code generated...");
		 }
	 @MenuItem ("MiroGui/Copy General Code %t") 
	 static function CopyGeneralCode () {
		 var message1:String= 
		 "function Update(){"+
			"if(!PlayTest)return;"+
			 "}"+"var fontLabel:Font;"+
		 "var colorLabel:Color;"+" function OnGUI () {"+
			 "if(!PlayTest)return;"+
			 "GUI.skin.label.font=fontLabel;"+
			 "GUI.skin.label.normal.textColor=colorLabel;"+
			 "}"+" function pcx(xx:float):float{"+
			"return (xx*Screen.width*0.01);"+
			"}"+
		 "function pcy(xx:float):float{"+
			"return (xx*Screen.height*0.01);"+
			"}"+
		 "var PlayTest:boolean=false;"+" function PlayTestFunc (PlayTestR:boolean) {"+
			"PlayTest=PlayTestR;"+
			"}"+" function doFunction () {"+
			"print(\"you change doFunction with your instruction\");"+
			"}";
		 var message2:String= "void Update (){"+
			"if(!PlayTest)return;"+
			"}"+"public Font fontLabel;"+
		 "public Color colorLabel;"+" void OnGUI (){"+
			"if(!PlayTest)return;"+
			 "GUI.skin.label.font=fontLabel;"+
			 "GUI.skin.label.normal.textColor=colorLabel;"+
			 "}"+" float pcx ( float xx ){"+
			"return (xx*Screen.width*0.01f);"+
			"}"+
		 "float pcy ( float xx ){"+
			"return (xx*Screen.height*0.01f);"+
			"}"+
		 "bool PlayTest=false;"+" void PlayTestFunc ( bool PlayTestR ){"+
			 "PlayTest=PlayTestR;"+
			"}"+" void doFunction (){"+
			"print(\"you change doFunction with your instruction\");"+
			"}";
		 if(MiroGUIScript.javascript1)EditorGUIUtility.systemCopyBuffer = message1;
		 else EditorGUIUtility.systemCopyBuffer = message2;
		 Debug.Log ("you can past this code in new script...");
		 }
	 }
