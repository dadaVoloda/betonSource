AOS.init({disable: 'mobile'});

const inputs = document.querySelectorAll('input[type="tel"]');
const im = new Inputmask('+7 (999) 999 99 99');
im.mask(inputs);

// burger-menu
const burger = document.querySelector('.menu-burger');
const navList = document.querySelector('.nav__list');
const mobileContact = document.querySelector('.mobile-contacts');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
  burger.classList.toggle('menu-burger--active')
  navList.classList.toggle('nav__list--active')
  mobileContact.classList.toggle('mobile-contacts--active')
  body.classList.toggle('js-hidden')
});

// form
const btnSubmit = document.querySelector('.banner-form__btn');
const formSuccess = document.querySelector('.banner-form__body--success');

btnSubmit.addEventListener('click', () => {
  const inputName = document.querySelector('[data-name]');
  const inputTel = document.querySelector('[data-tel]');
  if (inputName.value && inputTel.value) {
    formSuccess.classList.remove('hide')
  setTimeout(() => {
    formSuccess.classList.add('hide');
  }, 3000);
  }
});

// beton types
const typeBtn = document.querySelectorAll('.line-btn');
const modalType = document.querySelector('.types__modal');
const modalClose = document.querySelectorAll('.type-descr__close');
const modalBody = document.querySelectorAll('.type-descr');

const m100 = document.querySelector('#m100');
const m150 = document.querySelector('#m150');
const m200 = document.querySelector('#m200');
const m250 = document.querySelector('#m250');
const m300 = document.querySelector('#m300');
const m350 = document.querySelector('#m350');
const m400 = document.querySelector('#m400');
const m450 = document.querySelector('#m450');

typeBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('m100')) {
      modalType.classList.add('types__modal--active');
      m100.classList.add('show');
    } else if (btn.classList.contains('m150')) {
      modalType.classList.add('types__modal--active');
      m150.classList.add('show');
    } else if (btn.classList.contains('m200')) {
      modalType.classList.add('types__modal--active');
      m200.classList.add('show');
    } else if (btn.classList.contains('m250')) {
      modalType.classList.add('types__modal--active');
      m250.classList.add('show');
    } else if (btn.classList.contains('m300')) {
      modalType.classList.add('types__modal--active');
      m300.classList.add('show');
    } else if (btn.classList.contains('m350')) {
      modalType.classList.add('types__modal--active');
      m350.classList.add('show');
    } else if (btn.classList.contains('m400')) {
      modalType.classList.add('types__modal--active');
      m400.classList.add('show');
    } else if (btn.classList.contains('m450')) {
      modalType.classList.add('types__modal--active');
      m450.classList.add('show');
    }
  });
});

function closeModal() {
  modalType.classList.remove('types__modal--active');
  modalBody.forEach(el => {
    el.classList.remove('show')
  });
}

modalClose.forEach(close => {
  close.addEventListener('click', () => {
    closeModal();
  });
});
  
modalType.addEventListener('click', (e) => {
  if (e.target === modalType) {
    closeModal();
  }
});
document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' && modalType.classList.contains('types__modal--active')) {
    closeModal();
  }
});


// calculator
const counterPlus = document.querySelectorAll('.plus');
const counterMinus = document.querySelectorAll('.minus');
const counterInput = document.querySelectorAll('.counter__input');
const tableWrap = document.querySelector('.table-wrapper');
const calcHelp = document.querySelector('.calculator-help');

const tableConcr = document.querySelector('#tc');
const tableSol = document.querySelector('#ts');


counterPlus.forEach(btn => {
  btn.addEventListener('click', function () {
    let input = this.parentElement.children[1];
    let title = this.parentElement.parentElement.parentElement.firstElementChild.textContent;
    let cost = this.parentElement.parentElement.parentElement.children[1].firstElementChild.textContent;
    let numbCost = parseFloat(cost.split(' ').join(''))
    input.value = ++input.value;
    if (tableWrap.classList.contains('hide')) {
      tableWrap.classList.remove('hide');
      calcHelp.classList.add('hide');
    }

    if (input.closest('.calculator-solution')) {
      tableSol.children[1].insertAdjacentHTML('beforeend', `
      <tr id='${title}'>
        <td class="table__type">${title}</td>
        <td class="table__amount">${input.value}</td>
        <td class="table__price">${numbCost} руб</td>
      </tr>
      `);
    } else {
      tableConcr.children[1].insertAdjacentHTML('beforeend', `
      <tr>
        <td class="table__type">${title}</td>
        <td class="table__amount">${input.value}</td>
        <td class="table__price">${numbCost} руб</td>
      </tr>
      `);
    }
  })
});

const removeTable = () => {
  let array = [...counterInput];
  if (array.every(i => i.value == 0)) {
    tableWrap.classList.add('hide');
    calcHelp.classList.remove('hide');
  }
}

counterMinus.forEach(btn => {
  btn.addEventListener('click', function () {
    let input = this.parentElement.children[1];
    input.value = --input.value;
    if (input.value <= 0) {
      input.value = 0;
    }
    removeTable();
  })
});

