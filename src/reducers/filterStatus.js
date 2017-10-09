import { SHOW_ALL, SHOW_MEMORIZED, SHOW_PRACTICE } from '../constants/actionType';

const filterStatus = (filterStatus = SHOW_ALL, action) => {
  switch (action.type) {
    case SHOW_MEMORIZED:
      return SHOW_MEMORIZED;
    case SHOW_PRACTICE:
      return SHOW_PRACTICE;
    default:
      return SHOW_ALL;
  }
}

export default filterStatus;