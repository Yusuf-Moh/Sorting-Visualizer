async function merge(inputArray, start, mid, end) {
    const leftSizeArray = mid - start + 1;
    const rightSizeArray = end - mid;

    let leftArray = new Array(leftSizeArray);
    let rightArray = new Array(rightSizeArray);

    for (let i = 0; i < leftSizeArray; i++) {
        await delayBasedOfAlgorithmSpeed();
        leftArray[i] = inputArray[start + i].style.height;
    }
    for (let i = 0; i < rightSizeArray; i++) {
        await delayBasedOfAlgorithmSpeed();
        rightArray[i] = inputArray[mid + 1 + i].style.height;
    }
    
    await delayBasedOfAlgorithmSpeed();

    let i = 0, j = 0, k = start;
    while (i < leftSizeArray && j < rightSizeArray) {
        await delayBasedOfAlgorithmSpeed();
        if (parseInt(leftArray[i]) <= parseInt(rightArray[j])) {
            inputArray[k].style.height = leftArray[i];
            i++;
        }
        else {
            inputArray[k].style.height = rightArray[j];
            j++;
        }
        k++;
    }
    while (i < leftSizeArray) {
        await delayBasedOfAlgorithmSpeed();
        inputArray[k].style.height = leftArray[i];
        i++;
        k++;
    }
    while (j < rightSizeArray) {
        await delayBasedOfAlgorithmSpeed();
        inputArray[k].style.height = rightArray[j];
        j++;
        k++;
    }
}

async function mergeSort(inputArray, left, right) {
    if (left >= right) {
        return;
    }
    const middle = left + Math.floor((right - left) / 2);
    await mergeSort(inputArray, left, middle);
    await mergeSort(inputArray, middle + 1, right);
    await merge(inputArray, left, middle, right);
}


const mergeSortBtn = document.getElementById('mergeSort');

// Merge Sort TimeComplexity: O(n*log(n))
// Nearly Linear Sort Algorithm
// Rekursiv

mergeSortBtn.addEventListener('click', async function () {
    disableButtonsWhileSorting();
    const bars = document.querySelectorAll('.bar');
    const n = bars.length - 1;
    mergeSort(bars, 0, n);
    enableButtonsAfterSorting();
});