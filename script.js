var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("#list li");
// var items = document.getElementsByTagName("li"); //otra forma de obtener el listado de LI

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", checked); //add class done when click an item li

// add delete buttom for each existing li item
 for(var i=0; i<items.length; i++){
	 var li = items[i];
	 li.appendChild(createButtom());                                          // call to function createButtom which return a btn
 }

//function to return length of input
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(createButtom());
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

 //check or uncheck list items
 function checked(event){
	 if(event.target.tagName==="LI"){
		event.target.className="done";
	}}

//function to create delete buttom so you can add to any element
 function createButtom(){
	 var btn = document.createElement("BUTTON");                   // Create a <button> element
	 btn.id= "btnLI";
	 var nombreButton = document.createTextNode("Delete");         // Create a text node
	 btn.appendChild(nombreButton);																 // Append the text to <button>
	 btn.addEventListener("click", deleteElement);                  // Append addEventListener to the buttom
	 return btn;
 }

//funcion que tiene la logica para eliminar un elemento cuando se hace click en buton delete
 function deleteElement(event){
	 console.log(event);
	 console.log(event.target);
	 console.log(event.target.tagName);
	 console.log(event.target.parentNode);
	 event.target.parentElement.parentElement.removeChild(event.target.parentElement);
 }
