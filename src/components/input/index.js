import inputTemplate from './input.hbs';
import Handlebars from "handlebars/dist/handlebars.runtime";
import './input.scss';

Handlebars.registerHelper("input", function (options) {
  const { hash } = options || {};
  if (!hash) return;

  const { id, className, type, name, label, errorId } = hash;

  const html = inputTemplate({
    containerMargin: Handlebars.escapeExpression(errorId ? 'mb16' : 'mb32'),
    id: Handlebars.escapeExpression(id),
    className: Handlebars.escapeExpression(className),
    type: Handlebars.escapeExpression(type),
    name: Handlebars.escapeExpression(name),
    label: Handlebars.escapeExpression(label),
    errorId: Handlebars.escapeExpression(errorId),
  });

  return new Handlebars.SafeString(html);
});