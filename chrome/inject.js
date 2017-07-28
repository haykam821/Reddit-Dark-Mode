var all = document.getElementsByTagName("*");

for (i in all) {
  if (all[i].className) {
    all[i].className += ' res-nightmode';
  } else {
    all[i].className = 'res-nightmode';
  }
}
