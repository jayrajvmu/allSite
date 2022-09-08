$(document).ready(function(){


  var datata = JSON.parse(localStorage.getItem("neworderitem"));

      fetch('../data/data.json')
       .then(response=>response.json() )
       .then(function (data) {
  
  
          console.log(data);
     
          for(let i = 0; i < datata.length; i++){
 

              $.each(data, function (key, value) {
      
                // var condition = datata.indexOf(value.id.toString());
                
      
                if (datata[i][0]==value.id) {
                  console.log(value.id)
      
      
      
                  $("#content").append(`<div class="row">
      <div class="card" >
        <img src="${value.image}" class="imagees" alt="...">
        <div class="card-body">
          <h6 class="card-title">${value.title}</h6>
         <p>Price :  <span class="badge bg-info text-dark"> $ ${value.price}</span></p>
         <p> <span class="badge  bg-success">${value.rating.rate} *</span> ${value.rating.count} ratings </p>
       
      <b>Total Amount:<span id="totalprice${value.id}${datata[i][2]}"> $ ${value.price*datata[i][1]}</span></b>
        
      <div class="d-grid gap-2">
      
        <button class="btn btn-danger" type="button" onclick ='removecart("${value.id}", "${datata[i][2]}")'>Remove</button>
      </div>
          
        </div>
      </div>
      </div>`);
                }
      
              });
            }
       })
  
     
     });


     var total_Amount = '';

     function add(price, id, secid) {
 
       var quantityfist=  document.getElementById('quantity'+id+secid).innerHTML;
       quantity=parseInt(quantityfist)+1;
 
       document.getElementById('quantity'+id+secid).innerHTML = ' ' + quantity + ' ';
    
      
       total_Amount = parseFloat(quantity) * parseFloat(price);
       document.getElementById("totalprice"+id+secid).innerHTML = '$ ' + total_Amount + ' ';
 
       var datata = JSON.parse(localStorage.getItem("neworderitem"));
 
       
         for(let i = 0; i < datata.length; i++){
 
           if((datata[i][0]==id) &&(datata[i][2]==secid)){
            console.log(datata[i][1])
            datata[i][1]=quantity;
            localStorage.setItem("neworderitem", JSON.stringify(datata));
           }
         
 
         }
     }
     function minus(price, id, secid) {
 
       var quantityfist=  document.getElementById('quantity'+id+secid).innerHTML;
 
       quantity=parseInt(quantityfist)-1;
             document.getElementById('quantity'+id+secid).innerHTML = ' ' + quantity + ' ';
       total_Amount = parseInt(quantity) * parseFloat(price);
       document.getElementById("totalprice"+id+secid).innerHTML = '$ ' + total_Amount + ' ';
       var datata = JSON.parse(localStorage.getItem("neworderitem"));
 
       
 for(let i = 0; i < datata.length; i++){
 
   if((datata[i][0]==id) &&(datata[i][2]==secid)){
    console.log(datata[i][1])
    datata[i][1]=quantity;
    localStorage.setItem("neworderitem", JSON.stringify(datata));
   }
 
 
 }
     }
 
 
     function removecart(id, secid) {
       var datata = JSON.parse(localStorage.getItem("neworderitem"));
       // var index = datata.indexOf(id);
       // datata.splice(index, 1);
 
 
       for(let i = 0; i < datata.length; i++){
 
 if((datata[i][0]==id) &&(datata[i][2]==secid)){
   var index = datata.indexOf(datata[i]);
  console.log(index)
  datata.splice(index, 1);
  localStorage.setItem("neworderitem", JSON.stringify(datata));
 }
 
 
 }
 
 
 
       localStorage.setItem("neworderitem", JSON.stringify(datata));
 alert("Removed")
     }
     function finished() {
       alert('Product')
     }