document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); 
        const name = document.getElementById('name').value;
        const phoneNumber = document.getElementById('phonenumber').value;
        const text = document.getElementById('text').value;
        const crowdStrength = document.getElementById('crowdstrength').value;
        const date = document.getElementById('date').value;

        const message = `Name: ${name}%0APhone Number: ${phoneNumber}%0AText: ${text}%0ACrowd Strength: ${crowdStrength}%0ADate: ${date}`;

        // Replace ournumber by your own number//
        const whatsappNumber = '8531810963'; 

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

        window.open(whatsappUrl, '_blank');
    });
});
