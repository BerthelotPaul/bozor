//déclaration des variables et séléctions des DOM
affiche = document.getElementById("affichage");
pierreBouton = document.getElementById("pierre");
feuilleBouton = document.getElementById("feuille");
ciseauxBouton = document.getElementById("ciseaux");
resultat = document.getElementById("resultat");
ordi = document.getElementById("ordi");
victoire = document.getElementById("victoire");
defaite = document.getElementById("defaite");
countv = 0;
countd = 0;

//O = Pierre / 1= Feuille / 2= Ciseaux
window.pierre = function () {
    ordi0 = (Math.floor(Math.random() * 3));
    if (ordi0 == 0) {
        affiche.innerHTML = `Joueur : Pierre <br>`;
        ordi.innerHTML = `Ordi : Pierre`;
        resultat.innerHTML = `Résultat : Egalité`;
        victoire.innerHTML = "Victoire : " + countv;
        defaite.innerHTML = "Défaite : " + countd;
    } else if (ordi0 == 1) {
        affiche.innerHTML = `Joueur : Pierre <br>`;
        ordi.innerHTML = `Ordi : Feuille`;
        resultat.innerHTML = `Résultat : Perdu`;
        countd++;
        victoire.innerHTML = "Victoire : " + countv;
        defaite.innerHTML = "Défaite : " + countd;
    } else if (ordi0 == 2) {
        affiche.innerHTML = `Joueur : Pierre <br>`;
        ordi.innerHTML = `Ordi : Ciseaux`;
        resultat.innerHTML = `Résultat : Gagné`;
        countv++;
        victoire.innerHTML = "Victoire : " + countv;
        defaite.innerHTML = "Défaite : " + countd;
    }
}
window.feuille = function () {
    ordi2 = (Math.floor(Math.random() * 3));
    if (ordi2 == 0) {
        affiche.innerHTML = `Joueur : Feuille <br>`;
        ordi.innerHTML = `Ordi : Pierre`;
        resultat.innerHTML = `Résultat : Gagné`;
        countv++;
        victoire.innerHTML = "Victoire : " + countv;
        defaite.innerHTML = "Défaite : " + countd;

    } else if (ordi2 == 1) {
        affiche.innerHTML = `Joueur : Feuille <br>`;
        ordi.innerHTML = `Ordi : Feuille`;
        resultat.innerHTML = `Résultat : Egalité`;
        victoire.innerHTML = "Victoire : " + countv;
        defaite.innerHTML = "Défaite : " + countd;

    } else if (ordi2 == 2) {
        affiche.innerHTML = `Joueur : Feuille <br>`;
        ordi.innerHTML = `Ordi : Ciseaux`;
        resultat.innerHTML = `Résultat : Perdu`;
        victoire.innerHTML = "Victoire : " + countv;
        countd++;
        defaite.innerHTML = "Défaite : " + countd;


    }
}

window.ciseaux = function () {
    ordi3 = (Math.floor(Math.random() * 3));
    if (ordi3 == 0) {
        affiche.innerHTML = `Joueur : Ciseaux <br>`;
        ordi.innerHTML = `Ordi : Pierre`;
        resultat.innerHTML = `Résultat : Perdu`;
        countd++;
        victoire.innerHTML = "Victoire : " + countv;
        defaite.innerHTML = "Défaite : " + countd;

    } else if (ordi3 == 1) {
        affiche.innerHTML = `Joueur : Ciseaux <br>`;
        ordi.innerHTML = `Ordi : Feuille`;
        resultat.innerHTML = `Résultat : Gagné`;
        countv++;
        victoire.innerHTML = "Victoire : " + countv;
        defaite.innerHTML = "Défaite : " + countd;
    } else if (ordi3 == 2) {
        affiche.innerHTML = `Joueur : Ciseaux <br>`;
        ordi.innerHTML = `Ordi : Ciseaux`;
        resultat.innerHTML = `Résultat : Egalité`;
        victoire.innerHTML = "Victoire : " + countv;
        defaite.innerHTML = "Défaite : " + countd;
    }
}

//appel des fonctions lors de l'évenement d'un des 3 boutons
pierreBouton.onclick = pierre;
feuilleBouton.onclick = feuille;
ciseauxBouton.onclick = ciseaux;

