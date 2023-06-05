 
 // Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
		form.addEventListener('submit', event => {
			if (!form.checkValidity()) {
				event.preventDefault()
				event.stopPropagation()
			}
  
        	form.classList.add('was-validated')
      }, false)
    })
  })()


function addObjectJSON() {
	var item = {};
	item.imie = document.getElementById('input-imie').value;
	item.nazwisko = document.getElementById('input-nazwisko').value;
	item.email = document.getElementById('input-email').value;
	item.numer = document.getElementById('input-numer').value;
	item.miasto = document.getElementById('input-miasto').value;
	item.tresc = document.getElementById('input-tresc').value;
	
	let rodzajFilmu = document.getElementsByName('input-rodzaj-filmu');
	for(let i = 0; i < rodzajFilmu.length; i++) {
		if(rodzajFilmu[i].value == "podrozniczy") {
			item.rodzajFilmu = "podrozniczy";
		} if (rodzajFilmu[i].value == "vlog") {
			item.rodzajFilmu = "vlog";
		} if (rodzajFilmu[i].value == "teledysk") {
			item.rodzajFilmu = "teledysk";
		} if (rodzajFilmu[i].value == "relacja") {
			item.rodzajFilmu = "relacja";
		}
	}


	let czasWykonania = document.getElementsByName('input-czas-wykonania');
	for(let i = 0; i < czasWykonania.length; i++) {
		if(czasWykonania[i].checked) item.czasWykonania = czasWykonania[i].value;
	}
	
	localStorage.setItem(item.nazwisko, JSON.stringify(item));
}

function deleteObjectJSON() {
	localStorage.clear();
}


function getObjectJSON() {
	var content = '',
    startTab = "<table>",
    startCol = "<tr>",
    startRow = "<td>",
    endRow = "</td>",
    endCol = "</tr>",
    endTab = "</table> <br>";
    for (var i = 0; i < localStorage.length; i++) {
     	var key = localStorage.key(i),
		keyValue = JSON.parse(localStorage.getItem(key));
		content += startTab + startCol + startRow + "Imie" + endRow + startRow + keyValue.imie + endRow + endCol;
		content += startCol + startRow + "Nazwisko: " + endRow + startRow + keyValue.nazwisko + endRow + endCol;
		content += startCol + startRow + "Email: " + endRow + startRow + keyValue.email + endRow + endCol;
		content += startCol + startRow + "Nr. tel: " + endRow + startRow + keyValue.numer + endRow + endCol;
		content += startCol + startRow + "Miasto: " + endRow + startRow + keyValue.miasto + endRow + endCol;
		content += startCol + startRow + "Rodzaj filmu: " + endRow + startRow + keyValue.rodzajFilmu + endRow + endCol;
		content += startCol + startRow + "Treść: " + endRow + startRow + keyValue.tresc + endRow + endCol;
		content += startCol + startRow + "Czas wykonania: " + endRow + startRow + keyValue.czasWykonania + endRow + endCol + "<div class='mb-5'></div>";
    }

  document.getElementById("objectsJSON").innerHTML = content;

}
  
// function editCart() {
// 	var item = {};
// 	item.name = document.getElementById('nazwa_Produktu').value;
// 	item.cena = document.getElementById('cena').value;
// 	item.color = document.getElementById('kolor').value;
// 	item.amount = document.getElementById('ilosc').value;
// 	localStorage.setItem(item.name, JSON.stringify(item));
// }
  
// function deleteElement() {
// 	var temp = document.getElementById('nazwa_Produktu').value;
// 	localStorage.removeItem(temp);
// }
  
// function searchElement() {
// 	var name = document.getElementById('nazwa_Produktu').value;
// 	var temp = JSON.parse(localStorage.getItem(name));
// 	if (temp === null) {
// 		document.getElementById("cart").innerHTML = 'Taki produkt nie istnieje';
// 	} else {
// 		document.getElementById("cart").innerHTML = '';
// 		var content = '' ,
// 		startTab = "<table>",
// 		startCol = "<tr>",
// 		startRow = "<td>",
// 		endRow = "</td>",
// 		endCol = "</tr>",
// 		endTab = "</table> <br>";
// 		content += startTab + startCol + startRow + "Nazwa Produktu: " + endRow + startRow + temp.name + endRow + endCol;
// 		content += startCol + startRow + "Cena: " + endRow + startRow + temp.cena + endRow + endCol;
// 		content += startCol + startRow + "Kolor: " + endRow + startRow + temp.color + endRow + endCol;
// 		content += startCol + startRow + "liczba sztuk: " + endRow + startRow + temp.amount + endRow + endCol + endTab;
// 		document.getElementById("cart").innerHTML = content;
// 	}
// }
  

