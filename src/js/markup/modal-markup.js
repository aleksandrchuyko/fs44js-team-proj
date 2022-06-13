import { getData } from '../api-fetch/get-film-api';
import { modalFilmContainer} from '../utils/references';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import {closeBacdropClick} from '../modal'

export { modalMarkup };

function modalMarkup(muvieId) {
  getData(muvieId).then(data => {
    //Тест запису в базу проглянутих
    // writeUserDataQueue('116126857176505822881', muvieId, data);
    //...
    const {
      poster_path,
      title,
      overview,
      vote_average,
      vote_count,
      popularity,
      original_title,
    } = data;
    const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
    const genres = data.genres.map(genre => genre.name).join(', ');
    let markup = `<div class="backdrop">
        <div class="modal">
            <button type="button" class="close__modal">
            </button>
            <div class="modal__wrapper">
                <div class="modal__poster">
                    <img class="modal__image" src="${poster}" alt="${title}">
                </div>
                <div class="modal__about">
                    <h2 class="modal__title">${title}</h2>
                    <table class="modal__table">
                        <tbody>
                            <tr>
                            <td class="modal__key">Vote / Votes</td>
                            <td class="modal__value"><span class="vote">${vote_average}</span> / ${vote_count}</td>
                            </tr>
                            <tr>
                            <td class="modal__key">Popularity</td>
                            <td class="modal__value">${popularity}</td>
                            </tr>
                            <tr>
                            <td class="modal__key">Original Title</td>
                            <td class="modal__value">${original_title}</td>
                            </tr>
                            <tr>
                            <td class="modal__key">Genre</td>
                            <td class="modal__value">${genres}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 class="text__title">About</h3>
                    <p class="modal__text">${overview}</p>
                    <div class="modal__buttons">
                        <button class="modal__button watched__btn" type="button">add to watched</button>
                        <button class="modal__button queue__btn" type="button">add to queue</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    modalFilmContainer.insertAdjacentHTML('beforeend', markup);
    Loading.remove();
    const closeModalBtn = document.querySelector('.close__modal');
    const backdrop = document.querySelector('.backdrop');
    
    closeBacdropClick(closeModalBtn, backdrop);
    // localStorageMovie();
  });
}