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

// Onload

const onload = () => {
    addStyles();
}

onload();