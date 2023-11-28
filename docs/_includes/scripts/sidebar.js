const sidebarActive = {
  init: function () {
    const elements = document.querySelectorAll('[data-page]');

    for (let element of elements) {
      const activePage = element.getAttribute('data-page');
      let activeNode = element.querySelector(`[href="${activePage}"]`);

      if (activeNode) {
        activeNode.classList.add('current');
        currentEl = activeNode;

        while (activeNode && !activeNode.parentElement.hasAttribute('data-page')) {
          activeNode = activeNode.parentElement;

          if (activeNode.classList.contains('nav-item-items')) {
            const previousEl = activeNode.previousElementSibling;
            activeNode.classList.add('active');

            if (previousEl) {
              previousEl.classList.add('active');
            }
          }

          if (activeNode.classList.contains('nav-item-sub-container')) {
            const nextEl = activeNode.nextElementSibling;
            activeNode.classList.add('active');

            if (nextEl) {
              nextEl.classList.add('active');
            }
          }

          if (activeNode == null) {
            return false;
          }
        }

        element.scrollTop = currentEl.offsetTop - ((element.offsetHeight + currentEl.offsetHeight) / 2);
      }
    }
  }
};

(function () {
  sidebarActive.init();
})();