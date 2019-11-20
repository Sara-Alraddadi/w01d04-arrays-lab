## Array Practice

1.
// Solution
const arr = [2, 3, 4];

// your code here
arr.unshift(0, 1);
arr.push(5, 6, 7);

console.log(arr); // => [0, 1, 2, 3, 4, 5, 6, 7]

2.
// Solution
const arr = [5, 7, 9];
arr.push(6); // returns ???

console.log(arr); // => [5, 7, 9, 6]

3.
// Solution
const numbers = [4, 9, 7, 2, 1, 8];

  // your code here
for(var i = 0; i <numbers.length; i++) {
    numbers[i] *= 2;
}
  
console.log(numbers); // => [8, 18, 14, 4, 2, 16]

4.
// Solution
const numbers = [4, 9, 7, 2, 1, 8];

  // your code here
for(var i = 0; i <numbers.length; i++) {
  if((numbers[i] % 2) != 0){
    numbers[i] *= 2;
  }   
}

console.log(numbers); // => [4, 18, 14, 2, 2, 8]

5.
// Solution
const favoriteColors = ["gray", "blue", "red" ];

  for(var i = 0; i <favoriteColors.length; i++){
    console.log("My " + (i + 1) + " choice is " + favoriteColors[i]);
  }

6.
// Solution
const ages = [18, 20, 25, 30, 50];

  for(var i = 0; i < ages.length; i++){
    if(ages[i] > 21){
      console.log(ages[i]);
    }
  }

7.
