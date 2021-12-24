import inputTemplate from './input.hbs';
import Handlebars from "handlebars/dist/handlebars.runtime";
import './input.scss';

Handlebars.registerHelper("input", function (options) {
  const { hash } = options || {};
  if (!hash) return;

  const { type, name, className, label } = hash;
  const html = inputTemplate({
    type: Handlebars.escapeExpression(type),
    name: Handlebars.escapeExpression(name),
    className: Handlebars.escapeExpression(className),
    label: Handlebars.escapeExpression(label),
  });

  return new Handlebars.SafeString(html);
});