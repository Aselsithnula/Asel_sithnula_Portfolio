document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.navbar ul li a');
    
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const offset = 50; // Adjust this value as needed

            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: 'smooth'
            });
        });
    });
});







// JavaScript to handle the "About" button click
document.getElementById("about-link").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    document.getElementById("about").scrollIntoView({
      behavior: "smooth"  // Smooth scroll behavior
    });
  });
  


// JavaScript to handle the "About" button click
document.getElementById("about-link").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default anchor behavior
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"  // Smooth scroll behavior
  });
});



  document.getElementById("contact-link").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"  // Smooth scroll behavior
    });
  });
  

// JavaScript to handle the "About" button click
document.getElementById("service-link").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default anchor behavior
  const target = document.getElementById("service");

  // Calculate the target position with an offset (e.g., 50px from the bottom)
  const offset = 50; // Adjust this value as needed
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

  // Smooth scroll to the adjusted position
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth"
  });
});




document.getElementById("Project-link").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default anchor behavior
  document.getElementById("Project").scrollIntoView({
    behavior: "smooth"  // Smooth scroll behavior
  });
});



let i = 0;
let isDeleting = false;
let currentIndex = 0;
const texts = ["Front End Developer", "Graphic Designer"];
const speed = 150;
const backSpeed = 100;
const pause = 1000;

function typeWriter() {
  const currentText = texts[currentIndex];
  const typingElement = document.querySelector(".typing");

  if (!isDeleting && i < currentText.length) {
    // Type the next letter
    typingElement.innerHTML += currentText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else if (isDeleting && i > 0) {
    // Delete the previous letter
    typingElement.innerHTML = currentText.substring(0, i - 1);
    i--;
    setTimeout(typeWriter, backSpeed);
  } else if (i === currentText.length) {
    // Start deleting after a pause
    isDeleting = true;
    setTimeout(typeWriter, pause);
  } else if (i === 0) {
    // Move to the next text and start typing
    isDeleting = false;
    currentIndex = (currentIndex + 1) % texts.length;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);










function Sendmail(event) {
  event.preventDefault(); // Prevents the default form submission

  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_le66ibm", "template_4bwmwal", params)
    .then((res) => {
      console.log(res);
      
      // Show the success popup with GIF
      var popup = document.getElementById("popup");
      popup.style.display = "block";
      
      // Auto-remove the popup after 3 seconds
      setTimeout(() => {
        popup.style.display = "none";
      }, 5000);
    })
    .catch((err) => console.log(err));
}

//navtionbar//

function toggleMenu() {
  const navbarUl = document.querySelector('.navbar ul');
  navbarUl.classList.toggle('show');
}






document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".count");

  counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const increment = target / 100;

      function updateCount() {
          const currentCount = +counter.innerText;
          if (currentCount < target) {
              counter.innerText = Math.ceil(currentCount + increment);
              setTimeout(updateCount, 20);
          } else {
              counter.innerText = target; // Ensure it stops at the target
          }
      }

      updateCount();
  });
});
