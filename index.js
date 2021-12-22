// make a function that returns true if a word is a palindrome and false if not
// that means if the word if the word is the same as the word in reverse, I should return true
function reverse(word){
  const wordArray = word.split("")
  const reversedWordArray = wordArray.reverse()
  const reversedWord = reversedWordArray.join("")
  return reversedWord;
}

function isPalindrome(word) {
  // Write your algorithm here
  // reverse the input string
  const reversedWord = reverse(word)
  if (word === reversedWord) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  that means if the word is the same as the word in reverse, I should return true.
  reverse the input string
  if the input is the same as the reversed input
  return true 
  else 
  return false
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
}

module.exports = isPalindrome;
