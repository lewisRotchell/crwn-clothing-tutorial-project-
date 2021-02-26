import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  //(user is the return of slectUser which is the userReducer)
  (user) => user.currentUser
);
