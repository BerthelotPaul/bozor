affiche = document.getElementById("affichage");
pierreBouton = document.getElementById("pierre");
feuilleBouton = document.getElementById("feuille");
ciseauxBouton = document.getElementById("ciseaux");




//O = Pierre / 1= Feuille / 2= Ciseaux
window.pierre = function () {
    ordi = (Math.floor(Math.random() * 3));
    if (ordi == 0) {
        affiche.innerHTML = `Joueur : Pierre <br>
                             Bozor2000 : Pierre <br>
                             Résultat : Egalité`;
    } else if (ordi == 1) {
        affiche.innerHTML = `Joueur : Pierre <br>
                             Bozor2000 : Feuille <br>
                             Résultat : Perdu`;
    } else if (ordi == 2) {
        affiche.innerHTML = `Joueur : Pierre <br>
                             Bozor2000 : Ciseaux <br>
                             Résultat : Gagné`;
    }
}
window.feuille = function () {
    ordi2 = (Math.floor(Math.random() * 3));
    if (ordi2 == 0) {
        affiche.innerHTML = `Joueur : Feuille <br>
                             Bozor2000 : Pierre <br>
                             Résultat : Gagné`;
    } else if (ordi2 == 1) {
        affiche.innerHTML = `Joueur : Feuille <br>
                             Bozor2000 : Feuille <br>
                             Résultat : Egalité`;
    } else if (ordi2 == 2) {
        affiche.innerHTML = `Joueur : Feuille <br>
                             Bozor2000 : Ciseaux <br>
                             Résultat : Perdu`;
    }
}

window.ciseaux = function () {
    ordi3 = (Math.floor(Math.random() * 3));
    if (ordi3 == 0) {
        affiche.innerHTML = `Joueur : Ciseaux <br>
                             Bozor2000 : Pierre <br>
                             Résultat : Perdu`;
    } else if (ordi3 == 1) {
        affiche.innerHTML = `Joueur : Ciseaux <br>
                             Bozor2000 : Feuille <br>
                             Résultat : Gagné`;
    } else if (ordi3 == 2) {
        affiche.innerHTML = `Joueur : Ciseaux <br>
                             Bozor2000 : Ciseaux <br>
                             Résultat : Egalité`;
    }
}


pierreBouton.onclick = pierre;
feuilleBouton.onclick = feuille;
ciseauxBouton.onclick = ciseaux;

