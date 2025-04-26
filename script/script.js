function setMainColorByDay() {
    const day = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    let color;

    if (day === 1 || day === 2) { // Monday or Tuesday
        color = 'red';
    } else if (day === 3 || day === 4) { // Wednesday or Thursday
        color = 'blue';
    } else { // Friday, Saturday, Sunday
        color = 'lime';
    }

    document.documentElement.style.setProperty('--main_color', color);
}

// Run the function when the page loads
window.addEventListener('DOMContentLoaded', setMainColorByDay);