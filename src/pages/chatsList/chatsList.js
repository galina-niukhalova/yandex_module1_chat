import chatsListTemplate from './chatsList.tmpl.hbs';
import './chatsList.style.scss';

function renderChatsList() {
  return chatsListTemplate();
}

export default renderChatsList;