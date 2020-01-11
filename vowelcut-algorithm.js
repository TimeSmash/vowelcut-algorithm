function hasVowels(string){
    let word = string.toLowerCase()
	if(word === "a" || word === "e" || word === "i" || word === "o" || word === "u" || word === "y"){
        return true
	} else if(/[aeiouy]/.test(string)){
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

	if (string.length == 1){

		if(hasVowels(string)){

			return ""
        } else {

			return string
		}
	}
	
	let characterArray = string.split("")

	return characterArray.map(character => {
		if(/[aeiouyAEIOUY]/.test(character)){
			character => character.replace(/[aeiouyAEIOUY]/, "")
		} else {return character}
	}).join("")
}


