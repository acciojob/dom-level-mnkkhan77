//your JS code here. If required.
//your JS code here. If required.
function getDomLevel(ele){
	let level=0;

	while(ele){
		level++;
		ele=ele.parentElement;
	}

	return level;
}

const tarEle=document.getElementById("level");

if(tarEle){
	const domlevel=getDomLevel(tarEle);
	alert(`The level of the element is: ${domlevel}`);
}
else{
	alert("Element with id 'level' not found!");
}