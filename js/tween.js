$(function(){
	//搜索栏部分编码
	( function(){
	var oIpt1=$('#search .text');
	var oBtn1=$('#search .btn')
	var aLi=$('#menu li');
	var num=0
	var str=''
	var aUl=$('.wrap ul')
	var btnUp=$('#updateUpBtn')
	var btnDown=$('#updateDownBtn')
	var attr=['此情可待成追忆，只是当时已惘然','别时容易见时难','奴为出来难，教君恣意怜','问君能有几多愁，恰似一江春水向东流','流水落花春去也，天上人间']
var arrData = [
			{ 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
			{ 'name':'疯子', 'time':5, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
			{ 'name':'陈子君', 'time':6, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
			{ 'name':'君君', 'time':7, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' },
			{ 'name':'晨晨', 'time':8, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
			{ 'name':'宝宝', 'time':9, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
			{ 'name':'大智', 'time':10, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
			{ 'name':'花哈', 'time':11, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' }
		];
	oIpt1.val(attr[0])
	aLi.each(function(index){
		$(this).click(function(){
		aLi.attr('class','gradient')
		$(this).attr('class','active')
		oIpt1.val(attr[index])
		num=index
		})
		})
	oIpt1.focus(function(){
		if($(this).val()==attr[num]){
			$(this).val('')
			}
		})	
	oBtn1.click(function(){
		if(oIpt1.val()==''){ alert('亲，内容不能为空哦！')}
		else{
			alert('亲，不好意思，搜索功能还没开通，敬请期待！！')
			}
		
		})
		for( var i=0; i<arrData.length;i++){
		str+='<li><a href=""+arrData[i].url+""><strong>'+arrData[i].name+'</strong> <span>'+arrData[i].time+'分钟前</span> 写了一篇新文章：'+arrData[i].title+'…</a></li>'
		}
		aUl.html(str)
		var step=0
	 btnUp.click(function(){
		move(-1)
		 
		 })
	btnDown.click(function(){
		 move(1)
		 })
	function move(num1){
		 step+=num1
		 if(Math.abs(step)>arrData.length-1){step=0} 
		 if( step==0){
			 step=-(arrData.length-1)
			 }
		 aUl.stop().animate({'top':step*30},1000)
		
		}
		aUl.hover(function (){
			clearInterval( timer );
		}, autoPlay);
		
		function autoPlay() {
			timer = setInterval(function () {
				move(-1);
			}, 2000);
		}
		autoPlay();//自动播放
	})();
	
	//选项卡编码部分
	(function(){
		ftb($('.tabNav1'),$('.tabCon1'))
		ftb($('.tabNav2'),$('.tabCon2'))
		ftb($('.tabNav3'),$('.tabCon3'))
		ftb($('.tabNav4'),$('.tabCon4'))
		function ftb(tab,con){
			var tabs=tab.children()
			con.hide().eq(0).show()
			tabs.each(function(index){
				$(this).click( function(){
					tabs.removeClass('active')
					$(this).addClass('active')
				tabs.find('a').removeClass('triangle_down_red').addClass('triangle_down_gray')
				$(this).find('a').removeClass('triangle_down_gray').addClass('triangle_down_red')
				con.hide().eq(index).show()
					})
					
				})
						}
		// 图片切换
		var aLi=$("#fade ul li")
		var aList=$("#fade ol li")
		var num=0
		var t=0
		aLi.eq(0).css('zIndex', 2)
		aList.each( function(index){
			$(this).click(function(){
				aLi.css('zIndex', 1)
				aLi.eq(index).css('zIndex', 2)
				aList.attr('class','')
				aList.eq(index).attr('class', 'active')
				})
			})
			function autoPlay1(){
				timer=setInterval(function(){
				t=num%aList.length
				aLi.css('zIndex', 1)
				aLi.eq(t).css('zIndex', 2)
				aList.attr('class','')
				aList.eq(t).attr('class', 'active')	
				num++
					},1000)
				}
				autoPlay1()
			aLi.hover(function(){clearInterval(timer)},autoPlay1)
		  
		  
		//日历提示说明
	   var aSpan = $('.calendar h3 span');
		
		var aImg = $('.calendar .img');
		var oPrompt = $('.today_info');
		var oImg = oPrompt.find('img');
		var oStrong = oPrompt.find('strong');
		var oP = oPrompt.find('p');
		
		aImg.hover(function (){
			var iTop = $(this).parent().position().top - 30;
			var iLeft = $(this).parent().position().left + 55;
			var index = $(this).parent().index()%aSpan.size();
			oPrompt.show().css({ 'left': iLeft, 'top': iTop });
			oP.text($(this).attr('info'));
			oImg.attr('src', $(this).attr('src'));
			oStrong.text( aSpan.eq(index).text() );
		}, function (){
			oPrompt.hide();
		});
		//高亮显示
		$('.bbs ol li').mouseover(function (){
			$('.bbs ol li').removeClass('active').eq($(this).index()).addClass('active');
		});
		//鼠标提示效果
		var arr = [
			'',
			'美女1<br />人气1',
			'美女：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
			'美女与帅哥3<br />人气3',
			'美女与帅哥4<br />人气4',
			'美女与帅哥5<br />人气5',
			'美女与帅哥6<br />人气6',
			'美女与帅哥7<br />人气7',
			'美女与帅哥8<br />人气8',
			'美女与帅哥9<br />人气9',
			'美女与帅哥10<br />人气10'
		];
		$('.hot_area li').mouseover(function (){
			
			if ( $(this).index() == 0 ) return;
			
			$('.hot_area li p').remove();
			
			$(this).append('<p style="width:'+ ($(this).width()-12) +'px; height:'+ ($(this).height()-12) +'px;">'+ arr[$(this).index()] +'</p>');
		});
		
		
		
	    
		})()

	
		
	
		
	
	
	})
