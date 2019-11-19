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
	
 if (document.images) {

        var img1 = new Image();
        var img2 = new Image();
        var img3 = new Image();
          var img4 = new Image();
        var img5 = new Image();
        var img6 = new Image();
          var img7 = new Image();
        var img8 = new Image();
        var img9 = new Image();
          var img10 = new Image();
        var img11 = new Image();
        var img12 = new Image();
               var img13 = new Image();
        var img14 = new Image();
        var img15 = new Image();
               var img16 = new Image();
        var img17 = new Image();
        var img18 = new Image();
               var img19 = new Image();
                       var img20 = new Image();
        var img21 = new Image();
        var img22 = new Image();
               var img23 = new Image();
        var img24 = new Image();
           var img25 = new Image();
           var img26  =new Image();
  var img27  =new Image();
   var img28  =new Image();
    var img29  =new Image();
     var img30  =new Image();
      var img31  =new Image(); 
       var img32  =new Image();
        var img33  =new Image();
         var img34 =new Image();
          var img35  =new Image();
           var img36  =new Image();
            var img37  =new Image();
             var img38  =new Image();
             
              var img39  =new Image();
               var img40  =new Image(); 
                var img41  =new Image();
  var img42  =new Image();
   var img43 =new Image();
    var img44  =new Image();
     var img45  =new Image();
      var img46  =new Image(); 
       var img47  =new Image();
        var img48  =new Image();
         var img49  =new Image();
          var img50  =new Image();
           var img51  =new Image();
            var img52  =new Image();
             var img53  =new Image();
             
              var img54  =new Image();
               var img55  =new Image(); 
       var img56  =new Image();
  var img57  =new Image();
   var img58  =new Image();
    var img59  =new Image();
     var img60  =new Image();
      var img61  =new Image(); 
       var img62  =new Image();
        var img63  =new Image();
         var img64  =new Image();
          var img65  =new Image();
           var img66  =new Image();
            var img67  =new Image();
             var img68  =new Image();
             
              var img69  =new Image();
               var img70  =new Image(); 
                var img71  =new Image();
  var img72  =new Image();
   var img73  =new Image();
    var img74  =new Image();
     var img75  =new Image();
      var img76  =new Image(); 
       var img77  =new Image();
        var img78  =new Image();
         var img79  =new Image();
          var img80  =new Image();
           var img81  =new Image();
            var img82  =new Image();
             var img83  =new Image();
             
              var img84  =new Image();
               var img85  =new Image(); 
                var img86  =new Image();
  var img87  =new Image();
   var img88  =new Image();
    var img89  =new Image();
     var img90  =new Image();
      var img91 =new Image(); 
       var img92  =new Image();
        var img93  =new Image();
         var img94  =new Image();
          var img95  =new Image();
           var img96  =new Image();
            var img97  =new Image();
             var img98  =new Image();
             
              var img99  =new Image();
               var img100  =new Image();
                var img  =new Image();
  var img101  =new Image();
   var img102  =new Image();
    var img103 =new Image();
     var img104  =new Image();
      var img105  =new Image(); 
       var img106  =new Image();
        var img107  =new Image();
         var img108  =new Image();
          var img109  =new Image();
           var img110  =new Image();
            var img111  =new Image();
             var img112  =new Image();
             
              var img113  =new Image();
               var img114  =new Image(); 
                var img115  =new Image();
  var img116  =new Image();
   var img117  =new Image();
    var img118  =new Image();
     var img119  =new Image();
      var img120  =new Image(); 
      var img121  =new Image();
       var img122  =new Image();
        var img123  =new Image();
         var img124  =new Image();
          var img125  =new Image();
                     var img126  =new Image();
             var img127  =new Image();
               var img128  =new Image();
              var img129  =new Image();
               var img130  =new Image(); 
                var img131  =new Image();
  var img132  =new Image();
   var img133  =new Image();
    var img134  =new Image();
     var img135  =new Image();
      var img136  =new Image(); 
      var img137  =new Image();
       var img138  =new Image();
     var img139  =new Image(); 
      var img140  =new Image();
       var img141  =new Image();
          var img142  =new Image();
                  var img143  =new Image();
                  
                  var img144  =new Image();
                                  var img145  =new Image();
  var img146  =new Image();
   var img147 =new Image();
    var img148  =new Image();
     var img149  =new Image();
      var img150  =new Image(); 
      var img151  =new Image();
       var img152  =new Image();
     var img153  =new Image(); 
      var img154  =new Image();
       var img155  =new Image();
          var img156  =new Image();
                  var img157  =new Image();
                  var img158  =new Image();
                     var img159  =new Image();
                  var img160  =new Image();
                   var img161  =new Image();
                  var img162 =new Image();
                      var img163 =new Image();
                           var img164  =new Image();
                   var img165  =new Image();
                  var img166 =new Image();
                      var img167 =new Image();
                         var img168  =new Image();
                   var img169  =new Image();
                  var img170 =new Image();
                      var img171 =new Image();
                           var img172  =new Image();
                   var img173  =new Image();
                  var img174 =new Image();
                      var img175 =new Image();
                      var img176 =new Image();
             var img177  =new Image();
                   var img178  =new Image();
                  var img179 =new Image();
                      var img180=new Image();
                           var img181  =new Image();
                   var img182  =new Image();
                  var img183 =new Image();
                      var img184 =new Image();
                          var img185 =new Image();
                       var img186 =new Image();
         var img187 =new Image();
        img3.src = "http://shentieh5doc.lanfriend.cn/10_1.png"
        img4.src = "http://shentieh5doc.lanfriend.cn/11_1.png"
        img5.src = "http://shentieh5doc.lanfriend.cn/12_1.png"
        img6.src = "http://shentieh5doc.lanfriend.cn/13_1.png"
        img7.src = "http://shentieh5doc.lanfriend.cn/14_1.png"
        img8.src = "http://shentieh5doc.lanfriend.cn/15_1.png"
        img9.src = "http://shentieh5doc.lanfriend.cn/16_1.png"
        img10src = "http://shentieh5doc.lanfriend.cn/17_1.png"
        img11.src = "http://shentieh5doc.lanfriend.cn/18_1.png"
        img12.src = "http://shentieh5doc.lanfriend.cn/19_1.png"
        img13.src = "http://shentieh5doc.lanfriend.cn/20_1.png"
        img14.src = "http://shentieh5doc.lanfriend.cn/21_1.png"
        img15.src = "http://shentieh5doc.lanfriend.cn/22_1-min.png"
        img16.src = "http://shentieh5doc.lanfriend.cn/23_1.png"
        img17.src = "http://shentieh5doc.lanfriend.cn/24_1.png"
        img18.src = "http://shentieh5doc.lanfriend.cn/25_1.png"
        img19.src = "http://shentieh5doc.lanfriend.cn/26_1.png"
       img20.src = "http://shentieh5doc.lanfriend.cn/27_1.png"
      img21.src = "http://shentieh5doc.lanfriend.cn/28_1.png"
        img22.src = "http://shentieh5doc.lanfriend.cn/29_1.png"
        img23.src = "http://shentieh5doc.lanfriend.cn/30_1.png"
        img24.src = "http://shentieh5doc.lanfriend.cn/31_1.png"
        img25.src = "http://shentieh5doc.lanfriend.cn/32_1.png"
        img26.src = "http://shentieh5doc.lanfriend.cn/33_1.png"
        img27.src = "http://shentieh5doc.lanfriend.cn/34_1.png"
        img28.src = "http://shentieh5doc.lanfriend.cn/35_1.png"
        img29.src = "http://shentieh5doc.lanfriend.cn/36_1.png"
        img30src = "http://shentieh5doc.lanfriend.cn/37_1.png"
        img31.src = "http://shentieh5doc.lanfriend.cn/38_1.png"
        img32.src = "http://shentieh5doc.lanfriend.cn/39_1.png"
        img33.src = "http://shentieh5doc.lanfriend.cn/40_1.png"
        img34.src = "http://shentieh5doc.lanfriend.cn/41_1.png"
        img35.src = "http://shentieh5doc.lanfriend.cn/42_1.png"
        img36.src = "http://shentieh5doc.lanfriend.cn/43_1.png"
        img37.src = "http://shentieh5doc.lanfriend.cn/44_1.png"
        img38.src = "http://shentieh5doc.lanfriend.cn/45_1.png"
        img39.src = "http://shentieh5doc.lanfriend.cn/46_1.png"
       img40.src = "http://shentieh5doc.lanfriend.cn/47_1.png"
    img41.src = "http://shentieh5doc.lanfriend.cn/48_1.png"
        img42.src = "http://shentieh5doc.lanfriend.cn/49_1.png"
        img43.src = "http://shentieh5doc.lanfriend.cn/50_1.png"
        img44.src = "http://shentieh5doc.lanfriend.cn/51_1.png"
        img45.src = "http://shentieh5doc.lanfriend.cn/52_1.png"
        img46.src = "http://shentieh5doc.lanfriend.cn/53_1.png"
        img47.src = "http://shentieh5doc.lanfriend.cn/54_1.png"
        img48.src = "http://shentieh5doc.lanfriend.cn/55_1.png"
        img49.src = "http://shentieh5doc.lanfriend.cn/56_1.png"
        img50src = "http://shentieh5doc.lanfriend.cn/57_1.png"
     
        img51.src = "http://shentieh5doc.lanfriend.cn/58_1.png"
        img52.src = "http://shentieh5doc.lanfriend.cn/59_1.png"
        img53.src = "http://shentieh5doc.lanfriend.cn/60_1.png"
        img54.src = "http://shentieh5doc.lanfriend.cn/61_1.png"
        img55.src = "http://shentieh5doc.lanfriend.cn/62_1.png"
        img56.src = "http://shentieh5doc.lanfriend.cn/63_1.png"
        img57.src = "http://shentieh5doc.lanfriend.cn/64_1.png"
        img58.src = "http://shentieh5doc.lanfriend.cn/65_1.png"
        img59.src = "http://shentieh5doc.lanfriend.cn/66_1.png"
       img60.src = "http://shentieh5doc.lanfriend.cn/67_1.png"
       
           img61.src = "http://shentieh5doc.lanfriend.cn/68_1.png"
        img62.src = "http://shentieh5doc.lanfriend.cn/69_1.png"
        img63.src = "http://shentieh5doc.lanfriend.cn/70_1.png"
        img64.src = "http://shentieh5doc.lanfriend.cn/71_1.png"
        img65.src = "http://shentieh5doc.lanfriend.cn/72_1.png"
        img66.src = "http://shentieh5doc.lanfriend.cn/73_1.png"
        img67.src = "http://shentieh5doc.lanfriend.cn/74_1.png"
        img68.src = "http://shentieh5doc.lanfriend.cn/75_1.png"
        img69.src = "http://shentieh5doc.lanfriend.cn/76_1.png"
        img70src = "http://shentieh5doc.lanfriend.cn/77_1.png"
        img71.src = "http://shentieh5doc.lanfriend.cn/78_1.png"
        img72.src = "http://shentieh5doc.lanfriend.cn/79_1.png"
        img73.src = "http://shentieh5doc.lanfriend.cn/80_1.png"
        img74.src = "http://shentieh5doc.lanfriend.cn/81_1.png"
        img75.src = "http://shentieh5doc.lanfriend.cn/82_1.png"
        img76.src = "http://shentieh5doc.lanfriend.cn/83_1.png"
        img77.src = "http://shentieh5doc.lanfriend.cn/84_1.png"
        img78.src = "http://shentieh5doc.lanfriend.cn/85_1.png"
        img79.src = "http://shentieh5doc.lanfriend.cn/86_1.png"
       img80.src = "http://shentieh5doc.lanfriend.cn/87_1.png"
           img81.src = "http://shentieh5doc.lanfriend.cn/88_1.png"
        img82.src = "http://shentieh5doc.lanfriend.cn/89_1.png"
        img83.src = "http://shentieh5doc.lanfriend.cn/90_1.png"
        img84.src = "http://shentieh5doc.lanfriend.cn/91_1.png"
        img85.src = "http://shentieh5doc.lanfriend.cn/92_1.png"
        img86.src = "http://shentieh5doc.lanfriend.cn/93_1.png"
        img87.src = "http://shentieh5doc.lanfriend.cn/94_1.png"
        img88.src = "http://shentieh5doc.lanfriend.cn/95_1.png"
        img89.src = "http://shentieh5doc.lanfriend.cn/96_1.png"
        img90src = "http://shentieh5doc.lanfriend.cn/97_1.png"
        img91.src = "http://shentieh5doc.lanfriend.cn/98_1.png"
      
        img92.src = "http://shentieh5doc.lanfriend.cn/moby巡游快闪偶遇.png"
        img93.src = "http://shentieh5doc.lanfriend.cn/初次见面这厢油礼.png"
        img94.src = "http://shentieh5doc.lanfriend.cn/底部.png"
        img95.src = "http://shentieh5doc.lanfriend.cn/底部文字.png"
        img96.src = "http://shentieh5doc.lanfriend.cn/地铁.png"
            img97.src = "http://shentieh5doc.lanfriend.cn/地铁文化互动展.png"
        img98.src = "http://shentieh5doc.lanfriend.cn/二维码.png"
        img99.src = "http://shentieh5doc.lanfriend.cn/广场.png"
        img100.src = "http://shentieh5doc.lanfriend.cn/滑轮鞋.png"
        img101.src = "http://shentieh5doc.lanfriend.cn/火锅.png"
            img102.src = "http://shentieh5doc.lanfriend.cn/锦荟广场试运营.png"
        img103.src = "http://shentieh5doc.lanfriend.cn/木马.png"
        img104.src = "http://shentieh5doc.lanfriend.cn/品牌商户折扣集合.png"
        img105.src = "http://shentieh5doc.lanfriend.cn/奇幻列车.png"
        img106.src = "http://shentieh5doc.lanfriend.cn/趣味运动秋日潮玩.png"
          img107.src = "http://shentieh5doc.lanfriend.cn/上面.png"
        img108.src = "http://shentieh5doc.lanfriend.cn/上面1.png"
        img109.src = "http://shentieh5doc.lanfriend.cn/盛趣启动.png"
        img110.src = "http://shentieh5doc.lanfriend.cn/视听盛宴悦享狂欢.png"
          img111.src = "http://shentieh5doc.lanfriend.cn/图标.png"
        img112.src = "http://shentieh5doc.lanfriend.cn/网红气球雨寻找锦鲤.png"


           img115.src = "http://shentieh5doc.lanfriend.cn/寻找moby打卡有礼.png"
        img116.src = "http://shentieh5doc.lanfriend.cn/运气全开豪礼拿来.png"

        img118.src = "http://shentieh5doc.lanfriend.cn/文字文字.png"
           img119.src = "http://shentieh5doc.lanfriend.cn/整点报时shake好礼.png"
        img120.src = "http://shentieh5doc.lanfriend.cn/整体.png"
        img121.src = "http://shentieh5doc.lanfriend.cn/纵享全时免费停车.png"
         img122.src = "http://shentieh5doc.lanfriend.cn/1.png"
        img123.src = "http://shentieh5doc.lanfriend.cn/2.png"
        img124.src = "http://shentieh5doc.lanfriend.cn/19.png"
          img125.src = "http://shentieh5doc.lanfriend.cn/20.png"
        img126.src = "http://shentieh5doc.lanfriend.cn/21.png"
        img127.src = "http://shentieh5doc.lanfriend.cn/3.png"
        img128.src = "http://shentieh5doc.lanfriend.cn/4.png"
       
        img129.src = "http://shentieh5doc.lanfriend.cn/5.png"
        
           img130.src = "http://shentieh5doc.lanfriend.cn/6.png"
        img131.src = "http://shentieh5doc.lanfriend.cn/7.png"
        img132.src = "http://shentieh5doc.lanfriend.cn/8.png"
        img133.src = "http://shentieh5doc.lanfriend.cn/9.png"
       
        img135.src = "http://shentieh5doc.lanfriend.cn/43_2.png"
        img136.src = "http://shentieh5doc.lanfriend.cn/44_2.png"
        img137.src = "http://shentieh5doc.lanfriend.cn/77_2.png"
           img138.src = "http://shentieh5doc.lanfriend.cn/928.png"
                   img139.src = "http://shentieh5doc.lanfriend.cn/yun.png"
                   img140.src = "http://shentieh5doc.lanfriend.cn/火车1.png"
                   img141.src = "http://shentieh5doc.lanfriend.cn/火车轨道1.png"
                    img142.src = "http://shentieh5doc.lanfriend.cn/主题2轮子.png"
                            img143.src = "http://shentieh5doc.lanfriend.cn/主题1.png"
                              img144.src = "http://shentieh5doc.lanfriend.cn/最后一张图.png"
                                      img145.src = "http://shentieh5doc.lanfriend.cn/整体1.png"
           img146.src = "http://shentieh5doc.lanfriend.cn/整体2.png"
                   img147.src = "http://shentieh5doc.lanfriend.cn/整体3.png"
                   img148.src = "http://shentieh5doc.lanfriend.cn/整体4.png"
                   img149.src = "http://shentieh5doc.lanfriend.cn/整体5.png"
                    img150.src = "http://shentieh5doc.lanfriend.cn/滑鞋.png"
                            img151.src = "http://shentieh5doc.lanfriend.cn/棒棒糖1.png"
                              img152.src = "http://shentieh5doc.lanfriend.cn/棒棒糖1_棍子.png"
                                   img153.src = "http://shentieh5doc.lanfriend.cn/棒棒糖2.png"
                              img154.src = "http://shentieh5doc.lanfriend.cn/棒棒糖2_棍子.png"
                                   img155.src = "http://shentieh5doc.lanfriend.cn/棒棒糖3.png"
                              img156.src = "http://shentieh5doc.lanfriend.cn/棒棒糖3_棍子.png"
                                   img157.src = "http://shentieh5doc.lanfriend.cn/最后一张图.png"
                              img158.src = "http://shentieh5doc.lanfriend.cn/棒棒糖4_棍子.png"
                                    img159.src = "http://shentieh5doc.lanfriend.cn/主题2轮子.png"
                                 img160.src = "http://shentieh5doc.lanfriend.cn/主题1.png"
                                        img161.src = "http://shentieh5doc.lanfriend.cn/200.png"
                                 img162.src = "http://shentieh5doc.lanfriend.cn/201.png"
                                  img163.src = "http://shentieh5doc.lanfriend.cn/Life%20In%20the%20Fast%20Lane%20-%20Thomas%20Greenberg.mp3"
                                 
                                
                                  img171.src = "http://shentieh5doc.lanfriend.cn/文字一.png"
                                  img172.src = "http://shentieh5doc.lanfriend.cn/文字二.png"
                                        img173.src = "http://shentieh5doc.lanfriend.cn/火车轨道5.png"
                                 img174.src = "http://shentieh5doc.lanfriend.cn/火车轨道6.png"
                                  img175.src = "http://shentieh5doc.lanfriend.cn/火车轨道7.png"
                                  img176.src = "http://shentieh5doc.lanfriend.cn/火车轨道8.png"
                                       img177.src = "http://shentieh5doc.lanfriend.cn/201.png"
                                  img178.src = "http://shentieh5doc.lanfriend.cn/200.png"
                                  img179.src = "http://shentieh5doc.lanfriend.cn/202.png"
                                       img180.src = "http://shentieh5doc.lanfriend.cn/203.png"
                                  img181.src = "http://shentieh5doc.lanfriend.cn/204.png"
                                  img182.src = "http://shentieh5doc.lanfriend.cn/205.png"
                                        img183.src = "http://shentieh5doc.lanfriend.cn/206.png"
                                  img184.src = "http://shentieh5doc.lanfriend.cn/207.png"
                                                          img185.src = "http://shentieh5doc.lanfriend.cn/1234.png"
                                                                img186.src = "http://shentieh5doc.lanfriend.cn/204.gif"
                                                                       img187.src = "http://shentieh5doc.lanfriend.cn/205.gif"
                }                      

}
	var url = encodeURIComponent(location.href.split('#')[0])
console.log(url)
console.log(signUrl)
var signUrl = window.location.href.split('#')[0]; 
$.ajax({ url: "http://47.106.128.238:8080/config?"+url, type: "post",
data: { signUrl: signUrl }, 
success: function (data) { console.log("wx.config() ---> 接收后台返回的参数");
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
             title: '9.28深铁锦荟广场趣动盛启',
             desc: '9.28深铁锦荟广场趣动盛启',
              link: location.href,
            imgUrl: 'http://shentieh5doc.lanfriend.cn/1234.png'
          };
          
         wx.onMenuShareAppMessage(shareData);
         wx.onMenuShareTimeline({
          title: '9.28深铁锦荟广场趣动盛启', // 分享标题
          link: location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl:'http://shentieh5doc.lanfriend.cn/1234.png', // 分享图标
 
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


	



	