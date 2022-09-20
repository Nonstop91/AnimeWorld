$(document).ready(function() {
  $('.btn-menu').click(function(event) {
    $('body').toggleClass('menu-open');
  });
  
  $(".accordion").on("click", function(e) {
		e.preventDefault();
		var $this = $(this);


		if (!$this.hasClass("drop-menu-active")) {
		  $(".drop-menu").slideUp(400);
		  $(".accordion").removeClass("drop-menu-active");		
		}

    $this.toggleClass("drop-menu-active");
		$this.next().slideToggle();
  });
  
  $(".info-carousel").owlCarousel({
    responsive:{
      0:{
          items:1
      },
      992:{
          items:1
      }
    },
    dotsEach: true,
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    singleItem: true,
    autoplayTimeout: 3000,
    smartSpeed: 300,
    center: true,
    rewind: true,
    mouseDrag: false
  });
  
  $(".charasters-carousel").owlCarousel({
    responsive:{
      0:{
          items:2,
          singleItem: false,
          dots: true
      },
      992:{
          items:3,
      }
    },
    dots: false,
    margin: 10,
    rewind: true,
    mouseDrag: false,
    startPosition: 0
  });
  
  $(".tab-item").not(":first").hide();
  $(".tabs .tab").click(function() {
    $(".tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab-item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");


  const counters = document.querySelectorAll('.counter');

  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      const target = +counter.getAttribute
      ('data-target');
      const c = +counter.innerText;

      const increment = target / 2500;

      if (c < target) {
       counter.innerText = `${Math.ceil(c + increment)
       }`;
       setTimeout(updateCounter, 1);
       } else {
         counter.innerText = target;
       }
    };
    updateCounter();
  });

  $(document).on('click', 'a[href^="#carousel"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    },750);
  });

  $(document).on('click', 'a[href^="#carousel-charasters"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    },750);
  });
});