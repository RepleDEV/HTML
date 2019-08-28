function budgetCalc(price,totalwahana,persons,idr) {
	return price * totalwahana * persons * idr;	
}
function result() {
	var sgdRP = 10275.71; // price of SGD in idr
	var priceDewasa = [11.80,47,26]; // > 13 this is in singapore dollars
	var pmdSum = priceDewasa.reduce((previous,current) => current += previous); // sumcalculator for price max dewasa
	var pmdAvg = pmdSum / priceDewasa.length; // avg calculator with pmdsum
	var priceAnak = [6.8,20,10]; // < 13 also singapore dollars
	var paSum = priceAnak.reduce ((previous,current) => current += previous);
	var paAvg = paSum / priceAnak.length;
	var personsDewasa; // Amount of >13 persons, this variable and the one below's value are still undefined.
    var personsAnak; // Amount of <13 persons
	var amountWahana;
	personsDewasa = document.getElementById("amountDewasa").value;
	personsAnak = document.getElementById("amountAnak").value;
	amountWahana = document.getElementById("totalWahana").value
	var resultDewasa = budgetCalc(pmdAvg,amountWahana,personsDewasa,sgdRP);
	var resultAnak = budgetCalc(paAvg,amountWahana,personsAnak,sgdRP);
	document.getElementById("resultDewasa").innerHTML = Math.ceil(resultDewasa);
	document.getElementById("resultAnak").innerHTML = Math.ceil(resultAnak);
}