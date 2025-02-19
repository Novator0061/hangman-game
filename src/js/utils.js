export const darkModeHandle = () => {
    const darkModeSwitcher = document.getElementById('toggleDarkMode');
    const htmlElement = document.documentElement;

    if (localStorage.getItem('mode') === 'dark') {
        htmlElement.classList.add('dark');
        darkModeSwitcher.checked = true;
    }

    darkModeSwitcher.addEventListener('input', () => {
        const htmlElement = document.documentElement;
        htmlElement.classList.toggle('dark');

        if (htmlElement.classList.contains('dark')) {
            localStorage.setItem('mode', 'dark')
        } else {
            localStorage.setItem('mode', 'light')
        }
    });
}