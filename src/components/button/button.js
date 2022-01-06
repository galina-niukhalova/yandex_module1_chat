import buttonTemplate from './button.hbs';
import Handlebars from "handlebars/dist/handlebars.runtime";
import './button.scss';

Handlebars.registerHelper("button", function (options) {
  const { hash } = options || {};
  if (!hash) return;

  const { type, className, title } = hash;
  const html = buttonTemplate({
    type: Handlebars.escapeExpression(type || 'button'),
    title: Handlebars.escapeExpression(title),
    className: Handlebars.escapeExpression(className)
  });

  return new Handlebars.SafeString(html);
});