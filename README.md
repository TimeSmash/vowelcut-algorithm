# vowelcut-algorithm
A simple algorithm that identifies strings of appropriate quality and returns them without vowels. Contains plain and annotated versions.

Related to the Medium article: "*Algorithms In JavaScript: Removing the Vowels From a String*"
Link: PUT LINK HERE

## Purpose

The purpose of this algorithm is to accept valid strings and return them with their vowels excised. For example, the sentence "Princess Peach is the best.” should be returned as “Prncss Pch s th bst.”

## Determining string validity

A valid string can be defined as:
-A datatype of "string" as verified by the typeof operator
-A non-empty string
-A string that contains at least one letter

Single-letter strings are accepted. In the event said string is a vowel, an empty string will be returned.

## Constraints

Since this is a simple exercise intended for education on algorithms, there are several constraints it has, listed below.

### Acceptance of non-existent words

Due to the low complexity of this algorithm, non-real words are also accepted. In a real-life application, combining this algorithm with the use of a dictionary-like API would remedy this issue. However, this would also mean that the algorithm would have to be modified to recognize syllables, which it currently does not do (see below). Syllable recognition could most likely be accomplished by the use of an appropriate API. That being said, English is a complex language, and any APIs utilized would most likely require some degree of developer intervention to account for the many edge cases English provides.

### Lack of accountance for accents and diacritical marks

Accents/diacritical marks, such as the acute e (é) and cicrumflex () are not considered as vowels, again for the reason of keeping this algorithm at a low level of complexity. This is the most easily remedied solution, as lists of accented characters in the English language can be found on sites such as fonts.com and Merriam-Webster.

### Y is only considered a vowel in certain cicrumstances

Y is considered a vowel in all instances in which it appears. I originally opted to try and account for Y counting as a vowel or not using Merriam-Webster's guidelines[1]:

>Y is considered to be a vowel if…*
   
   >The word has no other vowel: gym, my.*
   
   >The letter is at the end of a word or syllable: candy, deny, bicycle, acrylic.*
   
   >The letter is in the middle of a syllable: system, borborygmus.*

but defining what is and what is not a syllable is beyond the scope of a simple algorithm such as this. Eliminating syllables from the equation results in the only rule remaining, along the lines of "y is considered a vowel is it is the only vowel in the word, or is at the end of the word." 

For the most part, this means to only disqualify Y as a vowel when it is present with other vowels and the word begins with Y. This is correct behavior. However because of the elimination of syllable criteria, instances where Y would normally count as a vowel may not be recognized. For

Examples:
The word "candy" already has the vowel A in it. Y is also present at the end of the word, meaning it counts as a vowel.

The word "yams" already has the vowel A in it, and Y ends the word, meaning it is a vowel. This means the first Y is not a vowel, but due to the omission of syllable recognition, the algorithm 

## Sources
1. Merriam-Webster blabalbal
