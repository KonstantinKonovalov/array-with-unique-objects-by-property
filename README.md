# array-with-unique-objects-by-property

filter array of objects by property, which should be unique

Example:
```javascript
const arr = [
  {
    name: 'John',
    id: 1
  },
  {
    name: 'Mary',
    id: 2
  },
  {
    name: 'Alex',
    id: 1
  }
];

const uniqueArr = filterUnique(arr, 'id');
/*
 uniqueArr = [
  {
    name: 'John',
    id: 1
  },
  {
    name: 'Mary',
    id: 2
  }
 ]
*/
```
