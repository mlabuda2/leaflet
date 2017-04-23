// Pobieramy HTML z szablonem
var zrodlo = document.getElementById("wstawka").innerHTML;



// Obiekt z danymi do szablonu(JSON)
/*var dane = {
		imie: "Marek",
		nazwisko: "Kowalski"
	};*/
var proxy = 'https://toyorg.herokuapp.com/proxy.php?url=';
var url = 'https://inf.ug.edu.pl/plan/index.php?format=json';
var url2 = 'https://inf.ug.edu.pl/plan/?nauczyciel=Borzyszkowski%2C+Andrzej%2C+dr&format=json';


 $.ajax({
    url: proxy + url,
    dataType: 'jsonp',
    success: function (data) {
        // console.log(JSON.stringify(data));
        localStorage.setItem('plan', JSON.stringify(data));
        // console.log(localStorage.getItem('plan'));
       
        // Kompilujemy szablon
		var szablon = Handlebars.compile(zrodlo);
        var html = szablon(JSON.parse(localStorage.getItem('plan')));
        // console.log(html);
        // document.querySelector("body").insertAdjacentHTML('afterbegin', html);
    
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


