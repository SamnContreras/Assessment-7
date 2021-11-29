// 1) Sum Zero
// O(n)

function sumZero(n) {
  let result = [];
  if (n === 1) {
      return [0];
  }
  if (n % 2 !== 0 ) {
      result.push(0);
  }
  for (let i = 1; i <= n / 2; i++) {
      result.push(i, i * -1);
  }
  return result;
};
console.log(sumZero([1,2]))


// 2) Unique Characters
// O(n^2)

function makeUnique (word) {
   let uniq = ""
   for(let i = 0; i < word.length; i++) {
     if (uniq.includes(word[i]) === false) {
       uniq += word[i]
     }
   }
   return uniq
 }
 console.log(makeUnique("Moonday"))

// 3) Pangram Sentence
// O(n^2)

function pangrams(s) {
   let alphabet = "abcdefghijklmnopqrstuvwxyz";
   let regex = /\s/g;
   let lowercase = s.toLowerCase().replace(regex, "");
  
   for(let i = 0; i < alphabet.length; i++){
    if(lowercase.indexOf(alphabet[i]) === -1){
      return "False";
    }
   }
  
  return "True";
}
console.log(pangrams("The quick brown fox jumps over the lazy dog!"))

// 4) Longest Word
// O(n^2)

function findLongestWord (str) {
   let words = str.split(" ");
   let maxLength = 0;

   for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
         maxLength = words[i].length
      }
   }

   return maxLength;
}
console.log(findLongestWord("The quick brown fox supercalifragilisticexpialidpciously catapulted over the lazy dog"))