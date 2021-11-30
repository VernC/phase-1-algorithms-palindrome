function reverse(word) {
  let splitString = word.split("");
    //  splits each letter of the words
  let reverseArray = splitString.reverse();
    //  reorders the string in reverse order
  let joinArray = reverseArray.join("");
    //  rejoins the reversed string
  return joinArray
    //  returns the word in reversed order
  //  -------Both ways work--------
  //  return word.split("").reverse().join("");
    //  //  does the same as the function above but in one big go.
}

function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = reverse(word);
  return word === reversedWord;
}

/* 
  Add your pseudocode here
      take the word in
      seperate the word by each individual letter
      reorder the letters in reverse order
      rejoin all of the now reversed letters into a word
      take the reversed word and compare it to the original word
      if they are the same then return true
*/

// //  -----Another way to do it------(letter by letter)
// function isPalindrome(word) {
//   // iterate from the beginning to the middle
//   for (let i = 0; i < word.length / 2; i++) {
//     // check each letter to the correponding letter from the end
//     const j = word.length - 1 - i;
//     // if any letters don't match, return false
//     if (word[i] !== word[j]) return false;
//   }

//   // return true
//   return true;
// }



/*
  Add written explanation of your solution here
      That means if the
      first letter is the same as last letter, and the second letter is the same
      as the second to last letter, etc. until we reach the middle, return true.
      iterate from the beginning to the middle
        check each letter to the correponding letter from the end
          if any letters don't match, return false
      return true
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

  console.log('Expecting: true');
  console.log("=>", isPalindrome("a"));

  console.log('');

  console.log('Expecting: true');
  console.log("=>", isPalindrome(""));
}

module.exports = isPalindrome;
