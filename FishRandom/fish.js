function toggleMenu() {
    const navItems = document.getElementById('nav-items');
    if (navItems.style.display === 'flex') {
        navItems.style.display = 'none';
    } else {
        navItems.style.display = 'flex';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // Retrieve the visit count from local storage
    let visitCount = localStorage.getItem('visitCount');
    console.log("Initial visit count from local storage:", visitCount);

    // If visit count is not available, initialize it to 0
    if (!visitCount) {
        visitCount = 0;
    } else {
        visitCount = parseInt(visitCount, 10); // Convert to integer
    }

    // Increment the visit count
    visitCount++;
    console.log("Updated visit count:", visitCount);

    // Store the updated visit count in local storage
    localStorage.setItem('visitCount', visitCount);

    // Update the visit count in the HTML
    const visitCountElement = document.getElementById('visitcount');
    if (visitCountElement) {
        visitCountElement.textContent = visitCount;
        console.log("Visit count updated in HTML");
    } else {
        console.error("Element with ID 'visitcount' not found");
    }
});