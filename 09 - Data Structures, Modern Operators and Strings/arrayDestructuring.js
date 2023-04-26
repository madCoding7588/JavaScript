const arr = [7,8,9];
 // now we want to create a new array based on this array but some new elements at the beginning.
// Q. How would we do that?

// we would need to loop over this array,or even worse do it manually.

const badNewArr = [1,2,arr[0],arr[1],arr[2]];
// if we want to add 1 and 2 at the beginnig of an array we will have to 1, 2 and each of these elemnts: [1,2,arr[0],arr[1],arr[2]];

console.log(badNewArr);

// [ 1, 2, 7, 8, 9 ]
// and this is quite a common approach that we want to do , since es6 we do it in a much better way using the spread operator.

// working of spread operator:
const newArr = [1,2,...arr];
// we use ...arr to basically expand this arr into all of it's individual elements.
console.log(newArr);
// now you see we get an exact same result here.
// what spread operator does is basically take all the values out of this arr. array and then write them individually  as if we wrote seven , eight , nine here manually.

// const newArr = [1,2, arr];
console.log(newArr);
// if we remove the spread operator we would have [1,2,arr] = [1,2,[7,8,9]] . one, two and then an array of seven , eight and nine. that's because we are including the entire array.

// taking all the elements out of the array and writing them manually ... when we do this we will get 7,8,9 represented individually here , represented in this new array.

// what this means is that we can use the spread operator whenever we would otherwise write multiple values separated by commas. and that situation happens whenever we write an array literal like we did .

// 1) it is very useful to expand an array and second situation is when we pass arguments into functions.

// let's say we wanted to actually log the individual elements of this new array here.

// if we simply log the array it is ofcourse going to look like this i.e.: [1,2,7,8,9]; it's just one big value.

// but if we use spread operator to expand new array 
console.log(...newArr);
// it would log the individual elemnts of the array.
 // 1 2 7 8 9
// this would be same as writing :
console.log(1,2,7,8,9);

//  note : whenever we need the elemnts of the array individually then we use the spread operator.
// that is useful when we write an array and when we need to pass multiple elements into a function like we did here.

// let's see an useful example:
// we will create an array with one more food item in the main menu array.so that main menu is at 

// const restaurant = {
//   name:'Classico Italiano',
//   location:'Via Angelo Tavaties, Firenze, Italy',
//   categories:['Italian','Pizzeira','Vegetarian','Organic'],
//   starterMenu:['Facaccia','Brushella','garlic Bread','Caprese salad'],
//   mainMenu : ['Pizza','Pasta','Risto'],
// }

// so basically we want to create a main menu here:
 // const newMenu = []// let's say we want an original element + new element. We can do that by simply expanding the arrray.

// const newMenu = [...restaurant.mainMenu,'Gnocci'];
// console.log(newMenu);

///[ 'Pizza', 'Pasta', 'Risto', 'Gnocci' ]
//we print newMenu we have the original elements  + 'Gnocci'
// above we are completely createing an new array.we are not manuplating the restaurant dot main menu array. So we are building new array from scratech  by the square brackets. and [] syntax here  is  simply the we are writing the new arrays.

// here also we are writing an new array but simply based on expanding this array(restaurant.mainMenu) and then adding another element to it.

/// you might have notices the spread operator is a bit similer to destructuring. becoz it also helps us get elements out of the arrays. the big difference is that the spread operator takes all the elements from the array  and also it doesn't create new variables

// as a consequence we can only use it in places where we would otherwise write values separated by commas.// didn't get this part.


// two important use cases of spread operator:
//1) to create shallow copies of arrays 
// 2) to merge two arrays together

// Copy array:
// let's simply craete the copy of the main menu: let's write new array and into that new array , we will put all the elements that are currently in the main menu.

// const mainMenuCopy = [...restaurant.mainMenu];
// here just we created shallow copy of mainMenu array.
// this is little bit similar to object.assign
// this syntax is [...restaurant.mainMenu] is lot easier to use.
// console.log(mainMenuCopy);

// Joint 2 arrays together or more 
// challenge: create variable menu which will be an array which contain the whole menu. so both the main menu and starter menu.
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// so we end up with both starterMenu and mainMenu 
// we are told spread operator works on arrays , but that's not entirely true, actually spread operator works on all so-called iterables.

// Q. what is an iterable?
  // there are different iterables in javaScript. we will talk about all of them:
  // iterable are things like all arrays , strings, maps or sets but not objects, so most of the built in datastructures in javascirpt are iterables , but except objects.

  // iterables: arrays, strings, maps, sets. NOT objects.
// since strings are also iterable that means we can use spread operator on strings.
const str = 'Jonas';
// then we want to create an array which contains all the individual letters, plus some other elements.

const letters = [...str, ' ','S.'];
console.log(letters);

//  here we get an array where each letter of the original string is now an individual element.
// so just like we expanded , so we unpacked an array, we now did the same thing with a string.

//note : keep in mind we can still only use the spread opertor when building an array or when we pass values into a function.

// we can also do this 
console.log(...str);
console.log('j','o');


// here we get all the individual elements.
// what we can't do is using this to build a string using a template literal.

// console.log(`${...str} schemedtmann`)

// so here this is not going to work. that is because ${...str} , this is not a place that excepts multiple values sepearted by comma.

// multiple values seperated by comma are usually only expected when we pass arguments into a function or when we build a new array.


// let's write our own function that expects multiple arguments  and then use the spread operator. to actually pass those arguments.


const restaurant = {
  name:'Classico Italiano',
  location:'Via Angelo Tavaties, Firenze, Italy',
  categories:['Italian','Pizzeira','Vegetarian','Organic'],
  starterMenu:['Facaccia','Brushella','garlic Bread','Caprese salad'],
  mainMenu : ['Pizza','Pasta','Risto'],

   //let's say we want a method to just order pasta and pasta always needs to have exactly 3 ingrediants:
  orderPasta: function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`);
  }
}


// so we want to get these 3 ingredients from the prompt window.

// const ingredients = [prompt()]
// each elemnt will be defined by a prompt window.so this here now has nothing to do with the spread operator, it's actually way so that we can actually input the data ourselves.

// Real-World example:
// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'),prompt('Let\s make pasta! Ingredient 2?'),prompt('Let\s make pasta! Ingredient 3?')];


// console.log(ingredients);
// output: ['a','b','c']

// restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
// using the oldways we would write ingredients[0], ingredients[1], ingredients[2];

//since we learnt about spread operator in this lecture , we can do a lot better.
// restaurant.orderPasta(...ingredients);// so always go with this more modern ES6 syntax.

// since ES 2018 , the spread operator actually also works on objects , even though objects are not iterables.

// Objects:
// now let's create newRestaurant and simply spread restaurant into this new object  and then we can add anything that we want ,and also the order does't matter  

// const newRestaurant = {...restaurant,founder:'Guiseppe'};
const newRestaurant = {foundedIn: 1998, ...restaurant,founder:'Guiseppe'};

console.log(newRestaurant);
// we get new object -> foundedIn, founder

// since we were able to do shallow copies of arrays, using the spread operator, we can do the same with objects.

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// now if you take look at both of them name of original object and that of copy object are different.

// output:Ristorante Roma
// Classico Italiano
// this means we did make a copy of the original restaurant.

// as we learnt from previous section : that changing one object would then also change the other one.






