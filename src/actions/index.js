export const clickButton = (bitcoin, treasure) => {
  return ({
    type: 'OPTIONS_UPDATE_VALUE',
    bitcoin,
    treasure
  })
}