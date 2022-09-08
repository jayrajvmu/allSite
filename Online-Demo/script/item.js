$(document).ready(function(){



        fetch('../data/data.json')
         .then(response=>response.json() )
         .then(function (data) {
    
            const urlParams = new URLSearchParams(window.location.search);
            const idVal = urlParams.get('id');

            console.log(data);
       
            for(let i = 0; i < data.length; i++){
   
                if(data[i]['id']==idVal){
                    console.log(data[i]);
                


                  // var condition = datata.indexOf(value.id.toString());

        
                


        
                    $("#content").append(`<div class="row">
        <div class="card" >
          <img src="${data[i].image}" class="imagees" alt="...">
          <div class="card-body">
            <h6 class="card-title">${data[i].title}</h6>
           <p>Price :  <span class="badge bg-info text-dark"> $ ${data[i].price}</span></p>
           <p> <span class="badge  bg-success">${data[i].rating.rate} *</span> ${data[i].rating.count} ratings </p>
           </p>
           <div class="d-grid gap-2">
          <button class="btn btn-success" type="button" onclick=" finished()">Buy</button>
        
        </div>
            
          </div>
        </div>
        </div>`);
                  }
        
                
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
   
         var datata = JSON.parse(localStorage.getItem("newcartitem"));
   
         
           for(let i = 0; i < datata.length; i++){
   
             if((datata[i][0]==id) &&(datata[i][2]==secid)){
              console.log(datata[i][1])
              datata[i][1]=quantity;
              localStorage.setItem("newcartitem", JSON.stringify(datata));
             }
           
   
           }
       }
       function minus(price, id, secid) {
   
         var quantityfist=  document.getElementById('quantity'+id+secid).innerHTML;
   
         quantity=parseInt(quantityfist)-1;
               document.getElementById('quantity'+id+secid).innerHTML = ' ' + quantity + ' ';
         total_Amount = parseInt(quantity) * parseFloat(price);
         document.getElementById("totalprice"+id+secid).innerHTML = '$ ' + total_Amount + ' ';
         var datata = JSON.parse(localStorage.getItem("newcartitem"));
   
         
   for(let i = 0; i < datata.length; i++){
   
     if((datata[i][0]==id) &&(datata[i][2]==secid)){
      console.log(datata[i][1])
      datata[i][1]=quantity;
      localStorage.setItem("newcartitem", JSON.stringify(datata));
     }const urlParams = new URLSearchParams(window.location.search);
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
   
   
   }
       }
   
   
       function removecart(id, secid) {
         var datata = JSON.parse(localStorage.getItem("newcartitem"));
         // var index = datata.indexOf(id);
         // datata.splice(index, 1);
   
   
         for(let i = 0; i < datata.length; i++){
   
   if((datata[i][0]==id) &&(datata[i][2]==secid)){
     var index = datata.indexOf(datata[i]);
    console.log(index)
    datata.splice(index, 1);
    localStorage.setItem("newcartitem", JSON.stringify(datata));
   }
   
   
   }
   
   
   
         localStorage.setItem("newcartitem", JSON.stringify(datata));
   alert("Removed")
       }
       function finished() {
         alert('Finished')
       }