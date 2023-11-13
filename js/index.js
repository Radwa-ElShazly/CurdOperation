// CRUD Opetation
// create =>add new product
// read =>display
// update
// deleted
// search
let productName        =document.getElementById("pn");
let productPrice       =document.getElementById("pp");
let productCategory    =document.getElementById("pc");
let productDescription =document.getElementById("pd");
let tbody              =document.getElementById("tbody");
let addBtn            =document.getElementById("addBtn");
let myIndex;
// any property set get value
// productName.value="Ahmed"
let allProducts =[];

function setToLocalStorage(){
    localStorage.setItem("allProducts",JSON.stringify(allProducts));
}

// localStorage =>built in object =>msh bt5d 3'r string
// kol browser leh localStorage bt3th
// localStorage.clear() btms7 kol elElments elle feh localStorage
// localStorage.removeItem() btms7 element w7d
// localStorage.setItem("userEmail","mahmoud");
// let test=localStorage.removeItem("userEmail","mahmoud");
if(localStorage.getItem("allProducts")!=null){
   // JSON.parse bt7wl l to array
   allProducts =JSON.parse(localStorage.getItem("allProducts"));
   displayProduct(); 
}


// console.log(test);
//kol function leh single resposibility

addBtn.onclick =function(){
if(productName.value!="" && productPrice.value!=""&& productCategory.value!=" " &&productDescription.value!=""){
   if(addBtn.innerText=="ADD"){
// let pn=productName.value;
// let pp=Number(productPrice.value);
// let pc=productCategory.value;a
// let pd=productDescription.value;
// console.log(typeof(pp));
// tafasel
 let product={
        name:productName.value,
        price:Number(productPrice.value),
        catagory:productCategory.value,
        description:productDescription.value,
 }
allProducts.push(product);
// hna aro7 adef elAllproduct
// m7aga add elAdd products
// Array Methods =>function 22dr ast3dm5a m3 elArrary
// JSON.stringify() => bt3ml m3 array fqt bt7wl to string
setToLocalStorage();
removeForm();
displayProduct();
   }

   else{
       addBtn.innerText="ADD";
       // ana 3ayz agib kol ELvalues elle feh elInput
       allProducts[myIndex].name=productName.value;
       allProducts[myIndex].price=Number(productName.value);
       allProducts[myIndex].catagory=productCategory.value;
       allProducts[myIndex].description=productDescription.value;
       setToLocalStorage();
       displayProduct();
       removeForm();
}
}
}



function removeForm(){
    productName.value="";
    productPrice.value="";
    productCategory.value="";
    productDescription.value="";
}


function displayProduct(){
    // cartoona string => ashan a2dr a3ml concate
    let cartoona ="";
    // let test ="Cocacola";
    for(let i=0;i<allProducts.length;i++){
    // ES6 =>template literal => ${}
    cartoona +=`<tr>
    <td class="text-center">`+[i+1]+`</td>
    <td class="text-center">`+allProducts[i].name+`</td>
    <td class="text-center">`+allProducts[i].price+`</td>
    <td class="text-center">`+allProducts[i].catagory+`</td>
    <td class="text-center">${allProducts[i].description}</td>
    <td class="text-center">
    <button class="update btn bg-warning" onclick="updateElement(${i})">Upadate</button>
    </td>
    <td class="text-center">
    <button class="btn bg-danger" onclick="deleteElement(${i})">Delete</button>
    </td>
    </tr> `   
    }
    tbody.innerHTML=cartoona;
    }

function deleteElement(index){
        // how ana dlwa2ty 3eza  ams7 eh??
        // product => object =>array
        allProducts.splice(index,1);
        setToLocalStorage();
        displayProduct();
    }


    //   5MG                5 Mb        4Kb
    // localStorage  - sessionStorage -cookies

// https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_string_methods3

function search(term){
    let cartoona="";
    // let term=document.getElementById("searchInput").value;
    for(let i=0 ;i<allProducts.length;i++){
    if(allProducts[i].name.toLowerCase().indexOf(term) == 0){
            // object el be include data elb search 3lha
    cartoona+=
`<tr>
    <td class="text-center">`+[i+1]+`</td>
    <td class="text-center">`+allProducts[i].name+`</td>
    <td class="text-center">`+allProducts[i].price+`</td>
    <td class="text-center">`+allProducts[i].catagory+`</td>
    <td class="text-center">${allProducts[i].description}</td>
    <td class="text-center">
    <button onclick="updateElement(${i})" class="update btn bg-warning">Upadate</button>
    </td>
    <td class="text-center">
    <button class="btn bg-danger" onclick="deleteElement(${i})">Delete</button>
    </td>
    </tr> `  
        }
    }
tbody.innerHTML=cartoona;

}
// let x="Ahmed";
// console.log(x.toLowerCase());;

function updateElement(index){
    myIndex=index;
    productName.value      =allProducts[index].name;
    productPrice.value     =allProducts[index].price;
    productCategory.value  =allProducts[index].catagory;
    productDescription.value=allProducts[index].description;
    addBtn.innerText="Update";
    setToLocalStorage();
}





               