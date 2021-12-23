import Handlebars from 'handlebars';
import renderLink from './components/link';

Handlebars.registerPartial('link', renderLink());
Handlebars.registerPartial('mock', renderLink());