import { loadSelectedTrandingPage } from '../js-partials/tranding-gallery';
// import { loadSelectedSearchPage } from '../search';

import { loadSelectedSearchPage } from '../js-partials/search';
import { currentPage, galleryContainer } from '../utils/references';
import { onRenderNextPage } from '../markup/render-watched'
import { onRenderNextPageQueue } from '../markup/render-queue';

// let page;
// let nextPage;

// export async function onArrowBtnClick(e) {
//     e.preventDefault();
//     if (e.target.nodeName !== 'BUTTON') {
//         return;
//     }

//     page = document.querySelector('.pagination__active');
//     console.dir(e.target.getAttribute('data-set'));

//     if (e.target.getAttribute('data-set') === "decrement") {

//         nextPage = Number(page.textContent) - 1;
//     } else {
//         nextPage = Number(page.textContent) + 1;
//     }


//     if (galleryContainer.getAttribute('data-set') === 'tranding') {

//         console.log(page);
//         await loadSelectedTrandingPage(nextPage);
//     }

//     if (galleryContainer.getAttribute('data-set') === 'search') {

//         console.log(page);
//         await loadSelectedSearchPage(nextPage);
//     }

//     if (galleryContainer.getAttribute('data-set') === 'watched') {

//         console.log(page);
//         await onRenderNextPage(nextPage);
//     }
//     if (galleryContainer.getAttribute('data-set') === 'queue') {

//         console.log(page);
//         await onRenderNextPageQueue(nextPage);
//     }

// }
let page = currentPage;

 export async function onLeftButtonClick(e) {
     e.preventDefault();

   page = page - 1;
     console.log(page);
      if (galleryContainer.getAttribute('data-set') === 'tranding') {
 
        console.log(page);
        await loadSelectedTrandingPage(page);
     }
         if (galleryContainer.getAttribute('data-set') === 'search') {

        console.log(page);
        await loadSelectedSearchPage(page);
    }

    if (galleryContainer.getAttribute('data-set') === 'watched') {

        console.log(page);
        await onRenderNextPage(page);
    }
    if (galleryContainer.getAttribute('data-set') === 'queue') {

        console.log(page);
        await onRenderNextPageQueue(page);
    }

    //  await loadSelectedTrandingPage(page);
    //  await loadSelectedSearchPage(page);
    //  await onRenderNextPage(page);
     //   await onRenderNextPageQueue(page);
}
  
  export async function onRightButtonClick(e) {
    e.preventDefault();
    page = page + 1;
    console.log(page);
       if (galleryContainer.getAttribute('data-set') === 'tranding') {

        console.log(page);
        await loadSelectedTrandingPage(page);
     }
         if (galleryContainer.getAttribute('data-set') === 'search') {

        console.log(page);
        await loadSelectedSearchPage(page);
    }

    if (galleryContainer.getAttribute('data-set') === 'watched') {

        console.log(page);
        await onRenderNextPage(page);
    }
    if (galleryContainer.getAttribute('data-set') === 'queue') {

        console.log(page);
        await onRenderNextPageQueue(page);
    }
  }
