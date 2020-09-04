var front = $('.front');
var inner = $('.inner');
var pg1 = $('#pg1');
var pg2 = $('#pg2');
var next = $('#next');
var prev = $('#prev');



front.on('mouseover',function(){
    inner.addClass('rotateAnimation');
})


next.on('click',function(){
    pg1.toggleClass('hide');
    pg2.toggleClass('hide');
    next.toggleClass('hide');
    prev.toggleClass('hide');
})
prev.on('click',function(){
    pg1.toggleClass('hide');
    pg2.toggleClass('hide');
    next.toggleClass('hide');
    prev.toggleClass('hide');
})