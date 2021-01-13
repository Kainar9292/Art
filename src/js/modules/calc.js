import {getResource} from './services/requests';

const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);

    let sum = 0;

    function getPrice(source) {
        getResource('assets/dbPrice.json')
            .then(res => createHtmlPrice(res[source], source))
            .catch(error => console.log(error));
    }

    function createHtmlPrice(response, source) {
        const elementHtml = document.querySelectorAll(`#${source} option`);

        let count = 0;

        response.forEach(item => {
            elementHtml[count].value = item;
            console.log(elementHtml[count].value);
            ++count;
        });
    }

    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = 'Пожалуйста, выберите размер и материал картины';
        } else if (promocodeBlock.value == 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    };

    sizeBlock.addEventListener('change', () => {
        getPrice('size');
        calcFunc();
    });
    materialBlock.addEventListener('change', () => {
        getPrice('material');
        calcFunc();
    });
    optionsBlock.addEventListener('change',() => {
        getPrice('options');
        calcFunc();
    });
    promocodeBlock.addEventListener('input', calcFunc);
};

export default calc;