// please import

//  import { setStorage, getStorage, delFromStorage, clearStorage, getItemFromStorage } from "HERE";
//  import import { refs } from "../refs";

// entry params:

// section - refs.QUEUE or refs.WATCHED section to render. as refs const to avoid mistakes!
//

// filmInfo - object with film information needs to save for ex.:
// {
//   "id": 594767,
//   "original_title": "Shazam! Fury of the Gods",
//       OR "title": 'Shazam! Fury of the Gods',
//       MAYBE ????
//   "poster_path": "/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg",
//   "genre_ids": [28, 35, 14],
//   "release_date": "2023-03-15",
// }

import { refs } from '../refs';
import { Notify } from 'notiflix';

export const getStorage = section => {
  const dataArr = [];
  const data = JSON.parse(localStorage.getItem(section));
  if (!data) {
    // Notify.info(`You have NO films in ${section}`);
    return dataArr;
  }
  dataArr.push(...data);
  return dataArr; // return array of films info obj similar to entry arrays of obj
};

export const getItemFromStorage = (section, id) => {
  return getStorage(section).find(film => film.id === id); // return element or undefined if didnt find
};

export const setStorage = (section, filmInfo) => {
  const dataArr = getStorage(section);
  if (dataArr.find(film => film.id === filmInfo.id)) {
    Notify.info(`You have this film in ${section} already`);
    return; // if saved already
  }
  dataArr.push(filmInfo);
  Notify.info(`You got it`);
  localStorage.setItem(section, JSON.stringify(dataArr));
  // del from other section code here
  delFromStorage(
    section === refs.WATCHED ? refs.QUEUE : refs.WATCHED,
    filmInfo.id
  );
};

export const delFromStorage = (section, id) => {
  const dataArr = getStorage(section);
  if (!dataArr.find(film => film.id === id)) {
    return;
  }
  const filtered = dataArr.filter(film => film.id !== id);
  localStorage.setItem(section, JSON.stringify(filtered));
  Notify.info(`You delete it`);
};

export const clearStorage = section => {
  localStorage.removeItem(section);
};
