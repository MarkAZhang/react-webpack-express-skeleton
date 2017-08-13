module.exports = {
  plugins: [
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')({
      browsers: ['last 2 Chrome versions'],
    }),
  ]
}