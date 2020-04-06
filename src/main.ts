function calculate(a, b) {
    return a + b;
}

function displayTypeInfo(value) {
    document.getElementById('type-info').textContent = value;
}

function doClick() {
    calculate(5, 6);
}

window['doClick'] = doClick;

setInterval(() => {
    if (window['$_$twiz']) {
        displayTypeInfo(JSON.stringify(window['$_$twiz'].get(), null, 4));
    }
}, 1000);
