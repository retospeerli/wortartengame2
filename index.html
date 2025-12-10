class WordGame {
    constructor() {
        this.currentWord = '';
        this.currentType = '';
        this.score = 0;
        this.lives = 3;
        this.streak = 0;
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
            share: document.getElementById('share-btn')
        };
        
        this.categoryBtns = document.querySelectorAll('.category-btn');
        
        // Endscreen Elements
        this.endModal = document.getElementById('end-modal');
        this.finalScore = document.getElementById('final-score');
        this.finalCorrect = document.getElementById('final-correct');
        this.finalStreak = document.getElementById('final-streak');
        this.finalLives = document.getElementById('final-lives');
        this.apiStatus = document.getElementById('api-status-text');
        this.apiSpinner = document.getElementById('api-spinner');
    }
    
    setupAudio() {
        this.audio = {
            correct: document.getElementById('correct-sound'),
            wrong: document.getElementById('wrong-sound'),
            life: document.getElementById('life-sound'),
            win: document.getElementById('win-sound')
        };
        
        // Preload Audio
        Object.values(this.audio).forEach(audio => {
            audio.load();
        });
    }
    
    async loadWordLists() {
        try {
            // Hier würden Sie die TXT-Dateien laden
            // Für Demo-Zwecke verwenden wir eingebettete Listen
            this.words.noun = ["Haus", "Baum", "Mutter", "Vater", "Kind", "Schule", "Buch", "Stift", "Tisch", "Fenster", "Tür", "Bett", "Auto", "Fahrrad", "Ball"];
            this.words.adjective = ["groß", "klein", "schnell", "langsam", "hell", "dunkel", "fröhlich", "traurig", "bunt", "rund", "eckig", "schwer", "leicht", "hart", "weich"];
            this.words.verb = ["gehen", "spielen", "lesen", "schreiben", "malen", "lachen", "springen", "sehen", "hören", "sagen", "fragen", "antworten", "kommen", "laufen", "rennen"];
            this.words.pronoun = ["ich", "du", "er", "sie", "es", "wir", "ihr", "sie", "mein", "dein", "sein", "ihr", "unser", "euer", "mich"];
            this.words.particle = ["nicht", "auch", "noch", "schon", "immer", "oft", "vielleicht", "gerade", "besonders", "doch", "denn", "ja", "nein", "ziemlich", "recht"];
            
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
        this.buttons.share.addEventListener('click', () => this.shareResults());
        
        // Enter-Taste für schnelle Wiederholung
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && this.gameActive) {
                this.getNextWord();
            }
        });
    }
    
    startGame() {
        this.gameActive = true;
        this.score = 0;
        this.lives = 3;
        this.streak = 0;
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
            return { word: 'Fehler', type: randomType };
        }
        
        const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
        return { word: randomWord, type: randomType };
    }
    
    getNextWord() {
        if (this.correctAnswers >= this.totalWords) {
            this.endGame();
            return;
        }
        
        const { word, type } = this.getRandomWord();
        this.currentWord = word;
        this.currentType = type;
        
        this.wordDisplay.textContent = word;
        
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
        this.correctAnswers++;
        
        // Audio-Feedback
        this.audio.correct.currentTime = 0;
        this.audio.correct.play().catch(e => console.log('Audio error:', e));
        
        // Visuelles Feedback
        this.feedbackMessage.innerHTML = `<span style="color: #10b981">✓ Richtig!</span>`;
        this.feedbackDetails.textContent = `"${this.currentWord}" ist ein ${this.getTypeName(this.currentType)}`;
        
        // Bonus-Leben bei 5er-Serie
        if (this.streak % 5 === 0 && this.lives < 5) {
            this.lives++;
            this.updateHearts();
            this.audio.life.currentTime = 0;
            this.audio.life.play().catch(e => console.log('Audio error:', e));
            
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
        this.audio.wrong.currentTime = 0;
        this.audio.wrong.play().catch(e => console.log('Audio error:', e));
        
        // Visuelles Feedback
        this.feedbackMessage.innerHTML = `<span style="color: #e63946">✗ Falsch!</span>`;
        this.feedbackDetails.textContent = `"${this.currentWord}" ist ein ${this.getTypeName(this.currentType)}, nicht ${this.getTypeName(selectedType)}`;
        
        this.updateHearts();
        
        if (this.lives <= 0) {
            setTimeout(() => this.endGame(), 1500);
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
        const hint = this.currentWord.charAt(0) + '...';
        this.feedbackMessage.innerHTML = `<span style="color: #f59e0b">💡 Tipp: Beginnt mit "${hint}"</span>`;
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
        
        this.feedbackMessage.innerHTML = `<span style="color: #6c757d">⏭️ Übersprungen</span>`;
        this.feedbackDetails.textContent = `10 Punkte abgezogen`;
        
        this.updateDisplays();
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
    
    async endGame() {
        this.gameActive = false;
        this.buttons.hint.disabled = true;
        this.buttons.skip.disabled = true;
        this.categoryBtns.forEach(btn => btn.disabled = true);
        
        // Audio-Feedback
        this.audio.win.currentTime = 0;
        this.audio.win.play().catch(e => console.log('Audio error:', e));
        
        // Endscreen anzeigen
        this.showEndScreen();
        
        // Ergebnisse an LearningView.org senden
        await this.sendToLearningView();
    }
    
    showEndScreen() {
        this.finalScore.textContent = this.score;
        this.finalCorrect.textContent = `${this.correctAnswers}/${this.totalWords}`;
        this.finalStreak.textContent = this.streak;
        this.finalLives.textContent = this.lives;
        
        this.endModal.style.display = 'flex';
    }
    
    async sendToLearningView() {
        this.apiStatus.textContent = 'Sende Ergebnisse an LearningView.org...';
        this.apiSpinner.style.display = 'block';
        
        try {
            // API-Daten vorbereiten
            const gameData = {
                game: 'wortarten-trainer',
                score: this.score,
                correctAnswers: this.correctAnswers,
                totalQuestions: this.totalWords,
                streak: this.streak,
                livesRemaining: this.lives,
                timestamp: new Date().toISOString(),
                playerId: this.generatePlayerId(),
                accuracy: Math.round((this.correctAnswers / this.totalWords) * 100)
            };
            
            this.logToAPI(`📤 Sende Daten: ${JSON.stringify(gameData, null, 2)}`);
            
            // Simulation einer API-Anfrage
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Hier würde der echte API-Call stehen:
            // const response = await fetch('https://api.learningview.org/game-results', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(gameData)
            // });
            
            // Erfolg simulieren
            const success = Math.random() > 0.1; // 90% Erfolgschance
            
            if (success) {
                this.apiStatus.textContent = '✓ Ergebnisse erfolgreich gesendet!';
                this.apiSpinner.style.display = 'none';
                this.apiStatus.parentElement.className = 'api-status success';
                this.connectedStatus.innerHTML = '<i class="fas fa-link"></i><span>Verbunden</span>';
                this.connectedStatus.classList.add('connected');
                
                this.logToAPI('✅ Erfolgreich an LearningView.org gesendet');
                this.buttons.share.disabled = false;
            } else {
                throw new Error('API nicht erreichbar');
            }
            
        } catch (error) {
            this.apiStatus.textContent = '✗ Verbindung fehlgeschlagen. Ergebnisse lokal gespeichert.';
            this.apiSpinner.style.display = 'none';
            this.apiStatus.parentElement.className = 'api-status error';
            
            this.logToAPI(`❌ API-Fehler: ${error.message}`);
            
            // Lokal speichern als Fallback
            this.saveResultsLocally();
        }
    }
    
    saveResultsLocally() {
        const results = {
            score: this.score,
            correctAnswers: this.correctAnswers,
            timestamp: new Date().toLocaleString()
        };
        
        localStorage.setItem('wortarten-last-game', JSON.stringify(results));
        this.logToAPI('💾 Ergebnisse lokal gespeichert');
    }
    
    generatePlayerId() {
        let id = localStorage.getItem('wortarten-player-id');
        if (!id) {
            id = 'player_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('wortarten-player-id', id);
        }
        return id;
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
    }
    
    shareResults() {
        const text = `Ich habe im Wortarten-Spiel ${this.score} Punkte erreicht! ${this.correctAnswers}/${this.totalWords} richtig.`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Mein Wortarten-Ergebnis',
                text: text,
                url: window.location.href
            });
        } else {
            // Fallback: Kopieren in Zwischenablage
            navigator.clipboard.writeText(text);
            alert('Ergebnis in Zwischenablage kopiert!');
        }
    }
}

// Spiel initialisieren, wenn DOM geladen ist
document.addEventListener('DOMContentLoaded', () => {
    const game = new WordGame();
    window.wordGame = game; // Für Debugging verfügbar machen
});
