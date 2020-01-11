const notAStringMessage = "Not a string go away."
const noLetterString = "Please write a string that has letters in it."
const zeroLengthStringMessage = "Please write a string 1 or more characters long."

function hasVowels(string){
    let word = string.toLowerCase()
	if(/[aeiou]/.test(word)){
		return true
	} else if (word.includes("y") && YIsAVowel(word)){
		return true
	} else {
        return false
    }
}

function cutEndPunc(string){
	//look for a bunch of special characters at the end of a string
	let punctuation = /[.,\/'"#@[!$%\^&\*;\]:{}=\-_`~()\+\?]/
	
	if (punctuation.test(string.charAt(string.length-1))){
		// if last char in the string is punctuation remove the last punctuation 
		string = string.substring(0, string.length - 1);
		//Using recursion repeat as necessary
		return cutEndPunc(string)
	}
	return string
}

function YIsAVowel(string){
	//First let's cut all punctuation off end of string
	let stringWithNoEndPunc = cutEndPunc(string)
	if(stringWithNoEndPunc.charAt(stringWithNoEndPunc.length-1) === "y") {
		//stringWithNoEndPunc/word ends in Y means Y is a vowel
		//This also accounts for a stringWithNoEndPunc of just Y
		return true
	} else if(!/[aeiou]/.test(stringWithNoEndPunc) && stringWithNoEndPunc.includes("y")) {
		//If string/word has no other vowels and Y is present, Y is a vowel
		return true
    } else {
		//string does not end in Y, and has other vowels bicycle symphony yams
		return false
	}
}

function isAValidString(string){
    if(typeof string!== "string"){return notAStringMessage}
	
	if (string.length === 0){return zeroLengthStringMessage}
	
	if(/[a-zA-Z]/.test(string) === false){return noLetterString}
	
	return true
}

function vowelCut(string){
	if (isAValidString(string) === notAStringMessage || isAValidString(string) === zeroLengthStringMessage || isAValidString(string) === noLetterString){ return isAValidString(string)}

	//First check 1chr strings == vowel
	if (string.length == 1){
		if(hasVowels(string)){
			return ""
        } else {
			return string
		}
		//Now check >1 strings for vowels
	} else if(!hasVowels(string)){
		//No vowels return string
		return string
	}
	
	//This means string is >1 and has vowels

	//Account for Y being a vowel by first splitting array into words
	let wordArray = string.split(" ")

	//check if each word has Y as a vowel
	//Return new string where all Ys present are NOT vowels
	let stringWithYAsVowelRemoved = wordArray.map(word => {
		//see if each word has Y as a letter
// 	console.log(word, "Y is in the word: " + /[yY]/.test(word))
	//If Y is in the word, determine if it is a vowel
// 	console.log(YIsAVowel(word))
		if (/[yY]/.test(word)){
			if (YIsAVowel(word)){
				console.log("Y is a vowel, excising.")
				return word.replace(/[yY]/, "")
			} else {return word}
		} else {return word}
	}).join(" ")

	let characterArray = stringWithYAsVowelRemoved.split("")

	return characterArray.map(character => {
		if(/[aeiouAEIOU]/.test(character)){
			character => character.replace(/[aeiouAEIOU]/, "")
		} else {return character}
	}).join("")
}


