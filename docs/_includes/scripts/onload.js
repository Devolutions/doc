document.addEventListener('DOMContentLoaded', function() {
    
    if (localStorage.getItem('theme') === "dark") {
        document.body.classList.add('dark');
        document.getElementById('dark-icon').style.display = 'none';
        document.getElementById('light-icon').style.display = 'block';
       
    } else {
        document.body.classList.remove('dark');
        document.getElementById('dark-icon').style.display = 'block';
        document.getElementById('light-icon').style.display = 'none';
    }
    dwdLogosDarkTheme.init();

});