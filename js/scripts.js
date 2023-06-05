import * as bootstrap from 'bootstrap'




window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});




function sprawdzPole(pole_id, obiektRegex) {
    var obiektPole = document.getElementById(pole_id);
    if(!obiektRegex.test(obiektPole.value)) return (false);
    else return (true);
}

function sprawdz_radio(nazwa_radio){
    //Funkcja sprawdza czy wybrano przycisk radio
    //z grupy przycisków o nazwie nazwa_radio
    //---------------------------------------
    var obiekt = document.getElementsByName(nazwa_radio);
    for (i=0; i < obiekt.length; i++) { 
        wybrany = obiekt[i].checked;
        if (wybrany) return true; 
    }

    return false;
}
    
function sprawdz_box(box_id) {
    var obiekt = document.getElementById(box_id);
    if (obiekt.checked) return true;
    else return false;
}

function sprawdz_message(message_id) {
    var obiekt = document.getElementById(message_id);
    if(obiekt.value === "") return false;
    else return true;
}

function sprawdz_select(select_id) {
    var obiekt = document.getElementById(select_id);
    
    for (i=1; i < obiekt.length; i++) { 
        wybrany = obiekt[i].selected;
        if (wybrany) return true; 
    }

    return false;
}
    
function sprawdz() { 
    var ok = true;

    obiektNazw = /^[a-zA-Z]{2,20}$/;
    obiektEmail = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
    obiektWiek = /^[1-9][0-9]{1,2}$/;
    obiektTelefon = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/


    if (!sprawdzPole("name", obiektNazw)) { 
        ok = false;
        document.getElementById("error-imie").innerHTML = "Wpisz poprawnie imie i nazwisko!";
    }
    else document.getElementById("nazw_error").innerHTML="";
    

    if (!sprawdzPole("email", obiektEmail)) { 
        ok = false;
        document.getElementById("error-email").innerHTML = "Wpisz poprawnie email!";
    }
    else document.getElementById("error-email").innerHTML="";


    if (!sprawdzPole("phone", obiektTelefon)) { 
        ok = false;
        document.getElementById("error-numer").innerHTML = "Wpisz poprawnie numer!";
    }
    else document.getElementById("error-numer").innerHTML="";


    if (!sprawdz_select("rodzajfilmu")) {
        ok = false;
        document.getElementById("error-rodzajfilmu").innerHTML = "Musisz cos wybrac!";
    }
    else document.getElementById("error-rodzajfilmu").innerHTML="";


    if (!sprawdz_radio("wyborCzasuWykonania")) { 
        ok = false;
        document.getElementById("error-preferowanyczas").innerHTML = "Musisz cos wybrac!";
    }
    else document.getElementById("error-preferowanyczas").innerHTML="";



    if (!sprawdz_message("message")) { 
        ok = false;
        document.getElementById("error-trescwiadomosci").innerHTML = "Musisz wypelnic tresc wiadomosci!";
    }
    else document.getElementById("error-trescwiadomosci").innerHTML="";



    if(ok) {
        document.getElementById("nazw_error").innerHTML="";
        document.getElementById("error-email").innerHTML="";
        document.getElementById("error-numer").innerHTML="";
        document.getElementById("error-rodzajfilmu").innerHTML="";
        document.getElementById("error-preferowanyczas").innerHTML="";
        document.getElementById("error-trescwiadomosci").innerHTML="";
    }

    return ok;
}


(() => {
    'use strict';
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach((form) => {
        form.addEventListener('submit', (event) => {
            if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
  })();