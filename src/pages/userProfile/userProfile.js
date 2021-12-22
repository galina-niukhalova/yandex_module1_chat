import userProfileTemplate from './userProfile.tmpl.hbs';
import './userProfile.style.scss';

function renderUserProfilePage() {
  return userProfileTemplate();
}

export default renderUserProfilePage;