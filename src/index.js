//Здесь определение всех глобал переменніх проекта
//Константі, ключи
const HOME_PAGE = 'Home page',
  MYLIBRARY_PAGE = 'My library page';
//Изменяеміе
const global = {
  currentUser: '',
  userId: '116126857176505822881',
  currentPage: HOME_PAGE,
  currentGalleryPage: 1,
  totalGalleryPages: 0,
  watchedCache: [],
  queueCache: [],
};

//Віше определение всех глобал переменніх проекта

import './js/service/init-firebase';

// import './js/goToMyLibrary';
// import './js/pagination';
import './js/header-library';
import './js/js-partials/modal_tm';

import './js/search';
import './js/My-library-btn';
// import './js/pagination-arrow-click';
import './js/render-library-btns';

// NEW progect
import './js/service/handlers';

// import './js/js-partials/pagination-btn-click';
