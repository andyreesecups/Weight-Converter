// Hides cards when page loads
document.getElementById('output').style.visibility = 'hidden';

document.getElementById("lbsInput").addEventListener('input', function(e) {

    // Shows cards when event listener is activated
    document.getElementById('output').style.visibility = 'visible';

    let lbs = e.target.value;

    // Converts pounds to grams
    document.getElementById('gramsOutput').innerHTML = lbs / 0.0022046;

    // Converts pounds to kilograms
    document.getElementById('kgOutput').innerHTML = lbs / 2.2046;

    // Converts pounds to ounces
    document.getElementById('ozOutput').innerHTML = lbs * 16;
});