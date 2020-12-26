<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
      <title>Virtual Pet-1</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.dom.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.sound.min.js"></script>
      <script src="p5.play.js"></script>

      
      <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-database.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDJIPSgGh4yYdzepcD_sNZR9TQb48yZsFA",
    authDomain: "virtual-pet-fa4af.firebaseapp.com",
    databaseURL: "https://virtual-pet-fa4af-default-rtdb.firebaseio.com",
    projectId: "virtual-pet-fa4af",
    storageBucket: "virtual-pet-fa4af.appspot.com",
    messagingSenderId: "126801444121",
    appId: "1:126801444121:web:cdf1ba1b76117ac783d988"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>

      <link rel="stylesheet" type="text/css" href="style.css"/>
    </head>
    <body>
      <script src="sketch.js"></script>
    </body>
  </html>
