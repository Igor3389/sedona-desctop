$(document).ready(function(){

    var manNumber = document.querySelector('.feedback__humans-field[name="man"]');
    var manSum = document.querySelector('.feedback__humans-button[name="manSum"]');
    var manDiff = document.querySelector('.feedback__humans-button[name="manDiff"]');

    var childNumber = document.querySelector('.feedback__humans-field[name="child"]');
    var childSum = document.querySelector('.feedback__humans-button[name="childSum"]');
    var childDiff = document.querySelector('.feedback__humans-button[name="childDiff"]');

    manSum.addEventListener('click', function () {
        var val = parseInt(manNumber.value);
        manNumber.value = (val == 9) ? 9 : val + 1;
    });

    manDiff.addEventListener('click', function () {
        var val = parseInt(manNumber.value);
        manNumber.value = (val == 0) ? 0 : val - 1;
    });

    childSum.addEventListener('click', function () {
        var val = parseInt(childNumber.value);
        childNumber.value = (val == 9) ? 9 : val + 1;
    });

    childDiff.addEventListener('click', function () {
        var val = parseInt(childNumber.value);
        childNumber.value = (val == 0) ? 0 : val - 1;
    });
});