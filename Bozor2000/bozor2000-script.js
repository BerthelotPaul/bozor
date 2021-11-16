affiche = document.getElementById("affichage");
pierreBouton = document.getElementById("pierre");
feuilleBouton = document.getElementById("feuille");
ciseauxBouton = document.getElementById("ciseaux");

armes = ["pierre", "feuille", "ciseaux"];
ordiChoix = (Math.floor(Math.random() * 3));



window.pierre = function () {
    joueur = "pierre";
    ordi = armes[ordiChoix];
    affiche.innerHTML = "Le texte qui apparait en JS";
}
window.feuille = function () {
    affiche.innerHTML = "C'est un autre texte"
}

window.ciseaux = function () {
    affiche.innerHTML = "Autre texte encoreeee"+ordiChoix;
}


pierreBouton.onclick = pierre;
feuilleBouton.onclick = feuille;
ciseauxBouton.onclick = ciseaux;

