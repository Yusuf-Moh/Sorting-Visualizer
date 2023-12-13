async function selectionSort(array) {
    var size = array.length;

    for (var i = 0; i < size - 1; i++) {
        var min_index = i;
        for (var j = i + 1; j < size; j++) {
            await delayBasedOfAlgorithmSpeed();
            if (parseInt(array[j].style.height) < parseInt(array[min_index].style.height)) {
                min_index = j;
            }
        }
        await delayBasedOfAlgorithmSpeed();
        swapByHeight(array, i, min_index);
    }
}

const selectionSortBtn = document.getElementById('selectionSort');

selectionSortBtn.addEventListener('click', async function () {
    disableButtonsWhileSorting();
    const bars = document.querySelectorAll('.bar');
    await selectionSort(bars);
    enableButtonsAfterSorting();
});