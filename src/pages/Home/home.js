export const HomeLogic = () => {
  function foo () {
    return 0
  }

  return { foo }
}

export const moreFunction = () => {
  document.getElementById('moreoptions').classList.remove('fade-out')
  document.getElementById('mainpage').classList.add('fade-out')
  setTimeout(() => {
    document.getElementById('mainpage').style.display = 'none'
    document.getElementById('moreoptions').style.display = 'block'
  }, 1000)
}
export const backoptions = () => {
  document.getElementById('moreoptions').classList.add('fade-out')
  document.getElementById('mainpage').classList.remove('fade-out')
  setTimeout(() => {
    document.getElementById('moreoptions').style.display = 'none'
    document.getElementById('mainpage').style.display = 'block'
  }, 1000)
}
