const calculator = document.querySelector('.calculator');
const theme = document.querySelector('.theme');
const displayScreen = document.querySelector('.display-screen');
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
var flag = true;
theme.onclick = function () {
    if (flag) {
        display.style.color = '#fff';
        calculator.className = 'calculator calculator-dark';
        this.className = 'theme theme-dark';
        displayScreen.className = 'display-screen display-screen-dark';
        flag = false;
    } else {
        display.style.color = '#000';
        calculator.className = 'calculator';
        this.className = 'theme';
        displayScreen.className = 'display-screen';
        flag = true;
    }
}
buttons.forEach(itme => {
    itme.onclick = () => {
        // 点击c按钮
        if (itme.id == 'clear') {
            display.innerHTML = '';
            // 点击<按钮
            // toString把内容转换成字符串型 
            // substring()提取前n-1个字符 
        } else if (itme.id == 'backspac') {
            let string = display.innerHTML.toString();
            display.innerHTML = string.substring(0, string.length - 1);
            // 内容为空且点击等号输出empty，3秒后为空
        } else if (display.innerHTML == '' && itme.id == 'eual') {
            display.innerHTML = 'empty!';
            setTimeout(() => {
                display.innerHTML = '';
            }, 2000)
            // 内容不为空且点击等号，用eval（）函数计算值
        } else if (display.innerHTML != '' && itme.id == 'eual') {
            display.innerHTML = eval(display.innerHTML);
            // 结果内容长度大于16，约等于16
        } else if (display.innerHTML.length > 16) {
            let str = display.innerHTML.toString();
            display.innerHTML = str.substring(0, 16);
            // 不允许输入两个除号
        } else if (display.innerHTML == '/' || display.innerHTML == '*' || display.innerHTML == '+' || display.innerHTML == '-') {
            itme.style.disable = 'true';
        } else {
            display.innerHTML += itme.id;
        }
    }
});
// 跳转链接
const btnEqual = document.querySelector('.btn-equal');
btnEqual.addEventListener('click', () => {
    if (display.innerHTML == 520) {
        window.location.href = "aixing.html";
    }
})


