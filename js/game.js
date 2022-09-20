naruto = [
  'naruto/1.jpg',
  'naruto/2.png',
  'naruto/3.jpg',
  'naruto/4.jpg',
  'naruto/5.png',
  'naruto/6.jpg',
  'naruto/7.jpg',
  'naruto/8.jpg',
  'naruto/9.jpg',
  'naruto/10.png' 
]   

bleach = [
  'bleach/1.jpg',
  'bleach/2.jpg',
  'bleach/3.jpg',
  'bleach/4.jpg',
  'bleach/5.jpg',
  'bleach/6.jpg',
  'bleach/7.jpg',
  'bleach/8.jpg',
  'bleach/9.jpg',
  'bleach/10.jpg'
]

hunter = [
  'hunter/1.jpg',
  'hunter/2.png',
  'hunter/3.jfif',
  'hunter/4.jpg',
  'hunter/5.jpg',
  'hunter/6.jpg',
  'hunter/7.png',
  'hunter/8.jpg',
  'hunter/9.jpg',
  'hunter/10.jpg'
]

academy = [
  'academy/1.jpg',
  'academy/2.jpg',
  'academy/3.jpg',
  'academy/4.jpg',
  'academy/5.jfif',
  'academy/6.jpg',
  'academy/7.jpg',
  'academy/8.jpg',
  'academy/9.png',
  'academy/10.jpg'
]


 function get_random_image_you_naruto() {
	random_index = Math.floor(Math.random() * naruto.length);

	selected_image = naruto[random_index]

	document.getElementById('image_shower_you_naruto').src = `./game-imgs/${selected_image}`
}

function get_random_image_defender_naruto() {
	random_index = Math.floor(Math.random() * naruto.length);

	selected_image = naruto[random_index]

	document.getElementById('image_shower_defender_naruto').src = `./game-imgs/${selected_image}`
}

function get_random_image_attacker_naruto() {
	random_index = Math.floor(Math.random() * naruto.length);

	selected_image = naruto[random_index]

	document.getElementById('image_shower_attacker_naruto').src = `./game-imgs/${selected_image}`
}

function get_random_image_attacker2_naruto() {
	random_index = Math.floor(Math.random() * naruto.length);

	selected_image = naruto[random_index]

	document.getElementById('image_shower_attacker2_naruto').src = `./game-imgs/${selected_image}`
}


function get_random_image_bleach_you() {
	random_index = Math.floor(Math.random() * bleach.length);

	selected_image = bleach[random_index]

	document.getElementById('image_shower_bleach_you').src = `./game-imgs/${selected_image}`
}

function get_random_image_bleach_defender() {
	random_index = Math.floor(Math.random() * bleach.length);

	selected_image = bleach[random_index]

	document.getElementById('image_shower_bleach_defender').src = `./game-imgs/${selected_image}`
}

function get_random_image_bleach_attacker() {
	random_index = Math.floor(Math.random() * bleach.length);

	selected_image = bleach[random_index]

	document.getElementById('image_shower_bleach_attacker').src = `./game-imgs/${selected_image}`
}

function get_random_image_bleach_attacker2() {
  random_index = Math.floor(Math.random() * bleach.length);

  selected_image = bleach[random_index]

  document.getElementById('image_shower_bleach_attacker2').src = `./game-imgs/${selected_image}`
}

function get_random_image_hunter_you() {
	random_index = Math.floor(Math.random() * hunter.length);

	selected_image = hunter[random_index]

	document.getElementById('image_shower_hunter_you').src = `./game-imgs/${selected_image}`
}

function get_random_image_hunter_defender() {
	random_index = Math.floor(Math.random() * hunter.length);

	selected_image = hunter[random_index]

	document.getElementById('image_shower_hunter_defender').src = `./game-imgs/${selected_image}`
}

function get_random_image_hunter_attacker() {
	random_index = Math.floor(Math.random() * hunter.length);

	selected_image = hunter[random_index]

	document.getElementById('image_shower_hunter_attacker').src = `./game-imgs/${selected_image}`
}

function get_random_image_hunter_attacker2() {
	random_index = Math.floor(Math.random() * hunter.length);

	selected_image = hunter[random_index]

	document.getElementById('image_shower_hunter_attacker2').src = `./game-imgs/${selected_image}`
}

function get_random_image_academy_you() {
	random_index = Math.floor(Math.random() * academy.length);

	selected_image = academy[random_index]

	document.getElementById('image_shower_academy_you').src = `./game-imgs/${selected_image}`
}

function get_random_image_academy_defender() {
	random_index = Math.floor(Math.random() * academy.length);

	selected_image = academy[random_index]

	document.getElementById('image_shower_academy_defender').src = `./game-imgs/${selected_image}`
}

function get_random_image_academy_attacker() {
	random_index = Math.floor(Math.random() * academy.length);

	selected_image = academy[random_index]

	document.getElementById('image_shower_academy_attacker').src = `./game-imgs/${selected_image}`
}

function get_random_image_academy_attacker2() {
	random_index = Math.floor(Math.random() * academy.length);

	selected_image = academy[random_index]

	document.getElementById('image_shower_academy_attacker2').src = `./game-imgs/${selected_image}`
}


$(document).ready(function() {
  $(".tab-item").not(":first").hide();
  $(".tabs .tab").click(function() {
  	$(".tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
  	$(".tab-item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active"); 
}); 

$(document).on('click', 'a[href^="#rules"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  },750);
});
