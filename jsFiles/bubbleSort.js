async function bubbleSort() {
    console.log(SortArray);

    const bars = document.querySelectorAll('.bar');
    const n = bars.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // bars[j].style.background = 'red';
            // bars[j + 1].style.background = 'red';

            if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
                await delayBasedOfAlgorithmSpeed();
                swapByHeight(SortArray, j, j + 1);
            }

            // bars[j].style.background = 'cyan';
            // bars[j + 1].style.background = 'cyan';
        }
        // bars[n - i - 1].style.background = 'green';
    }
    // bars[0].style.background = 'green';
    console.log(SortArray);

}

// Bubble-Sort Algorithm
// TimeComplexity: O(n^2)

const bubbleSortBtn = document.getElementById('bubbleSort');

bubbleSortBtn.addEventListener('click', async function () {
    disableButtonsWhileSorting();
    await bubbleSort();
    enableButtonsAfterSorting();
});