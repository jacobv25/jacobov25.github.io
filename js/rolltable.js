$(document).ready(function() {
  $('#roll-button').click(function() {
    var roll = $('.rollable-table tbody tr.active').find('td:first-child').text();
    var result = $('.rollable-table tbody tr.active').find('td:last-child').text();
    alert('You rolled ' + roll + '. Result: ' + result);
  });
  
  $('.rollable-table tbody tr').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
  });
});
