#pragma strict
//Created by Khiari Marwen email:maroien88@gmail.com      
@script RequireComponent (Camera)
@script AddComponentMenu ("MiroGuiScript")
class MiroGUIScript extends MonoBehaviour {	

private var kx:float=0;
private var ky:float=0;

var PlayMiroGUI:boolean=true;
private var PlayTest:boolean=true;
private var affMenu:boolean=true;
private var affWind1:boolean=true;

private var c1:Vector4=new Vector4(0,0,0,0);
private var c1temp:Vector4=new Vector4(0,0,0,0);
private var compt:int=0;

function Update(){
if(Input.GetKeyUp(KeyCode.F3))PlayMiroGUI=!PlayMiroGUI;
if(Input.GetKeyUp(KeyCode.F2))affMenu=!affMenu;
if(DrawRect&&PlayMiroGUI){
if(Input.GetKeyUp(KeyCode.Mouse0)){
compt++;
if(compt==1){
	c1.x=kx;
	c1.y=ky;
}
} else if(Input.GetKeyUp(KeyCode.Mouse1)){
	c1=new Vector4(0,0,0,0);
 	compt=0;
 }
if(compt==1){
	c1.z=kx-c1.x;
	c1.w=ky-c1.y;
 }
}
}

private var skin:GUISkin;
private var bloc:Texture2D;
private var bloc2:Texture2D;
private var pointer:Texture2D;
function Awake(){
bloc = Resources.Load("bloc") as Texture2D;
bloc2 = Resources.Load("bloc2") as Texture2D;
pointer = Resources.Load("pointer") as Texture2D;
skin =  Resources.Load("MIROGUISkin") as GUISkin;
loadWork();
}
   
   
function CheckResources () : boolean {
if(pictures!=null&&bloc!=null&&pointer!=null&&pictures.Length>0)return true;
else return false;
}
		
		
private var DrawRect:boolean=false;
private var drawCodeTexturesTest:boolean=true;
				
function OnGUI () {
		if (!CheckResources ()||!PlayMiroGUI) {
			return;
		}	
	GUI.skin=skin;
if(windowRect.Contains(Event.current.mousePosition)&&(compt!=1)){ affWind1=true; } else if(!ForcedWindAff){ affWind1=false; }
if(affMenu)windowRect = GUILayout.Window (0, windowRect, wind1, "Menu");

kx=(Input.mousePosition.x/Screen.width)*100;
ky=((Screen.height - Input.mousePosition.y)/Screen.height)*100;
if(drawCodeTexturesTest)drawCodeTextures();
drawTextures();
		
codeGenAff();

if((typeG>0 && !affWind1 && !affWind2 )||(typeG>0 && !affMenu))DrawRect=true;
else DrawRect=false;

if(DrawRect){
 if(typeR==11){
	GUI.DrawTexture(Rect(pcx(c1.x),pcy(c1.y),pcx(c1.z),pcy(c1.w)),bloc2, ScaleMode.StretchToFill,true);	
	cv=c1;
 } else if(typeR==21){
	GUI.DrawTexture(Rect(pcx(c1.x),pcy(c1.y),pcx(c1.z),pcy(c1.w)),bloc, ScaleMode.StretchToFill,true);	
 }
GUI.DrawTexture(Rect(Input.mousePosition.x-50,(Screen.height - Input.mousePosition.y)-50,100,100),pointer,ScaleMode.StretchToFill,true);
}

}

private var affWind2:boolean=false;
private var compPic:int=0;
var pictures:Texture2D[];
function drawTextures(){
if(affWind2)windowRect = GUILayout.Window (0, windowRect, wind2, "Selecte Picture");
if(typeG!=4&&typeG!=5&&typeG!=0)GUI.DrawTexture(Rect(pcx(cv.x),pcy(cv.y),pcx(cv.z),pcy(cv.w)),pictures[compPic], ScaleMode.StretchToFill,true);	

}

private var ccc:Vector4[]=new Vector4[32];
private var ppp:Texture2D[]=new Texture2D[32];
private var iii:int=0;

function drawCodeTextures(){
for(var i:int=0;i<iii;i++){
//if(ccc[i].z!=0){
if(ppp[i]!=null)GUI.DrawTexture(Rect(pcx(ccc[i].x),pcy(ccc[i].y),pcx(ccc[i].z),pcy(ccc[i].w)),ppp[i], ScaleMode.StretchToFill,true);	
//else GUI.DrawTexture(Rect(pcx(ccc[i].x),pcy(ccc[i].y),pcx(ccc[i].z),pcy(ccc[i].w)),bloc, ScaleMode.StretchToFill,true);	
}
}

function ADDDrawCode(textr:Texture2D,cord:Vector4){
ccc[iii]=cord;
ppp[iii]=textr;
//saveWork
PlayerPrefs.SetInt("nbrePic",iii);
var ch1:String="";
if(textr==bloc)ch1="-1/";
else ch1=compPic+"/";
ch1+=(cord.x+"/"+cord.y+"/"+cord.z+"/"+cord.w);
PlayerPrefs.SetString(("data_"+iii),ch1);
//endsaveWork
iii++;
}
function ClearWork(){
PlayerPrefs.SetInt("nbrePic",0);
iii=0;
ccc[iii]=Vector4.zero;
ppp[iii]=null;
}
function loadWork(){
iii=PlayerPrefs.GetInt("nbrePic",0);
if(iii<=0)return;
for(var i:int=0;i<iii+1;i++){
var ch1:String=PlayerPrefs.GetString("data_"+i);
var chs:String[] = ch1.Split('/'[0]);
if(chs[0]=="-1")ppp[i]=bloc;
else { compPic=int.Parse(chs[0]); ppp[i]=pictures[compPic]; }
cv.x=float.Parse(chs[1]);
cv.y=float.Parse(chs[2]);
cv.z=float.Parse(chs[3]);
cv.w=float.Parse(chs[4]);
ccc[i]=cv;
}
if(iii>0)iii++;
}

private var scrollPosition : Vector2;
function wind2(windowID : int){
scrollPosition = GUILayout.BeginScrollView (scrollPosition, GUILayout.Width (windowRectFixed.x), GUILayout.Height (windowRectFixed.y));
for(var i:int=0;i<pictures.Length;i++){
  if(GUILayout.Button(pictures[i], GUILayout.Width(windowRectFixed.x*0.5), GUILayout.Height(windowRectFixed.x*0.5))){ compPic=i; affWind2=false;}
}
 GUILayout.EndScrollView ();
GUI.DragWindow ();
}



static var ScriptGenrated:Array=new Array();
static var FunctionScriptGenrated:Array=new Array();

private var cv:Vector4=new Vector4(25,15,50,25);

private var typeG:int=0;

private var Color_Text_Menu:Color=Color.white;
private var Size_Text_Menu:int=13;

var windowRect : Rect = Rect (20, 20, 120, 50);
private var windowRectFixed : Vector2;
function wind1(windowID : int){
GUILayout.BeginVertical("Box");
if(affWind1){
GUI.skin.box.fontSize=Size_Text_Menu;
GUI.skin.box.normal.textColor=Color_Text_Menu;

GUI.skin.textField.fontSize=Size_Text_Menu;
GUI.skin.textField.normal.textColor=Color_Text_Menu;

GUI.skin.button.fontSize=Size_Text_Menu;
GUI.skin.button.normal.textColor=Color_Text_Menu;




PictureTypeGeneral();
GUILayout.Space(10);
if(typeG!=4&&typeG!=5&&typeG!=0){
if(GUILayout.Button("Selecte picture to edit")){ 
windowRectFixed.x=windowRect.width-10;
windowRectFixed.y=windowRect.height-10;
affWind2=true;}}
GUILayout.Space(3);
CreateRectGeneral();
GUILayout.Space(10);
GenerateScriptGeneral();
if((typeG==4)&&(nameButton.Length<2))ForcedWindAff=true;
if((typeG==5)&&(textLabel.Length<2))ForcedWindAff=true;
}else {
windowRect.height=40;
windowRect.width=80;

GUI.skin.box.fontSize=15;
GUI.skin.box.normal.textColor=Color.grey;
GUILayout.Box("show menu");
}


GUILayout.EndVertical();
GUI.DragWindow ();
}

private var ForcedWindAff:boolean=false;
private var typeR:int=0;
private var typeRtmp:int=0;
function CreateRectGeneral(){
if(typeG==0)return;
switch(typeR){
case 0:
ForcedWindAff=true;
GUI.skin.button.normal.textColor=Color.red;
if(GUILayout.Button("Choose coordinate method"))typeR=5;
GUI.skin.button.normal.textColor=Color_Text_Menu;
break;
case 1:
ForcedWindAff=false;
GUI.skin.button.normal.textColor=Color.green;
if(GUILayout.Button("Change coordinate method"))typeR=5;
GUI.skin.button.normal.textColor=Color_Text_Menu;
break;
case 5:
ForcedWindAff=true;
if(typeG!=0){
	GUI.skin.button.normal.textColor=Color.red;
	if(typeG!=4){ if(GUILayout.Button("coordinate draw"))typeR=10; }
	if(typeG!=1&&typeG!=5) { if(GUILayout.Button("coordinate Dynamic"))typeR=20; }
	GUI.skin.button.normal.textColor=Color_Text_Menu;
}else {

GUI.skin.button.normal.textColor=Color.red;
GUILayout.Button("Selecte the type of draw*");	
}
GUI.skin.button.normal.textColor=Color.black;
if(GUILayout.Button("return"))typeR=0;
GUI.skin.button.normal.textColor=Color_Text_Menu;
break;
case 10:
ForcedWindAff=true;
GUI.skin.button.normal.textColor=Color.green;
GUILayout.Button("*coordinate method");
GUI.skin.button.normal.textColor=Color.cyan;
if(GUILayout.Button("graphic")){if(c1!=Vector4.zero)c1temp=c1; c1=cv; typeR=11; }
if(GUILayout.Button("number"))typeR=12;
GUI.skin.button.normal.textColor=Color_Text_Menu;
break;
case 20:
ForcedWindAff=true;
GUI.skin.button.normal.textColor=Color.green;
GUILayout.Button("*coordinate method");
GUI.skin.button.normal.textColor=Color.cyan;
if(GUILayout.Button("graphic"))typeR=21;
if(GUILayout.Button("number"))typeR=22;
GUI.skin.button.normal.textColor=Color_Text_Menu;
break;
case 12://text mn-pic
ForcedWindAff=false;
cv=CreateRect(cv);
GUI.skin.button.normal.textColor=Color.black;
if(GUILayout.Button("return"))typeR=5;
GUI.skin.button.normal.textColor=Color_Text_Menu;
break;
case 22://text
ForcedWindAff=false;
c1=CreateRect(c1);
if(cv!=Vector4.zero){if(GUILayout.Button("Same"))c1=cv;}
GUI.skin.button.normal.textColor=Color.black;
if(GUILayout.Button("return"))typeR=5;
GUI.skin.button.normal.textColor=Color_Text_Menu;
break;
case 11://draw mn-pic
ForcedWindAff=false;
GUI.skin.button.normal.textColor=Color.black;
if(GUILayout.Button("return"))typeR=5;
GUI.skin.button.normal.textColor=Color_Text_Menu;
break;
case 21://draw
ForcedWindAff=false;
GUI.skin.button.normal.textColor=Color.gray;
if(cv!=Vector4.zero){if(GUILayout.Button("Same"))c1=cv;}
GUI.skin.button.normal.textColor=Color.black;
if(GUILayout.Button("return"))typeR=5;
GUI.skin.button.normal.textColor=Color_Text_Menu;
break;
}

if(typeRtmp!=typeR){
if(typeRtmp==11)c1=c1temp;
typeRtmp=typeR;
}
GUILayout.Space(20);
}

function CreateRect(ttv:Vector4):Vector4{
var m:String;
GUILayout.BeginHorizontal();
GUILayout.Box("pos_x:");
m=GUILayout.TextField(""+ttv.x);
m=verif(m);
ttv.x=float.Parse(m);
GUILayout.EndHorizontal();

GUILayout.BeginHorizontal();
GUILayout.Box("pos_y:");
m=GUILayout.TextField(""+ttv.y);
m=verif(m);
ttv.y=float.Parse(m);
GUILayout.EndHorizontal();

GUILayout.BeginHorizontal();
GUILayout.Box("width :");
m=GUILayout.TextField(""+ttv.z);
m=verif(m);
ttv.z=float.Parse(m);
GUILayout.EndHorizontal();

GUILayout.BeginHorizontal();
GUILayout.Box("height:");
m=GUILayout.TextField(""+ttv.w);
m=verif(m);
ttv.w=float.Parse(m);
GUILayout.EndHorizontal();

if(ttv.x>100) ttv.x=100; else if(ttv.x<0) ttv.x=0;
if(ttv.y>100) ttv.y=100; else if(ttv.y<0) ttv.y=0;
if(ttv.z>100) ttv.z=100; else if(ttv.z<0) ttv.z=0;
if(ttv.w>100) ttv.w=100; else if(ttv.w<0) ttv.w=0;
return ttv;
}
function verif(s:String):String{
if(s=="")s="0";
if(s[s.Length-1]=="."[0]){s =s+"1"; }
return s;
}

function PictureTypeGeneral(){
if(typeG==0)ForcedWindAff=true;
GUI.skin.button.normal.textColor=Color.green;
GUILayout.Button("*type of draw");
GUI.skin.button.normal.textColor=Color_Text_Menu;
GUILayout.BeginHorizontal();
if(typeG==1)GUI.skin.button.normal.textColor=Color_Text_Menu;
else if(typeG!=0) GUI.skin.button.normal.textColor=Color.grey;
if(GUILayout.Button("Picture"))typeG=1;


GUILayout.BeginVertical();

if(typeG==2)GUI.skin.button.normal.textColor=Color_Text_Menu;
else if(typeG!=0) GUI.skin.button.normal.textColor=Color.grey;
if(GUILayout.Button("Simple Button"))typeG=2;


if(typeG==3)GUI.skin.button.normal.textColor=Color_Text_Menu;
else if(typeG!=0) GUI.skin.button.normal.textColor=Color.grey;
if(GUILayout.Button("Dynamic Button"))typeG=3;


if(typeG==4){
GUILayout.BeginHorizontal();
GUILayout.Box("NAME: ");
nameButton=GUILayout.TextField(nameButton,GUILayout.MinWidth(50));
GUILayout.EndHorizontal();
GUI.skin.button.normal.textColor=Color_Text_Menu;	}
else if(typeG!=0) GUI.skin.button.normal.textColor=Color.grey;
if(GUILayout.Button("Invisible Button")){ typeG=4; nameButton="";}
GUI.skin.button.normal.textColor=Color_Text_Menu;

GUILayout.EndVertical();

GUILayout.BeginVertical();
if(typeG==5){
GUILayout.BeginHorizontal();
GUILayout.Box("TEXT: ");
textLabel=GUILayout.TextField(textLabel,GUILayout.MinWidth(50));
GUILayout.EndHorizontal();
GUI.skin.button.normal.textColor=Color_Text_Menu;}
else if(typeG!=0) GUI.skin.button.normal.textColor=Color.grey;
if(GUILayout.Button("Label")){ typeG=5; textLabel="";	}
GUI.skin.button.normal.textColor=Color_Text_Menu;
GUILayout.EndVertical();

GUILayout.EndHorizontal();
}

private var affScriptGenrated:boolean=true;
function codeGenAff(){

if(affScriptGenrated&&(ScriptGenrated.length>0))GUILayout.TextArea(""+ScriptGenrated[ScriptGenrated.length-1]);

}
static var javascript1:boolean=true;
function GenerateScriptGeneral(){
var canGenerate:boolean=false;

if(typeG==0){
	canGenerate=false;
}
else if(typeG==1||typeG==5){
	if(cv!=Vector4(0,0,0,0))canGenerate=true;
	else canGenerate=false;
}
else {
	if((c1!=Vector4(0,0,0,0))&&(cv!=Vector4(0,0,0,0)))canGenerate=true;
	else canGenerate=false;
}
if(canGenerate&&!ForcedWindAff)GUI.skin.button.normal.textColor=Color.green;
else GUI.skin.button.normal.textColor=Color.red;

if(GUILayout.Button("Generate")&& canGenerate&&!ForcedWindAff){
cv.x=CeilMiro(cv.x,2); cv.y=CeilMiro(cv.y,2); cv.z=CeilMiro(cv.z,2); cv.w=CeilMiro(cv.w,2); 
c1.x=CeilMiro(c1.x,2); c1.y=CeilMiro(c1.y,2); c1.z=CeilMiro(c1.z,2); c1.w=CeilMiro(c1.w,2); 
switch(typeG){
case 1:if(javascript1)generateScriptNormalPic(); else generateScriptNormalPicC(); ADDDrawCode(pictures[compPic],cv);break;
case 5:if(javascript1)generateScriptLabel(); else generateScriptLabelC(); ADDDrawCode(bloc,cv); break;
case 2:if(javascript1)generateScriptButton(); else generateScriptButtonC(); ADDDrawCode(pictures[compPic],cv); break;
case 3:if(javascript1)generateScriptButtonDynamic(); else generateScriptButtonDynamicC(); ADDDrawCode(pictures[compPic],cv); break;
case 4:if(javascript1)generateScriptButtonInvisible(); else generateScriptButtonInvisibleC(); ADDDrawCode(bloc,cv); break;
default:print("no option selected"); break;
}
}
GUI.skin.button.normal.textColor=Color_Text_Menu;
GUILayout.Space(10);
javascript1=GUILayout.Toggle(javascript1,"JavaScript Language");
//if(ScriptGenrated.length>0)
affScriptGenrated=GUILayout.Toggle(affScriptGenrated," Show Script");
drawCodeTexturesTest=GUILayout.Toggle(drawCodeTexturesTest," Show all draw generated");
if(GUILayout.Button("clear work"))ClearWork(); 
}




function generateScriptNormalPic(){
var namePicture:String=pictures[compPic].name;
var mVar1:String="public var "+namePicture+" :Texture2D;	\r ";
var mHead:String="function "+namePicture+"Func () \r ";		
var mBody1:String="{	GUI.DrawTexture(Rect(pcx("+cv.x+"),pcy("+cv.y+"),pcx("+cv.z+"),pcy("+cv.w+")),"+namePicture+", ScaleMode.StretchToFill,true);	\r";
var mFooter:String="}";
ScriptGenrated.Add(mVar1+mHead+mBody1+mFooter);
FunctionScriptGenrated.Add(namePicture+"Func ();	");
typeG=0; 
typeR=0;
}

var textLabel:String;
function generateScriptLabel(){
var nameLabel:int=Random.Range(9,99);
var mHead:String="function Label"+nameLabel+"Func () \r ";		
var mBody1:String="{	GUI.Label(Rect(pcx("+cv.x+"),pcy("+cv.y+"),pcx("+cv.z+"),pcy("+cv.w+")),\""+textLabel+"\");	\r";
var mFooter:String="}";
ScriptGenrated.Add(mHead+mBody1+mFooter);
FunctionScriptGenrated.Add("Label"+nameLabel+"Func ();	");
typeG=0; 
typeR=0;
}
function generateScriptButtonDynamic(){
var namePicture:String=pictures[compPic].name;
var mVar1:String="public var "+namePicture+" :Texture2D;	\r ";
var mVar2:String="public var "+namePicture+"_onClick :Texture2D;	\r ";
var mVar3:String="public var "+namePicture+"_onOver :Texture2D;	\r ";
var mVar4:String="private var "+namePicture+"Tmp :Texture2D;	\r ";
var mHead:String="function "+namePicture+"Func () \r ";
var mBody1:String="{	GUI.DrawTexture(Rect(pcx("+cv.x+"),pcy("+cv.y+"),pcx("+cv.z+"),pcy("+cv.w+")),"+namePicture+"Tmp, ScaleMode.StretchToFill,true);	\r";
var mBody2:String="if(Rect(pcx("+c1.x+"),pcy("+c1.y+"),pcx("+c1.z+"),pcy("+c1.w+")).Contains(Event.current.mousePosition)){	\r"+	
	namePicture+"Tmp="+namePicture+"_onOver;"+
	"if(Input.GetMouseButtonDown(0)){	"+namePicture+"Tmp="+namePicture+"_onClick; \r }"+
	"if(Input.GetMouseButtonUp(0)){	doFunction(); \r } "+
	" }else "+namePicture+"Tmp="+namePicture+";	";
var mFooter:String="}";
ScriptGenrated.Add(mVar1+mVar2+mVar3+mVar4+mHead+mBody1+mBody2+mFooter);
FunctionScriptGenrated.Add(namePicture+"Func ();	");
typeG=0; 
typeR=0;
c1=new Vector4(0,0,0,0);
compt=0;
}

function generateScriptButton(){
var namePicture:String=pictures[compPic].name;
var mVar1:String="public var "+namePicture+" :Texture2D;	\r ";
var mHead:String="function "+namePicture+"Func () \r ";		
var mBody1:String="{	GUI.DrawTexture(Rect(pcx("+cv.x+"),pcy("+cv.y+"),pcx("+cv.z+"),pcy("+cv.w+")),"+namePicture+", ScaleMode.StretchToFill,true);	\r";
var mBody2:String="if(Rect(pcx("+c1.x+"),pcy("+c1.y+"),pcx("+c1.z+"),pcy("+c1.w+")).Contains(Event.current.mousePosition)){	\r"+
	"if(Input.GetMouseButtonUp(0)){	doFunction(); \r } }";
var mFooter:String="}";
ScriptGenrated.Add(mVar1+mHead+mBody1+mBody2+mFooter);
FunctionScriptGenrated.Add(namePicture+"Func ();	");
typeG=0;
typeR=0; 
c1=new Vector4(0,0,0,0);
compt=0;
}


private var nameButton:String="";
function generateScriptButtonInvisible(){
var mHead:String="function Button_"+nameButton+"Func () \r ";		
var mBody1:String="{	if(Rect(pcx("+c1.x+"),pcy("+c1.y+"),pcx("+c1.z+"),pcy("+c1.w+")).Contains(Event.current.mousePosition)){	\r"+
	"if(Input.GetMouseButtonUp(0)){	doFunction(); \r } }";
var mFooter:String="}";
ScriptGenrated.Add(mHead+mBody1+mFooter);
FunctionScriptGenrated.Add("Button_"+nameButton+"Func ();	");
typeG=0;
typeR=0; 
c1=new Vector4(0,0,0,0);
compt=0;
}




function generateScriptNormalPicC(){
var namePicture:String=pictures[compPic].name;
var mVar1:String="public Texture2D "+namePicture+" ;	\r ";
var mHead:String="void "+namePicture+"Func () \r ";		
var mBody1:String="{	GUI.DrawTexture(new Rect(pcx("+cv.x+"f),pcy("+cv.y+"f),pcx("+cv.z+"f),pcy("+cv.w+"f)),"+namePicture+", ScaleMode.StretchToFill,true);	\r";
var mFooter:String="}";
ScriptGenrated.Add(mVar1+mHead+mBody1+mFooter);
FunctionScriptGenrated.Add(namePicture+"Func ();	");
typeG=0; 
typeR=0;
}

function generateScriptLabelC(){
var nameLabel:int=Random.Range(9,99);
var mHead:String="void Label"+nameLabel+"Func () \r ";		
var mBody1:String="{	GUI.Label(Rect(pcx("+cv.x+"),pcy("+cv.y+"),pcx("+cv.z+"),pcy("+cv.w+")),\""+textLabel+"\");	\r";
var mFooter:String="}";
ScriptGenrated.Add(mHead+mBody1+mFooter);
FunctionScriptGenrated.Add("Label"+nameLabel+"Func ();	");
typeG=0; 
typeR=0;
}

function generateScriptButtonDynamicC(){
var namePicture:String=pictures[compPic].name;
var mVar1:String="public Texture2D "+namePicture+" ;	\r ";
var mVar2:String="public Texture2D "+namePicture+"_onClick ;	\r ";
var mVar3:String="public Texture2D "+namePicture+"_onOver ;	\r ";
var mVar4:String="private Texture2D "+namePicture+"Tmp ;	\r ";
var mHead:String="void "+namePicture+"Func () \r ";
var mBody1:String="{	GUI.DrawTexture(new Rect(pcx("+cv.x+"f),pcy("+cv.y+"f),pcx("+cv.z+"f),pcy("+cv.w+"f)),"+namePicture+"Tmp, ScaleMode.StretchToFill,true);	\r";
var mBody2:String="if(new Rect(pcx("+c1.x+"f),pcy("+c1.y+"f),pcx("+c1.z+"f),pcy("+c1.w+"f)).Contains(Event.current.mousePosition)){	\r"+	
	namePicture+"Tmp="+namePicture+"_onOver;"+
	"if(Input.GetMouseButtonDown(0)){	"+namePicture+"Tmp="+namePicture+"_onClick; \r }"+
	"if(Input.GetMouseButtonUp(0)){	doFunction(); \r } "+
	" }else "+namePicture+"Tmp="+namePicture+";		";
var mFooter:String="}";
ScriptGenrated.Add(mVar1+mVar2+mVar3+mVar4+mHead+mBody1+mBody2+mFooter);
FunctionScriptGenrated.Add(namePicture+"Func ();	");
typeG=0; 
typeR=0;
c1=new Vector4(0,0,0,0);
compt=0;
}

function generateScriptButtonC(){
var namePicture:String=pictures[compPic].name;
var mVar1:String="public Texture2D "+namePicture+" ;	\r ";
var mHead:String="void "+namePicture+"Func () \r ";		
var mBody1:String="{	GUI.DrawTexture(new Rect(pcx("+cv.x+"f),pcy("+cv.y+"f),pcx("+cv.z+"f),pcy("+cv.w+"f)),"+namePicture+", ScaleMode.StretchToFill,true);	\r";
var mBody2:String="if(new Rect(pcx("+c1.x+"f),pcy("+c1.y+"f),pcx("+c1.z+"f),pcy("+c1.w+"f)).Contains(Event.current.mousePosition)){	\r"+
	"if(Input.GetMouseButtonUp(0)){	doFunction(); \r } }";
var mFooter:String="}";
ScriptGenrated.Add(mVar1+mHead+mBody1+mBody2+mFooter);
FunctionScriptGenrated.Add(namePicture+"Func ();	");
typeG=0;
typeR=0; 
c1=new Vector4(0,0,0,0);
compt=0;
}



function generateScriptButtonInvisibleC(){
var mHead:String="void Button_"+nameButton+"Func () \r ";		
var mBody1:String="{	if(new Rect(pcx("+c1.x+"f),pcy("+c1.y+"f),pcx("+c1.z+"f),pcy("+c1.w+"f)).Contains(Event.current.mousePosition)){	\r"+
	"if(Input.GetMouseButtonUp(0)){	doFunction(); \r } }";
var mFooter:String="}";
ScriptGenrated.Add(mHead+mBody1+mFooter);

FunctionScriptGenrated.Add("Button_"+nameButton+"Func ();	");
typeG=0;
typeR=0; 
c1=new Vector4(0,0,0,0);
compt=0;
}




function CeilMiro(Number2Ceil:float,NumberOfNumber2Ceil:int):float{
NumberOfNumber2Ceil--;
var s:String=Number2Ceil.ToString();
var sD : String[] = s.Split(char.Parse("."));
  if(sD.Length==2){
  var s1:String=sD[0];
  var s2:String=sD[1];
  var c:char;
  var si:int=0;
  var sip:int=0;
  var m:String;
  
  if(NumberOfNumber2Ceil<s2.Length){
  for(var i:int=Mathf.Min(s2.Length-1,NumberOfNumber2Ceil+2); i>NumberOfNumber2Ceil-1; i--){  
  m=""+s2[i];
  si=int.Parse(m);  
  si+=sip;  
  if(si>5)sip=1; else sip=0;  
  c=(si.ToString())[0];
  }
  s2=s2.Replace(s2[NumberOfNumber2Ceil],c);
  s2=s2.Substring(0,NumberOfNumber2Ceil+1);    
  s=s1+"."+s2;
 }}
 return float.Parse(s);
}


function pcx(xx:float):float{
return (xx*Screen.width*0.01);
}
function pcy(xx:float):float{
return (xx*Screen.height*0.01);
}

}