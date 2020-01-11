# vowelcut-algorithm
A simple algorithm that identifies strings of appropriate quality and returns them without vowels. Contains plain and annotated versions.

Related to the Medium article: "*Algorithms In JavaScript: Removing the Vowels From a String*"
Link: PUT LINK HERE

## Purpose

The purpose of this algorithm is to accept valid strings and return them with their vowels excised. For example, the sentence "Princess Peach is the best.” should be returned as “Prncss Pch s th bst.” This algorithm deals with the paradoxical nature of Y being a consonant and a vowel to some extent.

## Determining string validity

A valid string can be defined as:\
-A datatype of "string" as verified by the typeof operator\
-A non-empty string\
-A string that contains at least one letter

Single-letter strings are accepted. In the event said string is a vowel, an empty string will be returned.

## Constraints

Since this is a simple exercise intended for education on algorithms, there are several constraints it has, listed below.

### Non-existent words

Due to the low complexity of this algorithm, non-real words are also accepted. In a real-life application, combining this algorithm with the use of a dictionary-like API would remedy this issue. However, this would also mean that the algorithm would have to be modified to recognize syllables, which it currently does not do (see *Y as a vowel*). Syllable recognition could most likely be accomplished by the use of an appropriate API. That being said, English is a complex language, and any APIs utilized would most likely require some degree of developer intervention to account for the many edge cases English provides.

### Accents and diacritical marks

Accents/diacritical marks, such as the acute e (é) and cicrumflex () are not considered as vowels, again for the reason of keeping this algorithm at a low level of complexity. This is the most easily remedied solution, as lists of accented characters in the English language can be found on sites such as fonts.com and Merriam-Webster.

### Y as a vowel

I originally opted to try and account for Y counting as a vowel or not using Merriam-Webster's guidelines[1]:

>Y is considered to be a vowel if… \
\
       -The word has no other vowel: gym, my. \
       -The letter is at the end of a word or syllable: candy, deny, bicycle, acrylic. \
       -The letter is in the middle of a syllable: system, borborygmus.

However, defining what is and what is not a syllable is beyond the scope of a simple algorithm such as this. Eliminating syllable criteria from the equation results in the only logic remaining along the lines of "y is considered a vowel if it is the only vowel in the word, or is at the end of the word."

For the most part, this means to only disqualify Y as a vowel when it is present with other vowels and the word begins with Y. This is correct behavior per Merriam-Webster guidelines. However because of the elimination of syllable criteria, there may be other instances where Y is not considered a vowel when it would be otherwise. 

For example, using vowelCut on the word "Guyana" results in "Gyn". Per the algorithm's rules, Y would not account as a vowel here--there are other vowels in the word, and the word does not end in Y. However, if we account for syllable criteria, Y would be considered a vowel, as it is the end of the first syllable, "Guy". This example shows why the elimination of syllable recognition can result in the misidentification of Y

## Conclusion

This algorithm serves as an educational experience in algorithm construction, as well as methods with working with strings along with lite regular expression use. Making attempts to recognize Y as a vowel, however limited in scope they may be, gives this algorithm some more complexity and provides an example of when recursion is useful. This algorithm could be improved via various literary APIs. Its practicality in applications is limited, but has potential cryptographic use since its primary purpose is string manipulation.   

## Sources
1. The Truth About 'Y': It's Mostly a Vowel. (n.d.). Retrieved January 10, 2020, from https://www.merriam-webster.com/words-at-play/why-y-is-sometimes-a-vowel-usage.
