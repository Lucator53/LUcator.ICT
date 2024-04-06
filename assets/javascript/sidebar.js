var sidebarOpen = false;

// Check the initial screen width and close the sidebar if necessary
checkScreenWidthAndCloseSidebar();

// Add a resize event listener to update the sidebar behavior when the window is resized
window.addEventListener('resize', checkScreenWidthAndCloseSidebar);

function checkScreenWidthAndCloseSidebar() {
  if (window.innerWidth <= 660) {
    closeNav();
  }
}

function toggleNav() {
  if (!sidebarOpen) {
    openNav();
  } else {
    closeNav();
  }
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("hamburger").style.marginLeft = "200px"; // Adjust hamburger position
  sidebarOpen = true;
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("hamburger").style.marginLeft = "0"; // Reset hamburger position
  sidebarOpen = false;

  // Remove the click event listener when the sidebar is closed
  document.removeEventListener('click', closeNavOnOutsideClick);
}

function closeNavOnOutsideClick(event) {
  if (!event.target.matches('#mySidebar') && !event.target.matches('button')) {
    closeNav();
  }
}
