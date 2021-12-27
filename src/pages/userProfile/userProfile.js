import userProfileTemplate from './userProfile.tmpl.hbs';
import './userProfile.style.scss';

function renderUserProfilePage() {
  document.body.innerHTML = userProfileTemplate();
}

export default renderUserProfilePage;