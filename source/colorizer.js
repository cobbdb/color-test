/**
 * Simple module that has some DOM interactions and
 * vendor method calls.
 */
function Colorizer(_, $) {
    return {
        /**
         * Convert a color value from RBG format to hex.
         * Ex) rgb(0,0,0) -> #000000
         */
        rgb2hex: function (rgb) {
            var dec = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1);
            var hex = '#';
            _(dec).each(function (val) {
                hex += ('0' + parseInt(val, 10).toString(16)).slice(-2);
            });
            return hex;
        },
        /**
         * Change the backgrount color of a page element.
         */
        color: function (id, color) {
            $(id).css('background-color', color);
        }
    };
}
