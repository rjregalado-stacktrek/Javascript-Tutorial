// script.js

window.addEventListener('DOMContentLoaded', function () {
    var projectList = document.getElementById('project-list');
  
    // Sample project data
    var projects = [
      { name: 'Project 1', description: 'This is project 1 description.' },
      { name: 'Project 2', description: 'This is project 2 description.' },
      { name: 'Project 3', description: 'This is project 3 description.' }
    ];
  
    // Function to create project list items
    function createProjectItem(project) {
      var li = document.createElement('li');
      li.classList.add('list-group-item');
      li.innerHTML = `<h4>${project.name}</h4><p>${project.description}</p>`;
      return li;
    }
  
    // Populate project list
    projects.forEach(function (project) {
      var projectItem = createProjectItem(project);
      projectList.appendChild(projectItem);
    });
  });
  