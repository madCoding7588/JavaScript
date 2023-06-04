const restaurant = {
    name:'Classico Italiano',
    location : 'Via Angelo Tabantis, Firenze, Italy',
    categories : ['Italian', 'Pizzeria', 'Vegetarian', 'Orgainc'],
    starterMenu :['Facaccia','Bruschella', 'garlic Bread ', 'Caprese Salad'],
    mainMenu : ['pizza','pasta','ristto'],

    openingHours:{
        thu:{
            open:12,
            close:22,
        },
        fri:{
            // open:11,
            close:23,
        },
        sat:{
            open:0,
            close:24,
        },
    },

    order:function(starterIndex,mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

//     orderDelivery : function({time, mainIndex,starterIndex,address}){
//         console.log(`Order received ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `);
//     }


// }



// restaurant.orderDelivery({

//     // options
//     time:'22:30',
//     address:'latur',
//     mainIndex:2,
//     starterIndex:2,
// })


// orderDelivery : function({time, mainIndex,starterIndex,address}){
//     console.log(`Order received ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `);
// }

orderDelivery:function({starterIndex=1,mainIndex=0,time='20:30',address}){
    console.log(`Order received ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `)
}

}



restaurant.orderDelivery({

// options
time:'22:30',
address:'latur',


})


// lets use concept of default values 



















// Q. we want to create two variable open and close? and these variables should contain 
// the open and close content from fri object?

// const {openingHours}=restaurant

// console.log(openingHours);

// const {fri}=openingHours

// console.log(fri);

// const {open, close}=fri

// console.log(open, close);

// const {openingHours}=restaurant
// const {fri:{open:o=[],close:m}} = openingHours;
// // console.log(open,close);
// console.log(o,m);


// cool application of Destructuring:




















// simple destructring
// this.starterMenu[starterIndex]
// restaurant.starterMenu[starterIndex];

// const {name,categories,openingHours} = restaurant;

// console.log(name,categories,openingHours);

// alias nameing 
// const {name,categories:tage,openingHours:hours} = restaurant;

// console.log(restaurantName,tage,hours);
// console.log(name,tage,hours);

// propetry not present in the object.
// console.log(restaurant.name13); //undefined

// default values
// const {menu =[]}=restaurant
// console.log(menu);//undefined
// console.log(menu);

// default values with property present in the object
// const {starterMenu =[]} = restaurant;
// console.log(starterMenu);

// applying destructuring , default values, aliasing.
// const {menu=[], starterMenu:starter=[]}=restaurant

// console.log(menu,starter);// [] [array elemnts]

// mutating => throws an error.
// let a = 111;
// let b= 999;

// const obj = {
//     a: 23,
//     b:7,
//     c:14,
// }

//   ( {a,b}=obj )
// console.log(a,b);
