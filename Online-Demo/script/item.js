const urlParams = new URLSearchParams(window.location.search);
const myId = urlParams.get('id');
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
     
     if(value.id==myId){
    

      let quantity=1;
         $("#content").append(`
    
    
    

<div  class="left">
<img src="${value.image}" >
</div>


<div class="right">
<h4>${value.title}</h4>
<p class="right-category">${value.category}</p>



<p><span class="badge bg-dark">Description</span> <p>
<p class="right-description">  ${value.description}</p>
<p>Price: <span class="badge bg-info text-dark">$ ${value.price}</span></p>
<p class="right-rating"> <span class="badge badgecolor">${value.rating.rate} *</span> ${value.rating.count} ratings</p>

<p>Quantity: <button type="button" class="btn btn-danger btn-sm" onclick="minuss('${value.price}')">-</button><span id="quantity">  ${quantity}  </span><button type="button" class="btn badgecolor btn-sm" onclick="add(' ${value.price}')">+</button>
</p>
<b>Total Amount:<span id="totalAmount"> $ ${value.price}</span></b>
<div class="cart-btn-div">
<button type="button" class="btn badgecolor btn-lg" id="order" productid="${value.id}">Order it</button>
<button type="button" class="btn btn-danger btn-lg" id="cart"  productid="${value.id}">Add to Cart</button>
</div>
</div>

    
       `
         );
      
        }
    
       });
         })


         fetch('../data/data.json')
         .then(response=>response.json() )
         .then(function (data) {
    
          let cartTitlee='';
          let myCategory='';
       $.each(data, function (key, value) {
       if(value.title.length>35){
        cartTitlee = value.title.slice(0, 35)+"....";
       }else{
        cartTitlee = value.title.slice(0, 35);
       }
        if(value.id==myId){
           myCategory=value.category
        }
     


       if(value.category==myCategory){
        $("#related").append(`  <a href="product.html?id=${value.id}"><div class="row">
        <div class="card" >
          <img src="${value.image}" class="card-image" alt="...">
          <div class="card-body">
            <h6 class="card-title">${cartTitlee}</h6>
    
            
          </div>
        </div>
        </div></a>`);
    
        
    
    
       
       }
    
    
       });
         })

       });

       function add(price) {
        var quantityfist=  document.getElementById('quantity').innerHTML;
        quantity=parseInt(quantityfist)+1;
  
        document.getElementById('quantity').innerHTML = ' ' +quantity+' ';
        total_Amount = parseFloat(quantity) * parseFloat(price);
        document.getElementById('totalAmount').innerHTML = '$'+total_Amount+' ';
      }
      function minuss(price) {
        var quantityfist=  document.getElementById('quantity').innerHTML;
  if(quantityfist>1){
    quantity=parseInt(quantityfist)-1;
    document.getElementById('quantity').innerHTML =' ' + quantity+' ';
    total_Amount = parseInt(quantity) * parseFloat(price);
    document.getElementById('totalAmount').innerHTML ='$'+total_Amount +' ';
  }

      }

      // localStorage.removeItem("newcartitem");
      // localStorage.removeItem("neworderitem");


console.log(localStorage.getItem("newcartitem"));

      $(document).on('click','#cart',function(){
let id =parseInt((this.getAttribute('productid')));
        if (localStorage.getItem("newcartitem")) {

          let finalquantity=parseInt($("#quantity").text());
  
          let datata = JSON.parse(localStorage.getItem("newcartitem"));

  
          datata.push([id, finalquantity, datata.length]);
          localStorage.setItem("newcartitem", JSON.stringify(datata));
          
        }
        // 
        else {
          let finalquantity=parseInt($("#quantity").text());

          let myarray = [[id, finalquantity, 0]];
          localStorage.setItem("newcartitem", JSON.stringify(myarray));
  
        }
        finalquantity=1;  





    });

    console.log("order");

    console.log(localStorage.getItem("neworderitem"));


    $(document).on('click','#order',function(){
      let id =parseInt((this.getAttribute('productid')));
              if (localStorage.getItem("neworderitem")) {
      
                let finalquantity=parseInt($("#quantity").text());
                let datata = JSON.parse(localStorage.getItem("neworderitem"));
                datata.push([id, finalquantity, datata.length]);
                localStorage.setItem("neworderitem", JSON.stringify(datata));
                
              }
              // 
              else {
                let finalquantity=parseInt($("#quantity").text());
      
                let myarray = [[id, finalquantity, 0]];
                localStorage.setItem("neworderitem", JSON.stringify(myarray));
        
              }
              finalquantity=1;  
      
      
      
      
      
          });



console.log(myId);
