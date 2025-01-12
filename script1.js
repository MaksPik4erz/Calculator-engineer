let a1 = '';
let b1 = '';
let sign1 = '';
let sqr = [];

const nmber = document.querySelector('num');
const out1 = document.querySelector('.calc-screen1 p');
const p1 = document.querySelector('.paragraph1');
out1.textContent = '0';

const numbers1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action1 = ['-', '+', '*', '/', '%', '^', '^-1', 'lg'];

document.querySelector('.ac1').addEventListener('click', () => {
    a1 = '';
    b1 = '';
    sign1 = '';
    out1.textContent = 0;
    p1.classList.remove('verySmallSizeText')
    p1.classList.remove('smallSizeText');
    p1.classList.add('bigSizeText');
});

document.querySelector('.xy').addEventListener('click', () => {
    sign1 = '^';
    out1.textContent += '^';
});


document.querySelector('.x1').addEventListener('click', () => {
    sign1 = '^-1';
    out1.textContent += '^-1';
});

document.querySelector('.sqr').addEventListener('click', () => {
    sign1 = '√';
    out1.textContent = '√';
});

document.querySelector('.lg').addEventListener('click', () => {
    sign1 = 'lg';
    out1.textContent = 'lg('
});

document.querySelector('.ln').addEventListener('click', () => {
    sign1 = 'ln';
    out1.textContent = 'ln('
});

document.querySelector('.backspace1').addEventListener('click', () => {
    a1 = a1.slice(0, a1.length - 1);
    out1.textContent = out1.textContent.slice(0, out1.textContent.length - 1);

    if(out1.textContent.length > 35 && out1.textContent.length <= 99) {
        p1.classList.remove('verySmallSizeText');
        p1.classList.remove('bigSizeText');
        p1.classList.add('smallSizeText');
    } else if(out1.textContent.length <= 35) {
        p1.classList.remove('verySmallSizeText');
        p1.classList.remove('smallSizeText');
        p1.classList.add('bigSizeText');
    } else if(out1.textContent.length > 99) {
        p1.classList.remove('bigSizeText');
        p1.classList.remove('smallSizeText');
        p1.classList.add('verySmallSizeText');
    }

    if(out1.textContent == '') {
        a1 = '';
        b1 = '';
        sign1 = '';
        out1.textContent = 0;
        p1.classList.remove('verySmallSizeText')
        p1.classList.remove('smallSizeText');
        p1.classList.add('bigSizeText');
    }
});

document.querySelector('.equal1').addEventListener('click', () => {
    if (sign1 == '+') {
        a1 = +a1 + +b1;
        out1.textContent = a1;
    } else if (sign1 == '-') {
        a1 = a1 - b1;
        out1.textContent = a1;
    } else if (sign1 == '*') {
        a1 = a1 * b1;
        out1.textContent = a1;
    } else if (sign1 == '/') {
        a1 = a1 / b1;
        out1.textContent = a1;
    } else if (sign1 == '%') {
        a1 = a1 / 100;
        out1.textContent = a1;
    } else if (sign1 == '^') {
        a1 = Math.pow(+a1, +b1);
        out1.textContent = a1;
    } else if (sign1 == '!') {
        a1 = factorial(a1);
        out1.textContent = a1;
    } else if (sign1 == '^-1') {
        a1 = Math.pow(a1, -1);
        out1.textContent = a1;
    } else if (sign1 == '√') {
            a1 = Math.sqrt(a1);
            out1.textContent = a1;
    } else if (sign1 == 'lg') {
        a1 = Math.log10(a1).toFixed(8);
        out1.textContent = a1;
    } else if (sign1 == 'ln') {
        a1 = Math.log(a1).toFixed(8);
        out1.textContent = a1;
    }
    sign1 = '';
    b1 = '';
});

document.querySelector('.e1').addEventListener('click', () => {
    a1 += Math.E.toFixed(8);
    out1.textContent = a1;
});

document.querySelector('.pi').addEventListener('click', () => {
    a1 += Math.PI.toFixed(8);
    out1.textContent = a1;
});

document.querySelector('.factorial').addEventListener('click', () => {
    sign1 = '!';
    out1.textContent += '!';
});

function factorial (num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorial( num - 1 );
    }
}

document.querySelector('.type').addEventListener('click', () => {
    if (document.querySelector('.type').textContent == 'deg') {
        document.querySelector('.type').textContent = 'rad';
    } else document.querySelector('.type').textContent = 'deg';
});

document.querySelector('.sin').addEventListener('click', () => {
    if (document.querySelector('.type').textContent == 'deg') {
        a1 = parseFloat(Math.sin(a1/180 * Math.PI.toFixed(8).toString()));
        out1.textContent = a1;
    } else {
        a1 = parseFloat(Math.sin(a1).toFixed(8).toString());
        out1.textContent = a1;
    }
});

document.querySelector('.cos').addEventListener('click', () => {
    if (document.querySelector('.type').textContent == 'deg') {
        a1 = parseFloat(Math.cos(a1/180 * Math.PI.toFixed(8).toString()));
        out1.textContent = a1;
    } else {
        a1 = parseFloat(Math.cos(a1).toFixed(8).toString());
        out1.textContent = a1;
    }
});

document.querySelector('.tan').addEventListener('click', () => {
    if (document.querySelector('.type').textContent == 'deg') {
        a1 = parseFloat(Math.tan(a1/180 * Math.PI.toFixed(8).toString()));
        out1.textContent = a1;
    } else {
        a1 = parseFloat(Math.tan(a1).toFixed(8).toString());
        out1.textContent = a1;
    }
});

document.querySelector('.ctg').addEventListener('click', () => {
    if (document.querySelector('.type').textContent == 'deg') {
        a1 = parseFloat(1/Math.tan(a1/180 * Math.PI.toFixed(8).toString()));
        out1.textContent = a1;
    } else {
        a1 = parseFloat(1/Math.tan(a1).toFixed(8).toString());
        out1.textContent = a1;
    }
});

document.querySelector('.nums1').onclick = (event) => {
    if(!event.target.classList.contains('number1')) return;
    if(event.target.classList.contains('ac1')) return;
    
    const key1 = event.target.textContent;

    if(out1.textContent.length > 35 && out1.textContent.length <= 99) {
        p1.classList.remove('bigSizeText');
        p1.classList.add('smallSizeText');
    } else if(out1.textContent.length <= 35) {
        p1.classList.remove('verySmallSizeText')
        p1.classList.remove('smallSizeText');
        p1.classList.add('bigSizeText');
    } else if(out1.textContent.length > 99) {
        p1.classList.remove('smallSizeText');
        p1.classList.add('verySmallSizeText');
    }  

    if(numbers1.includes(key1)) {
        if(b1 == '' && sign1 == '') {
            a1 += key1;
            out1.textContent = a1;
        } else if (a1 !== '' && sign1 == '^') {
            b1 += key1;
            out1.textContent += b1;
        } else if (sign1 == '√') {
            a1 += key1;
            out1.textContent += key1;
        } else if (sign1 == 'lg') {
            a1 += key1;
            out1.textContent += key1;
        } else if (sign1 == 'ln') {
            a1 += key1;
            out1.textContent += key1;
        } else if (a1 !== '' && sign1 !== '') {
            b1 += key1;
            out1.textContent = b1;
        }
    }

    if(action1.includes(key1)) {
        if(a1 == '' && sign1 == '' && b1 == '' && key1 == '-') {
            a1 = key1 + a1;
            out1.textContent = a1; 
        } else if (a1 !== '' && sign1 !== '' && b1 == '(' && key1 == '-') {
            b1 += key1;
            out1.textContent = b1;
        } else if(a1 !== '' && sign1 == '' && b1 == '') {
            sign1 = key1;
            out1.textContent = sign1; 
        }
    }
}
