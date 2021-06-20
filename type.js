text = "EasyTab";
i = 0;
function type(){ 
str = text.substr(0,i);
txt.innerHTML = str + ">";
i++;
if (i>text.length){
	str = str.substr(0,str.length-0)
	txt.innerHTML = str
	return;
}
setTimeout("type()",300);
}


    function openDialog(){
        document.getElementById('light').style.display='block';
        document.getElementById('fade').style.display='block'
    }
    function closeDialog(){
        document.getElementById('light').style.display='none';
        document.getElementById('fade').style.display='none'
    }


var isPiss=0;
document.onkeydown=function(event){
 var e = event || window.event || arguments.callee.caller.arguments[0];
 if(e && e.keyCode==27){ // 按 Esc
  closeDialog();
 }
 if(e && e.keyCode==13){
 	openDialog();
 }
};