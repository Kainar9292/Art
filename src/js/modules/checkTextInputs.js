const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(/[A-Za-z]/g, '');
        });
    });
};

export default checkTextInputs;