const dwdModal = {
  init: function () {
    const elements = document.querySelectorAll('[data-dwd-modal]');
    document.addEventListener('click', dwdModal.closeAll.bind());

    for (let element of elements) {
      element.addEventListener(
        'click',
        dwdModal.modal.bind({
          element: element,
        })
      );
    }
  },
  closeAll: function (e) {
    const hasAncestor = isAncestorFound(e.target, null, 'data-dwd-modal-group');
    const hasGroup = e.target.hasAttribute('data-dwd-modal-group');

    if (!hasAncestor && !hasGroup) {
      const targets = document.querySelectorAll('[data-dwd-modal-group]');

      for (let target of targets) {
        target.classList.remove('active');
      }
    }
  },
  modal: function () {
    const element = this.element;
    const id = element.getAttribute('data-dwd-modal-target');
    const group = element.getAttribute('data-dwd-modal-group');
    const targets = document.querySelectorAll(
      '[data-dwd-modal-group="' + group + '"]'
    );

    for (let target of targets) {
      let targetId = target.getAttribute('data-dwd-modal-target');

      if (targetId === id) {
        target.classList.toggle('active');
      } else {
        target.classList.remove('active');
      }
    }
  },
};

const dwdDropdown = {
  init: function () {
    const elements = document.querySelectorAll('[data-dwd-dropdown]');
    document.addEventListener('click', dwdDropdown.closeAll.bind());

    for (let element of elements) {
      element.addEventListener(
        'click',
        dwdDropdown.dropdown.bind({
          element: element,
        })
      );
    }
  },
  closeAll: function (e) {
    const hasAncestor = isAncestorFound(e.target, null, 'data-dwd-dropdown-group');
    const hasGroup = e.target.hasAttribute('data-dwd-dropdown-group');

    if (!hasAncestor && !hasGroup) {
      const targets = document.querySelectorAll('[data-dwd-dropdown-group]');

      for (let target of targets) {
        if (!target.hasAttribute('data-dwd-dropdown')) {
          target.setAttribute('hidden', '');
        }
      }
    }
  },
  dropdown: function () {
    const element = this.element;
    const id = element.getAttribute('data-dwd-dropdown-target');
    const group = element.getAttribute('data-dwd-dropdown-group');
    const targets = document.querySelectorAll(
      '[data-dwd-dropdown-group="' + group + '"]'
    );

    for (let target of targets) {
      let targetId = target.getAttribute('data-dwd-dropdown-target');

      if (!target.hasAttribute('data-dwd-dropdown')) {
        if (targetId === id) {
          target.removeAttribute('hidden');
        } else {
          target.setAttribute('hidden', '');
        }
      }
    }
  },
};

function isAncestorFound(el, cls, dataAttr) {
  dataAttr = dataAttr || null;
  if (dataAttr) {
    while ((el = el.parentElement) && !el.getAttribute(dataAttr));
    if (el == null) {
      return false;
    }
  } else {
    while ((el = el.parentNode) && !el.classList.contains(cls));

    if (el == null) {
      return false;
    }
  }

  return true;
}

(function () {
  dwdDropdown.init();
  dwdModal.init();
})();