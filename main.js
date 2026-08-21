// HTML elementlarini JS ga chaqirib olamiz
const sarlavha = document.getElementById("sarlavha");
const tugma = document.getElementById("tugma");

// Tugma bosilganda ishlaydigan funksiya
tugma.addEventListener("click", function() {
    // Matnni o'zgartiramiz
    sarlavha.textContent = "Salom! Matn muvaffaqiyatli o'zgardi!";
    
    // Konsolga xabar chiqaramiz
    console.log("Tugma bosildi va matn o'zgardi.");
});