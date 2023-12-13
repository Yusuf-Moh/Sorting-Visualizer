async function insertionSort(array, n) {
    let i, key, j;
    for (i = 1; i < n; i++) {
        key = array[i].style.height;
        j = i - 1;
        await delayBasedOfAlgorithmSpeed();

        while (j >= 0 && parseInt(array[j].style.height) > parseInt(key)) {
            
            array[j + 1].style.height = array[j].style.height;
            j--;
            await delayBasedOfAlgorithmSpeed();
        }
        array[j + 1].style.height = key;
    }
}

// Insertion-Sort Algorithm
// TimeComplexity: O(n^2)

const insertionSortBtn = document.getElementById('insertionSort');

insertionSortBtn.addEventListener('click', async function () {
    disableButtonsWhileSorting();
    const bars = document.querySelectorAll('.bar');
    const n = bars.length;
    await insertionSort(bars, n);
    enableButtonsAfterSorting();
});