const dwdTabs = {
  init: function () {
    const tabslist = document.querySelectorAll('[role="tablist"]');

    tabslist.forEach(tablist => {
      let tabs = tablist.querySelectorAll('[role="tab"]');
      let tabPanels = [...tablist.nextElementSibling.children];

      tabs.forEach((tab, i) => {
        tab.addEventListener('click', function(e) {
          e.preventDefault();
          const currentTab = tablist.querySelector('[aria-selected]');

          if (e.currentTarget !== currentTab) {
            tabs.forEach(t => t.removeAttribute('aria-selected'));
            tab.setAttribute('aria-selected', true);

            tabPanels.forEach(p => p.setAttribute('hidden', true));
            tabPanels[i].removeAttribute('hidden');
          }
        });
      });
    });
  }
};

(function () {
  dwdTabs.init();
})();