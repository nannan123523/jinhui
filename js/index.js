$(function(){
	var gaogu=screen.width
console.log(gaogu)
	if(gaogu<980)
{
	$(".yongyuan").addClass('jiashang3')
		
}else if(980<gaogu<1400){
	$(".yongyuan").addClass('jiashang4')
	}
	else if(1600>gaogu>1400){
		$(".yongyuan").addClass('jiashang')
	}else if(1900>gaogu>1600){
		$(".yongyuan").addClass('jiashang1')
	}

			
		var timer = setInterval(function(){
doItPerSecond();
},10)
   
var num = 0;
function doItPerSecond() {

   num++;

   $("#shuzi").html(num+'%')
   if(num===100){
   	clearInterval(timer)
   $('#jia').addClass('loaded');

$('#loader-wrapper .load_title').remove();
   }
}
	function preloader() {
	
                

}
	var niu=$('#bian').attr('src')

	setInterval(function(){
		if(niu==='https://shentiechige-1259704124.cos.ap-guangzhou.myqcloud.com/睁眼左胡桃.png'){
				console.log(124)
			$('#bian').attr('src','https://shentiechige-1259704124.cos.ap-guangzhou.myqcloud.com/闭眼左胡桃.png')
		}
			},1600)
	setTimeout(
		function(){
				setInterval(function(){
		if(niu){
			console.log(123)
			$('#bian').attr('src','https://shentiechige-1259704124.cos.ap-guangzhou.myqcloud.com/睁眼左胡桃.png')
		}
			},1600)
		}
	,800
	)

	console.log(niu)
	var url = encodeURIComponent(location.href.split('#')[0])
console.log(url)

var signUrl = window.location.href.split('#')[0]; 
console.log(signUrl)
$.ajax({ url: "http://47.106.128.238:8080/config?"+url, type: "post",
data: { signUrl: signUrl }, 
success: function (data) { 
	console.log("wx.config() ---> 接收后台返回的参数");
	console.log(data)
wx.config({ 
	debug: false,
	appId: data.appid,
	timestamp: data.timestamp, 
	nonceStr: data.nonceStr,
	signature: data.signature,
	jsApiList: ['onMenuShareAppMessage',
                    'onMenuShareTimeline',
                    'chooseWXPay',
                    'showOptionMenu',
                    "updateAppMessageShareData",
                    "hideMenuItems",
                    "showMenuItems",
                    "onMenuShareTimeline",
                    'onMenuShareAppMessage'] }),
      wx.ready(function(){
          var shareData = {
             title: '12.6大仟里活动',
             desc: '12.6大仟里活动',
              link: location.href,
            imgUrl: 'https://shentiechige-1259704124.cos.ap-guangzhou.myqcloud.com/大仟里.png'
          };
          
         wx.onMenuShareAppMessage(shareData);
         wx.onMenuShareTimeline({
          title: '12.6大仟里活动', // 分享标题
          link: location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl:'https://shentiechige-1259704124.cos.ap-guangzhou.myqcloud.com/大仟里.png', // 分享图标
 
          success: function () {
            console.log('已分享');
          },
          cancel: function () {
            console.log('已取消');
          },
          fail:function(res){
            alert(JSON.stringify(res))
          }
        });

          wx.onMenuShareQQ(shareData);
          wx.onMenuShareWeibo(shareData);
      });

}

});

 window.onload = function() {
              isWeixinBrowser();
        }
          //判断是否微信浏览器
         function isWeixinBrowser() {  
              var ua = navigator.userAgent.toLowerCase();  
              var result = (/micromessenger/.test(ua)) ? true : false;
              if (result) {
                 console.log('你正在访问微信浏览器');
             }
             else {
                 console.log('你访问的不是微信浏览器');
             }
             return result;
         }  
    
		var c = document.getElementById("music");
		console.log(c)
    c.src = "http://shentieh5doc.lanfriend.cn/Life%20In%20the%20Fast%20Lane%20-%20Thomas%20Greenberg.mp3";
    c.play();

    document.addEventListener("WeixinJSBridgeReady", function(){
        if(typeof WeixinJSBridge == "object"){
            WeixinJSBridge.invoke("getNetworkType", {}, function(j){
                c.play();
            })
        }
    });
music_state = 1;
//音乐按钮
   $("#btn-music").on("click", function(){
    if(music_state){
        c.pause();
        music_state = 0;
        $("#btn-music-off").removeClass("hide");
        $("#btn-music-on").addClass("hide");
    }else{
        c.play();
        music_state = 1;
        $("#btn-music-on").removeClass("hide");
        $("#btn-music-off").addClass("hide");
    }
	})

    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    };
	function addLoadEvent(func) {  
    var oldonload = window.onload;  
    if (typeof window.onload != 'function') {  
        window.onload = func;  
    } else {  
        window.onload = function() {  
            if (oldonload) {  
                oldonload();  
            }  
            func();  
        }  
    }  
}  
addLoadEvent(preloader); 

	
	
})


	



	