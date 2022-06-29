$(function(){
    var images = $('#images');

    function open(){
        images.fadeIn(3000, 'easeInQuad', function(){ setTimeout(close, 3000); });
    };
    function close(){
        images.fadeOut(1500, 'easeOutQuad', function(){ setTimeout(open, 150); });
    };

    open();
});
