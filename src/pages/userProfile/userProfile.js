import userProfileTemplate from './userProfile.tmpl.hbs';
import './userProfile.style.scss';
import avatarPlaceholder from 'static/images/image-outline.svg';

const data = {
  email: {
    label: 'Почта',
    value: 'galina.hvan1011@gmail.com'
  },
  login: {
    label: 'Логин',
    value: 'ivanivanov'
  },
  'first_name': {
    label: 'Имя',
    value: 'Иван'
  },
  'second_name': {
    label: 'Фамилия',
    value: 'Иванов'
  },
  'display_name': {
    label: 'Имя в чате',
    value: 'Иван'
  },
  phone: {
    label: 'Телефон',
    value: '+79099673030'
  }
};

const VIEWS = {
  READ_ONLY: 'readonly',
  EDIT_USER_INFO: 'editUserInfo',
  EDIT_USER_PASSWORD: 'editUserPassword',
};

function listenAvatarUpload() {
  document.getElementsByClassName('avatar__file-upload')[0]
    .addEventListener('input', ({ target: input }) => {
      const reader = new FileReader();

      reader.onload = function (e) {
        const avatarImage = document.getElementsByClassName('avatar__image')[0];
        avatarImage.src = e.target.result;
        avatarImage.classList.remove('avatar__image-placeholder');
        document.getElementsByClassName('avatar__label')[0].classList.add('avatar__label_hidden');
      };

      reader.readAsDataURL(input.files[0]);
    });
}

function listenSubmitUserInfo() {
  document.getElementsByClassName('user-profile-form')[0]
    .addEventListener('submit', (e) => {
      e.preventDefault();
      switchViewTo(VIEWS.READ_ONLY);
    });
}

function listenSubmitPassword() {
}

function listenChangeUserInfoBtnClick() {
  document.getElementById('change-user-info-button')
    .addEventListener('click', () => {
      switchViewTo(VIEWS.EDIT_USER_INFO);
    });
}

function switchViewTo(viewName) {
  switch (viewName) {
    case VIEWS.READ_ONLY:
      Array.from(document.getElementsByClassName('user-info__input')).forEach(inputElement => {
        inputElement.readOnly = true;
      });
      document.getElementsByClassName('profile__actions-buttons')[0].classList.remove('profile__actions-buttons_hidden');
      document.getElementsByClassName('profile__submit-button-wrap')[0].classList.add('profile__submit-button-wrap_hidden');
      break;
    case VIEWS.EDIT_USER_INFO:
      Array.from(document.getElementsByClassName('user-info__input')).forEach(inputElement => {
        inputElement.readOnly = false;
      });
      document.getElementsByClassName('profile__actions-buttons')[0].classList.add('profile__actions-buttons_hidden');
      document.getElementsByClassName('profile__submit-button-wrap')[0].classList.remove('profile__submit-button-wrap_hidden');
      document.getElementsByClassName('avatar__label')[0].classList.remove('avatar__label_hidden');
      break;
    case VIEWS.EDIT_USER_PASSWORD:

      break;
  }
}

function renderUserProfilePage() {
  document.body.innerHTML = userProfileTemplate({
    avatar: {
      imageUrl: '',
      placeholder: avatarPlaceholder,
    },
    userName: 'Test user',
    userInfo: Object.keys(data).map(key => ({ ...data[key], name: key })),
    saveUserInfo: {
      title: 'Сохранить'
    }
  });

  listenAvatarUpload();
  listenChangeUserInfoBtnClick();
  listenSubmitUserInfo();
  listenSubmitPassword();
}


export default renderUserProfilePage;