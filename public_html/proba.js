$(function () {
    $('#mybtn').click(function () {
        $('div')
                .slideToggle()
                .html('I am here')
                .css('background', 'yellow');

    });
});
/*$(function(){
 console.log('ready');
 });*/
// Custom effects with .animate()
$(function () {
    $("div").animate(
            {
                left: "+=50",
                opacity: 0.25
            },
            // Duration
            300,
            // Callback to invoke when the animation is finished
                    function () {
                        console.log("done!");
                    }
            );
        });