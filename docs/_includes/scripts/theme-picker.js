document.getElementById('theme-button').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
      document.getElementById('dark-icon').style.display = 'none';
      document.getElementById('light-icon').style.display = 'block';
    } else {
      localStorage.setItem('theme', '');
      document.getElementById('dark-icon').style.display = 'block';
      document.getElementById('light-icon').style.display = 'none';
    }
    
    dwdLogosDarkTheme.init();
  });