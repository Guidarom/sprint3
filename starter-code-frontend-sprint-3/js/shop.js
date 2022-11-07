// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];


// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;
const pricesList=[];

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    const productFound= products.find(prod=>id ===prod.id);
    cartList.push({...productFound});
    //pricesList.push(productFound.price) ...comentario mio añade automaticamente el precio al total/Pero nos pide el ejercicio 3
    //calculateTotal()
    //console.log(pricesList)
    console.log(productFound)    
    console.log(cartList.length)   
    document.getElementById("count_product").innerHTML = cartList.length
}

// Exercise 2
function cleanCart() {
    cartList.length=0
    pricesList.length=0
    cart=[]
    console.log(cartList.length)
    console.log(cartList)
    document.getElementById("count_product").innerHTML= cartList.length
    printCart()
    calculateTotal();

}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    total=0
    //El primer total lo hacemos del cartList
    /*   for (let i = 0; i < cartList.length; i++) {
        
        total+=cartList[i].price
        
                
    } */  
    for (let i=0;i<cart.length;i++){

        if (cart[i].subtotalWithDiscount){
            total+=cart[i].subtotalWithDiscount
        }
        else if (cart[i].subTotal>0){
            total+=cart[i].subTotal
        }

    }
    console.log(total) 
    document.getElementById("total_price").innerHTML=total
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    cart = []
    
for (let i = 0; i < cartList.length; i++) {
    let eachProduct=cartList[i];
    const searchProduct= cart.find(prod=>eachProduct.id===prod.id) 
    if(searchProduct){
        searchProduct.quantity+=1;
        searchProduct.subTotal+=eachProduct.price;
        
    }
    else if (!searchProduct){        
        eachProduct.quantity=1;
        eachProduct.subTotal= eachProduct.price;
        cart.push(eachProduct)

    }
    }
    console.log(cart)
    applyPromotionsCart()
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for(i=0; i < cart.length; i++) {
        const product=cart[i]
        if(product.id ==1 && product.quantity >=3){
            product.subtotalWithDiscount=product.quantity*10
        }
        else if(product.id ==3 && product.quantity >=10){
            product.subtotalWithDiscount=(product.price*2/3)*product.quantity
        }       
    }
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
        const table= document.getElementById('cart_list')
        
        const tabList=[]
        for(i=0; i<cart.length;i++){     
            
            if (cart[i].subtotalWithDiscount){
                let row =   `<tr>
                <td>${cart[i].name}</td>
                <td>${cart[i].price}</td>
                <td>${cart[i].quantity}</td>
                <td>${cart[i].subtotalWithDiscount}</td>
            </tr>`
            tabList.push(row)
            }
            else if (cart[i].subTotal){
                let row =   `<tr>
                <td>${cart[i].name}</td>
                <td>${cart[i].price}</td>
                <td>${cart[i].quantity}</td>
                <td>${cart[i].subTotal}</td>
            </tr>`
            tabList.push(row)
            }            
            //table.innerHTML+=row    
        } 
        table.innerHTML=tabList    
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    const index=cart.findIndex(prod=> id===prod.id)
    console.log(index)
    if (index === -1) {
        alert("No hay este producto en el carrito");
    }
    else if (index !== -1) {
        if(cart[index].quantity==1){
            cart.splice(index, 1);
        }
        else if(cart[index].quantity>1)
            cart[index].quantity-=1
        
    }

}

function open_modal(){
    generateCart();
    calculateTotal();
	console.log("Open Modal");
	printCart();
}
