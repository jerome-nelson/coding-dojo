# React Components/Elements

## React Component Philosophy is Composition, over inheritance. It seems to be purely be a methodological choice based on React UI

### Composition:
```js
<JSX.Element>
    <Child key="A"/>
    <ChildB key="B" />
</JSX.Element>


function ChildB(props) {
    return <Child />;
}
```

### Inheritance:
```js
class ChildB extends Child {
    constructor() {
        super();
    }
}
```

## Components are just functions that return React Elements

## React Elements
A React Element is a JSX.Element or DOM Element. React Elements are "immutable", in practice however JavaScript objects are mutable. So React enforces this using the state lifecycle - once a Element is rendered it is static and does not change.
Instead state changes are detected by React's diffing algorithm and these are updated.


```js
// What an Element actually looks like
{
  type: 'p',
  props: {
    className: 'small',
    children: {
      type: Sample,
      props: {
        msg: 'This prop will be rendered'
      }
    }
  }
}
```

## Element Parsing
```js
function Sample({ msg }) {
    return <span>{msg}</span>
}

<Sample msg={'Hello'} />  === React.createElement('span', null, msg)
```

# Ticking Clock
1. Clock is set at 1pm (one state)
2. Clock is set at 1.01pm (second state)



### HOMEWORK
* Create a counter which goes up and down
    - It must print Fizz on multiples of 5
    - It must print Buzz on multiples of 15
    - It have a number input which resets the counter (in seconds) 