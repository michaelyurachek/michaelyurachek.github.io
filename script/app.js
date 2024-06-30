// Script to make scrolling feel unique and not boring
if (!isMobileOrTablet()) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show')
        }
      });
    });
  
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  }
  
  function isMobileOrTablet() {
    // Define screen width threshold for mobile and tablet devices
    const screenWidthThreshold = 768; // Example threshold for tablets and mobile devices
  
    // Check if the current screen width is below the threshold
    return window.innerWidth <= screenWidthThreshold;
  }