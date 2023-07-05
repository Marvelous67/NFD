function sendEmail() {
    // Get the user input
    var userEmail = document.getElementById("userEmail").value;
    var imageFile = document.getElementById("imageFile").files[0];
  
    // Compose the email parameters
    var emailParams = {
      from_name: "Sender Name",
      to_name: "Recipient Name",
      reply_to: userEmail,
      message: "Attached is the image file",
    };
  
    // Create a new EmailJS service instance
    var emailService = "default_service";
    var emailTemplate = "template_4mmkoij"; // Replace with your template ID
  
    // Attach the file to the email
    var emailAttachment = {
      "image.png": imageFile,
    };
  
    // Send the email
    emailjs.send(emailService, emailTemplate, emailParams, emailAttachment)
      .then(function(response) {
        console.log("Email sent successfully", response);
      }, function(error) {
        console.error("Email sending failed", error);
      });
  }
  