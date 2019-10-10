document.addEventListener('DOMContentLoaded', function() {
  $('#contactForm').on('submit',function(e) {
    e.preventDefault();

    var form = $(this);
    var validationErrors = [];

    var appID = '';

    if (window.location.search.match(/app=beelingvo/) !== null) {
      appID = 'beelingvo';
    }

    var baseURL = '';

    var emailRef   = '';
    var commentRef = '';
    var submitRef  = '';

    switch(appID) {
      case "beelingvo":
        baseURL = 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSdua7_NyKmP3Z8p3cq7EI-_zaavj-Het3L1UimBmt2rHlQUTg/formResponse?';
        emailRef   = 'entry.138318346=';
        commentRef = 'entry.640794235=';
        submitRef  = 'submit=2967188586918853411';
    }

    var emailValue   = encodeURIComponent($('#email').val());
    var commentValue = encodeURIComponent($('#comment').val());

    var params = [
      emailRef + emailValue,
      commentRef + commentValue,
      submitRef
    ].join('&');

    var submitURL = baseURL + params;

    // $(this)[0].action = submitURL;

    $('#email').siblings('.t-input-error').hide();

    if (emailValue.length == 0) {
      validationErrors.push('email');
      $('#email').siblings('.text-danger').show().text('cannot be empty');
    }

    if (validationErrors.length == 0) {
      $.ajax({
        url: submitURL,
        type: 'POST',
        crossDomain: true,
        success: function() {
        },
        error: function() {
          $('#submit').text('Thank you!');
          $('#submit').attr('disabled', 'disabled');
          form.find("input[type=email], textarea").val("");
        }
      });
    }
  });
});