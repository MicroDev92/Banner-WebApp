var korisniciNiz=[];

if(!isEmpty(JSON.parse(localStorage.getItem("korisnici")))){
    korisniciNiz = JSON.parse(localStorage.getItem("korisnici"));
   }
else{
    korisniciNiz.push({korIme:"Kami", sifra:"Kami"});
}

localStorage.setItem("korisnici", JSON.stringify(korisniciNiz));

function Login(korIme, sifra){
    var korisniciNiz = JSON.parse(localStorage.getItem("korisnici"));
    
    for(var i; i < korisniciNiz.length; i++){
        if(korisniciNiz[i].korIme == korIme && korisniciNiz[i].sifra == sifra)
            window.location = "Dashboard.html";
    }
    else{
        alert("korisnik ne postoji! napravite novi nalog!");
    }
}

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}