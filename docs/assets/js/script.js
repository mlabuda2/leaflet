// Pobieramy HTML z szablonem
var zrodlo = document.getElementById("wstawka").innerHTML;



// Obiekt z danymi do szablonu(JSON)
/*var dane = {
		imie: "Marek",
		nazwisko: "Kowalski"
	};*/

var url = 'https://inf.ug.edu.pl/plan/?nauczyciel=Borzyszkowski%2C+Andrzej%2C+dr&format=json';

$.ajax({
    url: url,
    dataType: 'json',
    success: function (data) {
        console.log('url');
        // Kompilujemy szablon
		var szablon = Handlebars.compile(zrodlo);
        var html = szablon(JSON.parse(localStorage.getItem('plan')));
        console.log(plan);
        document.querySelector("body").insertAdjacentHTML('afterbegin', html);
    },
    error: function (msg) {
        console.log(JSON.stringify(msg));
    }
});

/*
// Wygenerowanie gotowego kodu z szablonu
var html = szablon(dane);

// Wstawienie kodu na stronę
document.getElementById("output").innerHTML = html;
*/


