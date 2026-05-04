const targetYear = 1956;
const input = document.getElementById('userGuess');
const btn = document.getElementById('checkBtn');
const feedback = document.getElementById('feedback');
const progressBar = document.getElementById('progressBar');

btn.addEventListener('click', () => {
    const guess = parseInt(input.value);
    
    if (isNaN(guess)) {
        feedback.textContent = "Veuillez entrer une année valide.";
        return;
    }

    // Logique "C'est plus / C'est moins"
if (guess < targetYear) {
        feedback.textContent = "C'EST PLUS !";
        feedback.style.color = "white";
    } else if (guess > targetYear) {
        feedback.textContent = "C'EST MOINS !";
        feedback.style.color = "white";
    } else {
        feedback.innerHTML = "BRAVO ! <br><span style='font-size: 1.5rem'>1956 : Conférence de Dartmouth</span>";
        feedback.style.color = "#00FFFF"; // Cyan pour le succès
        progressBar.style.width = "100%";
    }

function updateProgress(guess, target) {
    // Calcul de proximité arbitraire pour la barre (0-100%)
    let diff = Math.abs(target - guess);
    let progress = Math.max(0, 100 - (diff / 20 * 100)); // Précision sur une fenêtre de 20 ans
    progressBar.style.width = `${progress}%`;
}
