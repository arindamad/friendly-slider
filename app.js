let config = {
  item: 6,
  margin: 40,
  autoplayTimeout: 3000,
  loop: true
  
}

let totalW = $(".ourSlider").width();
let calcWidth = (totalW - (config.margin * (config.item - 1))) /config.item;
$(".box1").width(calcWidth).css("margin-right", config.margin);

if(config.loop){
  let firstPos = $(".box1").length *calcWidth + $(".box1").length *config.margin;

  $(".box1").clone().addClass("duplicate").prependTo( ".slider-outer" );
  $(".box1").clone().addClass("duplicate").appendTo( ".slider-outer" );
 

  $(".box1").css("left", "-="+firstPos+"px");
}


$("#btn").click(function(){
  // if(config.item>$(".box1").length){
    $(".box1").animate({left:"+="+(calcWidth+config.margin)}, "slow");
  // }else{
  //   alert("Please add more slide.")
  // }
  
});

$("#btn2").click(function(){
  // if(config.item>$(".box1").length){
  $(".box1").animate( {left: "-="+(calcWidth+config.margin)}, "slow" );
  // }else{
    // alert("Please add more slide.")
  // }
});

setInterval(()=>{
  console.log("hi")
}, config.autoplayTimeout)


