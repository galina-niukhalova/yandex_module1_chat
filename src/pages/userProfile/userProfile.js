import userProfileTemplate from './userProfile.tmpl.hbs';
import './userProfile.style.scss';

function listenAvatarUpload() {
  document.getElementsByClassName('profile__avatar-file-upload')[0]
    .addEventListener('input', ({ target: input }) => {
      const reader = new FileReader();

      reader.onload = function (e) {
        document.getElementsByClassName('profile__avatar-image')[0].src = e.target.result;
      };

      reader.readAsDataURL(input.files[0]);

      if (input.files[0]) {
        document.getElementsByClassName('profile__avatar-label')[0].classList.add('profile__avatar-label_hidden');
        document.getElementsByClassName('profile__avatar-image')[0].classList.remove('profile__avatar-image_hidden');
      }
    });
}


function renderUserProfilePage() {
  document.body.innerHTML = userProfileTemplate({
    avatar: {
      imageUrl: ""
    },
    userName: "Test user",
  });

  listenAvatarUpload();
}


export default renderUserProfilePage;