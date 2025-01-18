<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EV Recharge at Your Location | One Step</title>
    <meta name="description" content="Convenient EV charging solutions at your home, office, or on the go. Request a charge with One Step today!">
    <link rel="stylesheet" href="styles.css">
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
</head>

<body>
    <header>
        <div class="logo">
            <h1>ONE STEP</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="login.html">Login</a></li>
            </ul>
        </nav>
    </header>

    <section id="home">
        <div class="hero">
            <h2>Convenient EV Charging</h2>
            <h2>At Your Location</h2>
            <p>Request our charging van to recharge your electric vehicle at your home, office, or any location you choose.</p>
            <a href="#contact" class="cta-button">Request a Charge</a>
        </div>
    </section>

    <section id="services">
        <h2>Our Services</h2>
        <div class="services-container">
            <div class="service">
                <h3>Home Charging</h3>
                <p>We bring our charging van to your home to recharge your EV while you relax.</p>
            </div>
            <div class="service">
                <h3>Workplace Charging</h3>
                <p>Stay productive while we charge your EV at your office parking spot.</p>
            </div>
            <div class="service">
                <h3>Emergency Charging</h3>
                <p>Stranded without power? Our emergency service will get you back on the road.</p>
            </div>
        </div>
    </section>

    <section id="about">
        <h2>About Us</h2>
        <p>We are dedicated to making electric vehicle ownership more convenient by bringing the charge to you. Our fleet of mobile charging vans is equipped with high-capacity batteries, ready to recharge your EV wherever you are.</p>
    </section>

    <section id="contact">
        <h2>Contact Us</h2>
        <form id="contact-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required>

            <label for="location">Location:</label>
            <input type="text" id="location" name="location" placeholder="Your location (e.g., Mumbai)" required>

            <div id="map"></div> <!-- Google Maps -->
            <input type="hidden" id="latitude" name="latitude">
            <input type="hidden" id="longitude" name="longitude">

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" placeholder="Your message or request" required></textarea>

            <button type="submit">Send Request</button>
        </form>
    </section>

    <footer>
        <p>&copy; 2024 EV Recharge. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>

</html>
