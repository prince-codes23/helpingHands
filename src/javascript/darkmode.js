// Get the theme toggle input
const themeToggle = document.querySelector('.theme-switch input[type="checkbox"]');
var metaThemeColor = document.querySelector("meta[name=theme-color]");
  
  // Get the current theme from local storage
  const currentTheme = localStorage.getItem("theme");
  
  // If the current local storage item can be found
  if (currentTheme) {
    // Set the body data-theme attribute to match the local storage item
    document.documentElement.setAttribute("data-theme", currentTheme);
  
    // If the current theme is dark, check the theme toggle
    if (currentTheme === "dark") {
      themeToggle.checked = true;
      metaThemeColor.setAttribute("content", "#000000");
    }
  }
  
  // Function that will switch the theme based on the if the theme toggle is checked or not
  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      metaThemeColor.setAttribute("content", "#000000");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      metaThemeColor.setAttribute("content", "#b2caee");
    }
  }
  
  // Add an event listener to the theme toggle, which will switch the theme
  themeToggle.addEventListener("change", switchTheme, false);
  