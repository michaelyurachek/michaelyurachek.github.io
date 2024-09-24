
  // Select all elements with the class 'scroll-reveal'
  const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

  // Define the observer options
  const observerOptions = {
    threshold: 0.1 // The amount of the element that needs to be visible (10%)
  };

  // Callback function for the observer
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once it's visible
      }
    });
  };

  // Create an intersection observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Attach the observer to each scroll-reveal element
  scrollRevealElements.forEach(element => {
    observer.observe(element);
  });
