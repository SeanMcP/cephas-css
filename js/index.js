// Styles
const addStyles = () => {
    addGridColumns();
    addPaddingForFixedHeader();
}

const addPaddingForFixedHeader = () => {
    const header = document.querySelector('#cephas > header.fixed');

    if (header) {
        const cephasDiv = document.getElementById('cephas');
        if (cephasDiv)
            cephasDiv.style.paddingTop = `${header.offsetHeight}px`;
    }
}

const addGridColumns = () => {
    const grids = document.querySelectorAll('.grid');

    if (grids.length > 0) {
        grids.forEach(grid => {
            const div = grid.querySelector('div');
            if (div)
                div.style.gridTemplateColumns = `repeat(${div.childElementCount}, 1fr)`;
        });
    }
}

// Modal

const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    modal.querySelector('.overlay').remove();
    modal.classList.remove('show');
}

const openModal = (modalId) => {
    const modal = document.getElementById(modalId);

    const overlay = document.createElement('aside');
    overlay.classList.add('overlay');
    overlay.addEventListener('click', () => closeModal(modalId));
    modal.appendChild(overlay);
    
    modal.classList.add('show');
}

// Onload

const onload = () => {
    addStyles();
}

onload();