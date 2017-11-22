
Lesson 5 - Closures and scope
------------------------------------------------------------


One of the most fundamental paradigms of nearly all programming languages is the ability to store values in variables, and later retrieve or modify those values. In fact, the ability to store values and pull values out of variables is what gives a program state.

Without such a concept, a program could perform some tasks, but they would be extremely limited and not terribly interesting.

But the inclusion of variables into our program begets the most interesting questions we will now address: where do those variables live? In other words, where are they stored? And, most importantly, how does our program find them when it needs them?

These questions speak to the need for a well-defined set of rules for storing variables in some location, and for finding those variables at a later time. We'll call that set of rules: Scope.

But, where and how do these Scope rules get set?

> Main sources:
> - https://learn.javascript.ru/functions-closures
> - https://github.com/getify/You-Dont-Know-JS/tree/master/scope%20%26%20closures

----------

#### <i class="icon-star"></i> Global Object
The mechanism of operation of functions and variables in JavaScript is very different from most languages.
To understand it, in this chapter we will look at variables and functions in the global domain.
In JavaScript, all global variables and functions are properties of a special object, called a `global object`.

*What you'll learn:*

 1. What is `global object` in JavaScript
 2. What is `window`?
 3. And again, what is `hoisting` and how it actually works?
 	
> Sources:
> - https://learn.javascript.ru/global-object
> - https://developer.mozilla.org/ru/docs/Web/API/Window/window
> - https://developer.mozilla.org/en-US/docs/Glossary/Global_object

#### <i class="icon-star"></i> Closures
IMHO *closures* are the most frequent question on JavaScript interviews. Basically it is mechanism how JavaScript divides variables on `inner` and `outer`. Lets perceive this topic as introduction for next one.

*What you'll learn:*

 1. What is *Closure* in JavaScript?
 2. What is `LexicalEnvironment`?
 3. What is `[[Scope]]`?

> Sources:
> - https://learn.javascript.ru/closures 
> - https://learn.javascript.ru/closures-usage

#### <i class="icon-star"></i> Scope
*Closures* and *Scope* is the most important topics in JavaScript (on a par with asynchrony of course). Prepare for a lot of information, but as faster you'll understand what it is and how to use it as sooner you'll be JavaScript guru!

*What you'll learn:*

 1. What is Scope?
 2. What is nested scope?
 3. Function scope VS block scope
 4. Functions as Scope
 5. Invoking Function Expressions Immediately
 6. And again, what is `hoisting` and how it actually works?
 7. Scope closure
 8. Loops+closure routine
 9. Modules

> Sources:
> - https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md
> - https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch2.md
> - https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch3.md 
> - https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch4.md
> - https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch5.md

