document.getElementById("encryptButton").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value;
    const encryptedText = encryptText(inputText);
    document.getElementById("outputText").value = encryptedText;
    document.getElementById("copyButton").style.display = "block"; // Muestra el botón de copiado
});

document.getElementById("decryptButton").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value;
    const decryptedText = decryptText(inputText);
    document.getElementById("outputText").value = decryptedText;
    document.getElementById("copyButton").style.display = "block"; // Muestra el botón de copiado
});

document.getElementById("copyButton").addEventListener("click", function() {
    const outputText = document.getElementById("outputText").value;
    copiarAlPortapapeles(outputText);
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand('copy');
});

function encryptText(text) {
    const encryptionMap = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };

    return text.split('').map(char => encryptionMap[char] || char).join('');
}

function decryptText(text) {
    const decryptionMap = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };

    let decryptedText = text;
    for (let key in decryptionMap) {
        const regex = new RegExp(key, "g");
        decryptedText = decryptedText.replace(regex, decryptionMap[key]);
    }

    return decryptedText;
}

function copiarAlPortapapeles(texto) {
    navigator.clipboard.writeText(texto).then(function() {
        alert('Texto copiado al portapapeles');
    }, function(err) {
        alert('Error al copiar: ', err);
    });
}
