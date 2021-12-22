import './base.scss';
import './components';
import renderLoginPage from './pages/login';
import renderSignupPage from './pages/signup';
import renderChatsListPage from './pages/chatsList';
import renderChatPage from './pages/chat';
import renderUserProfilePage from './pages/userProfile';
import renderNotFoundPage from './pages/notFound';
import renderErrorPage from './pages/error';

let html;
switch (window.location.pathname) {
  case '/login':
    html = renderLoginPage();
    break;

  case '/signup':
    html = renderSignupPage();
    break;

  case '/chats':
    html = renderChatsListPage();
    break;

  case '/chat':
    html = renderChatPage();
    break;

  case '/profile':
    html = renderUserProfilePage();
    break;

  case '/error':
    html = renderErrorPage();
    break;

  default: {
    html = renderNotFoundPage();
  }
}

document.body.innerHTML = html;