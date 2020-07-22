$(".ect >li").on("mouseenter",function(){
    $(this).addClass("on");
});
$(".ect >li").on("mouseleave",function(){
    $(this).removeClass("on");
});

$(".depth01").on("mouseenter",function(){
    $("#gnb").addClass("on");
});
$("#gnb").on("mouseleave",function(){
    $(this).removeClass("on");
});

let mainVisual = new Swiper("#mainVisual .mask",{
    effect:"fade",
    speed:1000,
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },
    on:{
        slideChange:function(){
            $("#mainVisual .mainInfo li").removeClass("active");
            $("#mainVisual .mainInfo li").eq(this.realIndex).addClass("active");
        }
    }
});

$("#mainVisual .mainInfo li").on("click",function(){
    if(!mainVisual.animating){
        mainVisual.slideTo($(this).index());
    }
    return false;
});
$("#mainVisual .mainInfo li").eq(0).addClass("active");


let btnPause = $(".mainVisualStopBtn .pauseBtn");
let btnPlay = $(".mainVisualStopBtn .playBtn");
btnPause.on("click",function(){
    mainVisual.autoplay.stop();
    btnPlay.css("display", "block");
    btnPause.css("display","none");
});
btnPlay.on("click",function(){
    mainVisual.autoplay.start();
    btnPause.css("display", "block");
    btnPlay.css("display","none");
});

let weeklySwiper = new Swiper("#weekly .weeklyMask",{
    slidesPerView:"5",
    observer:true,
    observeParents:true,
    observeSlideChildren:true,
    navigation:{
        nextEl:"#weekly .sub .right .weeklyNext",
        prevEl:"#weekly .sub .right .weeklyPrev"
    }
});

let mdVisual = new Swiper("#mdPick .mdRight .mdItem",{
    slidesPerView:"3",
    observer:true,
    observeParents:true,
    observeSlideChildren:true,
    navigation: {
        nextEl: '#mdPick .mdRight .btnMd .nextMd',
        prevEl: '#mdPick .mdRight .btnMd .prevMd',
      },
});

let shopVideoSwiper = new Swiper("#shop .teaShopMask",{
    slidesPerView:"1",
    autoplay:{
        delay:3000,
        disableOnInteraction:false
    },
    observer:true,
    observeParents:true,
    observeSlideChildren:true,
});





let addZero = function(num){
    if(num<10){
        return "0"+num;
    }else{
        return num;
    }
};
let today = new Date();
let countDown = setInterval(()=>{
    let today = new Date();
    let endDate = new Date(today.getFullYear(),today.getMonth(),today.getDate(),24,00,00);
    let remainedTime = endDate.getTime() - today.getTime();
    let rSec = addZero(Math.floor(remainedTime/1000)%60);
    let rMin = addZero(Math.floor(remainedTime / 1000 / 60)%60);
    let rHour = addZero(Math.floor(remainedTime/1000/60/60)%24);

    let leftTime = rHour+":"+rMin+":"+rSec;
    $("#onlyToday .onlyCon .time").text(leftTime);
},1000);

let tab = $(".shopItemTab > li");
tab.on("click",function(e){
    e.preventDefault();
    let targetContents = $(this).parent().data("tab-contents");
    $(targetContents).children("li").eq($(this).index()).addClass("on");
    $(targetContents).children("li").eq($(this).index()).siblings().removeClass("on");
    $(this).siblings().removeClass("on");
    $(this).addClass("on");
});

$(window).on("scroll",function(){
    let st = $(window).scrollTop();
    console.log(st);
    if(st>0){
        $("#header").addClass("scroll");
    }
    else{
        $("#header").removeClass("scroll");
    }
})