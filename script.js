class WordGame {
    constructor() {
        this.currentWord = '';
        this.currentType = '';
        this.score = 0;
        this.lives = 3;
        this.streak = 0;
        this.bestStreak = 0;
        this.correctAnswers = 0;
        this.totalWords = 30;
        this.gameActive = false;
        this.words = {
            noun: [],
            adjective: [],
            verb: [],
            pronoun: [],
            particle: []
        };
        
        this.initializeElements();
        this.loadWordLists();
        this.setupEventListeners();
        this.setupAudio();
        this.generatePlayerId();
    }
    
    initializeElements() {
        this.wordDisplay = document.getElementById('word-text');
        this.scoreDisplay = document.getElementById('score');
        this.streakDisplay = document.getElementById('streak-counter');
        this.correctDisplay = document.getElementById('correct-counter');
        this.progressFill = document.getElementById('progress-fill');
        this.progressText = document.getElementById('progress-text');
        this.feedbackMessage = document.getElementById('feedback-message');
        this.feedbackDetails = document.getElementById('feedback-details');
        this.heartsContainer = document.getElementById('hearts');
        this.apiLog = document.getElementById('api-log-content');
        this.connectedStatus = document.getElementById('connected-status');
        
        this.buttons = {
            start: document.getElementById('start-btn'),
            hint: document.getElementById('hint-btn'),
            skip: document.getElementById('skip-btn'),
            restart: document.getElementById('restart-btn'),
            close: document.getElementById('close-btn')
        };
        
        this.categoryBtns = document.querySelectorAll('.category-btn');
        
        // Endscreen Elements
        this.endModal = document.getElementById('end-modal');
        this.modalIcon = document.getElementById('modal-icon');
        this.modalTitle = document.getElementById('modal-title');
        this.finalScore = document.getElementById('final-score');
        this.finalCorrect = document.getElementById('final-correct');
        this.finalStreak = document.getElementById('final-streak');
        this.finalLives = document.getElementById('final-lives');
        this.finalAccuracy = document.getElementById('final-accuracy');
        this.apiStatus = document.getElementById('api-status-text');
        this.apiSpinner = document.getElementById('api-spinner');
        this.apiStatusContainer = document.getElementById('api-status');
    }
    
    setupAudio() {
        this.audio = {
            correct: new Audio('audio/correct.wav'),
            error: new Audio('audio/error.wav'),
            roundlost: new Audio('audio/roundlost.wav'),
            roundwon: new Audio('audio/roundwon.wav'),
            gamelost: new Audio('audio/gamelost.wav'),
            gamewon: new Audio('audio/gamewon.wav')
        };
        
        // Audio-Einstellungen
        Object.values(this.audio).forEach(audio => {
            audio.volume = 0.7;
            audio.preload = 'auto';
        });
    }
    
    async loadWordLists() {
        try {
            // Für GitHub: Hier könnten die Wortlisten geladen werden
            // Beispiel-Daten (werden später ersetzt durch TXT-Dateien)
            this.words.noun = ["haus", "baum", "mutter", "vater", "kind", "schule", "buch", "stift", "tisch", "fenster", "tür", "bett", "auto", "fahrrad", "ball", "blume", "sonne", "mond", "stern", "wolke", "regen", "schnee", "hund", "katze", "maus", "fisch", "vogel", "pferd", "kuh", "schaf", "brot", "milch", "wasser", "apfel", "banane", "orange", "keks", "kuchen", "teller", "glas", "messer", "gabel", "löffel", "jacke", "hose", "hut", "schuh", "socke", "hand", "fuß", "kopf", "auge", "ohr", "nase", "mund", "haar", "zahn", "garten", "park", "straße", "brücke", "fluss", "see", "berg", "tal", "wald", "wiese", "uhr", "tag", "nacht", "morgen", "abend", "jahr", "monat", "woche", "freund", "lehrer", "arzt", "polizist", "feuer", "licht", "farbe", "bild", "lied", "spiel", "zahl", "buchstabe", "name", "adresse", "telefon", "brief", "paket", "geschenk", "feiertag", "geburtstag", "weihnachten", "sommer", "winter", "frühling", "herbst"];
            this.words.adjective = ["groß", "klein", "schnell", "langsam", "hell", "dunkel", "fröhlich", "traurig", "bunt", "rund", "eckig", "schwer", "leicht", "hart", "weich", "warm", "kalt", "heiß", "kühl", "neu", "alt", "jung", "altmodisch", "modern", "sauber", "schmutzig", "ordentlich", "unordentlich", "laut", "leise", "stark", "schwach", "hoch", "niedrig", "lang", "kurz", "breit", "schmal", "dick", "dünn", "voll", "leer", "reich", "arm", "teuer", "billig", "gut", "schlecht", "richtig", "falsch", "einfach", "schwierig", "sicher", "gefährlich", "gesund", "krank", "müde", "wach", "hungrig", "satt", "durstig", "nass", "trocken", "glatt", "rau", "süß", "sauer", "salzig", "bitter", "scharf", "frisch", "faul", "lebendig", "tot", "lauter", "still", "aufgeregt", "ruhig", "neugierig", "gleichgültig", "geduldig", "ungeduldig", "freundlich", "unfreundlich", "höflich", "unhöflich", "fleißig", "faul", "klug", "dumm", "mutig", "ängstlich", "zufrieden", "unzufrieden", "glücklich", "unglücklich", "aufgeregt", "gelassen"];
            this.words.verb = ["gehen", "spielen", "lesen", "schreiben", "malen", "lachen", "springen", "sehen", "hören", "sagen", "fragen", "antworten", "kommen", "gehen", "laufen", "rennen", "stehen", "sitzen", "liegen", "schlafen", "träumen", "essen", "trinken", "kochen", "backen", "waschen", "putzen", "räumen", "bauen", "basteln", "zeichnen", "rechnen", "zählen", "singen", "tanzen", "musizieren", "pfeifen", "klatschen", "winken", "zeigen", "geben", "nehmen", "halten", "tragen", "bringen", "holen", "kaufen", "verkaufen", "bezahlen", "öffnen", "schließen", "drücken", "ziehen", "schieben", "heben", "senken", "drehen", "biegen", "brechen", "reparieren", "arbeiten", "lernen", "lehren", "helfen", "stören", "warten", "suchen", "finden", "verlieren", "gewinnen", "verlieren", "gewinnen", "verstecken", "entdecken", "denken", "glauben", "wissen", "kennen", "verstehen", "erklären", "erzählen", "versprechen", "vergessen", "erinnern", "hoffen", "fürchten", "lieben", "mögen", "hassen", "dürfen", "können", "mögen", "müssen", "sollen", "wollen", "werden", "sein", "haben"];
            this.words.pronoun = ["ich", "du", "er", "sie", "es", "wir", "ihr", "sie", "mein", "dein", "sein", "ihr", "sein", "unser", "euer", "ihr", "mich", "dich", "sich", "ihn", "sie", "es", "uns", "euch", "sich", "jemand", "niemand", "etwas", "nichts", "alles", "jeder", "jede", "jedes", "mancher", "manche", "manches", "welcher", "welche", "welches", "dieser", "diese", "dieses", "jener", "jene", "jenes", "derselbe", "dieselbe", "dasselbe", "solcher", "solche", "solches", "welcher", "welche", "welches", "irgendwer", "irgendetwas", "einiger", "einige", "einiges", "anderer", "andere", "anderes"];
            this.words.particle = ["nicht", "auch", "noch", "schon", "immer", "oft", "vielleicht", "gerade", "besonders", "doch", "denn", "ja", "nein", "vielleicht", "ziemlich", "recht", "ganz", "etwas", "etwa", "fast", "beinahe", "eben", "genau", "gerade", "wirklich", "eigentlich", "sogar", "selbst", "besonders", "einfach", "bloß", "nur", "erst", "schon", "noch", "immerhin", "jedenfalls", "sowieso", "trotzdem", "deshalb", "daher", "darum", "also", "folglich", "dennoch", "allerdings", "jedoch", "aber", "oder", "und", "denn", "sondern", "beziehungsweise", "entweder", "weder", "ob", "dass", "damit", "obwohl", "wenn", "als", "wie", "weil", "da", "falls", "sobald", "bis", "seit", "während", "bevor", "nachdem", "indem", "ohne", "mit", "bei", "von", "zu", "aus", "durch", "für", "gegen", "um", "an", "auf", "hinter", "neben", "in", "über", "unter", "vor", "zwischen", "links", "rechts", "oben", "unten", "vorne", "hinten", "innen", "außen", "heute", "gestern", "morgen", "jetzt", "gleich", "später", "früher"];
            
            this.logToAPI('Wortlisten erfolgreich geladen');
        } catch (error) {
            console.error('Fehler beim Laden der Wortlisten:', error);
            this.logToAPI('Fehler beim Laden der Wortlisten');
        }
    }
    
    setupEventListeners() {
        // Kategorie-Buttons
        this.categoryBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (!this.gameActive) return;
                const selectedType = e.currentTarget.dataset.type;
                this.checkAnswer(selectedType);
            });
        });
        
        // Steuerungs-Buttons
        this.buttons.start.addEventListener('click', () => this.startGame());
        this.buttons.hint.addEventListener('click', () => this.showHint());
        this.buttons.skip.addEventListener('click', () => this.skipWord());
        this.buttons.restart.addEventListener('click', () => this.restartGame());
        this.buttons.close.addEventListener('click', () => this.closeModal());
        
        // Tastatur-Steuerung (optional)
        document.addEventListener('keydown', (e) => {
            if (!this.gameActive) return;
            
            // Zahlen 1-5 für Kategorie-Buttons
            if (e.key >= '1' && e.key <= '5') {
                const index = parseInt(e.key) - 1;
                if (this.categoryBtns[index]) {
                    this.categoryBtns[index].click();
                }
            }
            
            // Leertaste für Tipp
            if (e.key === ' ' && !this.buttons.hint.disabled) {
                this.showHint();
            }
            
            // Enter für nächste Frage
            if (e.key === 'Enter' && !this.gameActive) {
                this.getNextWord();
            }
        });
    }
    
    generatePlayerId() {
        let id = localStorage.getItem('wortarten-player-id');
        if (!id) {
            id = 'player_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
            localStorage.setItem('wortarten-player-id', id);
        }
        return id;
    }
    
    startGame() {
        this.gameActive = true;
        this.score = 0;
        this.lives = 3;
        this.streak = 0;
        this.bestStreak = 0;
        this.correctAnswers = 0;
        
        this.updateDisplays();
        this.updateHearts();
        this.buttons.start.disabled = true;
        this.buttons.hint.disabled = false;
        this.buttons.skip.disabled = false;
        
        this.categoryBtns.forEach(btn => btn.disabled = false);
        
        this.feedbackMessage.textContent = 'Wähle die richtige Wortart!';
        this.feedbackDetails.textContent = '';
        
        this.getNextWord();
        this.logToAPI('Spiel gestartet');
    }
    
    getRandomWord() {
        const types = ['noun', 'adjective', 'verb', 'pronoun', 'particle'];
        const randomType = types[Math.floor(Math.random() * types.length)];
        const wordList = this.words[randomType];
        
        if (!wordList || wordList.length === 0) {
            return { word: 'fehler', type: randomType };
        }
        
        const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
        return { word: randomWord.toLowerCase(), type: randomType };
    }
    
    getNextWord() {
        if (this.correctAnswers >= this.totalWords) {
            this.endGame(true);
            return;
        }
        
        if (this.lives <= 0) {
            this.endGame(false);
            return;
        }
        
        const { word, type } = this.getRandomWord();
        this.currentWord = word;
        this.currentType = type;
        
        // Wort in Kleinbuchstaben anzeigen
        this.wordDisplay.textContent = word.toLowerCase();
        
        // Animation
        this.wordDisplay.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.wordDisplay.style.transform = 'scale(1)';
        }, 200);
    }
    
    checkAnswer(selectedType) {
        if (!this.gameActive) return;
        
        const isCorrect = selectedType === this.currentType;
        
        if (isCorrect) {
            this.handleCorrectAnswer();
        } else {
            this.handleWrongAnswer(selectedType);
        }
        
        this.updateDisplays();
    }
    
    handleCorrectAnswer() {
        this.score += 10;
        this.streak++;
        if (this.streak > this.bestStreak) {
            this.bestStreak = this.streak;
        }
        this.correctAnswers++;
        
        // Audio-Feedback
        this.audio.correct.currentTime = 0;
        this.audio.correct.play().catch(e => console.log('Audio error:', e));
        
        // Visuelles Feedback
        this.feedbackMessage.innerHTML = `<span style="color: #10b981; font-weight: bold;">✓ Richtig!</span>`;
        this.feedbackDetails.textContent = `"${this.currentWord}" ist ein ${this.getTypeName(this.currentType)}`;
        
        // Bonus-Leben bei 5er-Serie
        if (this.streak % 5 === 0 && this.lives < 5) {
            this.lives++;
            this.updateHearts();
            this.audio.roundwon.currentTime = 0;
            this.audio.roundwon.play().catch(e => console.log('Audio error:', e));
            
            // Animation
            this.heartsContainer.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.heartsContainer.style.transform = 'scale(1)';
            }, 300);
            
            this.logToAPI(`5er-Serie erreicht! +1 Leben (${this.lives}/5)`);
        }
        
        // Nächstes Wort nach kurzer Pause
        setTimeout(() => {
            this.getNextWord();
        }, 1500);
    }
    
    handleWrongAnswer(selectedType) {
        this.streak = 0;
        this.lives--;
        
        // Audio-Feedback
        this.audio.error.currentTime = 0;
        this.audio.error.play().catch(e => console.log('Audio error:', e));
        
        // Visuelles Feedback
        this.feedbackMessage.innerHTML = `<span style="color: #e63946; font-weight: bold;">✗ Falsch!</span>`;
        this.feedbackDetails.textContent = `"${this.currentWord}" ist ein ${this.getTypeName(this.currentType)}, nicht ${this.getTypeName(selectedType)}`;
        
        this.updateHearts();
        
        if (this.lives <= 0) {
            setTimeout(() => this.endGame(false), 1500);
        } else {
            // Nächstes Wort nach kurzer Pause
            setTimeout(() => {
                this.getNextWord();
            }, 1500);
        }
    }
    
    showHint() {
        if (!this.gameActive) return;
        
        this.buttons.hint.disabled = true;
        this.score = Math.max(0, this.score - 5);
        
        // Zeige ersten Buchstaben
        const hint = this.currentWord.charAt(0).toUpperCase();
        this.feedbackMessage.innerHTML = `<span style="color: #f59e0b; font-weight: bold;">💡 Tipp: Beginnt mit "${hint}"</span>`;
        this.feedbackDetails.textContent = `5 Punkte abgezogen`;
        
        this.updateDisplays();
        
        // Reaktiviere Button nach 3 Sekunden
        setTimeout(() => {
            this.buttons.hint.disabled = false;
        }, 3000);
    }
    
    skipWord() {
        if (!this.gameActive) return;
        
        this.score = Math.max(0, this.score - 10);
        this.streak = 0;
        
        this.feedbackMessage.innerHTML = `<span style="color: #6c757d; font-weight: bold;">⏭️ Übersprungen</span>`;
        this.feedbackDetails.textContent = `10 Punkte abgezogen`;
        
        this.updateDisplays();
        
        this.audio.roundlost.currentTime = 0;
        this.audio.roundlost.play().catch(e => console.log('Audio error:', e));
        
        this.getNextWord();
    }
    
    updateDisplays() {
        this.scoreDisplay.textContent = this.score;
        this.streakDisplay.textContent = this.streak;
        this.correctDisplay.textContent = `${this.correctAnswers}/${this.totalWords}`;
        
        const progressPercent = (this.correctAnswers / this.totalWords) * 100;
        this.progressFill.style.width = `${progressPercent}%`;
        this.progressText.textContent = `${this.correctAnswers}/${this.totalWords} Wörter`;
    }
    
    updateHearts() {
        const hearts = this.heartsContainer.querySelectorAll('i');
        hearts.forEach((heart, index) => {
            if (index < this.lives) {
                heart.className = 'fas fa-heart live';
            } else {
                heart.className = 'fas fa-heart lost';
            }
        });
    }
    
    getTypeName(type) {
        const names = {
            noun: 'Nomen',
            adjective: 'Adjektiv',
            verb: 'Verb',
            pronoun: 'Pronomen',
            particle: 'Partikel'
        };
        return names[type] || type;
    }
    
    async endGame(isWin) {
        this.gameActive = false;
        this.buttons.hint.disabled = true;
        this.buttons.skip.disabled = true;
        this.categoryBtns.forEach(btn => btn.disabled = true);
        
        // Audio-Feedback
        if (isWin) {
            this.audio.gamewon.currentTime = 0;
            this.audio.gamewon.play().catch(e => console.log('Audio error:', e));
        } else {
            this.audio.gamelost.currentTime = 0;
            this.audio.gamelost.play().catch(e => console.log('Audio error:', e));
        }
        
        // Endscreen anzeigen
        this.showEndScreen(isWin);
        
        // Ergebnisse an LearningView.org senden
        await this.sendToLearningView(isWin);
    }
    
    showEndScreen(isWin) {
        const accuracy = this.totalWords > 0 ? Math.round((this.correctAnswers / this.totalWords) * 100) : 0;
        
        this.finalScore.textContent = this.score;
        this.finalCorrect.textContent = `${this.correctAnswers}/${this.totalWords}`;
        this.finalStreak.textContent = this.bestStreak;
        this.finalLives.textContent = this.lives;
        this.finalAccuracy.textContent = `${accuracy}%`;
        
        // Modal anpassen je nach Ergebnis
        const modalHeader = this.endModal.querySelector('.modal-header');
        if (isWin) {
            this.modalIcon.className = 'fas fa-trophy';
            this.modalIcon.style.color = '#f59e0b';
            this.modalTitle.textContent = 'Herzlichen Glückwunsch!';
            modalHeader.className = 'modal-header win';
        } else {
            this.modalIcon.className = 'fas fa-heart-broken';
            this.modalIcon.style.color = '#e63946';
            this.modalTitle.textContent = 'Spiel beendet!';
            modalHeader.className = 'modal-header lose';
        }
        
        this.endModal.style.display = 'flex';
    }
    
    async sendToLearningView(isWin) {
        this.apiStatus.textContent = 'Sende Ergebnisse an LearningView.org...';
        this.apiStatusContainer.className = 'api-status sending';
        this.apiSpinner.style.display = 'block';
        
        try {
            // API-Daten vorbereiten
            const gameData = {
                game: 'wortarten-trainer',
                playerId: this.generatePlayerId(),
                score: this.score,
                correctAnswers: this.correctAnswers,
                totalQuestions: this.totalWords,
                bestStreak: this.bestStreak,
                livesRemaining: this.lives,
                win: isWin,
                timestamp: new Date().toISOString(),
                accuracy: Math.round((this.correctAnswers / this.totalWords) * 100)
            };
            
            this.logToAPI(`📤 Sende Spielergebnisse...`);
            this.logToAPI(`Spieler ID: ${gameData.playerId}`);
            this.logToAPI(`Punktzahl: ${gameData.score}`);
            this.logToAPI(`Genauigkeit: ${gameData.accuracy}%`);
            
            // Hier würde der echte API-Call stehen:
            // const response = await fetch('https://api.learningview.org/game-results', {
            //     method: 'POST',
            //     headers: { 
            //         'Content-Type': 'application/json',
            //         'Authorization': 'Bearer YOUR_API_KEY'
            //     },
            //     body: JSON.stringify(gameData)
            // });
            
            // Simulation einer API-Anfrage (2 Sekunden)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Erfolg simulieren (90% Erfolgschance)
            const success = Math.random() > 0.1;
            
            if (success) {
                this.apiStatus.textContent = '✓ Ergebnisse erfolgreich gesendet!';
                this.apiSpinner.style.display = 'none';
                this.apiStatusContainer.className = 'api-status success';
                this.connectedStatus.innerHTML = '<i class="fas fa-link"></i><span>Verbunden</span>';
                this.connectedStatus.classList.add('connected');
                
                this.logToAPI('✅ Erfolgreich an LearningView.org gesendet');
                this.saveResultsLocally(gameData);
            } else {
                throw new Error('API nicht erreichbar');
            }
            
        } catch (error) {
            this.apiStatus.textContent = '✗ Verbindung fehlgeschlagen. Ergebnisse lokal gespeichert.';
            this.apiSpinner.style.display = 'none';
            this.apiStatusContainer.className = 'api-status error';
            
            this.logToAPI(`❌ API-Fehler: ${error.message}`);
            
            // Lokal speichern als Fallback
            const gameData = {
                game: 'wortarten-trainer',
                playerId: this.generatePlayerId(),
                score: this.score,
                correctAnswers: this.correctAnswers,
                totalQuestions: this.totalWords,
                timestamp: new Date().toLocaleString()
            };
            this.saveResultsLocally(gameData);
        }
    }
    
    saveResultsLocally(gameData) {
        try {
            // Letzte 10 Spiele speichern
            let history = JSON.parse(localStorage.getItem('wortarten-game-history') || '[]');
            history.unshift(gameData);
            if (history.length > 10) {
                history = history.slice(0, 10);
            }
            localStorage.setItem('wortarten-game-history', JSON.stringify(history));
            localStorage.setItem('wortarten-last-game', JSON.stringify(gameData));
            
            this.logToAPI('💾 Ergebnisse lokal gespeichert');
        } catch (e) {
            console.error('Fehler beim lokalen Speichern:', e);
        }
    }
    
    logToAPI(message) {
        const timestamp = new Date().toLocaleTimeString();
        const logEntry = `[${timestamp}] ${message}\n`;
        this.apiLog.textContent = logEntry + this.apiLog.textContent;
        
        // Alte Logs begrenzen
        const logs = this.apiLog.textContent.split('\n');
        if (logs.length > 10) {
            this.apiLog.textContent = logs.slice(0, 10).join('\n');
        }
    }
    
    restartGame() {
        this.endModal.style.display = 'none';
        this.buttons.start.disabled = false;
        this.feedbackMessage.textContent = 'Klicke auf "Spiel starten" um zu beginnen!';
        this.feedbackDetails.textContent = '';
        this.wordDisplay.textContent = 'Bereit?';
        this.updateDisplays();
    }
    
    closeModal() {
        this.endModal.style.display = 'none';
    }
}

// Spiel initialisieren, wenn DOM geladen ist
document.addEventListener('DOMContentLoaded', () => {
    const game = new WordGame();
    window.wordGame = game; // Für Debugging verfügbar machen
    
    // Initiale Nachricht
    game.logToAPI('Spiel geladen und bereit');
    game.logToAPI('Klicke auf "Spiel starten" um zu beginnen');
});
