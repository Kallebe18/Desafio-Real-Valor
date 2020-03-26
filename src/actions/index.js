export const clickButton = (bitcoin, treasure) => {
  return ({
    type: 'OPTIONS_UPDATE_VALUE',
    bitcoin,
    treasure
  })
}

export const changeLoading = (loadingState) => {
  return ({
    type: 'OPTIONS_LOADING_STATE',
    loadingState,
  })
}