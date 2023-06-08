 
// FORMULARZE
(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
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

// GOOGLE MAPS
let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: 51.235241403728224, lng: 22.548898537439825 },
    zoom: 16,
  });
}

initMap();


// Scroll Back To Top button

let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 20 ||
		document.documentElement.scrollTop > 20
	) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}