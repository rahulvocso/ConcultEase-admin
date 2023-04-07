// @flow
import {
  CONSULTEASE_PROFILE_SEARCH,
  CONSULTEASE_PROFILE_SEARCH_RESULTS,
  CONSULTEASE_PROFILE_SEARCH_RESULTS_RESET,
} from "./actionTypes"

import {
  layoutTypes,
  layoutWidth,
  leftSideBarTheme,
  leftSideBarType,
  topbarTheme,
} from "constants/layout"

const INIT_STATE = {
  consulteaseProfileSearch: "",
  consulteaseProfileSearchResults: {},
}

const ConsultEase = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CONSULTEASE_PROFILE_SEARCH:
      return {
        ...state,
        consulteaseProfileSearch: action.payload,
      }

    case CONSULTEASE_PROFILE_SEARCH_RESULTS:
      return {
        ...state,
        consulteaseProfileSearchResults: action.payload,
        // state.consulteaseProfileSearchResults.concat(action.payload),
        // Object.assign(
        //   {},
        //   state.consulteaseProfileSearchResults,
        //   action.payload
        // ),
      }

    case CONSULTEASE_PROFILE_SEARCH_RESULTS_RESET:
      return {
        consulteaseProfileSearch: "",
        consulteaseProfileSearchResults: [],
      }

    default:
      return state
  }
}

export default ConsultEase
