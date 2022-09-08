$(document).ready(function(){
  fetch('../data/data.json')
   .then(response=>response.json() )
   .then(function (data) {


 
 
 $.each(data, function (key, value) {
    
  //    if(value.title.length>35){
  //         cartTitle3 = value.title.slice(0, 35)+"....";
  //    }else{
  //         cartTitle3 = value.title.slice(0, 35);
  //    }
 

   $("#content").append(`


<a href="product.html?id=${value.id}">
   <div class="card mb-3">
   <div class="row g-0">
     <div class="col-md-4">
       <img src="${value.image}" class="card-image" alt="...">
     </div>
     <div class="col-md-8">
       <div class="card-body">
         <h5 class="card-title">${value.title}</h5>
         <p class="card-text">${value.category}</p>
         

      <p class="card-text"><small>${value.rating.rate}</small></p>
      <p><span class="badge badgecolor"> $ ${value.price}</span></p>

      </div>
     </div>
   </div>
 </div>
</a>


 `
   );


 
 


 });
   })

 
 });
