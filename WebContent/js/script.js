$(function () {
  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

	//フェードインさせるアニメーション
	const CLASSNAME = "-visible";
	const TIMEOUT = 350;
	const $target = $(".mv-title");
	setInterval(() => {
	  setTimeout(() => {
	    $target.addClass(CLASSNAME);
	  }, TIMEOUT);
	}, TIMEOUT);

});


  $(window).scroll(function(){
   scroll_effect();
  });

  function scroll_effect(){
   $('.effect-fade').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 350){
     $(this).addClass('effect-scroll');
    }
   });
  };

  $(function() {
  let $gnav   = $('#gnav-area');
  let $btn   = $('.toggle_btn');
  let $mask  = $('#mask');
  let open   = 'open'; // class
  // menu open close
  $btn.on( 'click', function() {
    if ( ! $gnav.hasClass( open ) ) {
      $gnav.addClass( open );
    } else {
      $gnav.removeClass( open );
    }
  });

  $('.gnav-list a[href]').on('click', function() {
        $('.toggle_btn').trigger('click');
    });

  // mask close
  $mask.on('click', function() {
    $gnav.removeClass( open );
  });
});

$('.slider').slick({
		arrows: false,//左右の矢印はなし
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
		speed: 1000,//スライドのスピード。初期値は300。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
		pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
		cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
		slidesToShow: 4,//スライドを画面に4枚見せる
		slidesToScroll: 1,//1回のスライドで動かす要素数
		variableWidth: true,
		responsive: [
			{
			breakpoint: 769,//モニターの横幅が769px以下の見せ方
			settings: {
				slidesToShow: 2,//スライドを画面に2枚見せる
			}
		},
		{
			breakpoint: 426,//モニターの横幅が426px以下の見せ方
			settings: {
				slidesToShow: 1.5,//スライドを画面に1.5枚見せる
			}
		}
	]
	});


$(function(){
	$('#hoge ').on('click' , function(e){
		e.preventDefault();//リンクの停止
		$(this).parent().html('<iframe width="560" height="315" src="https://www.youtube.com/embed/UI4pCGWQB5k ?autoplay=1&rel=0&controls=0"></iframe>');
	});
});
