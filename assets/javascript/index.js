const navbarToggle = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelector(".more");

navbarToggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});


const navbarToggle2 = document.querySelector(".navbar-toggle2");
const navbarLinks2 = document.querySelector(".more2");

navbarToggle2.addEventListener("click", () => {
  navbarLinks2.classList.toggle("active2");
});


// Get a reference to the toggle elements
const toggleElements = document.getElementsByClassName('navbar-toggle');

// Loop through the toggle elements and add a click event listener to each one
for (let i = 0; i < toggleElements.length; i++) {
  // Store the original inner HTML for each element
  const originalInnerHTML = toggleElements[i].innerHTML;

  // Add a click event listener to toggle the inner HTML for each element
  toggleElements[i].addEventListener('click', function() {
    // Check if the current inner HTML matches the original inner HTML
    if (toggleElements[i].innerHTML === originalInnerHTML) {
      // If it does, set a different inner HTML
      toggleElements[i].innerHTML = 'See less';
    } else {
      // If it doesn't, set the original inner HTML
      toggleElements[i].innerHTML = originalInnerHTML;
    }
  });
}

//   const toggleElement1 = document.getElementById('navbar-toggle1');

//   // Store the original inner HTML
//   const originalInnerHTML1 = toggleElement.innerHTML;

//   // Add a click event listener to toggle the inner HTML
//   toggleElement1.addEventListener('click', function() {
//     // Check if the current inner HTML matches the original inner HTML
//     if (toggleElement1.innerHTML === originalInnerHTML1) {
//       // If it does, set a different inner HTML
//       toggleElement1.innerHTML = 'See less';
//     } else {
//       // If it doesn't, set the original inner HTML
//       toggleElement1.innerHTML = originalInnerHTML1;
//     }
//   });

const navbarToggle3 = document.querySelector(".navbar-toggle3");
const navbarLinks3 = document.querySelector(".more3");

navbarToggle3.addEventListener("click", () => {
  navbarLinks3.classList.toggle("active3");
});
  
//     const toggleElement2 = document.getElementById('navbar-toggle2');
  
//     // Store the original inner HTML
//     const originalInnerHTML2 = toggleElement.innerHTML;
  
//     // Add a click event listener to toggle the inner HTML
//     toggleElement2.addEventListener('click', function() {
//       // Check if the current inner HTML matches the original inner HTML
//       if (toggleElement2.innerHTML === originalInnerHTML2) {
//         // If it does, set a different inner HTML
//         toggleElement2.innerHTML = 'See less';
//       } else {
//         // If it doesn't, set the original inner HTML
//         toggleElement2.innerHTML = originalInnerHTML2;
//       }
//     });


    const navbarToggle4 = document.querySelector(".navbar-toggle4");
  const navbarLinks4 = document.querySelector(".more4");
  
  navbarToggle4.addEventListener("click", () => {
    navbarLinks4.classList.toggle("active4");
  });
  
//     const toggleElement3 = document.getElementById('navbar-toggle3');
  
//     // Store the original inner HTML
//     const originalInnerHTML3 = toggleElement.innerHTML;
  
//     // Add a click event listener to toggle the inner HTML
//     toggleElement3.addEventListener('click', function() {
//       // Check if the current inner HTML matches the original inner HTML
//       if (toggleElement3.innerHTML === originalInnerHTML3) {
//         // If it does, set a different inner HTML
//         toggleElement3.innerHTML = 'See less';
//       } else {
//         // If it doesn't, set the original inner HTML
//         toggleElement3.innerHTML = originalInnerHTML3;
//       }
//     });

// init aos
AOS.init({});

