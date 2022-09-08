$(document).ready(function(){
  fetch('data/data.json')
   .then(response=>response.json() )
   .then(function (data) {
 let cartTitle3 ='';
 let arrayLength=data.length-5;
 
 
 $.each(data, function (key, value) {
    
     if(value.title.length>45){
          cartTitle3 = value.title.slice(0, 15)+"....";
     }else{
          cartTitle3 = value.title.slice(0, 15);
     }
 
 if(key<4){
   let startCountNew=Math.ceil(value.rating.rate);
   $("#new-arriaval").append(`<a href="page/product.html?id=${value.id}">
   <div class="new-arriaval-item" >
 
   <img src="${value.image}" class="new-arriaval-item-image">
 
   <div class="new-arriaval-item-data">
   <h6 class="new-arriaval-title">${cartTitle3}</h6>
   <h6 id="new-arriaval-rating${value.id}"></h6>
   </div>
 
 
   </div></a>
 `
   );
   console.log(key);
   if(key===3){
     $("#new-arriaval").append(`
  <button class="loadmorebtn"><a href="page/new-arrival.html">Load More</a></button>
   `
     );
   }
   for(let x=1; x<=startCountNew; x++){
     $("#new-arriaval-rating"+value.id).append(`<i class="fa fa-star" aria-hidden="true"></i>` );   
   }
 }
 
 
 
 if(key>arrayLength){
 let startCountUp=Math.ceil(value.rating.rate);
   $("#up-comming").append(`  <a href="page/product.html?id=${value.id}">
   <div class="up-comming-item" >
 
   <img src="${value.image}" class="up-comming-item-image">
 
   <div class="up-comming-item-data">
   <h6 class="up-comming-title">${cartTitle3}</h6>
   <h6 id="up-comming-rating${value.id}"> </h6>
   </div>
 
   </div>  </a>`
   );
   for(let i=1; i<=startCountUp; i++){
     $("#up-comming-rating"+value.id).append(`<i class="fa fa-star" aria-hidden="true"></i>` );
    
   } 
 }
 
 if(data.length===(key+1)){
   $("#up-comming").append(`
   <button class="loadmorebtn"><a href="page/up-comming.html">Load More</a></button>
   `
   );
 }
 });
   })
   loadData(20, 0)
 
 });
 
 
 function loadData(count, itemsvalue){
   fetch('data/data.json')
   .then(response=>response.json() )
   .then(function (data) {
     let cartTitle ='';
 
     $.each(data, function (key, value) {
   
       if((key<=count)&&(itemsvalue<=key)    ){
         if(value.title.length>45){
              cartTitle = value.title.slice(0, 45)+"....";
         }else{
              cartTitle = value.title.slice(0, 45);
         }
       $("#shopping-items").append(`      <a href="page/product.html?id=${value.id}"><div class="row">
 
 <div class="card" >
 <img src="${value.image}" class="imagees" alt="...">
 <div class="card-body">
 <h6 class="card-title">${cartTitle}</h6>
 <p><span class="pricespan">Price:</span> <span class="badge badgecolor"> $ ${value.price}</span></p>
 <div class="d-grid gap-2">
 </div>
 
 </div>
 </div>
 
 </div></a>
 `
 );
 itemsvalue++;
 }
 
     });
     
     
     let newitemsvalue=itemsvalue+20;
 
   
 if(itemsvalue==80){
   $("#loadmorebtn").remove();
 } 
 
 $("#loadmorebtn").attr("onclick",  'loadData('+newitemsvalue+',' +itemsvalue+')');
 
 
   })
 
 
 }
 
  