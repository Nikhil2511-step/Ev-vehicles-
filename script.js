document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('#contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents the default form submission

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const location = document.getElementById('location').value.trim();
        const message = document.getElementById('message').value.trim();
        const latitude = document.getElementById('latitude').value;
        const longitude = document.getElementById('longitude').value;

        if (!name || !email || !location || !message) {
            alert('Please fill in all fields.');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert(`Thank you, ${name}! Your request has been submitted with location coordinates: ${latitude}, ${longitude}.`);

        form.reset();
    });

    window.initMap = function () {
        const map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 19.0760, lng: 72.8777 }, // Default to Mumbai
            zoom: 10
        });

        const marker = new google.maps.Marker({
            position: { lat: 19.0760, lng: 72.8777 },
            map: map,
            draggable: true
        });

        google.maps.event.addListener(marker, 'position_changed', function () {
            const position = marker.getPosition();
            document.getElementById('latitude').value = position.lat();
            document.getElementById('longitude').value = position.lng();
        });
    };
});
