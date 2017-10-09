import * as actionType from '../constants/actionType';

export const showAll = () => {
  return { type: actionType.SHOW_ALL }
}

export const showMemorized = () => {
  return { type: actionType.SHOW_MEMORIZED }
}

export const showPractice = () => {
  return { type: actionType.SHOW_PRACTICE }
}

export const toggleMemorized = (id) => {
  return {
    type: actionType.TOGGLE_MEMORIZED,
    id
  }
}