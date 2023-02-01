function isPalindrome(word) {
  // Write your algorithm here
  const chars = word.split('');
  if (chars.length % 2 === 0) {  
    for (let i = 0; i < chars.length/2; i++) {    
      if (chars[i]!== chars[chars.length - i - 1]) {
        //console.log(chars[i], chars[chars.length - i - 1]);
        return false;
      }
      /*else {
        console.log(chars[i], chars[chars.length - i - 1]);
        console.log(`passed iteration ${i+1}`);
      }*/
    }
    return true;
  }
  else if (chars.length % 2 === 1) {  
    for (let i = 0; i < (chars.length+1) / 2; i++) {    
      if (chars[i]!== chars[chars.length - i - 1]) {
        //console.log(chars[i], chars[chars.length - i - 1]);
        return false;
      }
/*       else {
        console.log(chars[i], chars[chars.length - i - 1]);
        console.log(`passed iteration ${i+1}`);
      } */
    }
    return true;
  }
  
}

/* 
  Add your pseudocode here
  1. split the string into an array of characters
  2. compare first and last characters
  3. if they are the same, iterate to the next character > chars[i] === chars[-(i+1)]
  4. if they are different return false
  5. if the code checks every character, return true

  differences between odd and even number of characters?
  even: 0,-1; 1,-2; ... ; (l/2),(l/2+1)

  [1, 2, 3, 4, 5, 6]
  [2, 3, 4, 5]
  [3, 4]

  odd: 0,-1; 1,-2; ... ; (l/2-0.5),(l/2+1.5); [l/2+0.5]

  [1, 2, 3, 4, 5, 6, 7]
  [2, 3, 4, 5, 6]
  [3, 4, 5]
  [4]
  
*/ 

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robsor"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("robbor"));
  
}

module.exports = isPalindrome;
