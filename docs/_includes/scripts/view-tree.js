const viewTree = {
  init: function () {
    const elements = document.getElementsByClassName('current');
    const scrollbar = document.getElementsByClassName('navigation');

    if (elements.length > 0  && scrollbar.length > 0 ) {
      scrollbar[0].scrollTop = elements[0].offsetTop - (scrollbar[0].offsetHeight / 2) + (elements[0].offsetHeight / 2);
    }
  }
};

(function () {
  viewTree.init();
})();