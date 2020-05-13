$(function(){        
    tabs();  // tabs 기능 호출(=실행)
    popup(); // popup 기능 호출
});
function tabs(){ // tabs 기능 정의
    $(".board_title li").click(function(){
        //console.log("클릭한 LI : "+$(this).index());
        if(!$(this).hasClass("on")){
            $(this).siblings().removeClass("on");
            $(this).addClass("on");
            $("#gallery").toggleClass("hide");
        }
    });  
}
function popup(){ // popup 기능 정의
    popup_open();
    popup_close();
}
function popup_open(){
    $("#notice li:eq(0)").click(function(){// 팝업창 열기
        $("#popup").css("display","block");
    });
}
function popup_close(){
    $("#popup input[type=button]").click(function(){
        $(this).parent().css("display","none");
    });
}