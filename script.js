function updateWindowSize() {
  const width = parseInt(window.innerWidth, 10);
  const height = window.innerHeight;
  const windowSizeElement = document.getElementById("navstyle");
  if (width > 1050) {
    windowSizeElement.innerHTML = `
          <div class="navbar">
            <div class="navbar-content">
              <div class="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQprgBlD9lER_3pVbqxQSOa_SnZGVBgeq9Nr6sI37AaFFLA8uNuIlZ2PxIuC6JA1buuLf0&usqp=CAU" alt="Charminar">
                <span class="text-2xl whitespace-nowrap dark:text-white" style="font-family: 'Times New Roman', Times, serif;font-style: italic; font-weight: 700; font-size: 42px;">Hyderabad</span>
              </div>
              <div class="menu">
                <a href="index.html">Home</a>
                <div class="dropdown">
                  <a href="#">Explore</a>
                  <div class="dropdown-menu">
                    <a href="pages/Places to Visit/places.html">Explore Places</a>
                    <a href="pages/Food.html">Food Delights</a>
                    <a href="pages/Hyderabad Hotels.html">Accommodation</a>
                    <a href="pages/events.html">Local Events</a>
                  </div>
                </div>
                <a href="pages/blog/blog.html">Blog</a>
                <div class="dropdown">
                  <a href="#">About</a>
                  <div class="dropdown-menu">
                    <a href="pages/about/history.html">History</a>
                    <a href="pages/about/culture.html">Culture</a>
                  </div>
                </div>
                
                <a href="pages/about/gallery.html">Gallery</a>
                
              </div>
            </div>
          </div>`;
  } else {
    // Clear the content if the width is not greater than 750
    windowSizeElement.innerHTML = `<div class="navbar">
          <div class="navbar-content">
            <div class="logo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQprgBlD9lER_3pVbqxQSOa_SnZGVBgeq9Nr6sI37AaFFLA8uNuIlZ2PxIuC6JA1buuLf0&usqp=CAU" alt="Charminar">
              <span class="text-2xl whitespace-nowrap dark:text-white" style="font-family: 'Times New Roman', Times, serif;font-style: italic; font-weight: 700; font-size: 42px;">Hyderabad</span>
            </div>
            <button class="mr-12 py-2 px-5 text-black transition duration-300 ease-in-out hover:text-gray-300 text-3xl"
                    onclick='sidebar()'>
              &#9776;
            </button>
          </div>
        </div>`;
  }
}

function updateSidebarVisibility() {
  const windowSizeElement = document.getElementById("navstyle");
  const sidebarElement = `
        <div class="navbar">
          <div class="navbar-content">
            <div class="logo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQprgBlD9lER_3pVbqxQSOa_SnZGVBgeq9Nr6sI37AaFFLA8uNuIlZ2PxIuC6JA1buuLf0&usqp=CAU" alt="Charminar">
              <span class="text-2xl whitespace-nowrap dark:text-white" style="font-family: 'Times New Roman', Times, serif;font-style: italic; font-weight: 700; font-size: 42px;">Hyderabad</span>
            </div>
            <div class="absolute top-0 right-0 h-screen w-1/3 bg-white nav2 text-black">
              <div class="px-6 py-4">
                <button
                  class="mr-12 py-2 px-5 text-black transition duration-300 ease-in-out hover:text-gray-300 text-xl text-2xl"
                  onclick="sidebar()" // Add this line to handle sidebar closing
                >
                  &#215;
                </button>
                <br>
                <a class="ml-4" href="index.html">Home</a>
                <div class="dropdown">
                  <a href="#">Explore</a>
                  <div class="dropdown-menu">
                    <a href="pages/Places to Visit/places.html">Explore Places</a>
                    <a href="pages/Food.html">Food Delights</a>
                    <a href="pages/Hyderabad Hotels.html">Accommodation</a>
                    <a href="pages/events.html">Local Events</a>
                  </div>
                </div>
                <a class="ml-4" href="pages/blog/blog.html">Blog</a>
                <div class="dropdown">
                  <a href="#">About</a>
                  <div class="dropdown-menu">
                    <a href="pages/about/history.html">History</a>
                    <a href="pages/about/culture.html">Culture</a>
                  </div>
                </div>
                
                <a class="ml-4" href="pages/about/gallery.html">Gallery</a>
              </div>
            </div>
          </div>
        </div>`;
  windowSizeElement.innerHTML = sidebarElement;
}

let showDrawer = false; // Initialize showDrawer to false

function sidebar() {
  showDrawer = !showDrawer; // Toggle the showDrawer variable
  if (showDrawer) {
    updateSidebarVisibility();
  } else {
    // If showDrawer is false, revert back to the default navbar
    updateWindowSize();
  }
}

// Function to log window size in the console

document.addEventListener("DOMContentLoaded", function () {
  // Call the function initially to show the window size on page load
  updateWindowSize();

  // Attach an event listener to update the window size when the window is resized
  window.addEventListener("resize", function () {
    updateWindowSize();
  });
});
