$(document).ready(function () {
    $('.test-popup-link').magnificPopup({
        type: 'image'
    });
    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image'
        // other options
    });
    $('#some-button').magnificPopup({
        items: [
            {
                src: 'http://cdn.grumpycats.com/wp-content/uploads/2016/02/12654647_974282002607537_7798179861389974677_n-758x758.jpg'
            },
            {
                src: 'http://vimeo.com/123123',
                type: 'iframe' // this overrides default type
            },
            {
                src: $('<div class="white-popup">Popup from HTML string</div>'), // Dynamically created element
                type: 'inline'
            },
            {
                src: '<div class="white-popup">Popup from HTML string</div>',
                type: 'inline'
            },
            {
                src: '#my-popup', // CSS selector of an element on page that should be used as a popup
                type: 'inline'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is default type
    });
    $('.image-link').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below

        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function(openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }

    });
});