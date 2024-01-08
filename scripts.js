function showSearchBar() {
    var browserDropdown = document.getElementById("browser");
    var selectedBrowser = browserDropdown.value;
    var searchContainer = document.getElementById("search-container");

    if (selectedBrowser !== "") {
        // Display the search container for the selected browser
        searchContainer.style.display = "block";
        // You can add more logic here based on the selected browser
    } else {
        // Hide the search container if no browser is selected
        searchContainer.style.display = "none";
    }
}
