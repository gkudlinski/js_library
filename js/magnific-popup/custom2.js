$(document).ready(function () {
    $('#some-button').magnificPopup({
        items: [
            {
                src: 'http://localhost/js_library/owl-youtube.html',
                type: 'iframe' // this overrides default type
            },
            {
                src: 'http://localhost/js_library/owl-slider.html',
                type: 'iframe' // this overrides default type
            }

        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is default type
    });


});