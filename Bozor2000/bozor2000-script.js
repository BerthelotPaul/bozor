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
    affiche.innerHTML = "C'est un autre texte"
}

window.ciseaux = function () {
    affiche.innerHTML = "Autre texte encoreeee" + ordiChoix;
}


pierreBouton.onclick = pierre;
feuilleBouton.onclick = feuille;
ciseauxBouton.onclick = ciseaux;

