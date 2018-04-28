export function checkLogined() {
  if (localStorage.getItem('jwt')) {
    return true;
  } else {
    return false;
  }
}
