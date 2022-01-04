document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".list--item__btn").forEach(item => {
    item.addEventListener("click", function() {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".container--dropdown");
      
      document.querySelectorAll(".list--item__btn").forEach(el => {
        if (el != btn) {
          el.classList.remove("active--btn");
        }
      });
      
      document.querySelectorAll(".container--dropdown").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("active-list--item");
        }
      })
      dropdown.classList.toggle("active-list--item");
      btn.classList.toggle("active--btn")
    })
  })
  
  document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".list")) {
      document.querySelectorAll(".container--dropdown").forEach(el => {
          el.classList.remove("active-list--item");
      })
       document.querySelectorAll(".list--item__btn").forEach(el => {
          el.classList.remove("active--btn");
      });
    }
  })
  new SimpleBar(document.querySelector(".container--dropdown-list-one"), {
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 27,
  });
  new SimpleBar(document.querySelector(".container--dropdown-list-two"), {
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 27,
  });
  new SimpleBar(document.querySelector(".container--dropdown-list-three"), {
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 27,
  });
  new SimpleBar(document.querySelector(".container--dropdown-list-four"), {
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 27,
  });
  new SimpleBar(document.querySelector(".container--dropdown-list-five"), {
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 27,
  });
  var swiper = new Swiper(".mySwipe", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".s-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".knop-button-next",
      prevEl: ".knop-button-prev",
    },
  });
  document.querySelector('#header__btn-one').addEventListener('click', function(){
    document.querySelector('#header__scroll-one').classList.toggle('header__scroll-transform')
})
  document.querySelector('#header__btn-two').addEventListener('click', function(){
      document.querySelector('#header__scroll-two').classList.toggle('header__scroll-transform')
  })
  document.querySelector('#header__btn-three').addEventListener('click', function(){
      document.querySelector('#header__scroll-three').classList.toggle('header__scroll-transform')
  })
  document.querySelector('#header__btn-four').addEventListener('click', function(){
    document.querySelector('#header__scroll-four').classList.toggle('header__scroll-transform')
  })
  document.querySelector('#header__btn-five').addEventListener('click', function(){
      document.querySelector('#header__scroll-five').classList.toggle('header__scroll-transform')
  })

  $( function() {
    $( "#accordion" ).accordion(
        {heightStyle:"content"}
    );
  });

  document.querySelectorAll('.catalog__text-link').forEach(function(tb){
    tb.addEventListener('click', function(kk){
      const path = kk.currentTarget.dataset.path
      console.log(path)

      document.querySelectorAll('.catalog__block-default').forEach(function(bg){
        bg.classList.remove('catalog__block-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__block-active')
    })
  })

  var swiper = new Swiper(".events__swiper-block", {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
      nextEl: ".events__button-next",
      prevEl: ".events__button-prev",
    },
  });
  var swiper = new Swiper(".projects__swiper-block", {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
      nextEl: ".projects__button-next",
      prevEl: ".projects__button-prev",
    },
  });
  tippy('.projects__tooltip-one', {
    theme: 'projects__tooltip-one',
    content: "Пример современных тенденций - современная методология разработки ",
  });
  tippy('.projects__tooltip-two', {
    theme: 'projects__tooltip-two',
    content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции   ",
  });
  tippy('.projects__tooltip-three', {
    theme: 'projects__tooltip-three',
    content: "В стремлении повысить качество ",
  });
  var selector = document.querySelector("input[type='tel']");
      var im = new Inputmask("+7 (999)-999-99-99");
      im.mask(selector);

      new JustValidate('.form',{
          rules:{
              name:{
                  required: true,
                  minLength: 2,
                  maxLength: 30
              },
              tel:{
                  required: true,
                  function: (name, value) => {
                      const phone = selector.inputmask.unmaskedvalue()
                      return Number(phone) && phone.length === 10
                  }
              },
          },
      });
})
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.75854, 37.60093],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 14
    });// Создание геообъекта с типом точка (метка).
        var myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point", // тип геометрии - точка
                coordinates: [49, 1] // координаты точки
            }
        });
        var myPlacemark1 = new ymaps.Placemark([55.75854, 37.60093], {}, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [19, 20]],
            iconImageHref: './img/Desktop1920/Feedback_block/Ellipse12.svg',
            iconImageSize: [30, 40],
            iconImageOffset: [-15, -27]
        });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark1);

}