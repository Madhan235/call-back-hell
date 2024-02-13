var count_10 = () => {
    setTimeout(() => {
        var call_count = document.querySelector('.count');
        call_count.textContent = '10';
        count_9();
    }, 1000);
};

var count_9 = () => {
    setTimeout(() => {
        var call_count = document.querySelector('.count');
        call_count.textContent = '9';
        count_8();
    }, 1000);
};

var count_8 = () => {
    setTimeout(() => {
        var call_count = document.querySelector('.count');
        call_count.textContent = '8';
        count_7();
    }, 1000);
};

var count_7 = () => {
    setTimeout(() => {
        var call_count = document.querySelector('.count');
        call_count.textContent = '7';
        count_6();
    }, 1000);
};

var count_6 = () => {
    setTimeout(() => {
        var call_count = document.querySelector('.count');
        call_count.textContent = '6';
        count_5();
    }, 1000);
};

var count_5 = () => {
    setTimeout(() => {
        var call_count = document.querySelector('.count');
        call_count.textContent = '5';
        count_4();
    }, 1000);
};

var count_4 = () => {
    setTimeout(() => {
        var call_count = document.querySelector('.count');
        call_count.textContent = '4';
        count_3();
    }, 1000);
};

var count_3 = () => {
    setTimeout(() => {
        var call_count = document.querySelector('.count');
        call_count.textContent = '3';
        count_2();
    }, 1000);
};

var count_2 = () => {
    setTimeout(() => {
        var call_count = document.querySelector('.count');
        call_count.textContent = '2';
        count_1();
    }, 1000);
};

var count_1 = () => {
    setTimeout(() => {
        var call_count = document.querySelector('.count');
        call_count.textContent = '1';
        final_text();
    }, 1000);
};

var final_text = () => {
    setTimeout(() => {
        var wish = document.querySelector('.count');
        wish.textContent = 'HAPPY INDEPENDENCE DAY ALL !';
    }, 1000);
};

count_10();
