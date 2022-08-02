import * as actiontypes from "./actionsTypes";

export function changeCategory(category) {
  return { type: actiontypes.CHANGE_CATEGORY, payload: category };
}
