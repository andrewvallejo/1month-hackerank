//Caesar Cipher\\ 
/* 
Caesar's cipher shifts each letter by a number of letters. 
  If the shift takes you past the end of the alphabet, 
  just rotate back to the front of the alphabet. 
In the case of a rotation by 3: w, x, y and z »»» to z, a, b and c.
If the first letter is capitalized then the output should be the same. 

Input = String, Rotations
  Declare isCapitalized = Compare first letter to it's capitalize form and return a boolean
  Declare caesarAlphabet = map through alphabet
    return letter that is Rotations ahead
  Declare chars = Split string into chars (and also to lowercase)
  Iterate through chars
    iterate through new alphabet, if chars match, return index
    char = normalAlphabet[index]
    return char
  Join string together
  If isCapitalize is true, then capitalize, if not, then leave alone
  Return string
Output = Rotated String
*/

let i, o, a, e, r, s, k, 
test = (a, e) => a === e ? true : `a:${a} !== e:${e}`,
  caesarCipher = (s, k) => {
    return s.split('').reduce((acc, currChar) => {
      const isLetter = alphabet.find(char => char === currChar.toLowerCase())
      const isCapitalized = currChar === currChar.toUpperCase() 
      const index = alphabet.indexOf(currChar.toLowerCase())
      if (!isLetter) return acc += currChar
      return isCapitalized ? acc += alphabet[(index + k) % 26].toUpperCase() : acc += alphabet[(index + k) % 26]     
    },'')
  },  
  alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
  ];

// Test Suite #1

i = {s: 'middle-Outz', k: 2} 
a = caesarCipher(i.s, i.k)
e = 'okffng-Qwvb'
r = test(a, e)
console.log(r)


// Test Suite #2
 
// i = {s: 'Always-Look-on-the-Bright-Side-of-Life', k: 5} 
// a = caesarCipher(i.s, i.k)
// e = 'Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj'
// r = test(a, e)
// console.log(r) 




