let textBlock = document.querySelector('.text-block');
let textBlockText = document.querySelector('.text-block__text');
let textBlockButton = textBlock.querySelector('.text-block__button');

let brandListContainer = document.querySelector('.brand');
let brandList = brandListContainer.querySelector('.brand-list');
let brandListButton = brandListContainer.querySelector('.brand-list__button');

let repairListContainer = document.querySelector('.repair');
let repairList = repairListContainer.querySelector('.repair-list');
let repairListButton = repairListContainer.querySelector('.repair-list__button');

textBlockButton.addEventListener('click', function () {
    textBlockText.classList.toggle('text-block__text--open');
    textBlockButton.classList.toggle('open-more-button--open');
    if (textBlockButton.classList.contains('open-more-button--open')) {
        textBlockButton.textContent = 'Скрыть';
    } else {
        textBlockButton.textContent = 'Читать далее';
    }
})

brandListButton.addEventListener('click', function () {
    brandList.classList.toggle('brand-list--open');
    brandListButton.classList.toggle('open-more-button--open');
    if (brandListButton.classList.contains('open-more-button--open')) {
        brandListButton.textContent = 'Скрыть';
    } else {
        brandListButton.textContent = 'Показать все';
    }
})

repairListButton.addEventListener('click', function () {
    repairList.classList.toggle('repair-list--open');
    repairListButton.classList.toggle('open-more-button--open');
    if (repairListButton.classList.contains('open-more-button--open')) {
        repairListButton.textContent = 'Скрыть';
    } else {
        repairListButton.textContent = 'Показать все';
    }
})