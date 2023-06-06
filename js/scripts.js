 
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

function deleteAllObjectsJSON() {
	localStorage.clear();
	getObjectJSON();

}

function deleteObjectJSON(key) {
	localStorage.removeItem(String(key));
	getObjectJSON();
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

		// content += startTab + startCol + startRow + "Imie" + endRow + startRow + keyValue.imie + endRow + endCol;
		// content += startCol + startRow + "Nazwisko: " + endRow + startRow + keyValue.nazwisko + endRow + endCol;
		// content += startCol + startRow + "Email: " + endRow + startRow + keyValue.email + endRow + endCol;
		// content += startCol + startRow + "Nr. tel: " + endRow + startRow + keyValue.numer + endRow + endCol;
		// content += startCol + startRow + "Miasto: " + endRow + startRow + keyValue.miasto + endRow + endCol;
		// content += startCol + startRow + "Rodzaj filmu: " + endRow + startRow + keyValue.rodzajFilmu + endRow + endCol;
		// content += startCol + startRow + "Treść: " + endRow + startRow + keyValue.tresc + endRow + endCol;
		// content += startCol + startRow + "Czas wykonania: " + endRow + startRow + keyValue.czasWykonania + endRow + endCol + "<div class='mb-5'></div>";
		// content += startCol + startRow + `<button class="btn btn-danger" onclick="deleteObjectJSON('${key}')">Usun wpis</button>` + endRow + endCol;
		content += `<div class='bg-dark px-4 py-4 col d-flex flex-column justify-content-center align-items-center border'>`;
		content += `<p class="my-0">Imię: ${keyValue.imie}</p>`;
		content += `<p class="my-0">Nazwisko: ${keyValue.nazwisko}</p>`;
		content += `<p class="my-0">Email: ${keyValue.email}</p>`;
		content += `<p class="my-0">Nr. tel: ${keyValue.numer}</p>`;
		content += `<p class="my-0">Miasto: ${keyValue.miasto}</p>`;
		content += `<p class="my-0">Rodzaj filmu: ${keyValue.rodzajFilmu}</p>`;
		content += `<p class="my-0">Treść: ${keyValue.tresc}</p>`;
		content += `<p class="my-0">Czas wykonania: ${keyValue.czasWykonania}</p>`;
		content += `<div>`;
		content += `<button class="btn btn-danger mt-2" onclick="deleteObjectJSON('${key}')">Usun wpis</button>`;
		content += `<button class="btn btn-outline-light mt-2" onclick="editObjectJSON('${key}')">Edytuj</button>`;
		content += `</div>`;
		content += `</div>`;
	}
	content +=  `<p class="mb-5">`;

 	document.getElementById("objectsJSON").innerHTML = content;
}

function scrollToForms() {
	var access = document.getElementById("formularz");
	access.scrollIntoView({behavior: 'smooth'}, true);
}


function editObjectJSON(key) {
	item = JSON.parse(localStorage.getItem(key));
	
	document.getElementById('input-imie').value = item.imie;
	document.getElementById('input-nazwisko').value = item.nazwisko;
	document.getElementById('input-email').value = item.email;
	document.getElementById('input-numer').value = item.numer;
	document.getElementById('input-miasto').value = item.miasto;
	document.getElementById('input-tresc').value = item.tresc;

	let rodzajFilmu = String(item.rodzajFilmu);

	for(let i = 0; i < 4; i++) {
		if(rodzajFilmu == "podrozniczy") {
			document.getElementById('input-rodzaj-filmu')[0].selected = true;
		} if (rodzajFilmu == "vlog") {
			document.getElementById('input-rodzaj-filmu')[1].selected = true;
		} if (rodzajFilmu == "teledysk") {
			document.getElementById('input-rodzaj-filmu')[2].selected = true;
		} if (rodzajFilmu == "relacja") {
			document.getElementById('input-rodzaj-filmu')[3].selected = true;
		}
	}

	let czasWykonania = String(item.czasWykonania);
	for(let i = 0; i < 4; i++) {
		if(czasWykonania == "5-dni") {
			document.getElementById('input-czas-wykonania-5-dni').checked = true;
		} if (czasWykonania == "7-dni") {
			document.getElementById('input-czas-wykonania-7-dni').checked = true;
		} if (czasWykonania == "10-dni") {
			document.getElementById('input-czas-wykonania-10-dni').checked = true;
		} if (czasWykonania == "14-dni") {
			document.getElementById('input-czas-wykonania-14-dni').checked = true;
		}
	}

	scrollToForms();
}









  
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
  

