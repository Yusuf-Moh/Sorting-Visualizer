async function partition(array, left, right) {
    let i = left - 1;
    for (let j = left; j <= right - 1; j++) {
        if (parseInt(array[right].style.height) > parseInt(array[j].style.height)) {
            i++;
            await delayBasedOfAlgorithmSpeed();
            swapByHeight(array, i, j);
        }
    }
    i++;
    await delayBasedOfAlgorithmSpeed();
    swapByHeight(array, i, right);
    return i;
}


async function quickSort(array, left, right) {
    if (left < right) {
        var pivot_index = await partition(array, left, right);
        await quickSort(array, left, pivot_index - 1);
        await quickSort(array, pivot_index + 1, right);
    }
}

const quickSortBtn = document.getElementById('quickSort');


quickSortBtn.addEventListener('click', async function () {
    disableButtonsWhileSorting();
    const bars = document.querySelectorAll('.bar');
    await quickSort(bars, 0, bars.length - 1);
    enableButtonsAfterSorting();
});