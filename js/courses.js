$('.booking-form').hide();

$('.booking-start').on('click', function(){
   $(this).closest('.booking-card').find('.booking-form').animate({height: "toggle"});
});

$('.booking-cancel').on('click', function(){
   $(this).closest('.booking-form').animate({height: "toggle"});
});