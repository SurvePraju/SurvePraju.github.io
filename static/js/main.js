function openResume() {
    window.open('static/files/PrajwalsResume.pdf', '_blank');
}

function animateDesignation() {
    const designation = document.querySelector(".designation");
    const titles = ["Software Engineer", "Python Developer", "Full-Stack Developer"];
    let index = 0;

    function typeEffect(title, index, callback) {
        if (index < title.length) {
            designation.innerHTML = title.substring(0, index) + "<span class='cursor'></span>"; // Add cursor element
            setTimeout(() => {
                typeEffect(title, index + 1, callback);
            }, 100); // Typing speed (100 milliseconds per character)
        } else {
            designation.innerHTML = title; // Remove cursor when typing completes
            setTimeout(callback, 1000); // Wait for 1 second after typing completes
        }
    }

    function changeTitle() {
        const title = titles[index];
        typeEffect(title, 0, () => {
            index = (index + 1) % titles.length;
            setTimeout(changeTitle, 1000); // Change title after 1 second
        });
    }

    // Start the animation
    changeTitle();
}

// Call the function to start the animation
animateDesignation();








// CLose Construction Modal 
function closeConstructionModal() {
    const closeModal = document.querySelector(".cover");
    closeModal.classList.add("hidden")
}