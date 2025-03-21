<?php

// Ustawienie adresu e-mail odbiorcy
$to = "j_w07@wp.pl"; // Zmień na właściwy adres e-mail

// Sprawdzenie, czy formularz został wysłany
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pobieranie danych z formularza
    $name = $_POST['name'] ?? ''; // Nazwa użytkownika
    $email = $_POST['email'] ?? ''; // Adres e-mail użytkownika
    $message = $_POST['message'] ?? ''; // Treść wiadomości

    // Walidacja danych (opcjonalnie)
    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(["status" => "error", "message" => "Wszystkie pola są wymagane."]);
        exit;
    }

    // Przygotowanie tematu i treści wiadomości
    $subject = "Nowa wiadomość z formularza kontaktowego";
    $body = "Nazwa: $name\nE-mail: $email\nWiadomość:\n$message";

    // Nagłówki wiadomości e-mail
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Wysłanie wiadomości
//     if (mail($to, $subject, $body, $headers)) {
//         echo json_encode(["status" => "success"]);
//     } else {
//         echo json_encode(["status" => "error", "message" => "Wystąpił problem z wysłaniem wiadomości."]);
//     }
// } else {
//     echo json_encode(["status" => "error", "message" => "Niepoprawne żądanie."]);
// }


header('Content-Type: application/json');

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["status" => "success", "message" => "Wiadomość została wysłana pomyślnie!"]);
} else {
    echo json_encode(["status" => "error", "message" => "Błąd wysyłki wiadomości. Spróbuj ponownie."]);
}
exit();
?> 