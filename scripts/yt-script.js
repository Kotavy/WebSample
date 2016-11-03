$(document).ready(function() {

  $('.theme.night').click(function() {
    $('p').css('background-color', 'black');
    $('p').css('color', 'white');
    $('body').css('background', 'linear-gradient(to top, #000000, #773344)')
    $('#nav').css('background', 'linear-gradient(to bottom, #773344, #000000')
    $('li').css('text-shadow', 'BBBBBB')
    $('h1').css('text-shadow', 'BBBBBB')
    $('h2, h3').css('color', 'darkgrey')
    $('.nobg').css('background-color', 'rgba(0, 0, 0, 0)')
    $('#footlink:link, #footlink:visited').css('color', 'white')
    $('a:link, a:visited').css('color', 'darkgrey')
    $('button').css('color', 'darkgrey')

  });

  $('.theme.day').click(function() {
    $('p').css('background-color', 'white');
    $('p').css('color', 'black');
    $('body').css('background', 'linear-gradient(to top, #447788, #88ccbb)')
    $('#nav').css('background', 'linear-gradient(to bottom, #88ccbb, #447788)')
    $('li').css('text-shadow', '444444')
    $('h1').css('text-shadow', '444444')
    $('h2, h3').css('color', 'lightgrey')
    $('.nobg').css('background-color', 'rgba(0, 0, 0, 0)')
    $('#footlink:link, #footlink:visited').css('color', 'black')
    $('a:link, a:visited').css('color', '#447788')
    $('button').css('color', '#447788')

  });

  $('img').hide().delay().fadeIn(700);

  $('#music').hover(function(){
      $(this).stop().animate({'opacity': '0.5'});
      $('#go').text('Check out my music! New uploads coming soon!');
  },function(){
      $(this).stop().animate({'opacity': '1'});
      $('#go').text("Youth Theory is a concept I've been building upon since I first began dabbling with computer music software back in my middle school years. It wasn't until I graduated high school and went to my first music festival that I decided to really invest towards learning how to make my own music. At present, it is whatever I can craft into presentable noises that are sometimes pleasant to listen to. The driving force behind Youth Theory is all the memories I have from growing up to a soundtrack of these crazy new electronic sounds--sounds that have come to be a defining feature of my generation. I reflect on how this music has shaped my life while I continue to learn how to translate these ideas into audible ambrosia.");
  });

})
