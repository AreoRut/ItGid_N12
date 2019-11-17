//Note_1 multidimensional array



let a = [3, 4, 6, 8];
let b = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
//console.log(b);
/*//2 вариант
for (i = 0; i < b.length; i++) {
    //console.log(b[i]);
    let c = b[i];// c -массив [1,4,76];
    for (let k = c.length - 1; k >= 0; k--) {
        console.log(c[k]);
    }
}
*////1 вариант
/*
for (i = 0; i < b.length; i++) {
    //console.log(b[i]);
    let c = b[i];// c -массив [1,4,76];
    for (let k = 0; k < c.length; k++) {
        console.log(c[k]);
    }
}*/
//3 вариант
/*
let out3 = ' '
for (i = 0; i < b.length; i++) {
    for (k = 0; k < b[i].length; k++) {
        console.log(b[i][k]);
        out3 += b[i][k];
    }
    out3 += '<br>';
}
document.querySelector('.out3').innerHTML = out3;
///
*/
let out3 = ' '
for (i = 0; i < b.length; i++) {
    for (k = 0; k < b[i].length; k++) {
        console.log(b[i][k]);
        if (b[i][k] > 4) {
            out3 += b[i][k];
        }
    }
    out3 += '<br>';
}
document.querySelector('.out3').innerHTML = out3;
console.log(out3);
///11:12
let d = [1, 0, 0, 0, 0, 0];
document.querySelector('.out4').innerHTML = d;
let j = 0;
document.querySelector('.push').onclick = () => {
    if (j + 1 < 6) {
        d[j] = 0;
        d[j + 1] = 1;
        j++;
    }
    document.querySelector('.out4').innerHTML = d;
}
