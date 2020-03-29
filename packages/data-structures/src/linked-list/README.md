# Linked List

...is a structure designed to store data and to allow access to it. It is a similar data structure to an `Array`, but with differences which are detailed below:

## 1. It doesn't have fixed size
Unlike Arrays which allocate fixed memory upon initialisation, a Linked List will allocate memory per data node. Each node will contain references to the next one (some linked lists are also contain references to the previous element). 

(Pros/Cons)

## 2. Unlike Arrays travesal and accessing of data is linear, not constant


### i. Accessing/Traversing 
Arrays have a constant time when it comes to accessing elements, because each element has a pointer to it, this allows direct access to each piece of data within the same time complexity.

Linked List Elements however, require iteration; the only way to access elements require iteration through each item in the list, until the value condition is met. This means that it can take a lot longer to access elements in a Linked List.


### ii. Addition/Deletion 
Another common operation that we apply to such structures is the adding and removing of elements. Arrays tend to be quite slow here, because of their static nature. They have a fixed amount of memory that they keep and adding a new item usually requires the whole array to be copied while allocating more memory. Now, imagine adding an element in a particular location in the middle of the array and what kind of shuffling this would cause. Removing an element is available but in reality you only nullify the value. The memory is still being reserved for the array.

Linked lists are more performant in this situation. Adding an element anywhere in the list will require only a change of pointers. Removing is also a fast operation which will also free up the memory allocated for the particular element. If there are no references to it it will be garbage collected.