var billAmt = document.getElementById('billAmt');
var calculate = document.getElementById('calculate');
var serviceType = document.getElementById('serviceType');
var numOfPeople = document.getElementById('numOfPeople');
var tipTotal = document.getElementById('tipTotal');
var each = document.getElementById('each');

function calcTip(){
	var bill = billAmt.value
	var num = numOfPeople.value
	var service = serviceType.value

// validate if the input is empty
	if (bill === "" || bill == 0) {
		alert("Please type a valid number!");
		return;
	}

	// check no. of persons to include "each"
	if (num === "" || num >= 1) {
		num = 1;
		each.innerHTML = "";
	}
	else{
		each.innerHTML = "Each!!";
	}

	// calculate tip
	tip = (bill *service) / num;
	

	// round up the tip to two decimalpoints
	tip = Math.round(tip) ;


// printing the value to the screen
	tipTotal.innerHTML = "Your tip is $" + tip +  "Each !!";



	console.log(bill);
	console.log(num);
	console.log(service);


} 
	
calculate.addEventListener("click", function(){
	calcTip();
	
});
