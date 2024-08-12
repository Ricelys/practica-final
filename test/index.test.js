// __tests__/index.test.js
const getHtmlContent = require('../index');

test('debe contener el texto "Hola Mundo"', () => {
  const htmlContent = getHtmlContent();
  expect(htmlContent).toContain('<h1>Hola Mundo</h1>');
});

test('debe contener el título "Hola Mundo"', () => {
  const htmlContent = getHtmlContent();
  expect(htmlContent).toContain('<title>Hola Mundo</title>');
});
