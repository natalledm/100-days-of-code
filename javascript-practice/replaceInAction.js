const phrase = "This shit again? Shit.";

const redactedPhrase = phrase.replace("shit", "****");
console.log(redactedPhrase);

//it only replaces the first time when the first parameter is a string. To solve this, use regex (g for global, i for case insensitive)

const fullRedactedPhrase = phrase.replace(/shit/gi, "****");
console.log(fullRedactedPhrase);