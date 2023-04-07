import {
  CONSULTEASE_PROFILE_SEARCH,
  CONSULTEASE_PROFILE_SEARCH_RESULTS,
  CONSULTEASE_PROFILE_SEARCH_RESULTS_RESET,
} from "./actionTypes"

export const consulteaseProfileSearch = profileSearch => ({
  type: CONSULTEASE_PROFILE_SEARCH,
  payload: profileSearch,
})

export const consulteaseProfileSearchResults = profileResults => ({
  type: CONSULTEASE_PROFILE_SEARCH_RESULTS,
  payload: profileResults,
})

export const consulteaseProfileSearchResultsReset = profileResults => ({
  type: CONSULTEASE_PROFILE_SEARCH_RESULTS_RESET,
  // payload: profileResults,
})
