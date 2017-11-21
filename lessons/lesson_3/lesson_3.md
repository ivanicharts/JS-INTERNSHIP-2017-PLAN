
Lesson 3 - Objects
------------------------------------------------------------

You have already learned that JavaScript variables are containers for data values.
This code assigns a simple value (Fiat) to a variable named car: 
`var car = "Fiat";`

Objects are variables too. But objects can contain many values.
This code assigns many values (Fiat, 500, white) to a variable named car: 
`var car = {type:"Fiat", model:"500", color:"white"};`

----------

#### <i class="icon-star"></i> Objects
Objects in JavaScript combine two important functions
The first is associative array: a structure suitable for storing any data. In this topic we'll learn exactly this type.
The second is the language capabilities for object-oriented programming. We will study these possibilities in the subsequent sections of the course.

*What you'll learn:*

 1. What is associative arrays
 2. How to create an Object
 3. Property accessors: *dot notation* vs *bracket notation*
 	
> Sources:
> - https://learn.javascript.ru/object
> - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object 
> - https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch3.md
> - https://www.w3schools.com/js/js_objects.asp
> - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors

#### <i class="icon-star"></i> Objects: properties, passing by reference and cloning
In this topic you need to learn 3 very important things about objects in JavaScript - check them in *What you'll learn* section!

*What you'll learn:*

 1. Property enumeration in an object
 2. Passing object by reference
 3. Clone objects
 4. How to `delete` specific method.

> Sources:
> - https://learn.javascript.ru/object-for-in 
> - https://learn.javascript.ru/object-reference
> - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects 

#### <i class="icon-star"></i> Objects: methods
Actually it is very small topic, nevertheless it is very important. Basically a `method` is a object property with a `function` type.

*What you'll learn:*

 1. What is *object method* and how to add a method to an object?
 2. `Object.assign()`
 3. `Object.keys()`
 4. `Object.values()`
 5. `Object.prototype.hasOwnProperty()`

> Sources:
> - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
> - In sidebar menu - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object

#### <i class="icon-star"></i> Prototypes
All JavaScript objects inherit the properties and methods from their prototype.
Objects created using an object literal, or with `new Object()`, inherit from a prototype called `Object.prototype`.
Objects created with `new Date()` inherit the `Date.prototype`.
The Object.prototype is on the top of the prototype chain.
All JavaScript objects (`Date`, `Array`, `RegExp`, `Function`, ...) inherit from the `Object.prototype`.

*What you'll learn:*

 1. What is prototype in JavaScript?
 2. What is `Object.prototype`
 3. What is *prototype chain*?
 4. What is `__proto__`?

> Sources:
> - https://learn.javascript.ru/prototypes 
> - https://developer.mozilla.org/ru/docs/Learn/JavaScript/Objects/Object_prototypes
> - https://www.w3schools.com/js/js_object_prototypes.asp
> - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype