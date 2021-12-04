export const HomeLogic = () => {
  function foo() {
    return 0
  }

  return { foo }
}

export const  moreFunction = () => {
  document.getElementById('mainpage').style.display='none';
  document.getElementById('moreoptions').style.display='block';
}
export const  backoptions = () => {
  document.getElementById('moreoptions').style.display='none';
  document.getElementById('mainpage').style.display='block';
}