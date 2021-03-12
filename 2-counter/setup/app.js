// set initial count
let count = 0;


// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {

    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        console.log(styles);
        if(styles.contains('decrease')) {
            count--;
        } else if(styles.contains('up')) {
            count++;
        } else if(styles.contains('reset')) {
            count = 0;
        }

        value.textContent = count;
    })
})