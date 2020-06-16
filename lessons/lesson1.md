## Summary

The first few lessons are designed to gauge the current ability and level of student as well as lay the foundations for future lessons; in particular the V8 engine and React. Hopefully in future lessons the student will be able to draw the parallels between data structures and JavaScript.

## JavaScript Basics

JavaScript is a interpreted language; interpreter's  The main difference is that an interpreter directly executes the instructions in the source programming language while a compiler translates those instructions into efficient machine code.
An interpreter will typically generate an efficient intermediate representation and immediately evaluate it.

```js
// This will be run correctly 
const firstDeclaration = 1;
console.log(firstDeclaration);

/* 
    The code below will throw an error and the second console.log 
    will not be run.
*/
firstDeclaration = 2; // const cannot be re-assigned
console.log(firstDeclaration);
```

### ALMOST Everything is parsed into a Object (Hash Map Data Structure)

Everything is JavaScript has a type. These are:

```ts
// Primitive Types
Object
number
boolean
String
null
undefined

// These types are transformed into Objects {}
Array
Function
Map
Set
```

Primitive types aside, the other types will be parsed into objects by the JavaScript intepreter. 

### JavaScript is a single-threaded language

Code instructions can only be run one at a time.