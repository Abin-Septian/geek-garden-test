function arraySort(a = [], b = []) {
    //Hasil array
    let c = [];

    // index masing-masing array ketika dibandingkan dalam perulangan
    let indexA = 0;
    let indexB = 0;

    let i = 0;

    while (i < a.length + b.length) {
        let limitArrA = indexA >= a.length;
        let limitArrB = indexB >= b.length;

        if (!limitArrA && (limitArrB || a[indexA] < b[indexB])) {
            c[i] = a[indexA];
            indexA++;
        } else {
            c[i] = b[indexB];
            indexB++;
        }
        i++;
    }
    console.log(c);
}

arraySort([1, 2, 5, 7], [3, 4, 8]);
