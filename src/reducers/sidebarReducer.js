import React from "react";
export const sidebarReducer = (state = {activeTab: "Notes"}, action) => {
  if (action.type == "CHANGE_ACTIVE")
    return Object.assign({}, state, {activeTab: action.id});
  else return state;
};
