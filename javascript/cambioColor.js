document.querySelector('#color-select').addEventListener('change', function() {
    document.documentElement.style.setProperty('--color-secundario', this.value);
});