function bindModal(trigger, modal, close) {
    trigger = document.querySelector(trigger),
    modal = document.querySelector(modal),
    close = document.querySelector(close)

    trigger.addEventListener('click', e => {
      e.preventDefault()
      modal.style.display = 'flex'
    });
    close.addEventListener('click', () => {
      modal.style.display = 'none'
    });
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.style.display = 'none'
      }
    })
}

// ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
// ВТОРОЙ аргумент - класс самого модального окна.
// ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
bindModal('.modal', '.modal__window', '.modal__close')
bindModal('.modal-1', '.modal__window', '.modal__close')
bindModal('.modal-2', '.modal__window', '.modal__close')
bindModal('.modal-3', '.modal__window', '.modal__close')
bindModal('.modal-4', '.modal__window', '.modal__close')
bindModal('.modal-5', '.modal__window', '.modal__close')
bindModal('.modal-6', '.modal__window', '.modal__close')
bindModal('.modal-registratiom', '.modal__window', '.modal__close')


// const openPopUp=document.querySelector('.modal');
// const closePopUp=document.getElementById('close');
// const popUp=document.querySelector('.modal__window');

// openPopUp.addEventListener('click', function(e){
//     e.preventDefault();
//     popUp.classList.add('active');
// });

// closePopUp.addEventListener('click', () => {
//     popUp.classList.remove('active');
// });


$(function () {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Загрузка изображения #%curr%...',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
        });
    $('.image-popup-zoom').magnificPopup({
    type: 'image',
        zoom: {
         enabled: true,
        duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
        }
    });
    $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2500,
      });

      new WOW().init();
});


