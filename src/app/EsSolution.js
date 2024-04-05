// Solution 1
const a = [1, 3, 5, 2, 4, 7, 8];
let result1 = [];
result1 = a.filter((item, index) => {
  if (index % 2 == 0 || index == 0) {
    return item;
  }
});
//Solution 2

const b = [1, 3, 5, 2, 4, 7, 8];
let result2 = [];
result2 = b.map((item) => item * item);
// Solution3
const c = [1, 3, 5, 2, 4, 7, 8];
let result3 = [];
result3 = c
  .filter((item, index) => {
    if (index % 2 == 0 || index == 0) {
      return item;
    }
  })
  .map((item) => item * item);
