import MoviesApiService from './fetch_API';
import changeMoviesArray from './page-render';
import { refs } from './refs';
import clearGalleryContainer from './clear-gallery';
import { onRenderPagination } from './pagination';
import { clearPaginationList } from './clear-pagination';

// ------- First page load -----------//
addEventListener('DOMContentLoaded', () => {
  loadTrandingPage();
});

let currentPageT;

const moviesApiService = new MoviesApiService();

export async function loadTrandingPage() {
  clearGalleryContainer();
  clearPaginationList();
  moviesApiService.tranding();

  const response = await moviesApiService.fetchMovies();

  refs.galleryContainer.setAttribute('data-set', 'tranding');

  const totalPages = response.total_pages;
  currentPageT = response.page;
  const currentPage = response.page;

  await changeMoviesArray(response);

  await onRenderPagination(currentPage, totalPages);
}

export { currentPageT };

export async function loadSelectedTrandingPage(page) {
  // console.log('page', page);
  moviesApiService.setPage(page);
  await loadTrandingPage();
}

refs.navHome.addEventListener('click', onClickHomePage);
refs.headerTitle.addEventListener('click', onClickHomePage);
refs.headerLogo.addEventListener('click', onClickHomePage);

async function onClickHomePage(e) {
  e.preventDefault();

  moviesApiService.resetPage();

  await loadHomePageHeader();

  await loadTrandingPage();
}

async function loadHomePageHeader() {
  location.reload();
  //
  // --- hide my library hedder --- //
  refs.libraryBtns.classList.add('is-hidden');
  refs.navLibrary.classList.remove('current');
  refs.header.classList.remove('header__my-library');

  // --- show home page hedder --- //
  refs.navHome.classList.add('current');
  refs.inputForm.classList.remove('is-hidden');
  refs.paginationList.classList.remove('is-hidden');
}
