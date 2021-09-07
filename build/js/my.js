"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  // Вкладки с буллитами
  $('.bm:visible').removeClass('current').eq(0).addClass('current');
  $('.bm_cont:visible .bm_show').hide().eq(0).show();
  $("body").on("click", ".bm", function () {
    $(this).addClass('visited');

    if (!$(this).parents(':eq(0)').hasClass('donthide')) {
      $('.bm:visible').removeClass('current');
      $(this).addClass('current');
      $('.bm_cont:visible .bm_show').fadeOut(0);
    }

    $('.bm_cont:visible .bm_show').eq($(this).parents().index()).fadeIn(0);

    if ($('.bm:visible.visited').length == $('.bm:visible').length) {
      $('.btn__primary.nav.disabled:visible').parents().eq(3).hide();
    }
  }); // Next speech

  $(document).on("click", ".js-nextSpeech", function (event) {
    var block = $(event.target).parent().find('p.active');

    if (!block.next().next().length) {
      $(this).hide();
    }

    block.removeClass('active').hide();
    block.next().addClass('active').show();
  });

  function tabs() {
    var tabsCollection = $(".tabs");
    tabsCollection.each(function (index, el) {
      $(el).find(".tab__item:not(:first-child)").hide();
      $(el).find(".tab__links:first-child").addClass("active");
    });
    $(".tab__links").on("click", onTabClickHandler);

    function onTabClickHandler(event) {
      var target = $(event.target);
      var linksCollection = target.closest(".tabs").find(".tab__links");
      linksCollection.each(function () {
        $(this).removeClass("active");
        $($(this).attr("data-href")).hide();
      });
      target.addClass("active");
      $(target.attr("data-href")).show();
    }
  }

  tabs();
  $('pre code').each(function (i, e) {
    hljs.highlightBlock(e);
  });
  $("a.scrollto").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top - 75;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });

  function addCopyButtons(clipboard) {
    document.querySelectorAll('pre > code').forEach(function (codeBlock) {
      var button = document.createElement('button');
      button.className = 'copy-code-button';
      button.type = 'button';
      button.innerText = 'Скопировать';
      button.addEventListener('click', function () {
        clipboard.writeText(codeBlock.innerText).then(function () {
          /* Chrome doesn't seem to blur automatically,
             leaving the button in a focused state. */
          button.blur();
          button.innerText = 'Скопировано!';
          setTimeout(function () {
            button.innerText = 'Скопировать';
          }, 2000);
        }, function (error) {
          button.innerText = 'Ошибка';
        });
      });
      var pre = codeBlock.parentNode;

      if (pre.parentNode.classList.contains('highlight')) {
        var highlight = pre.parentNode;
        highlight.parentNode.insertBefore(button, highlight);
      } else {
        pre.parentNode.insertBefore(button, pre);
      }
    });
  }

  if (navigator && navigator.clipboard) {
    addCopyButtons(navigator.clipboard);
  } else {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js';
    script.integrity = 'sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=';
    script.crossOrigin = 'anonymous';

    script.onload = function () {
      addCopyButtons(clipboard);
    };

    document.body.appendChild(script);
  }

  function slider() {
    $('.single-item').each(function () {
      var slick = $(this);
      slick.slick({
        nextArrow: '<div class="custom-slick-navigation"><img alt="" class="slick-next fluid" src="images/slider_arrow_next.png" /></div>',
        prevArrow: '<div class="custom-slick-navigation"><img alt="" class="slick-prev fluid" src="images/slider_arrow_prev.png" /></div>',
        dots: true,
        infinite: false,
        swipe: false,
        speed: 100
      });
    });
  }

  slider();

  function accordion() {
    $('.accordion').each(function () {
      var accordion = $(this);
      accordion.accordion({
        collapsible: true,
        heightStyle: "content",
        active: false
      });
    });
  }

  accordion();
}); // Modals

var modals = function modals() {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    var closeClickOverlay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    var trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelectorAll(closeSelector),
        windows = document.querySelectorAll("[data-modal]"),
        scroll = calcScroll();
    trigger.forEach(function (item) {
      item.addEventListener("click", function (e) {
        if (e.target) {
          e.preventDefault();
        }

        var btn = item;
        var currentModal;
        windows.forEach(function (item) {
          item.style.display = "none";

          if ($(btn).attr("data-href") === $(item).attr("data-modal")) {
            currentModal = item;
          }
        });
        currentModal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = "".concat(scroll, "px"); //   document.body.classList.add("modal-open");
      });
    });
    close.forEach(function (btnClose) {
      btnClose.addEventListener("click", function () {
        windows.forEach(function (item) {
          item.style.display = "none";
        });
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = "0px"; //   document.body.classList.remove("modal-open");
      });
    });
    modal.addEventListener("click", function (e) {
      if (e.target === modal && closeClickOverlay) {
        windows.forEach(function (item) {
          item.style.display = "none";
        });
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = "0px"; // document.body.classList.remove("modal-open");
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(function () {
      document.querySelector(selector).style.display = "flex";
      document.body.style.overflow = "hidden";
    }, time);
  }

  function calcScroll() {
    var div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";
    document.body.appendChild(div);
    var scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  bindModal(".modal-open", ".modal", ".modal .modal-close", false);
}; // Open url and files


var windowObjectReference = null;

var openRequestedPopup = function openRequestedPopup(url, windowName) {
  if (windowObjectReference == null || windowObjectReference.closed) {
    windowObjectReference = window.open(url, windowName, "resizable,scrollbars,status");
  } else {
    windowObjectReference.focus();
  }
}; // sidenav


function pathLoc() {
  $('.sidenav-left-content--item').each(function (key, item) {
    var currentPath = window.location.pathname;
    var activePath = '/vtb_guidelines/' + $(item).find('a').attr('data-href');

    if (currentPath == activePath) {
      $(item).find('a').addClass('active');
    }
  });
}

pathLoc();