/*
 * The difference between let, const, and var is that let
 * allows you to rename a variable later on in your code.
 * Const however makes the variable a constant. You will
 * receive errors if you try to rename a variable that was
 * created using const. Var on the other hand is an ES5 feature
 * that is basically an amalgamation of both let and const. 
 */

 let renameMe = "Jonathan"

 const static = "You can't change me!"

 let renameMe = "Jon"

 var amalgamation = "You can change me"