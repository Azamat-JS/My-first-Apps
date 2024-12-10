const _ = require('lodash')
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);

const arr = [1, [2], [45], 90]
const newArr = _.flatten(arr)
console.log(newArr);

