<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate the form data
    $first_name = filter_var(trim($_POST["first_name"]), FILTER_SANITIZE_STRING);
    $last_name = filter_var(trim($_POST["last_name"]), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = filter_var(trim($_POST["phone"]), FILTER_SANITIZE_STRING);
    $message = filter_var(trim($_POST["message"]), FILTER_SANITIZE_STRING);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // Prepare the email content
    $to = "your-email@example.com";  // Replace with your email address
    $subject = "New Contact Form Submission";
    $body = "You have received a new message from the contact form on your website.\n\n".
            "Here are the details:\n".
            "First Name: $first_name\n".
            "Last Name: $last_name\n".
            "Email: $email\n".
            "Phone: $phone\n".
            "Message:\n$message";
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
} else {
    echo "Invalid request method.";
}
?>
