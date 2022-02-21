const sidebar = document.querySelector('#sidebar');
const sidebarButton = document.querySelector('.nav-title');
const sidebarLinks = document.querySelectorAll('.nav-link');

const toggleItems = [
	sidebarButton,
	...sidebarLinks,
];

toggleItems.forEach((item) => {
	item.addEventListener('click', () => {
		sidebar.classList.toggle('sidebar-active');
	});
});