// Wortlisten (alle in Kleinbuchstaben)
const WORD_LISTS = {
    noun: [
        "haus", "baum", "mutter", "vater", "kind", "schule", "buch", "stift", 
        "tisch", "fenster", "tür", "bett", "auto", "fahrrad", "ball", "blume", 
        "sonne", "mond", "stern", "wolke", "regen", "schnee", "hund", "katze", 
        "maus", "fisch", "vogel", "pferd", "kuh", "schaf", "brot", "milch", 
        "wasser", "apfel", "banane", "orange", "keks", "kuchen", "teller", 
        "glas", "messer", "gabel", "löffel", "jacke", "hose", "hut", "schuh", 
        "socke", "hand", "fuß", "kopf", "auge", "ohr", "nase", "mund", "haar", 
        "zahn", "garten", "park", "straße", "brücke", "fluss", "see", "berg", 
        "tal", "wald", "wiese", "uhr", "tag", "nacht", "morgen", "abend", 
        "jahr", "monat", "woche", "freund", "lehrer", "arzt", "polizist", 
        "feuer", "licht", "farbe", "bild", "lied", "spiel", "zahl", "buchstabe", 
        "name", "adresse", "telefon", "brief", "paket", "geschenk", "feiertag", 
        "geburtstag", "weihnachten", "sommer", "winter", "frühling", "herbst"
    ],
    adjective: [
        "groß", "klein", "schnell", "langsam", "hell", "dunkel", "fröhlich", 
        "traurig", "bunt", "rund", "eckig", "schwer", "leicht", "hart", "weich", 
        "warm", "kalt", "heiß", "kühl", "neu", "alt", "jung", "altmodisch", 
        "modern", "sauber", "schmutzig", "ordentlich", "unordentlich", "laut", 
        "leise", "stark", "schwach", "hoch", "niedrig", "lang", "kurz", "breit", 
        "schmal", "dick", "dünn", "voll", "leer", "reich", "arm", "teuer", 
        "billig", "gut", "schlecht", "richtig", "falsch", "einfach", "schwierig", 
        "sicher", "gefährlich", "gesund", "krank", "müde", "wach", "hungrig", 
        "satt", "durstig", "nass", "trocken", "glatt", "rau", "süß", "sauer", 
        "salzig", "bitter", "scharf", "frisch", "faul", "lebendig", "tot", 
        "lauter", "still", "aufgeregt", "ruhig", "neugierig", "gleichgültig", 
        "geduldig", "ungeduldig", "freundlich", "unfreundlich", "höflich", 
        "unhöflich", "fleißig", "faul", "klug", "dumm", "mutig", "ängstlich", 
        "zufrieden", "unzufrieden", "glücklich", "unglücklich", "gelassen"
    ],
    verb: [
        "gehen", "spielen", "lesen", "schreiben", "malen", "lachen", "springen", 
        "sehen", "hören", "sagen", "fragen", "antworten", "kommen", "laufen", 
        "rennen", "stehen", "sitzen", "liegen", "schlafen", "träumen", "essen", 
        "trinken", "kochen", "backen", "waschen", "putzen", "räumen", "bauen", 
        "basteln", "zeichnen", "rechnen", "zählen", "singen", "tanzen", 
        "musizieren", "pfeifen", "klatschen", "winken", "zeigen", "geben", 
        "nehmen", "halten", "tragen", "bringen", "holen", "kaufen", "verkaufen", 
        "bezahlen", "öffnen", "schließen", "drücken", "ziehen", "schieben", 
        "heben", "senken", "drehen", "biegen", "brechen", "reparieren", 
        "arbeiten", "lernen", "lehren", "helfen", "stören", "warten", "suchen", 
        "finden", "verlieren", "gewinnen", "verstecken", "entdecken", "denken", 
        "glauben", "wissen", "kennen", "verstehen", "erklären", "erzählen", 
        "versprechen", "vergessen", "erinnern", "hoffen", "fürchten", "lieben", 
        "mögen", "hassen", "dürfen", "können", "müssen", "sollen", "wollen", 
        "werden", "sein", "haben"
    ],
    pronoun: [
        "ich", "du", "er", "sie", "es", "wir", "ihr", "mein", "dein", "sein", 
        "ihr", "unser", "euer", "mich", "dich", "sich", "ihn", "uns", "euch", 
        "jemand", "niemand", "etwas", "nichts", "alles", "jeder", "jede", 
        "jedes", "mancher", "manche", "manches", "welcher", "welche", "welches", 
        "dieser", "diese", "dieses", "jener", "jene", "jenes", "derselbe", 
        "dieselbe", "dasselbe", "solcher", "solche", "solches", "irgendwer", 
        "irgendetwas", "einiger", "einige", "einiges", "anderer", "andere", 
        "anderes"
    ],
    particle: [
        "nicht", "auch", "noch", "schon", "immer", "oft", "vielleicht", 
        "gerade", "besonders", "doch", "denn", "ja", "nein", "ziemlich", 
        "recht", "ganz", "etwas", "etwa", "fast", "beinahe", "eben", "genau", 
        "wirklich", "eigentlich", "sogar", "selbst", "einfach", "bloß", "nur", 
        "erst", "immerhin", "jedenfalls", "sowieso", "trotzdem", "deshalb", 
        "daher", "darum", "also", "folglich", "dennoch", "allerdings", "jedoch", 
        "aber", "oder", "und", "sondern", "beziehungsweise", "entweder", 
        "weder", "ob", "dass", "damit", "obwohl", "wenn", "als", "wie", 
        "weil", "da", "falls", "sobald", "bis", "seit", "während", "bevor", 
        "nachdem", "indem", "ohne", "mit", "bei", "von", "zu", "aus", "durch", 
        "für", "gegen", "um", "an", "auf", "hinter", "neben", "in", "über", 
        "unter", "vor", "zwischen", "links", "rechts", "oben", "unten", 
        "vorne", "hinten", "innen", "außen", "heute", "gestern", "morgen", 
        "jetzt", "gleich", "später", "früher"
    ]
};

// Spielzustand
const GameState = {
    currentWord: '',
    currentType: '',
    score: 0,
    lives: 3,
    streak: 0,
    bestStreak: 0,
    correctAnswers: 0,
    totalWords: 30,
    gameActive: false
};

// DOM-Elemente
const elements = {
    wordText: document.getElementById('word-text'),
    score: document.getElementById('score'),
    streakCounter: document.getElementById('streak-counter'),
    correctCounter: document.getElementById('correct-counter'),
    progressFill: document.getElementById('progress-fill'),
    progressText: document.getElementById('progress-text'),
    feedbackMessage: document.getElementById('feedback-message'),
    feedbackDetails: document.getElementById('feedback-details'),
    heartsContainer: document.getElementById('hearts'),
    apiLog: document.getElementById('api-log-content'),
    connectedStatus: document.getElementById('connected-status'),
    startBtn: document.getElementById('start-btn'),
    hintBtn: document.getElementById('hint-btn'),
    skipBtn: document.getElementById('skip-btn'),
    restartBtn: document.getElementById('restart-btn'),
    closeBtn: document.getElementById('close-btn'),
    endModal: document.getElementById('end-modal'),
    modalIcon: document.getElementById('modal-icon'),
    modalTitle: document.getElementById('modal-title'),
    finalScore: document.getElementById('final-score'),
    finalCorrect: document.getElementById('final-correct'),
    finalStreak: document.getElementById('final-streak'),
    finalLives: document.getElementById('final-lives'),
    finalAccuracy: document.getElementById('final-accuracy'),
    apiStatus: document.getElementById('api-status-text'),
    apiSpinner: document.getElementById('api-spinner'),
    apiStatusContainer: document.getElementById('api-status')
};

// Audio-Elemente
const audioElements = {
    correct: document.getElementById('correct-sound'),
    error: document.getElementById('error-sound'),
    roundwon: document.getElementById('roundwon-sound'),
    roundlost: document.getElementById('roundlost-sound'),
    gamewon: document.getElementById('gamewon-sound'),
    gamelost: document.getElementById('gamelost-sound'),
    fallbackCorrect: document.getElementById('fallback-correct'),
    fallbackError: document.getElementById('fallback-error'),
    fallbackWin: document.getElementById('fallback-win')
};

// Event Listener einrichten
function setupEventListeners() {
    // Kategorie-Buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (!GameState.gameActive) return;
            const selectedType = e.currentTarget.dataset.type;
            checkAnswer(selectedType);
        });
    });
    
    // Steuerungs-Buttons
    elements.startBtn.addEventListener('click', startGame);
    elements.hintBtn.addEventListener('click', showHint);
    elements.skipBtn.addEventListener('click', skipWord);
    elements.restartBtn.addEventListener('click', restartGame);
    elements.closeBtn.addEventListener('click', closeModal);
    
    console.log('Event-Listener eingerichtet');
}

// Audio abspielen mit Fallback
function playSound(audioName, useFallback = false) {
    return new Promise((resolve) => {
        let audio;
        
        if (useFallback) {
            switch(audioName) {
                case 'correct': audio = audioElements.fallbackCorrect; break;
                case 'error': audio = audioElements.fallbackError; break;
                case 'win': audio = audioElements.fallbackWin; break;
                default: audio = audioElements.fallbackCorrect;
            }
        } else {
            audio = audioElements[audioName];
        }
        
        if (!audio) {
            console.warn(`Audio ${audioName} nicht gefunden`);
            resolve();
            return;
        }
        
        audio.currentTime = 0;
        audio.play().then(resolve).catch(error => {
            console.warn(`Audio-Fehler für ${audioName}:`, error.message);
            // Fallback versuchen
            if (!useFallback) {
                playSound(audioName, true).then(resolve);
            } else {
                resolve();
            }
        });
    });
}

// Spiel starten
function startGame() {
    console.log('Starte Spiel...');
    
    GameState.gameActive = true;
    GameState.score = 0;
    GameState.lives = 3;
    GameState.streak = 0;
    GameState.bestStreak = 0;
    GameState.correctAnswers = 0;
    
    updateDisplays();
    updateHearts();
    
    elements.startBtn.disabled = true;
    elements.hintBtn.disabled = false;
    elements.skipBtn.disabled = false;
    
    document.querySelectorAll('.category-btn').forEach(btn => btn.disabled = false);
    
    elements.feedbackMessage.textContent = 'Wähle die richtige Wortart!';
    elements.feedbackDetails.textContent = '';
    
    getNextWord();
    logToAPI('Spiel gestartet');
}

// Nächstes Wort holen
function getNextWord() {
    if (GameState.correctAnswers >= GameState.totalWords) {
        endGame(true);
        return;
    }
    
    if (GameState.lives <= 0) {
        endGame(false);
        return;
    }
    
    const types = ['noun', 'adjective', 'verb', 'pronoun', 'particle'];
    const randomType = types[Math.floor(Math.random() * types.length)];
    const wordList = WORD_LISTS[randomType];
    
    if (!wordList || wordList.length === 0) {
        GameState.currentWord = 'fehler';
        GameState.currentType = randomType;
    } else {
        const randomIndex = Math.floor(Math.random() * wordList.length);
        GameState.currentWord = wordList[randomIndex];
        GameState.currentType = randomType;
    }
    
    elements.wordText.textContent = GameState.currentWord.toLowerCase();
    
    // Animation
    elements.wordText.style.transform = 'scale(1.1)';
    setTimeout(() => {
        elements.wordText.style.transform = 'scale(1)';
    }, 200);
}

// Antwort prüfen
function checkAnswer(selectedType) {
    if (!GameState.gameActive) return;
    
    const isCorrect = selectedType === GameState.currentType;
    
    if (isCorrect) {
        handleCorrectAnswer();
    } else {
        handleWrongAnswer(selectedType);
    }
    
    updateDisplays();
}

// Richtige Antwort
function handleCorrectAnswer() {
    GameState.score += 10;
    GameState.streak++;
    if (GameState.streak > GameState.bestStreak) {
        GameState.bestStreak = GameState.streak;
    }
    GameState.correctAnswers++;
    
    playSound('correct');
    
    elements.feedbackMessage.innerHTML = '<span style="color: #10b981; font-weight: bold;">✓ Richtig!</span>';
    elements.feedbackDetails.textContent = `"${GameState.currentWord}" ist ein ${getTypeName(GameState.currentType)}`;
    
    // Bonus-Leben bei 5er-Serie
    if (GameState.streak % 5 === 0 && GameState.lives < 5) {
        GameState.lives++;
        updateHearts();
        playSound('roundwon');
        
        elements.heartsContainer.style.transform = 'scale(1.2)';
        setTimeout(() => {
            elements.heartsContainer.style.transform = 'scale(1)';
        }, 300);
        
        logToAPI(`5er-Serie erreicht! +1 Leben (${GameState.lives}/5)`);
    }
    
    // Nächstes Wort nach kurzer Pause
    setTimeout(getNextWord, 1500);
}

// Falsche Antwort
function handleWrongAnswer(selectedType) {
    GameState.streak = 0;
    GameState.lives--;
    
    playSound('error');
    
    elements.feedbackMessage.innerHTML = '<span style="color: #e63946; font-weight: bold;">✗ Falsch!</span>';
    elements.feedbackDetails.textContent = `"${GameState.currentWord}" ist ein ${getTypeName(GameState.currentType)}, nicht ${getTypeName(selectedType)}`;
    
    updateHearts();
    
    if (GameState.lives <= 0) {
        setTimeout(() => endGame(false), 1500);
    } else {
        setTimeout(getNextWord, 1500);
    }
}

// Tipp anzeigen
function showHint() {
    if (!GameState.gameActive) return;
    
    elements.hintBtn.disabled = true;
    GameState.score = Math.max(0, GameState.score - 5);
    
    const hint = GameState.currentWord.charAt(0).toUpperCase();
    elements.feedbackMessage.innerHTML = `<span style="color: #f59e0b; font-weight: bold;">💡 Tipp: Beginnt mit "${hint}"</span>`;
    elements.feedbackDetails.textContent = '5 Punkte abgezogen';
    
    updateDisplays();
    
    // Reaktiviere Button nach 3 Sekunden
    setTimeout(() => {
        elements.hintBtn.disabled = false;
    }, 3000);
}

// Wort überspringen
function skipWord() {
    if (!GameState.gameActive) return;
    
    GameState.score = Math.max(0, GameState.score - 10);
    GameState.streak = 0;
    
    elements.feedbackMessage.innerHTML = '<span style="color: #6c757d; font-weight: bold;">⏭️ Übersprungen</span>';
    elements.feedbackDetails.textContent = '10 Punkte abgezogen';
    
    updateDisplays();
    
    playSound('roundlost');
    getNextWord();
}

// Displays aktualisieren
function updateDisplays() {
    elements.score.textContent = GameState.score;
    elements.streakCounter.textContent = GameState.streak;
    elements.correctCounter.textContent = `${GameState.correctAnswers}/${GameState.totalWords}`;
    
    const progressPercent = (GameState.correctAnswers / GameState.totalWords) * 100;
    elements.progressFill.style.width = `${progressPercent}%`;
    elements.progressText.textContent = `${GameState.correctAnswers}/${GameState.totalWords} Wörter`;
}

// Herzen aktualisieren
function updateHearts() {
    const hearts = elements.heartsContainer.querySelectorAll('i');
    hearts.forEach((heart, index) => {
        if (index < GameState.lives) {
            heart.className = 'fas fa-heart live';
        } else {
            heart.className = 'fas fa-heart lost';
        }
    });
}

// Typnamen für Anzeige
function getTypeName(type) {
    const names = {
        noun: 'Nomen',
        adjective: 'Adjektiv',
        verb: 'Verb',
        pronoun: 'Pronomen',
        particle: 'Partikel'
    };
    return names[type] || type;
}

// Spiel beenden
function endGame(isWin) {
    GameState.gameActive = false;
    elements.hintBtn.disabled = true;
    elements.skipBtn.disabled = true;
    document.querySelectorAll('.category-btn').forEach(btn => btn.disabled = true);
    
    if (isWin) {
        playSound('gamewon');
    } else {
        playSound('gamelost');
    }
    
    showEndScreen(isWin);
    sendToLearningView(isWin);
}

// Endscreen anzeigen
function showEndScreen(isWin) {
    const accuracy = GameState.totalWords > 0 ? 
        Math.round((GameState.correctAnswers / GameState.totalWords) * 100) : 0;
    
    elements.finalScore.textContent = GameState.score;
    elements.finalCorrect.textContent = `${GameState.correctAnswers}/${GameState.totalWords}`;
    elements.finalStreak.textContent = GameState.bestStreak;
    elements.finalLives.textContent = GameState.lives;
    elements.finalAccuracy.textContent = `${accuracy}%`;
    
    const modalHeader = elements.endModal.querySelector('.modal-header');
    if (isWin) {
        elements.modalIcon.className = 'fas fa-trophy';
        elements.modalIcon.style.color = '#f59e0b';
        elements.modalTitle.textContent = 'Herzlichen Glückwunsch!';
        modalHeader.className = 'modal-header win';
    } else {
        elements.modalIcon.className = 'fas fa-heart-broken';
        elements.modalIcon.style.color = '#e63946';
        elements.modalTitle.textContent = 'Spiel beendet!';
        modalHeader.className = 'modal-header lose';
    }
    
    elements.endModal.style.display = 'flex';
}

// An LearningView.org senden
async function sendToLearningView(isWin) {
    elements.apiStatus.textContent = 'Ergebnisse werden verarbeitet...';
    elements.apiStatusContainer.className = 'api-status sending';
    elements.apiSpinner.style.display = 'block';
    
    try {
        // Spieler-ID generieren
        let playerId = localStorage.getItem('wortarten-player-id');
        if (!playerId) {
            playerId = 'player_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
            localStorage.setItem('wortarten-player-id', playerId);
        }
        
        const gameData = {
            game: 'wortarten-trainer',
            playerId: playerId,
            score: GameState.score,
            correctAnswers: GameState.correctAnswers,
            totalQuestions: GameState.totalWords,
            bestStreak: GameState.bestStreak,
            livesRemaining: GameState.lives,
            win: isWin,
            timestamp: new Date().toISOString(),
            accuracy: Math.round((GameState.correctAnswers / GameState.totalWords) * 100)
        };
        
        logToAPI('📤 Spiele beendet');
        logToAPI(`Punktzahl: ${gameData.score}`);
        logToAPI(`Genauigkeit: ${gameData.accuracy}%`);
        
        // 2 Sekunden warten (Simulation)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Erfolg anzeigen
        elements.apiStatus.textContent = '✓ Ergebnisse gespeichert!';
        elements.apiSpinner.style.display = 'none';
        elements.apiStatusContainer.className = 'api-status success';
        elements.connectedStatus.innerHTML = '<i class="fas fa-check"></i><span>Erfolgreich</span>';
        elements.connectedStatus.classList.add('connected');
        
        logToAPI('✅ Ergebnisse lokal gespeichert');
        saveResultsLocally(gameData);
        
    } catch (error) {
        elements.apiStatus.textContent = '✗ Fehler beim Speichern';
        elements.apiSpinner.style.display = 'none';
        elements.apiStatusContainer.className = 'api-status error';
        
        logToAPI('❌ Fehler: ' + error.message);
    }
}

// Ergebnisse lokal speichern
function saveResultsLocally(gameData) {
    try {
        let history = JSON.parse(localStorage.getItem('wortarten-game-history') || '[]');
        history.unshift(gameData);
        if (history.length > 10) {
            history = history.slice(0, 10);
        }
        localStorage.setItem('wortarten-game-history', JSON.stringify(history));
        localStorage.setItem('wortarten-last-game', JSON.stringify(gameData));
    } catch (e) {
        console.error('Fehler beim lokalen Speichern:', e);
    }
}

// Log in API-Log anzeigen
function logToAPI(message) {
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = `[${timestamp}] ${message}\n`;
    elements.apiLog.textContent = logEntry + elements.apiLog.textContent;
    
    // Alte Logs begrenzen
    const logs = elements.apiLog.textContent.split('\n');
    if (logs.length > 10) {
        elements.apiLog.textContent = logs.slice(0, 10).join('\n');
    }
}

// Spiel neustarten
function restartGame() {
    elements.endModal.style.display = 'none';
    elements.startBtn.disabled = false;
    elements.feedbackMessage.textContent = 'Klicke auf "Spiel starten" um zu beginnen!';
    elements.feedbackDetails.textContent = '';
    elements.wordText.textContent = 'Bereit?';
    updateDisplays();
}

// Modal schließen
function closeModal() {
    elements.endModal.style.display = 'none';
}

// Spiel initialisieren
function initializeGame() {
    console.log('Initialisiere Spiel...');
    
    setupEventListeners();
    
    // Initiale Nachricht
    logToAPI('Wortarten Wettkampf geladen');
    logToAPI('Klicke auf "Spiel starten" um zu beginnen');
    
    console.log('Spiel erfolgreich initialisiert');
    console.log('Wortarten verfügbar:', {
        Nomen: WORD_LISTS.noun.length,
        Adjektive: WORD_LISTS.adjective.length,
        Verben: WORD_LISTS.verb.length,
        Pronomen: WORD_LISTS.pronoun.length,
        Partikeln: WORD_LISTS.particle.length
    });
}

// Spiel starten wenn DOM geladen ist
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeGame);
} else {
    initializeGame();
}
