<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="reset.css" rel="stylesheet">
    <link href="style.css" rel="stylesheet">
    <link href="contact.css" rel="stylesheet">
    <title>Document</title>
</head>

<body>
    <?php include "../BozorHome/header.php" ?>
    <div class="form">
        <h2>Contactez-moi</h2>

        <div class="card_form">
            <label>Nom</label>
            <input type="text">
            <label>Email</label>
            <input type="email">
            <label>Message</label>
            <textarea id="message"  rows="10" cols="50" name="message" placeholder="Bonjour, je vous contacte car...." required></textarea>
            <button type="submit">Envoyer</button>
        </div>

    </div>
    <?php include "../BozorHome/footer.php" ?>

</body>

</html>