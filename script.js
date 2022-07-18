$(document).ready(function(){
    $('#center_menu li').mouseover(function(){
        $(this).children('.submenu').stop().slideDown(500)
    });
    $('#center_menu li').mouseout(function(){
        $(this).children('.submenu').stop().slideUp(500)
    });

    $('#popup_close_top').click(function(){
            $('#popup').css({'display':'none'}) 
    });
    //slide
    $('#slide_button>ul>li').click(function(){
        btn_num = $(this).index() * -100 //  0 -100 -200 -300 -400 -500 -600
        $(this).css({'background-color':'#fff'})
        $(this).siblings().css({'background-color':'transparent'})
        $('#slide_img').stop().animate({left:btn_num+'%'},300)
        //btn_num =  main_slide_num 
    })

    autokey = 0
    setInterval(function(){
        if(autokey==0){
            
                 if(btn_num <= -700){ btn_num = 0
                $('#slide_img').stop().css({left:0})
                $('#slide_button>ul>li').eq(0).css({'background-color':'#fff'}).siblings().css({'background-color':'transparent'})
                }
        
                btn_num =  btn_num - speed // 0 -100 -200 -300 -400 -500 -600  =  0 1 2 3 4 5 6 
                $('#slide_img').animate({left:btn_num+'%'})
                btn_num2 = btn_num / -100 // 0/-100 = 0    -100/-100=1   -200/-100=2   -300/-100 =3
                if( btn_num2 == 7){btn_num2 = 0}
                $('#slide_button>ul>li').eq(  btn_num2 ).css({'background-color':'#fff'}).siblings().css({'background-color':'transparent'})
         
        }    
       },4000)
    btn_num = 0;
    speed = 100;
    btn_num2 = 0;
    $('#slide_next_btn').click(function(){
        if(btn_num <= -700){ btn_num = 0
        $('#slide_img').stop().css({left:0})
        $('#slide_button>ul>li').eq(0).css({'background-color':'#fff'}).siblings().css({'background-color':'transparent'})
        }

        btn_num =  btn_num - speed // 0 -100 -200 -300 -400 -500 -600  =  0 1 2 3 4 5 6 
        $('#slide_img').animate({left:btn_num+'%'})
        btn_num2 = btn_num / -100 // 0/-100 = 0    -100/-100=1   -200/-100=2   -300/-100 =3
        if( btn_num2 == 7){btn_num2 = 0}
        $('#slide_button>ul>li').eq(  btn_num2 ).css({'background-color':'#fff'}).siblings().css({'background-color':'transparent'})
    })
    $('#slide_pre_btn').click(function(){
        if(btn_num >= 0){
            btn_num = -700
            $('#slide_img').stop().css({left:"-700%"})
        }
        btn_num = btn_num + speed
        $('#slide_img').animate({left:btn_num+'%'})
        $('#slide_button>ul>li').eq(btn_num/-100).css({'background-color':'#fff'}).siblings().css({'background-color':'transparent'})
    })

    //section
    $('#sec3_bt1').click(function(){
        $('#sec3_bt1').css({'color':'#6318ed','border-color':'#6318ed'})
        $('#sec3_bt2').css({'color':'#aaa','border-color':'#aaa'})
        $('#sec3_bt3').css({'color':'#aaa','border-color':'#aaa'})
        $('#sec3_img_wrap1').show()
        $('#sec3_img_wrap2,#sec3_img_wrap3').hide()
    })
    $('#sec3_bt2').click(function(){
        $('#sec3_bt1').css({'color':'#aaa','border-color':'#aaa'})
        $('#sec3_bt2').css({'color':'#6318ed','border-color':'#6318ed'})
        $('#sec3_bt3').css({'color':'#aaa','border-color':'#aaa'})
        $('#sec3_img_wrap2').show()
        $('#sec3_img_wrap1,#sec3_img_wrap3').hide()
    })

    $('#sec3_bt3').click(function(){
        $('#sec3_bt1').css({'color':'#aaa','border-color':'#aaa'})
        $('#sec3_bt2').css({'color':'#aaa','border-color':'#aaa'})
        $('#sec3_bt3').css({'color':'#6318ed','border-color':'#6318ed'})
        $('#sec3_img_wrap3').show()
        $('#sec3_img_wrap1,#sec3_img_wrap2').hide()
    })

    $('#stop').click(function(){
        $(this).hide()
        $('#play').show()
        main_speed = -100;
        autokey = 0
    })
    $('#play').click(function(){
        $(this).hide()
        $('#stop').show()
        main_speed = 0;
        autokey = 1
    })

    //스크롤이벤트
    $(window).scroll(function(){
        sc= $(window).scrollTop()
        $('#scroll_txt').text(sc)
        if( sc >= 0 ){
            $('#slide_txt').css({"margin-top":"-100px","opacity":"1"})   
        }
        if(sc >= 100 ){
            $('#section1 h2').css({"margin-top":"100px","opacity":"1"}) 
            $('#section1 p').css({"margin-top":"30px","opacity":"1"}) 
            $('#sec1_box').css({"margin-top":"0px","opacity":"1"})    
            $('#sec1_bt').css({"margin-top":"60px","opacity":"1"})       
        }
        if(sc >= 1000 ){  
            $('#sec1_bt').css({"margin-top":"60px","opacity":"1"})       
        }
       
        if(sc >= 1400 ){
            $('#section2>h2').css({"margin-top":"50px","opacity":"1"}) 
            $('#section2>p').css({"margin-top":"30px","opacity":"1"})         
            $('#sec2_box_wrap').css({"margin-top":"100px","opacity":"1"})   
            $('#sec2_scroll').css({"margin-top":"100px","opacity":"1"}) 
            $('#sec2_scroll3').css({"margin-top":"30px","opacity":"1"})  
        }

        if(sc >= 2300 ){
            $('#section3 h2').css({"margin-top":"100px","opacity":"1"}) 
            $('#sec3_btnbox').css({"margin-top":"40px","opacity":"1"}) 
            $('#sec3_img_wrap1').css({"margin-top":"0px","opacity":"1"}) 
            $('#sec3_btnbox2').css({"margin-top":"0px","opacity":"1"})
        }

        if(sc >= 3800 ){
            $('#section4>h2').css({"margin-top":"0px","opacity":"1"}) 
            $('#section4>h3').css({"margin-top":"0px","opacity":"1"})
            $('#section4>p').css({"margin-top":"20px","opacity":"1"})
        }

        if(sc >= 3900 ){
            $('#sec4_wrap>p').css({"margin-top":"50px","opacity":"1"}) 
            $('#sec4_news').css({"margin-top":"30px","opacity":"1"}) 
            $('#sec4_img').css({"margin-top":"30px","opacity":"1"})
        }
        //헤더 스크롤이벤트
        if(sc >= 200 ){
            $('#header1').css({'position':'fixed'})
        }
        else if(sc < 200 ){
            $('#header1').css({'position':'static'})
        }
        if(sc > 4667 ){         
            $('#bar').css({'position':'absolute','bottom':'390px'})
            $('#top').fadeIn()
        }
        else if(sc < 4667){   
            $('#bar').css({'position':'fixed','bottom':'30px'}) 
            $('#top').fadeOut() 
        }
    })

    $('#barimg2').mouseenter(function(){
        $('#barimg2_wrap').stop().animate({left:-70},50,function(){
            $('#barimg2_wrap').stop().animate({top:-70},30,function(){
                $('#barimg2_wrap').stop().animate({left:70},30,function(){
                    $('#barimg2_wrap').stop().animate({top:25},30,function(){
                        $('#barimg2_wrap').stop().animate({left:8},80)
                    })
                })
            })
        })     
    })

})

