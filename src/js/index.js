let sidebarContainer = document.querySelector('.sidebar-container');
let sidebar = sidebarContainer.querySelector('.sidebar');
let sidebarOpenButton = document.querySelector('.button--icon-burger');
let sidebarCloseButton = document.querySelector('.button--icon-close');

sidebarOpenButton.addEventListener('click', function () {
    sidebarContainer.classList.toggle('sidebar-container--blur');
    sidebar.classList.toggle('sidebar--open');
})

sidebarCloseButton.addEventListener('click', function () {
  sidebar.classList.toggle('sidebar--open');
  sidebarContainer.classList.toggle('sidebar-container--blur');
})

sidebarContainer.addEventListener('click', function (evt) {
  if (!evt.target.closest('.sidebar')) {
    sidebar.classList.toggle('sidebar--open');
    sidebarContainer.classList.toggle('sidebar-container--blur');
  }
})