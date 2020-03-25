export const clickButton = (bitcoin, treasure) => {
  console.log(bitcoin)
  return ({
    type: 'OPTIONS_UPDATE_VALUE',
    bitcoin,
    treasure
  })
}