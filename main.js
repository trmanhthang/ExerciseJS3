// BÀI 1
function total() {
    var physicalScore = document.getElementById('Physical');
    var chemistryScore = document.getElementById('Chemistry');
    var bornScore = document.getElementById('Born');
    var results = document.getElementById('totalScore');
    results.value = parseInt(physicalScore.value) + parseInt(chemistryScore.value) + parseInt(bornScore.value)
    var mediumScore = document.getElementById('medium');
    mediumScore.value = parseInt(results.value)/3
}

// BÀI 2
function convert() {
    var temperature = document.getElementById('celsius');
    var results = document.getElementById('fahrenheit');
    results.value = ((parseInt(temperature.value) / 5) * 9) + 32;
}

// BÀI 3
function area() {
    var enterRadius = document.getElementById('radius')
    var resultsArea = (parseInt(radius.value) * parseInt(radius.value)) * Math.PI;
    document.getElementById('areaSpan').innerHTML = ' ' + resultsArea;
    var resultsPerimeter = (parseInt(radius.value) * 2) * Math.PI;
    document.getElementById('perimeterSpan').innerHTML = ' ' + resultsPerimeter;
}

