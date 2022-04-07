/* 
  Explore configuration options docs https://tailwindcss.com/docs/configuration#configuration-options
  Or check the default configuration https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
*/

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter'
      },
      fontColor: {
        white: '#ffffff'
      },
      colors: {
        grey: '#1a1a1f',
        light: '#8E8E93',
        white: '#ffffff'
      }
    }
  },
  plugins: []
}
