const globalTab = {
  init: function () {
    const globalTabEl = document.getElementById('global-tab');
    if (!globalTabEl) return;

    this.tabParam = new URLSearchParams(window.location.search).get('tab');
    this.tabsEls = globalTabEl.querySelectorAll('[role="tab"]');
    this.markdownContainer = document.querySelector('.markdown-container');
    this.navigation = document.querySelector('.navigation');
    this.toc = document.querySelector('.dwd-toc');
    this.tabPanels = document.querySelectorAll('[data-panel^="gTab-"]');

    let initialTabLabel = null;

    this.tabsEls.forEach(tabEl => {
      const tabLabel = this.extractLabelFromHref(tabEl.getAttribute('href'));
      const isSelected = tabEl.getAttribute('aria-selected') === "true";

      if (this.tabParam === tabLabel || isSelected) {
        initialTabLabel = tabLabel;
      }

      tabEl.addEventListener('click', e => {
        e.preventDefault();
        this.handleTabClick(tabLabel);
      });
    });

    if (initialTabLabel) {
      this.initTabs(initialTabLabel);
    }
  },
  handleTabClick: function(tabLabel) {
    const href = `?tab=${tabLabel}`;
    const newState = {
      html: this.markdownContainer.innerHTML,
      pageTitle: document.title,
      sidebar: this.navigation.innerHTML
    };

    history.pushState(newState, '', window.location.pathname + href);

    this.initTabs(tabLabel);
  },
  initTabs: function(tabLabel) {
    this.tabsEls.forEach(tab => {
      const label = this.extractLabelFromHref(tab.getAttribute('href'));
      tab.setAttribute('aria-selected', label === tabLabel);
    });

    this.tabPanels.forEach(panel => {
      const panelLabel = this.extractLabelFromHref(panel.getAttribute('data-panel')).toLowerCase();
      panel.hidden = (panelLabel !== tabLabel);

      this.updateTocVisibility(panel, panelLabel === tabLabel);
    });
  },
  updateTocVisibility: function(panel, isVisible) {
    const headers = panel.querySelectorAll('h2, h3');

    headers.forEach(header => {
      const id = header.getAttribute('id');
      const link = this.toc.querySelector(`a[href="#${id}"]`);
      if (link) link.setAttribute('aria-hidden', !isVisible);
    });
  },
  extractLabelFromHref: function(href) {
    return href.substring(5);
  }
};

document.addEventListener('DOMContentLoaded', () => globalTab.init());