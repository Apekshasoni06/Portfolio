// Add your JavaScript code here

// You can add ProjectCards components dynamically using JavaScript
// For the sake of simplicity, let's just create a static HTML structure for the example
// Replace the content inside project-section div with the ProjectCards components

document.querySelector(".project-section").innerHTML = `
    <div class="project-card">
        <img src="AIMouse.png" alt="Chatify" />
        <div class="card-body">
            <h3>AI Virtual Mouse Using Python</h3>
            <p class="para1">The virtual mouse project built using Python with cvzone and mediapipe libraries allows you to control the mouse cursor on your computer using hand gestures detected by a webcam. It utilizes the hand tracking capabilities of mediapipe and provides an interactive interface using cvzone.</p>
            <a href="https://github.com/Apekshasoni06/AIProjects" target="_blank">GitHub</a>
          
        </div>
    </div>
    <div class="project-card1">
        <img src="keyboard.png" alt="Chatify" />
        <div class="card-body">
            <h3>AI Virtual Keyboard Using Python</h3>
            <p class=para2>The project "Virtual Keyboard" built using cv-zone and Mediapipe in Python involves creating a computer vision-based system that allows users to interact with a virtual keyboard using hand gestures. The project utilizes the cv-zone library, which provides a collection of computer vision functions and tools. </p>
         
            <a href="https://github.com/ashutosh-187/Gesture-Based-Projects-" target="_blank">GitHub</a>
          
       
            </div>
    </div>
    <div class="project-card2">
        <img src="avengers.jpg" alt="Chatify" />
        <div class="card-body">
            <h3>The Avengers app</h3>
            <p class="para3">Made a single screen application using Android Studio with Kotlin and XML listing all the details of my favorite Avengers.</p>
            <a href="https://docs.google.com/document/d/1AuWE304p8XgYa77UNpVI2S3xIkUmDd2sFhznc_LH2hk/edit?usp=sharing" target="_blank">See More</a>
            
        </div>
    </div>
    <div class="project-card3">
        <img src="bookuhub.jpg" alt="Chatify" />
        <div class="card-body">
            <h3>A Book App</h3>
            <p class="para4">Created an app using Android Studio with Kotlin and XML, that lists famous books using API. In this, we can also save some books our favourites for future reference.</p>
            <a href="https://docs.google.com/document/d/1AuWE304p8XgYa77UNpVI2S3xIkUmDd2sFhznc_LH2hk/edit?usp=sharing" target="_blank">See More</a>
           
        </div>
    </div>
    
    <!-- Add other ProjectCards components with different project details here -->
    <!-- ... -->
`;
