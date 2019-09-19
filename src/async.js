const myArray = [1, 3, 4, 5, 2, 0, 7, 6, 8, 9]

const myObjArr = [
  { a: 1 }, { b: 2 }, { c: 3 }, { d: 4 },
]

const newArr = myArray.filter(el => el > 4)

console.log(newArr)
console.log(myObjArr);


// map()

// filter()

// reduce()

// find()

// includes()

// const myPromise = new Promise((resolve, reject) => {
//   if (true) {
//     setTimeout(() => {
//       resolve('I have resolved')
//     }, 1000);
//   } else {
//     reject('I have failed 💀 💀 ☠️ ☠️')
//   }
// })

// myPromise
//   .then(value => console.log(value + '🔥 🔥 🔥 🔥 🔥'))
//   .then(newValue => console.log(newValue))
//   .catch(rejectValue => console.log(rejectValue))

// myPromise
//   .then(value => value + '!!!!')
//   .then(newValue => console.log(newValue))
//   .catch(rejectValue => console.log(rejectValue))
