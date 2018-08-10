// Styles
const addStyles = () => {
    addPaddingForFixedHeader();
}

const addPaddingForFixedHeader = () => {
    const header = document.querySelector('#cephas > header.fixed');

    if (header) {
        const cephasDiv = document.getElementById('cephas');
        cephasDiv.style.paddingTop = `${header.offsetHeight}px`;
    }
}

addStyles();