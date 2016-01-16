console.log("Stierlitz ohuel");

function encode() {

	var gotText = document.getElementById('text-original').value;

	if(!gotText) alert("Your coded letter ain't much..");

	else {

		/*
		- need to .split('') the text
		- locate spaces and anchor words to them
		- space-1 && space+1 dont' change
		- everything between s-1 and s+1 is scrambled
		- .join
		- profit
		*/

		var gaveText = document.getElementById('text-encoded');
		gaveText.value = "Wait for it...";

	}
}