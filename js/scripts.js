'use strict';

const app = (() => {
    let mark_all_read;
    const init = () => {
        mark_all_read = document.querySelector('#mark-all-read');
        applyListeners();
    }

    const applyListeners = () => {
        mark_all_read.addEventListener('click', () => {
            document.querySelector('#three').style.display = "none";
            document.querySelectorAll('.notification').forEach(el => {
                el.style.background = "var(--neutral-white)";
                el.style.border = "1px solid var(--neutral-white)";
            });
            document.querySelectorAll('.unread-circle').forEach(el => {
                el.classList.add('display-none');
            })
        });
    }

    init();
})();