// Dot vs Bracket notation
const jonas = {
  firstName:'Jonas',
  lastName:'Schmedtmann',
  age:2037-1991,
  job:'teacher',
  friends:['Michael','Peter','Steven']
};
console.log(jonas);
/*
output:

{
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 46,
  job: 'teacher',
  friends: [ 'Michael', 'Peter', 'Steven' ]
}



*/

// there are two ways of getting property from an object
// first way is dot (.) notation.

console.log(jonas.lastName);
// output: Schmedtmann
// jonas.lastName , . in here is an operator and which will go to jonas object and retrive the property with the name we specified (lastName);

// we can do the same using bracket notation
console.log(jonas['lastName']);
// in here we create a bracket and we pass propery (key) as string .
/// output: Schmedtmann

///very importatnt thing to note :
// how is . and [] operator   different ?
//In [] we can pass an expression as string
// example : it will be clear from the below notation:
const nameKey = 'Name';
console.log(jonas['first'+ nameKey]);// in here 'first'+ 'Name' = 'firstName' and this is passed in jonas[] so we will obtain Jonas 
console.log(jonas['last' + nameKey]);


// but if you try same with (.) operator it won't work.
// console.log(jonas.'last' + nameKey); // this will throw an error.SyntaxError: Unexpected string

// this is why we need [] notation
// for (.) notation we will have to use final property name. and not a computed property name.

// ex: jonas.lastName in here lastName is  real property name and not a computed property name. As it appers in the object.

// q. what condition we should use . notation and whey shoud we use [] notation?

//   when we have to compute property name then we will have to use the bracket notation : ex: jonas['first' + nameKey] 
// . and in all other cases we use (.) notation.

// in this we write a stirng and this will create a pop up window:
const instrestedIn = prompt("What do you wnat to know about Jonas? Choose between firstName, lastNmame , age, job, and frinds");

// console.log( instrestedIn);

// you will get a prompt and put job  and open the inspect window and console part and you will find job.

// now lets try calling this instrestedIn on to an object.
console.log(jonas.instrestedIn)
// you will get undefined in the console part . 
// this is because property instrestedIn doesn't exit in jonas object.

// inseted what we can do is , we can use the bracket notation ?

console.log(jonas[instrestedIn]);
// understand what is happenning [] will be executed. as instrestedIn will throw a prompt and we will put job in it and that job will come in and will be serched in jonas object. and we will get teacher.

// lets try putting location in prompt?
// when we put loaction , we find undefined in the console.
// why is that? see if we pass loacation that will be conveted to string and will be looked in jonas object , is there any location property in it . if the property exists we will get the value otherwise undefined as loaction propetty is not availabel so we will get undefined.

if(jonas[instrestedIn]){
  console.log(jonas[instrestedIn]);
}
else{
  console.log('Wrong reqest ! Choose between firstName, lastName, age, job, and friends ')
}

// till here we got to know how to retrive elements using (.) and [ ] notation.

// now let's learn how we add new propeties to the object.

jonas.location = "India";
jonas['gitHub']  = "madCoding7588github.com";
console.log(jonas);
const name1 = "deshmukh"
const name2 = "somesh"
// jonas['github'] = "madcoding7588github.com";
// note in this [] you can pass the expression.
jonas["add"] = 22+3;
jonas["myName"] = name1 + name2;
console.log(jonas);


// Challenge 
// we need to write the below without hard coding anything 
// "jonas has 3 friends and his best friend is Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`);


// please vision some precedence table mdn 
//// what things are happening in here?
// ${jonas.friends.length} , first jonas.friends is computed and we get the array and then on that array we apply is length method to get the length .

// here we need to keep in mind about the 
// Membet Access and Computed Member Access
// and they work left to rigth .
// Member Accesss -> left-to-right -> ... . ...
// Computed Member Access -> left-to-right ... [ ... ]

// in here also ${jonas.friends[0]}, first jonas.friends is computed we get an array and then we take the first element from it .






// "Somesh has 3 friends and his best friend is Deshmukh"
// use object to get Somesh , 3 and Deshmukh.

