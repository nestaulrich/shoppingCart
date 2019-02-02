// Variables
const courses = document.querySelector('#courses-list');


// Event Listeners

loadEventListeners();

function loadEventListeners() {
    courses.addEventListener('click' , buyCourse);

}

// Functions

function buyCourse(e) {
    //prevents the default behavior of the form element
    e.preventDefault();

    alert('Hello!!');
    //Use delegation to find the course that was added to the shopping cart
    if (e.target.classList.contains('add-to-cart') ) {
        const course = e.target.parentElement.parentElement;

        getCourseInfo(course);
    }
}

// Reads the HTML information of the selection
function getCourseInfo(course) {
    console.log( course);
}