window.onload = function() {
    renderCountdown()
    setInterval(renderCountdown, 1000)
}


function renderCountdown() {
    var daysContainer = document.getElementById("days-container");
    var hoursContainer = document.getElementById("hours-container");
    var minutesContainer = document.getElementById("minutes-container");
    var secondsContainer = document.getElementById("seconds-container");
    var today = new Date();
    var end = new Date("Sep 21 00:00:00 2020");
    var total_seconds = (end - today) / 1000;


    if (total_seconds < 0) {
        countdown.innerHTML = "Félicitations Chakkra, tu t'es levé cette année";
    }

    if (total_seconds > 0) {
        var jours = Math.floor(total_seconds / (60 * 60 * 24));
        var heures = Math.floor((total_seconds - (jours * 60 * 60 * 24)) / (60 * 60));
        var minutes = Math.floor((total_seconds - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
        var seconds = Math.floor(total_seconds - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));
        daysContainer.innerHTML = jours + ' jours'
        hoursContainer.innerHTML = heures + ' heures'
        minutesContainer.innerHTML = minutes + ' minutes'
        secondsContainer.innerHTML = seconds + ' secondes'
    }
    else // Si total_seconds == 0 (puisque l'on a prit sa valeur absolue)
    {
        countdown.innerHTML = 'On annonce le réveil de Chakkra';
    }
}
