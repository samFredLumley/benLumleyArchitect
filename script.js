$(document).ready(function(){
  $('.page-content').fadeIn(1200);
  $('.footer').fadeIn(1500);
});

$(document).ready(function(){
    $('#characterLeft').text('500 characters left');
    $('#message').keydown(function () {
        var max = 500;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('You have reached the limit');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');
        }
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' characters left');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');
        }
    });
});
