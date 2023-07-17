function validate(){
    var x=document.myForm.validEmail.value;
    positionOfat=x.indexOf('@');
    positionOfdot=x.lastIndexOf('.');
    if(positionOfat<1 || positionOfat+2>positionOfdot || positionOfdot+2>x.length){
        document.getElementById('validationInfo').innerHTML=" !! Entered Email Is Not Valid Please Enter Valid Email"
        return false
    }
    else{
        return true

    }
}


// $("#submit-form").submit((e)=>{
//     e.preventDefault()
//     $.ajax({
//         url:"https://script.google.com/macros/s/AKfycbwn-dNbbQjEfpOQU2UufKXuT8gM5xRcFU1_QpoQU07tRj_oeKrHEGjpLE8JxWfzuml1Zg/exec",
//         data:$("#submit-form").serialize(),
//         method:"post",
//         success:function (response){
//             alert("Form submitted successfully")
//             window.location.reload()
//             //window.location.href="https://google.com"
//         },
//         error:function (err){
//             alert("Something Error")

//         }
//     })
// })

// $("#submit-form").submit((e) => {
//     e.preventDefault(); // Prevent the default form submission
  
//     $.ajax({
//       url: $("#submit-form").attr("action"), // Get the form's action URL
//       data: $("#submit-form").serialize(), // Serialize the form data
//       method: "post",
//       success: function(response) {
//         alert("Form submitted successfully");
//         window.location.reload(); // Reload the current page
//       },
//       error: function(err) {
//         alert("Something went wrong");
//       }
//     });
//   });
  
//   $("#submit-form").submit((e) => {
//     e.preventDefault(); // Prevent the default form submission
  
//     $.ajax({
//       url: $("#submit-form").attr("action"), // Get the action URL from the form
//       data: $("#submit-form").serialize(), // Serialize the form data
//       method: "post",
//       success: function(response) {
//         alert("Form submitted successfully");
//         window.location.reload(); // Reload the current page
//       },
//       error: function(err) {
//         alert("Something went wrong");
//       }
//     });
//   });
  
// $("#submit-form").submit((e) => {
//     e.preventDefault(); // Prevent the default form submission
  
//     $.ajax({
//       url: $("#submit-form").attr("action"), // Get the action URL from the form
//       data: $("#submit-form").serialize(), // Serialize the form data
//       method: "post",
//       success: function() {
//         alert("Form submitted successfully");
//         window.location.reload(); // Reload the current page
//       },
//       error: function() {
//         alert("Something went wrong");
//       }
//     });
//   });
// $("#submit-form").submit((e) => {
//     e.preventDefault(); // Prevent the default form submission
  
//     $.ajax({
//       url: $("#submit-form").attr("action"), // Get the action URL from the form
//       data: $("#submit-form").serialize(), // Serialize the form data
//       method: "post",
//       success: () => {
//         alert("Form submitted successfully");
//         window.location.reload(); // Reload the current page
//       },
//       error: () => {
//         alert("Something went wrong");
//       }
//     });
//   });
  
// $(document).ready(function() {
//     $("#submit-form").submit((e) => {
//       e.preventDefault(); // Prevent the default form submission

//       $.ajax({
//         url: $("#submit-form").attr("action"), // Get the action URL from the form
//         data: $("#submit-form").serialize(), // Serialize the form data
//         method: "post",
//         success: () => {
//           alert("Form submitted successfully");
//           window.location.reload(); // Reload the current page
//         },
//         error: () => {
//           alert("Something went wrong");
//         }
//       });
//     });
//   });
// $(document).ready(function() {
//     $("#submit-form").submit((e) => {
//       e.preventDefault(); // Prevent the default form submission

//       $.ajax({
//         url: $("#submit-form").attr("action"), // Get the action URL from the form
//         data: $("#submit-form").serialize(), // Serialize the form data
//         method: "post",
//         success: () => {
//           alert("Form submitted successfully");
//           window.location.reload(); // Reload the current page
//         },
//         error: () => {
//           alert("Something went wrong");
//         }
//       });
//     });
//   });

function contactvalid(){
    var name=document.contactDetails.name.value;
    var email=document.contactDetails.email.value;
    var num=document.contactDetails.phoneNo.value;
    var message=document.contactDetails.message.value;
    placeOfat=email.indexOf('@');
    placeOfdot=email.lastIndexOf('.');
    if (name==null || name==""){
        document.getElementById('nameInfo').innerHTML="Please Enter Your Name";
        return false;
    }else if(!isNaN(name)){
        document.getElementById('nameInfo').innerHTML="Number is Not Allowed Please Re Enter Your Name";
        return false;
    }
     else if(placeOfat<1 || placeOfat+2>placeOfdot || placeOfdot+2>email.length){
        document.getElementById('emailInfo').innerHTML=" !! Entered Email Is Not Valid Please Enter Valid Email";
        return false;
    }
    else if(num.length<10){
        document.getElementById('numberInfo').innerHTML="Need Minimum 10 Digits";
        return false;
    }else if(isNaN(num)){
        document.getElementById('numberInfo').innerHTML="Please Enter Valid Mobile Number";
        return false;
    }else if(message.length<10){
        document.getElementById('messageInfo').innerHTML="Atleast 10 letters required";
        return false;
    }
    else{
        return true;
    }
}