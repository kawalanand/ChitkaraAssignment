var count = 0;
var plus = document.querySelector('.fa-plus');
var list = document.querySelector('ul');
plus.addEventListener("click", Add);
document.addEventListener("keydown", (event)=>
{
	if(event.keyCode === 13)
	{
		Add();
	}
});


function Add()
{
	let text = document.querySelector('.text');
	let textvalue = text.value;
	let div = document.createElement('DIV');
	div.classList.add('inline');
	div.innerHTML = `
					<button class="num">${count+1}</button>
					<li>${textvalue}</li>
					<button class="fas fa-edit" onclick="Edit(event)"></button>
					<button class="fas fa-trash" onclick="Delete(event)"></button>
					<button class="fas fa-arrow-up" onclick="Up(event)"></button>
					<button class="fas fa-arrow-down" onclick="Down(event)"></button>
					`;
	list.appendChild(div);
	text.value = ""
	count++;
	document.querySelector('footer').innerHTML = "You have " + count + " pending items";

}


function Delete(event)
{
	 console.log(event.target.parentNode);
	 list.removeChild(event.target.parentNode);

	 count--;
	 document.querySelector('footer').innerHTML = "you have " + count + " pending items";

}
function Edit(event)
{
	console.log('In Edit');
	let text = document.querySelector('.text');
	let textvalue = text.value;
	if(textvalue==="")
	{
		text.setAttribute('placeholder', 'ADD TEXT TO EDIT HERE, AND PRESS EDIT BUTTON AGAIN');
	}

	else
	{
		event.target.parentNode.firstElementChild.nextElementSibling.innerHTML = textvalue;
		text.value = "";
		text.setAttribute('placeholder', 'Add Task Here');
	}
}
function Down(event)
{
	let e = event.target.parentNode;

	if(e.nextElementSibling!==null)
	{
		let next = e.nextElementSibling;
		let t = next.innerHTML;
		next.innerHTML = e.innerHTML;
		e.innerHTML = t;
		e = next;
	}


}
function Up(event)
{
	let e = event.target.parentNode;

	if(e.previousElementSibling!==null)
	{
		let prev = e.previousElementSibling;
		let t = prev.innerHTML;
		prev.innerHTML = e.innerHTML;
		e.innerHTML = t;
		e = prev;
	}
}









//naive method
// function Add()
// {
// 	console.log('here');
// 	let div = document.createElement("DIV");
// 	let li = document.createElement("LI");
// 	let text = document.querySelector('.text').value;
// 	let textnode = document.createTextNode(text + "  ");
// 	let button = document.createElement("button");
//  	button.classList.add('fas', 'fa-trash'); 

//  	//adding event listener to this button 
//  	button.addEventListener("click", Delete);

// 	li.appendChild(textnode);
// 	div.classList.add('inline');
// 	div.appendChild(li);
// 	div.appendChild(button)
// 	list.appendChild(div);


// 	//incrementing count
// 	count++;
// 	document.querySelector('footer').innerHTML = "You have " + count + " pending items";
// 	//lastly delete all the text in text box
// 	document.querySelector('.text').value = "";

// } 