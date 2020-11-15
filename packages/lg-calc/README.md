# lg-calc

A utility that accepts an object and returns an integer. 

## Setup
```bash
$ npm i lg-calc
```

### Use



```js
import calc from 'lg-calc'

const cart = {
  one: {
    price: 287,
    qty: 5,
  },
  two: {
    price: 233,
    qty: 3,
  },
};

calc(cart); // returns 2134
calc(cart, 'USD'); // returns 21.34

```