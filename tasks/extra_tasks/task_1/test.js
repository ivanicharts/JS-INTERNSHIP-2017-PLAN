let invalid_args = ['a', '3', ' ', '1+0'];
let valid_args = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let x of invalid_args)
  Test.expect(!solution.test(x), "Your solution should reject invalid input");

for (let x of valid_args)
  Test.assertEquals(solution.test(x.toString(2)), x % 7 == 0, "Your solution is not correct");