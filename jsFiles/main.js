const newSortArrayBtn = document.getElementById('SortArray');
const barContainer = document.getElementById('barContainer');
const InputSizeOfArray = document.getElementById('array_size');
const InputAlgorithmSpeed = document.getElementById('algo_speed');

// Standard Value of the inputfield array_size
var SizeOfArray = InputSizeOfArray.defaultValue;

var AlgorithmSpeed = InputAlgorithmSpeed.defaultValue;
var minAlgorithmSpeed = InputAlgorithmSpeed.min;
var maxAlgorithmSpeed = InputAlgorithmSpeed.max;

// create Bars, for visiting the Page
generateRandomElementsSortArray(SizeOfArray);

// New Bars are getting added
newSortArrayBtn.addEventListener('click', function () {
    generateRandomElementsSortArray(SizeOfArray);
});

// Size of Array changed => Store the Size globally and update the bars
InputSizeOfArray.addEventListener('input', function () {
    SizeOfArray = InputSizeOfArray.value;
    generateRandomElementsSortArray(SizeOfArray);
});


// Bars are getting created and added to BarContainer
function generateRandomElementsSortArray(sizeArray) {
    // First delete all existing bars
    deleteBars();

    // Create random bars which are getting added to the BarContainer
    // Idea: Sort height => Small to Big
    // Bar is getting attribute:
    // bar flex-item style="height: randomNumberPX; id=height"
    for (var i = 0; i < sizeArray; i++) {
        const bar = document.createElement('div');
        bar.className = 'bar flex-item';

        var randomNumber = randomInteger(100, 400);
        bar.style = `height: ${randomNumber}px`;
        SortArray[i] = randomNumber;

        barContainer.appendChild(bar);
    }
}

// Delete all existing Bars
function deleteBars() {
    // reset the SortArray
    SortArray = [];
    // delete all childDivs of barContainer
    while (barContainer.firstChild) {
        barContainer.removeChild(barContainer.firstChild);
    }
}

// Random Integers, to sort
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Swap by height for sort algorithm
function swapByHeight(array, Bar1, Bar2) {
    const bars = document.querySelectorAll('.bar');

    var temp = bars[Bar1].style.height;
    bars[Bar1].style.height = bars[Bar2].style.height;
    bars[Bar2].style.height = temp;

    temp = array[Bar1];
    array[Bar1] = array[Bar2];
    array[Bar2] = temp;
}

// Sort Algorithm Speed
InputAlgorithmSpeed.addEventListener('input', function () {
    // Calculate the reserve RangeInput
    AlgorithmSpeed = (parseInt(maxAlgorithmSpeed) + parseInt(minAlgorithmSpeed)) - parseInt(InputAlgorithmSpeed.value);
});

function delayBasedOfAlgorithmSpeed() {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, AlgorithmSpeed);
    })
}

function disableButtonsWhileSorting() {
    // Sort-Btns
    bubbleSortBtn.disabled = true;
    quickSortBtn.disabled = true;
    mergeSortBtn.disabled = true;
    selectionSortBtn.disabled = true;
    insertionSortBtn.disabled = true;
    InputSizeOfArray.disabled = true;
    newSortArrayBtn.disabled = true;
}

function enableButtonsAfterSorting() {
    // Sort-Btns
    bubbleSortBtn.disabled = false;
    quickSortBtn.disabled = false;
    mergeSortBtn.disabled = false;
    selectionSortBtn.disabled = false;
    insertionSortBtn.disabled = false;
    InputSizeOfArray.disabled = false;
    newSortArrayBtn.disabled = false;
}