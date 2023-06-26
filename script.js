const actionButton = document.querySelector('button.dropdown');
const dropDownMenu = document.querySelector('.dropdown-menu');

actionButton.addEventListener('click', () => {
	dropDownMenu.classList.toggle('visible');
});
