$(function() {
  console.log("hello world");

  // Exercise 2
  // $('#secretBox').css('background-color', 'white');
  // $('#secretBox').prepend('<h1>secret box!</h1>');
  // $('#row1 div').addClass('boxType3');
  // $('#row4 div:last-child').css('display', 'none');
  // $('.boxType1').css('background', 'white');
  // $('#row2 div:first-child, #row2 div:nth-child(2)').removeClass();
  // $('#container div').not('.row').not('#secretBox').css('width', '2px');

  // Exercise 3
  var $divContainer = $('#container');

  function puppyImg(e) {
    var $clickedItem = $(e.target);

    if ($clickedItem.is('a')) {
      return;
    } else if ($clickedItem.is('img')) {
      $clickedItem.remove();
    } else {
      $clickedItem.prepend('<img class="dog" src="https://www.candis.co.uk/wp-content/uploads/2015/03/awesomelycute-com-3977.jpg" width="100%"/>');
    }
  }

  function backgroundChanger(e) {
    var $clickedItem = $(e.target);
    var $container = $(this);
    // e.stopPropagation();

    if ($clickedItem.is($container)) {
      $container.css('background-color', 'limeGreen');
    } else {
      $container.css('background-color', 'black');
      $clickedItem.css('background-color', 'white');
    }
  }

  function alertOnClick(e) {
    e.preventDefault();
    alert('You can\'t leave the page!');
  }

  $('#container').on('click', function(e) {
    console.log('X:', e.pageX, 'Y:', e.pageY);
  });
  $('.boxType1').append('<a href="http://www.galvanize.com/">Galvanize</a>');
  $('.boxType1 a').on('click', alertOnClick);
  $('.box').on('click', puppyImg);
  $divContainer.on('click', backgroundChanger);
});

