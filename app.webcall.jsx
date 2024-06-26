document.addEventListener('DOMContentLoaded', function() {
    var phoneNumbers = document.querySelectorAll('.phone'); // Replace with the actual class or selector

    phoneNumbers.forEach(function(phoneNumber) {
        var number = phoneNumber.innerText.trim();
        var link = document.createElement('a');
        link.href = `https://bitrix-qa.doocti.com/`; // Replace with your web call service URL
        link.innerText = number;
        phoneNumber.parentNode.replaceChild(link, phoneNumber);
    });
});


