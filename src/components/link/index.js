import linkTemplate from './link.tmpl.hbs';
import Handlebars from "handlebars/dist/handlebars.runtime";
import './link.style.scss';

Handlebars.registerHelper("link", function (options) {
  const { hash } = options || {};
  if (!hash) return;

  const { url, title, className } = hash;
  const linkHTML = linkTemplate({
    url: Handlebars.escapeExpression(url),
    title: Handlebars.escapeExpression(title),
    className: Handlebars.escapeExpression(className)
  });

  return new Handlebars.SafeString(linkHTML);
});