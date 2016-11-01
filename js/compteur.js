/**
 * Permet de lancer un compteur
 *
 * @param elId              {string}    L'id de l'element dans lequel se trouve le texte
 * @param index             {int}       La valeur de début
 * @param vitesse           {int}       La vitesse (ms)
 * @param max               {int}       La valeur à atteindre
 * @param counterCallBack   {function}  La fonction appelée pour le callback
 */
function compteur(elId, index, vitesse, max){
    var accelerate = (max - (max*25)/100);
    var div = document.getElementById(elId);
    this.count = count();
    var timer;

    function count(){
        div.innerHTML = index;
        index ++;
        timer=setTimeout(count, vitesse);
        if(index == max +1) {
            clearTimeout(timer);
        }
        if(index > accelerate) {
            vitesse ++;
        }
    }

}

window.onload = function(){
    compteur('compteurDechet', 0, 15, 427);
    compteur('compteur62', 0, 120, 62);
    compteur('compteur34', 0, 219, 34);
}
