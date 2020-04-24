$(document).ready(function(e){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $( function(e) {
        $( "#dialog" ).dialog({
            autoOpen: false,
            show: {
                effect: "blind",
                duration: 1000
            },
            hide: {
                effect: "explode",
                duration: 1000
            }
        });

        $( "#opener" ).on( "click", function(e) {
            $( "#dialog" ).dialog( "open" );
        });
        $( "#dialog" ).dialog({
            modal: true,
            open: function () {
                $(".ui-widget-overlay").click(function () {
                    $("#dialog").dialog("close");
                });
            }
        })
    } );
});

