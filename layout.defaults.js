/**
 * Portal Site Layout Configurations
 * v002
 * Master Theming Variables
 * - primaryAccent: HEX value, default: '#FFB100'
 * - secondaryAccent: HEX value, default: '#FBD897
 * - complimentaryAccent: HEX value, default: '#E3E5DC'
 * - fontStack: string, default: 'Nanum Gothic, -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol'
 * - monospaceFontStack: string, default: 'Consolas,Liberation Mono,Courier,monospace'
 * - googleFontsToLoad: Array<String>, default: [ 'Nanum Gothic' ]
 * 
 * Available Components & Configurations:
 * 
 * 
 * - <TitleBar />
 *    aspectRatio: height ratio to width, default: 0.5 (2:1)
 *    content: Array<CarouselItem>, default: []
 *    transitionType: 0 is fade, 1 is slide, default: 0
 *    themeColour: boolean
 * - <Carousel />
 * - <GameGrid />
 * - < />
 */
const config = {
  primaryAccent: '#FFB100',
  secondaryAccent: '#FBD897',
  complimentaryAccent: '#E3E5DC',
  fontStack: 'Nanum Gothic, -apple-system,BlinkMacSystemFont,Segoe UI,Microsoft YaHei,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
  monospaceFontStack: 'Consolas,Liberation Mono,Courier,monospace',
  googleFontsToLoad: [ 'Nanum Gothic', 'Montserrat' ],

  // Index
};

module.exports = config;