// dynamicProjectInfo.js

document.addEventListener("DOMContentLoaded", () => {
  // Create a wrapper for project info
  const infoBox = document.createElement("div");
  infoBox.id = "project-info";
  infoBox.style.border = "1px solid #4CAF50";
  infoBox.style.padding = "15px";
  infoBox.style.marginTop = "30px";
  infoBox.style.backgroundColor = "#e8f5e9";
  infoBox.style.borderRadius = "8px";
  infoBox.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
  infoBox.style.transition = "all 0.3s ease-in-out";

  // Content
  infoBox.innerHTML = `
    <h3 style="color: #2e7d32;">📘 Project Overview</h3>
    <ul style="line-height: 1.6;">
      <li><strong>Name:</strong> Simple Blog Website</li>
      <li><strong>Purpose:</strong> Demonstrate Git branching strategies with a live project</li>
      <li><strong>Tech Stack:</strong> HTML, CSS, JavaScript</li>
      <li><strong>Features:</strong>
        <ul>
          <li>Semantic and clean HTML structure</li>
          <li>Responsive design</li>
          <li>JavaScript-based dynamic content injection</li>
        </ul>
      </li>
      <li><strong>Author:</strong> Harsh Gulhane</li>
    </ul>

    <h3 style="color: #2e7d32;">🌿 Branching Strategy</h3>
    <p>This project uses a simplified Git branching strategy:</p>
    <ul style="line-height: 1.6;">
      <li><strong>main</strong>: Stable production-ready code lives here.</li>
      <li><strong>develop</strong>: Integration branch for features under development.</li>
      <li><strong>feature/</strong>: Feature-specific branches (e.g., <code>feature/dynamic_project_info</code>) where new functionalities are added.</li>
    </ul>
    <p>This structure helps organize collaboration, isolate features, and streamline merging.</p>

    <button id="toggle-info" style="margin-top: 10px; padding: 6px 12px; cursor: pointer; background-color: #4CAF50; color: white; border: none; border-radius: 4px;">Hide Info</button>
  `;

  // Append to DOM
  const mainSection = document.querySelector("main");
  mainSection.appendChild(infoBox);

  // Toggle visibility
  const toggleBtn = document.getElementById("toggle-info");
  toggleBtn.addEventListener("click", () => {
    if (infoBox.style.display !== "none") {
      infoBox.style.display = "none";
      toggleBtn.textContent = "Show Info";
    } else {
      infoBox.style.display = "block";
      toggleBtn.textContent = "Hide Info";
    }
  });
});
