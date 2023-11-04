let addNumber = document.getElementById('txtn');
let flist = document.getElementById('flist');
let res = document.getElementById('res');
let arrayValue = [];
// let addNumber = document.getElementById('');

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function btnAddNumber() {
    if (isNumber(addNumber.value) && !inList(addNumber.value, arrayValue)) {
        arrayValue.push(Number(addNumber.value));
        let item = document.createElement('option');
        item.text = `Number ${addNumber.value} added. \u{1F929}`;
        flist.appendChild(item);
        res.innerHTML = '';

    } else {
        alert('[ Invalid! ] It must be a NUMBER not already in the list and should be between 1 and 100.');
    }
    addNumber.value = '';
    addNumber.focus();
}

function btnVerify() {
    if (arrayValue.length == 0) {
        alert('Add a number first before verify!!');
    } else {
        let total = arrayValue.length;
        let minNumber = arrayValue[0];
        let maxNumber = arrayValue[0];
        let soma = 0;

        for (const i in arrayValue) {
            soma += arrayValue[i];
            if (arrayValue[i] > maxNumber)
                maxNumber = arrayValue[i];
            if (arrayValue[i] < minNumber)
                minNumber = arrayValue[i];
        }
        res.innerHTML = '';
        // total
        res.innerHTML += `<p>In total, you added <strong>${total}</strong> numbers to your list \u{1F92F}</p>`;

        // minimum and maximum values
        res.innerHTML += `<p>The MAX value you added to your list was <strong>${maxNumber}</strong> \u{1F917}</p>`;
        res.innerHTML += `<p>The MIN value you added to your list was <strong>${minNumber}</strong> \u{1F917}</p>`;

        // adding numbers
        res.innerHTML += `<p>The SUM of all the values was <strong>${soma}</strong> \u{1F917}</p>`;

    }

}