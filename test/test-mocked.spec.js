/**
 * Test the Colorizer module by mocking all jQuery
 * and DOM interactions. This is just to prove that
 * you don't always need a template.
 */
describe('Colorizer', function () {
    describe('rgb2hex', function () {
        it('converts colors from rgb to hex', function () {
            var crayon = Colorizer(_);
            var hex = crayon.rgb2hex('rgb(250,250,250)');
            expect(hex).toEqual('#fafafa');
        });
    });

    describe('color', function () {
        // Create some test data.
        var id, hex;
        beforeEach(function () {
            id = 'mockID';
            hex = '#839043';
        });
        
        it('changes css background-color rule', function () {
            var cssSpy = jasmine.createSpy('$.css');
            var arg;
            var jqMock = function (id) {
                arg = id;
                return {
                    css: cssSpy
                };
            };
            
            // Set the new color.
            var crayon = Colorizer(_, jqMock);
            crayon.color(id, hex);
            
            // Check that the div was colored.
            expect(arg).toEqual(id);
            expect(cssSpy).toHaveBeenCalledWith('background-color', hex);
        });
    });
});
