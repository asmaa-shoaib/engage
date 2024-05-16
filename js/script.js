 

var nav=document.getElementById("navbar");
var y=$(window).scrollTop();
console.log(y)
    if(y<100){
        $('.navbar').css({backgroundColor:"transparent",boxShadow: "0px 0px 0px 0px #0000001a"})
        $(".nav-link").css({color:"white",transition:"all .00001s"})
        $(".contact").css({backgroundColor:"#fff",color:"#999",transition:"all .00001s"})
        $(".brand-dark").css({display:"none"})

    }

var advisorOffset=$(".header").offset().top;
$(window).scroll(function(){
    var x=$(window).scrollTop();
    if(x>advisorOffset){
        $('.navbar').css({backgroundColor:"rgb(255,255,255)",boxShadow: "0px 1px 5px 0px #0000001a",transition:"all 1.3s"});
        $(".nav-link").css({color:"#999",fontWeight:"400",transition:"all 1s"})
        $(".brand-dark").css({display:"inline-block"})
        $(".brand-light").css({display:"none"})
        $(".contact").css({backgroundColor:"#4caf50",color:"white",transition:"all .00001s"})
        nav.classList.remove("py-4");
        $(".contact").hover(function(){
            $(this).css({opacity:".8",transition:"all .5s"});
        }, function(){
            $(this).css({opacity:"1",transition:"all .5s"});
        });
        $(".icon-down").css({opacity:"1",transition:".5s"})
    }
    else{
        $('.navbar').css({backgroundColor:"transparent",boxShadow: "0px 0px 0px 0px #0000001a",transition:"all 1s"})
        $(".nav-link").css({color:"white",transition:"all 1s"})
        $(".brand-dark").css({display:"none"})
        $(".brand-light").css({display:"inline-block"})
        $(".contact").css({backgroundColor:"#fff",color:"#999",transition:"all .00001s"})
        nav.classList.add("py-4")
        $("#icon-down").css({opacity:"0",transition:".5s"})
    }
})
$("a").click(function(){
    var x=$(this).attr("href")
    var offsert=$(x).offset().top;
    $("html").animate({scrollTop:offsert},1000)
})

$("#icon-down").click(function(){
    $("html").animate({scrollTop:0},1000)
})


$(document).ready(function(){
    $("#loading").fadeOut(2000,function(){
        $(".over-lay-loading").css("visibility","hidden");
        
        $("body").css("overflow","auto");
    });
   

})
