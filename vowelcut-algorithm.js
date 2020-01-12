const notAStringMessage = "Not a string go away."
const noLetterString = "Please write a string that has letters in it."
const zeroLengthStringMessage = "Please write a string 1 or more characters long."

function hasVowels(string){
    let word = string.toLowerCase()
	if(/[aeiouy]/.test(word)){
        return true
	} else {
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
  	if (hasVowels(string)){  
		if(string.length == 1){  
			return ""  
        } else {	 
        let characterArray = string.split("") 
       return characterArray.map(character => {
            if(/[aeiouyAEIOUY]/.test(character)){
                character = ""
            } else {return character}
		}).join("")
		// Accounting for extra spaces--if you're a Medium reader, ignore this as I'm not sure this code would work correctly.
        // At end of .join("")
        // .split(" ").filter(char => char!=="").join(" ")
        } 
    } else {return string}
}

