document.addEventListener('DOMContentLoaded', () => {
  const markdownContainer = document.querySelectorAll('.markdown-container')[0];
  const navItems = document.querySelectorAll('.nav-item');

  const updateContent = (url) => {
    fetch(url)
      .then(response => response.text())
      .then(html => {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = html;
          const newContent = tempDiv.querySelectorAll('.markdown-container')[0];
          const sidebar = document.querySelector('.navigation');

          if (newContent) {
            markdownContainer.innerHTML = newContent.innerHTML;
            dwdTabs.init();
            window.history.pushState({html: newContent.innerHTML, pageTitle: document.title, sidebar: sidebar.innerHTML}, '', url);
            window.scrollTo(0, 0);
          }
      })
      .catch(error => console.error('Error fetching content:', error));
  };

  navItems.forEach(link => {
    if (link.hasAttribute('href') && link.getAttribute('href').startsWith('/')) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        if (!link.classList.contains('current')) {
          const href = this.getAttribute('href');
          updateContent(href);

          document.querySelector('.nav-item.current').classList.remove('current');
          link.classList.add('current');
        }
      });
    }
  });

  window.addEventListener('popstate', function(event) {
    if (event.state) {
      markdownContainer.innerHTML = event.state.html;
      dwdTabs.init();
      document.title = event.state.pageTitle;
      document.querySelector('.navigation').innerHTML = event.state.sidebar;

      window.scrollTo(0, 0);
    }
  });
});

const sidebarActive = {
  init: function () {
    const elements = document.querySelectorAll('[data-page]');

    for (let element of elements) {
      const activePage = element.getAttribute('data-page');
      let activeNode = element.querySelector(`[href="${activePage}"]`);

      if (activeNode) {
        activeNode.classList.add('current');
        const currentEl = activeNode;

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