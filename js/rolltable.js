$(document).ready(function() {
  $('.rollable-table tbody tr').click(function() {
    var roll = $(this).find('td:first-child').text();
    var result = $(this).find('td:last-child').text();
    alert('You rolled ' + roll + '. Result: ' + result);
  });
});
