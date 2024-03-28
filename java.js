feather.replace()
function createDropdownMenu(menuItems, dropdownId) {
    // Get the dropdown element by its ID
    var dropdown = document.getElementById(dropdownId);

    // Create a select element
    var selectElement = document.createElement("select");

    // Loop through each menu item
    menuItems.forEach(function(item) {
        // Create an option element
        var option = document.createElement("option");
        
        // Set the value and text of the option
        option.value = item.value;
        option.textContent = item.text;
        
        // Append the option to the select element
        selectElement.appendChild(option);
    });

    // Append the select element to the dropdown
    dropdown.appendChild(selectElement);
}