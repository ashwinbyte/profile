function sendMail(event) {
  event.preventDefault(); // Prevent form refresh

  let params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
  };

  emailjs.send("service_ineyvl5", "template_clsjxec", params)
  .then(function(response) {
      console.log("Email sent successfully!", response);
      alert("Email sent successfully!");
      document.getElementById("contact-form").reset(); // Clear form after sending
  })
  .catch(function(error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Check console for errors.");
  });
}
