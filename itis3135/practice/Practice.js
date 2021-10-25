var $ = function(id) {
	return document.getElementById(id);
};



window.onload = function() {


	$("cappuccino").addEventListener("click", evt => {

		evt.preventDefault()

		const total = document.getElementById("total");

		let totalCalc = total.innerText;

		if(totalCalc != "Total: $5.40"){
		
		let order = document.getElementById("order");

		const orderText = "Cappuccino - $ 3.45 - Delicious Cappuccino! ";
	
		const orderCap = document.createElement("p");
	
		const orderCapInfo = document.createTextNode(orderText);
	
		orderCap.appendChild(orderCapInfo);
	
		order.appendChild(orderCap);

		const total = document.getElementById("total");

		let totalCalc = total.innerText;

		if (totalCalc.length == 1){
			totalCalc = "Total: $3.45";
		}
		else{
			totalCalc = "Total: $5.40";
		}

		document.getElementById("total").innerText = totalCalc;

	}

	let orderedTwoItems = "done"; //two items are ordered already
;

		
	});

	$("espresso").addEventListener("click", evt => {

		evt.preventDefault();

		const total = document.getElementById("total");

		let totalCalc = total.innerText;

		if(totalCalc != "Total: $5.40"){

		let order = document.getElementById("order");

		const orderText = "Espresso - $1.95 - Delicious espresso. Wanna try it?";
	
		const orderCap = document.createElement("p");
	
		const orderCapInfo = document.createTextNode(orderText);
	
		orderCap.appendChild(orderCapInfo);
	
		order.appendChild(orderCap);

		

		if ( totalCalc.length == 1){
			totalCalc = "Total: $1.95";
		}
		else{
			totalCalc = "Total: $5.40";
		}

		document.getElementById("total").innerText = totalCalc;

	}

	let orderedTwoItems = "done"; //two items are ordered already
		
	
	});


	//add onclick event handler for each image

	// for click event add item to order and update total

	// display order and total

	
		
}; // end onload
