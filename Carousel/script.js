const images=[ 'https://mdbootstrap.com/img/Photos/Slides/img%20(35).webp', 'https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg', 'https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg', 'https://dequeuniversity.com/assets/js/patterns/images/tempimage02.jpeg', 'https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg', 'https://wowslider.com/sliders/demo-77/data1/images/tuscany428041.jpg', 'https://wowslider.com/sliders/demo-77/data1/images/idaho239691_1920.jpg', 'https://wowslider.com/sliders/demo-77/data1/images/road220058.jpg', 'http://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hanv9909.jpg', 'https://soliloquywp.com/wp-content/uploads/2013/05/action-backlit-beach-1046896-1200x450_c.jpg', 'https://soliloquywp.com/wp-content/uploads/2013/05/artistic-backlit-creative-532285-1200x450_c.jpg', 'https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp', 'https://jpcamara.com/wp-content/uploads/2015/02/carousel.jpg']


const imagetag=document.getElementById('imagetag');

let buttonLess=document.getElementById('less');
let buttonAdd=document.getElementById('add');


buttonAdd.addEventListener("click", myFunction);
function myFunction() {

 let currentValue=imagetag.src;  
 const index = images.findIndex(image => image == currentValue);






if(index==12){
    imagetag.src=images[0];

    $("#dot13").removeClass("active");
    $("#dot1").addClass("active");
}
else{
    imagetag.src=images[index+1];
    var dotcount=index+2;
    var dotcountless=index+1;

    $("#dot"+dotcount).addClass("active");
    $("#dot"+dotcountless).removeClass("active");
}

}

buttonLess.addEventListener("click", myFunction2);
function myFunction2() {

 let currentValue=imagetag.src;  
 const index = images.findIndex(image => image == currentValue);

if(index==0){
    imagetag.src=images[12];
    $("#dot1").removeClass("active");
    $("#dot13").addClass("active");
}
else{
    imagetag.src=images[index-1];

    var dotcount=index+1;
    $("#dot"+index).addClass("active");
    $("#dot"+dotcount).removeClass("active");
}




}




jQuery(".dot i").click(function(){
    $(".dot i").each(function(){
      jQuery(this).removeClass("active");
    })
    jQuery(this).addClass("active");
    
    var max_count=(jQuery(this).attr("count"));

    document.getElementById('imagetag').src=images[max_count-1]




// var indexxx = value + 1;
// document.getElementById("level").innerHTML = indexxx + ("/10");
// document.getElementById("demo").src = image[value];



})
