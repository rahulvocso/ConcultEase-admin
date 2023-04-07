// @flow
import { all, call, fork, takeEvery, put } from "redux-saga/effects"

import { CONSULTEASE_PROFILE_SEARCH } from "./actionTypes"

import { consulteaseProfileSearch } from "./actions"

/**
 * Changes the layout type
 * @param {*} param0
 */

function* profileSearch({ payload: layout }) {
  try {
    if (layout === "horizontal") {
      yield put(changeTopbarThemeAction("dark"))
      document.body.removeAttribute("data-sidebar")
      document.body.removeAttribute("data-sidebar-size")
    } else {
      yield put(changeTopbarThemeAction("light"))
    }
    yield call(changeBodyAttribute, "data-layout", layout)
  } catch (error) {}
}

/**
 * Watchers
 */
export function* watchConsultEaseProfileSearch() {
  yield takeEvery(CONSULTEASE_PROFILE_SEARCH, profileSearch)
}

function* ConsultEaseSaga() {
  yield all([fork(watchConsultEaseProfileSearch)])
}

export default ConsultEaseSaga
