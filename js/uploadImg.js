//防止被iframe嵌套 
if (top != self) top.location=self.location; 

//禁用cookie的浏览器无法访问 
if (!navigator.cookieEnabled) document.location = '/500.html'; 

$(function(){

	var httpHost = "http://bainian.k-run.cn/";

	// 微信授权
	if(getSearch("userID")){
		if(!window.localStorage.bainianUserID){
			window.localStorage.bainianUserID = getSearch("userID");
			window.localStorage.bainianOpenID = getSearch("openID");
		}
	}
	else{
		if(!window.localStorage.bainianUserID){
			window.location.href = httpHost + "authorize.do";
		}
	}

	// 获取用户的头像和昵称
	if(!window.localStorage.bainianUserName){
		$.post(httpHost + "info.do", {
			userID: window.localStorage.bainianUserID,
			openID: window.localStorage.bainianOpenID
			// userID: 1,
			// openID: "olEows8_txNTv7DCvpHtiMTKkEPQ"
		}, function(data){
			console.log(data);
			if(data.status == 1000){
				window.localStorage.bainianUserName = data.result.name;
				window.localStorage.bainianUserHeader = data.result.headimg;
			}
		});
	}


	var isCreated = false,
		isReqPeople = false,
		isReqPjt = false,
		peopleNum = 0;


	// flash
	var $page1 = $("#page_1");
	var $f_2 = $(".f_2"),
		$f_1 = $(".f_1");



	$f_1.addClass('on');
	

	$f_2.click(function(){
		$("#page_1").removeClass('on');
		$("#swiperBox").addClass('on');
	});
	 
	$(window).load(function(){
		$f_1.addClass('active');

		setTimeout(function(){
			$f_1.click(function(){
				$f_1.removeClass('on');
				$f_2.addClass('on');
			});
		},2500);

		$("body").append('<audio id="music" autoplay loop preload src="music/music.mp3" style="display: none;"></audio>');

		var music = document.getElementById("music");
		$("#musicBtn").click(function(){
			var $this = $(this);
			if($this.hasClass('closed')){
				$this.removeClass('closed');
				music.play();
			}
			else{
				$this.addClass('closed');
				music.pause();
			}
		});
	});


	// 微信认证
	$.post("http://wxtoken.k-run.cn/generate",{
		url: location.href.split('#')[0]
	},function(data){
		data = JSON.parse(data);
		console.log(data);

		wx.config({
			debug : false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
			appId : 'wx4c166202e798d4cc',  // 必填，公众号的唯一标识
			timestamp : data.timestamp,  // 必填，生成签名的时间戳
			nonceStr : data.noncestr,   // 必填，生成签名的随机串
			signature : data.signature, // 必填，签名，见附录1
			jsApiList : [ 'checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage' ]
		// 必填，需要使用的JS接口列表，所有JS接口列表见附录2
		});
	});


	// 微信分享
	wx.ready(function(){
		wxShare({
			shareTitle: "不忘初心，执梦前行！我的梦想海报首次曝光，快来围观！",
			shareDesc: "最初的电影梦想你还在坚持吗？",
			shareImg: "http://bainian.k-run.cn/logo.jpg",
			shareLink: "http://bainian.k-run.cn/"
		});
	});



	var mySwiper = new Swiper('.swiper-container', {
		direction : 'vertical'
	});



	// 获取是第几人
	$.get(httpHost + "welcome.do",null,function(data){
		console.log(data);
		if(data.status == 1000){
			peopleNum = data.num;
			$("#s1_count").text(data.num);
		}
	});


	$(".slide_3").on("touchmove",function(){
		getPeople();
	});

	$(".slide_5").on("touchmove",function(){
		getProject();
	});

	$("#slide_6").on("touchmove", function(){
		creatWord();
	});


	$("input").on("change", function(){
		isCreated = false;
	}).on("blur", function(){
		creatWord();
	});


	// 人物关系
	var peopleConnection = null,
		$s3_people = $("#s3_people");

	$s3_people.on("blur", function(){
		getPeople();
	});


	function getPeople(){
		var val = $.trim($s3_people.val());

		if(val.length >= 1){
			if(isReqPeople){
				return;
			}

			$.post(httpHost + "searchPeople.do", {
				people: val
			}, function(data){
				console.log(data);
				isReqPeople = true;
				setTimeout(function(){
					isReqPeople = false;
				},500);

				if(data.status == 1000){
					peopleConnection = data.result;
					var str = "",
						clsFit = "",
						result = data.result,
						rl = result.length,
						len = rl > 9 ? 9 : rl;

					if(!rl){
						$("#slide_4").hide();
					}
					else{
						$("#slide_4").show();
						if(rl == 1){
							clsFit = "cb_1";
						}
						if(rl == 2){
							clsFit = "cb_2";
						}
						if(rl > 9){
							$(".slide_4 .more_btn").show();
						}
					}


					for(var i = 0; i < len; i++){
						str += '<div class="connect_box '+ clsFit +'">'+
		                            '<img src="'+ result[i].headimg +'" class="connect_header">'+   
		                        '</div>';
					}

					$("#connect_people").html(str);
				}
				else{
					$("#slide_4").hide();
				}
			})
		}
		else{
			$("#slide_4").hide();
		}
	}


	// 项目关系
	var projectConnection = null,
		$s6_pjtName = $("#s6_pjtName"),
		$box_pjtName = $("#box_pjtName"),
		$s5_project = $("#s5_project");
	$s5_project.on("blur", function(){
		getProject();
	});

	function getProject(){
		var val = $.trim($s5_project.val());

		if(val.length >= 1){
			$s6_pjtName.text(val);
			$box_pjtName.text(val);

			if(isReqPjt){
				return;
			}
			$.post(httpHost + "searchProject.do", {
				project: val
			}, function(data){
				console.log(data);
				isReqPjt = true;
				setTimeout(function(){
					isReqPjt = false;
				},500);

				if(data.status == 1000){
					if(data.status == 1000){
						projectConnection = data.result;
						var str = "",
							clsFit = "",
							result = data.result,
							rl = result.length,
							len = rl > 9 ? 9 : rl;

						if(!rl){
							$("#slide_6").hide();
						}
						else{
							$("#slide_6").show();
							if(rl == 1){
								clsFit = "cb_1";
							}
							if(rl == 2){
								clsFit = "cb_2";
							}
							if(rl > 9){
								$(".slide_6 .more_btn").show();
							}
						}

						for(var i = 0; i < len; i++){
							str += '<div class="connect_box '+ clsFit +'">'+
			                            '<img src="'+ result[i].headimg +'" class="connect_header">'+   
			                        '</div>';
						}

						$("#connect_project").html(str);
					}
				}
				else{
					$("#slide_6").hide();
				}
			});
		}
		else{
			$("#slide_6").hide();
		}
	}


	$("#s2_year").on("blur", function(){
		if(String($.trim($("#s2_year").val())).length != 4){
			alert("请输入4位数年份！")
		}
	});


	// 生成文字
	var $s7_name = $("#s7_name"),
		$s7_year = $("#s7_year"),
		$s7_people = $("#s7_people"),
		$s7_project = $("#s7_project"),
		$s7_days = $("#s7_days"),
		$s7_count = $("#s7_count");
	function creatWord(){
		if(isCreated){
			return;
		}

		$s7_name.text(window.localStorage.bainianUserName);
		var startYear = $.trim($("#s2_year").val());
		$s7_year.text(startYear);
		$s7_people.text($.trim($("#s3_people").val()));
		$s7_project.text($.trim($("#s5_project").val()));

		var days = (2016-parseInt(startYear))* 365 + 150 ? (2016-parseInt(startYear))* 365 + 150 : "";
		
		$s7_days.text(days);
		$s7_count.text(peopleNum);

		isCreated = true;
	}


	window.onhashchange = function(){
		var hash = window.location.hash;
		// 根据不同的面板加载不同的数据
		switch(hash){
			case "#1":
				var str = "";
				for(var i = 0, len = peopleConnection.length; i < len; i++){
					str += '<div class="connect_box">'+
	                            '<img src="'+ peopleConnection[i].headimg +'" class="connect_header">'+   
	                        '</div>';
				}
				$("#connect_people_more").html(str);

				$("#box.active").removeClass('active');
				$("#box_people").addClass('active');
				break;

			case "#2":
				var str = "";
				for(var i = 0, len = projectConnection.length; i < len; i++){
					str += '<div class="connect_box">'+
	                            '<img src="'+ projectConnection[i].headimg +'" class="connect_header">'+   
	                        '</div>';
				}
				$("#connect_project_more").html(str);

				$("#box.active").removeClass('active');
				$("#box_project").addClass('active');
				break;

			default:
				$(".box_more.active").removeClass('active');
				$("#box").addClass('active');
				break;
		}
	}



	var body_width = $('body').width(),
		winH = $(window).height(),
		canvas = document.getElementById("myCanvas");


	canvas.width = 750;
	canvas.height = 750*1.35;



	var $text = $("#text"),
		nScale = (body_width - 20)/500,
		sizeScale = (body_width - 20)/body_width;


	$(".slide_8").click(function(){
		$("#swiperBox").removeClass('on');
		$("#container").addClass('on');
		var $view = $(".photo-clip-view");
		$text.appendTo($view);
	}).on("touchmove",function(e){
		e.stopPropagation();
		e.preventDefault();
	})



	var $clipArea = $("#clipArea");


	$clipArea.height((body_width - 20) * 1.35 + 20);

	$clipArea.photoClip({
	    width: body_width - 20,
	    // height: (body_width - 20) * (winH/body_width),
	    height: (body_width - 20) * 1.35,
	    file: "#file",
	    view: "#hit",
	    ok: "#clipBtn",
	    strictSize: true,
	    clipFinish: function(dataURL) {
	        $('#hit').attr('src', dataURL);

	        render(dataURL);

	        $(".page.on").removeClass('on');
	        $("#page_3").addClass('on');

	        // 微信分享
        	wxShare({
        		shareTitle: "不忘初心，执梦前行！我的梦想海报首次曝光，快来围观！",
				shareDesc: "最初的电影梦想你还在坚持吗？",
        		shareImg: "http://bainian.k-run.cn/logo.jpg",
        		shareLink: "http://bainian.k-run.cn/"
        	});
	    }
	});





	//图片上传结束
    $('#upload2').on('click', function() {
        $('#file').click();
    });


    $("#mask").click(function(){
    	$(this).stop().fadeOut(200);
    });



	// 微信分享
	function wxShare(obj){
		// 分享到朋友圈 配置
		wx.onMenuShareTimeline({
		    title: obj.shareTitle, // 分享标题
		    link: obj.shareLink, // 分享链接
		    imgUrl: obj.shareImg // 分享图标
		});

		// 分享给朋友 配置
		wx.onMenuShareAppMessage({
		    title: obj.shareTitle, // 分享标题
		    desc: obj.shareDesc, // 分享描述
		    link: obj.shareLink, // 分享链接
		    imgUrl: obj.shareImg // 分享图标
		});
	}


	// 获取search
	function getSearch(key){

	    var sSearch = window.location.search.substring(1),
	        oSearch = {},
	        aSearch = sSearch.split("&");

	    aSearch.forEach(function(item,index){
	        var arr = item.split("=");
	        oSearch[arr[0]] = arr[1];
	    });

	    return oSearch[key];
	}



	// 渲染 Image 缩放尺寸  
	function render(src) {
		if (src == "") {
		    alert("图像上传失败，请重试");
		}

	    var MAX_HEIGHT = 256; //Image 缩放尺寸 
	    // 创建一个 Image 对象  
	    var image = new Image();

	    // 绑定 load 事件处理器，加载完成后执行  
	    image.onload = function() {
	    	creatImg(image);
	    };
	    // 设置src属性，浏览器会自动加载。  
	    // 记住必须先绑定render()事件，才能设置src属性，否则会出同步问题。  
	    image.src = src;
	};



	function creatImg(image){
		$.post(httpHost + "submit.do", {
			userID: window.localStorage.bainianUserID,
			// userID: 1,
			year: $.trim($("#s2_year").val()),
			job: $.trim($("#s2_position").val()),
			people: $.trim($("#s3_people").val()),
			project: $.trim($("#s5_project").val())
		}, function(data){
			console.log(data);

			if(data.status == 1000){


				// 获取 canvas DOM 对象  
				var p3_text = document.getElementById("p3_text"),
				    MAX_HEIGHT = 256; //Image 缩放尺寸 


				// 如果高度超标  
				if (image.height > MAX_HEIGHT) {
				    // 宽度等比例缩放 *=  
				    image.width *= MAX_HEIGHT / image.height;
				    image.height = MAX_HEIGHT;
				}

				var ctx = canvas.getContext("2d");

				ctx.clearRect(0, 0, canvas.width, canvas.height);

				var cScale = 1,
					canvasW = 750,
					canvasH = 750*1.35;


				// 将图像绘制到canvas上  
				ctx.drawImage(image, 0, 0, canvasW, canvasH);
				ctx.drawImage(p3_text, 0, canvasH - (532 * cScale), canvasW, 532 * cScale);

				var text_word = "第"+ data.result.num +"位电影执梦者",
				    startX = 30,
					startY = canvasH - (532 * cScale) - 50;

				ctx.font = "34px '黑体' bold";
				ctx.fillStyle = "#810314";
				ctx.strokeStyle = "#810314";
				ctx.textBaseline = 'top';

				for(var j = 0, jLen = text_word.length; j < jLen; j++){
					var wordNow = text_word[j];

					ctx.fillText(wordNow, startX, startY);
					ctx.strokeText(wordNow, startX, startY);

					if(parseInt(wordNow) >= 0){
						startX += 20;
					}
					else{
						startX += 36;
					}
				}

				

				var dataurl = canvas.toDataURL("image/png"),
				    imagedata = encodeURIComponent(dataurl);

				$("#p3_card").attr("src",dataurl);

				$.post(httpHost + "uploads.do",{
					userID: window.localStorage.bainianUserID,
					// userID: 1,
					imgContent: dataurl.split(",")[1]
				},function(data){
					console.log(data);
					if(data.status == 1000){
						$("#p3_card").attr("src",data.thumb);
						$("#mask").delay(1200).fadeOut(200);
						$("#p3_tip").hide();
					}
					else{
						alert("图片生成失败，请重试");
					}
				});
			}

	        
		});
	}
});





