// Pobieramy HTML z szablonem
var zrodlo = document.getElementById("tpl").innerHTML;

// Kompilujemy szablon
var szablon = Handlebars.compile(zrodlo);

// Obiekt z danymi do szablonu
var dane = {
		imie: "Marek",
		nazwisko: "Kowalski"
	}

// Wygenerowanie gotowego kodu z szablonu
var html = szablon(dane);

// Wstawienie kodu na stronę
document.getElementById("output").innerHTML = html;
