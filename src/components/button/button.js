import buttonTemplate from './button.hbs';
import Handlebars from 'handlebars/dist/handlebars.runtime';
import './button.scss';

const BUTTON_VARIANTS = {
  CLASSIC: 'classic',
  LINK: 'link'
};

Handlebars.registerHelper('button', function (options) {
  const { hash } = options || {};
  if (!hash) return;

  const {
    type,
    className,
    title,
    id,
    variant = BUTTON_VARIANTS.CLASSIC
  } = hash;

  function getButtonClassName() {
    let btnClassName = [className];

    switch (variant) {
      case BUTTON_VARIANTS.LINK:
        btnClassName.push('button_link');
        break;
      default: btnClassName.push('button');
        break;
    }

    return btnClassName.join(' ');
  }

  const html = buttonTemplate({
    type: Handlebars.escapeExpression(type || 'button'),
    title: Handlebars.escapeExpression(title),
    className: getButtonClassName(),
    id: Handlebars.escapeExpression(id),
  });

  return new Handlebars.SafeString(html);
});