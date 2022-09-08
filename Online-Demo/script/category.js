const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('type');


$(document).ready(function(){
console.log(myParam);
    $("#headline").text(myParam);

    fetch('../data/data.json')
     .then(response=>response.json() )
     .then(function (data) {


   
   
   $.each(data, function (key, value) {
      
    //    if(value.title.length>35){
    //         cartTitle3 = value.title.slice(0, 35)+"....";
    //    }else{
    //         cartTitle3 = value.title.slice(0, 35);
    //    }
   if(value.category==myParam.toLowerCase()){
    $("#content").append(`  <a href="product.html?id=${value.id}"><div class="row">
    <div class="card" >
      <img src="${value.image}" class="card-image" alt="...">
      <div class="card-body">
        <h6 class="card-title">${value.title}</h6>
       <p> <span class="badge badgecolor">  ${value.category}</span></p>

        
      </div>
    </div>
    </div></a>`);

    


   
   }


   });
     })

   
   });
  