/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/




const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];





function getUniqueProductCount(listOfProducts){
	let object={};
  for(let i=0;i<listOfProducts.length;i++){
  let productitem=listOfProducts[i].productName
  	if(object[productitem]==undefined){
    	object[productitem]=1
    }
    else{
    	object[productitem]+=1
    }
  }
  return object
}


let response1=getUniqueProductCount(listOfProducts)

let arr=[];
function getUniqueProducts(listOfProducts){
	let object={};
  for(let i=0;i<listOfProducts.length;i++){
  	let productitem=listOfProducts[i].productName;
    if(object[productitem]==undefined){
    	object[productitem]=listOfProducts[i]
    }
    else{
    	object[productitem].quantity +=listOfProducts[i].quantity
    }
  }
/*   console.log(object)  */
  
  for(let key in object){
  	arr.push(object[key])
  }
  return arr;
}

let response2=getUniqueProducts(listOfProducts)
console.log(response1)

console.log(response2)