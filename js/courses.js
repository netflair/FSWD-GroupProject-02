// !IMPORTANT: REPLACE WITH YOUR OWN CONFIG OBJECT BELOW
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAoCr9FaRcRmmP5uZfg1f_11FlNG64U4wU",
    authDomain: "bim-2018.firebaseapp.com",
    databaseURL: "https://bim-2018.firebaseio.com",
    projectId: "bim-2018",
    storageBucket: "bim-2018.appspot.com",
    messagingSenderId: "1073285445984"
};

firebase.initializeApp(config);

// Firebase Database Reference and the child
const dbRef = firebase.database().ref();
const coursesRef = dbRef.child('courses');
const bookingRef = dbRef.child('booking');


// function courseClicked(e) {


//     var courseid = e.target.getAttribute("course-key");

//     const courseRef = dbRef.child('booking/' + courseid);
//     const courseDetailUI = document.getElementById("course-detail");

//     courseRef.on("value", snap => {

//         courseDetailUI.innerHTML = ""

//         snap.forEach(childSnap => {
//             var $p = document.createElement("p");
//             $p.innerHTML = childSnap.key + " : " + childSnap.val();
//             courseDetailUI.append($p);
//         })

//     });


// }




// --------------------------
// OUTPUT COURSES
// --------------------------

readCourseData();

var courseCard = "";
// --------------------------
// READ
// --------------------------
function readCourseData() {

    const courseListUI = document.getElementById("course-output");

    coursesRef.on("value", snap => {

        courseListUI.innerHTML = "";

        snap.forEach(childSnap => {

            let key = childSnap.key,
                value = childSnap.val();
            


            courseCard += 
            //Booking Preview
            "<div course-key='" + key + "' class='col-lg-6 col-sm-12 booking-card'>" +
                "<div class='well'>" +
                    "<div class='row'>" +
                        "<div class='col-sm-3'>" +
                            "<img class='img-responsive' src='"+value.img+"' alt='house'>" +
                        "</div>" +
                        "<div class='col-sm-9'>" +
                            "<div class='row'>" +
                                "<div class='col-sm-6 h4'>"+value.name+" | <span class='text-danger'>"+value.price+"€</span>" +
                                "</div>" +
                                "<div class='col-sm-6 h4 text-right'>Start: "+value.start+"<br><small>ends "+value.end+"</small></div>" +
                                "<div class='col-sm-9'>" + value.description + "<br><br>" +
                                    "<a href='#'>Get Full Course Description (PDF)</a>" +
                                "</div>" +
                                "<div class='col-sm-12'>" +
                                    "<button class='booking-start btn btn-success pull-right'>Book Now</button>" +
                                "</div>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>"+
                //Booking Form
                "<div class='booking-form'>" +
                    "<form class='row'>" +
                        "<div class='col-sm-6 padding-top'>" +
                            "<label for='email'>Email:</label>" +
                            "<input type='email' data-key='email' class='form-control course-input' placeholder='Enter email' name='email'>" +
                        "</div>" +
                        "<div class='col-sm-6 padding-top'>" +
                            "<label for='name'>Name:</label>" +
                            "<input type='text' data-key='fname' class='form-control course-input' placeholder='Enter full name' name='pwd' >" +
                        "</div>" +
                        "<div class='col-sm-6 padding-top'>" +
                            "<label for='adress'>Adress:</label>" +
                            "<input type='text' data-key='adress' class='form-control course-input' placeholder='Enter adress'  >" +
                        "</div>" +
                        "<div class='col-sm-6 padding-top'>" +
                            "<label for='ZIP'>ZIP:</label>" +
                            "<input type='text' data-key='ZIP' class='form-control course-input' placeholder='Enter ZIP'  >" +
                        "</div>" +
                        "<div class='col-sm-6 padding-top'>" +
                            "<label for='birthdate'>Birthdate:</label>" +
                            "<input type='date' data-key='birthdate' class='form-control course-input' >" +
                        "</div>" +
                        "<div class='col-sm-6 padding-top'>" +
                            "<label for='EB'>Educational Background:</label>" +
                            "<select type='text' data-key='eb' class='form-control' class='course-input'>" +
                                "<option value='school'>High School</option>" +
                                "<option value='uni'>University</option>" +
                                "<option value='other'>Other</option>" +
                            "</select>" +
                        "</div>" +
                        "<div class='col-sm-6 padding-top'>" +
                            "<button type='button' class='booking-cancel btn btn-danger'>Cancel Booking</button>" +
                        "</div>" +
                        "<div class='col-sm-6 padding-top'>" +
                            "<button class='btn btn-success pull-right' id='add-course-btn'>Submit Booking</button>" +
                        "</div>" +
                    "</form>" +
                "</div>" +
            "</div> <span class='phantom'></span>";
            
            // courseCard.setAttribute("course-key", key);
            courseListUI.innerHTML = courseCard;

            var val = $("span.phantom").attr("class");
                if( val == "phantom"){
                $('.booking-form').hide();

                $('.booking-start').on('click', function() {
                    $(this).closest('.booking-card').find('.booking-form').animate({ height: "toggle" });
                });

                $('.booking-cancel').on('click', function() {
                    $(this).closest('.booking-form').animate({ height: "toggle" });
                });
                }



        });


    })

}




// --------------------------
// ADD
// --------------------------

const addCourseBtnUI = document.getElementById("add-course-btn");
addCourseBtnUI.addEventListener("click", addCourseBtnClicked);



function addCourseBtnClicked() {
    alert("HALLO");

    //const coursesRef = dbRef.child('booking');

    const addCourseInputsUI = document.getElementsByClassName("course-input");

    // this object will hold the new course information
    let newCourse = {};

    // loop through View to get the data for the model 
    for (let i = 0, len = addCourseInputsUI.length; i < len; i++) {

        let key = addCourseInputsUI[i].getAttribute('data-key');
        let value = addCourseInputsUI[i].value;
        newCourse[key] = value;
    }

    bookingRef.push(newCourse);
}
