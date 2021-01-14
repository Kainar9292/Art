import {getResource} from './services/requests';

const calc = (size, material, options, promocode, result, state) => {
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
            ++count;
        });
    }

    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = 'Пожалуйста, выберите размер и материал картины';
        } else if (promocodeBlock.value == 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
            sum = sum * 0.7;
        } else {
            resultBlock.textContent = sum;
        }
    };


    //Add data to state

    const addDataCalc = (elem, prop) => {
        state[prop] = elem.value;
        state.totalPrice = sum;
        console.log(state);
    };

    sizeBlock.addEventListener('change', () => {
        getPrice('size');
        calcFunc();
        addDataCalc(sizeBlock, 'size');
    });
    materialBlock.addEventListener('change', () => {
        getPrice('material');
        calcFunc();
        addDataCalc(materialBlock, 'material');
    });
    optionsBlock.addEventListener('change',() => {
        getPrice('options');
        calcFunc();
        addDataCalc(optionsBlock, 'options');
    });
    promocodeBlock.addEventListener('input', () => {
        calcFunc();
        addDataCalc(promocodeBlock, 'promocode');

    });
};

export default calc;