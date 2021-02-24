function Bunker_btn(number){
	
	if(document.querySelector('#desc_bunker'+number).style.visibility == "hidden" || document.querySelector('#desc_bunker' + number).style.visibility == ""){
		document.getElementById("desc_bunker"+number).style.visibility = "visible";
	}else if(document.querySelector('#desc_bunker'+number).style.visibility == "visible"){
		document.getElementById("desc_bunker"+number).style.visibility = "hidden";
	}


}