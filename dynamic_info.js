// dynamicProjectInfo.js

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Create a new div element
const infoBox = document.createElement("div");
infoBox.id = "project-info";
infoBox.style.border = "1px solid #ccc";
infoBox.style.padding = "10px";
infoBox.style.marginTop = "20px";
infoBox.style.backgroundColor = "#f9f9f9";
infoBox.style.borderRadius = "5px";

  // Add some content to the div
infoBox.innerHTML = `
    <h3>Project Information</h3>
    <p>This simple blog project demonstrates basic Git branching strategies and dynamic DOM manipulation with JavaScript.</p>
    <p>Created by Harsh Gulhane.</p>
`;

  // Append the info box to the <main> section below the article
const mainSection = document.querySelector("main");
mainSection.appendChild(infoBox);
});
