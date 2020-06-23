## Summary

This lesson includes the first algorithms; Breadth-First/Depth-First. Both are related searching algorithms - commonly used for discovering and mapping graphical data. Since this types of algorithms can be linked to React Fiber/Virtual DOM, so will make future lessons easier to elaborate on.


## Breadth-First Search

### How it Works

Breadth (ie width) based search, will take a source vertex (in this case `const source`) and traverse the edges until it reaches the outermost vertex. It will output a tree structure with vertices.

Using adjacency list as example - please see (Recommended Research Links)[#recommended-links] below:

```js
const root = [[1, [3, null], [4, null]], [2, [5, 6]]]

/*
Output of Breadth-First
Tree Representation:

         root
        /   \
       /     \
     1        2
    / \      / \
   /   \    /   \
  3     4  5     6

*/

// Algorithm Traversal Routes
// root -> 1 -> 2
// 1 -> 3 -> 1 -> 4
// root -> 2 -> 5 -> 2 -> 6
```

### States of Discovery
Maintaining the status of each vertex is critical to the implementation of this algorithm and it's traversal. When a vertex is created it will be in an `undiscovered` state. Once the algorithm has traversed to the vertex it becomes `discovered`. Once all descendents have been discovered the parent becomes `completed`.


## Depth-First Search

The principles of Breadth-First Search apply to this algorithm with one main difference; Edges are traversed downwards until the deepest vertex is found. 

```js
/*
        root
        /   \
       /     \
     1        2
    / \      / \
   /   \    /   \
  3     4  5     6

*/
// Algorithm Traversal Routes
// root -> 1 -> 3 -> 1 -> 4
// root -> 2 -> 5 -> 2 -> 6
```


## (Reccommended Research Links)[#recommended-links]
* (Adjacency Lists)[https://www.geeksforgeeks.org/graph-and-its-representations/]