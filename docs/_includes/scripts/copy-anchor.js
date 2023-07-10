const dwdCopyAnchor = {
  init: function () {
    const elements = document.getElementsByClassName('header-anchor');

    if (elements.length > 0 ) {
      Array.from(elements).forEach(item => {
        item.addEventListener('click', event => {
          navigator.clipboard.writeText(item.href);

          const para = document.createElement("div");
          para.className = "copied-div";
          para.appendChild(document.createTextNode("Copied !"));

          item.parentElement.append(para);

          myTimeout = setTimeout(function() { para.remove() }, 2000);
        });
      });
    }
  }
};

(function () {
  dwdCopyAnchor.init();
})();