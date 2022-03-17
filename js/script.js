// Istanza per caricare il plug-in Emoji Picker
Vue.use(EmojiPicker);

const app = new Vue({
    el: '#root',
    data: {
        newMsg: {
            text: ``,
            date: luxon.DateTime.now(),
            type: 'sent',
            showMenu: false
        },
        searchContact: '',
        showMenuMsg: false,
        user: {
                name: 'Sofia',
                avatar: 'io.jpg'
            },
        activeIndex: 0,
        arrContacts: [
            {
                name: 'Michele',
                avatar: '1.jpg',
                listed: true,
                lastOnline: '2022-03-18T12:03:00',
                messages: [
                    {
                        text: `Ciao! Come stai? Ho saputo che hai trovato lavoro come programmatore web!`,
                        date: '2022-03-18T11:34:00',
                        type: 'sent',
                        showMenu: false
                    },
                    {
                        text: `Ciao! Alla grande, grazie! Tu?`,
                        date: '2022-03-18T11:59:00',
                        type: 'received',
                        showMenu: false
                    },
                    {
                        text: `Sì, ho ricevuto diverse offerte ed è stato difficile scegliere, ma mi sto ambientando molto bene!`,
                        date: '2022-03-18T12:00:00',
                        type: 'received',
                        showMenu: false
                    }
                ],
                showMenuChat: false
            },
            {
                name: 'Fabio',
                avatar: '2.jpg',
                listed: true,
                lastOnline: '2022-03-18T11:47:00',
                messages: [
                    {
                        text: `Ha detto mamma se stasera puoi passare dal otografo a ritirare le foto`,
                        date: '2022-03-18T09:34:00',
                        type: 'received',
                        showMenu: false
                    },
                    {
                        text: `*fotografo`,
                        date: '2022-03-18T09:34:00',
                        type: 'received',
                        showMenu: false
                    },
                    {
                        text: `Ok, appena mi libero ci vado`,
                        date: '2022-03-18T09:38:00',
                        type: 'sent',
                        showMenu: false
                    }
                ],
                showMenuChat: false
            },
            {
                name: 'Samuele',
                avatar: '3.jpg',
                listed: true,
                lastOnline: '2022-03-18T20:07:00',
                messages: [
                    {
                        text: `Ciao Samuele, a che ora è la riunione domani?`,
                        date: '2022-03-18T19:47:00',
                        type: 'sent',
                        showMenu: false
                    },
                    {
                        text: `Ciao Sofy, domani mattina alle 10:30`,
                        date: '2022-03-18T20:03:00',
                        type: 'received',
                        showMenu: false
                    },
                    {
                        text: `Perfetto, grazie!`,
                        date: '2022-03-18T20:05:00',
                        type: 'sent',
                        showMenu: false
                    },
                    {
                        text: `Di nulla. A domani :)`,
                        date: '2022-03-18T20:07:00',
                        type: 'received',
                        showMenu: false
                    }
                ],
                showMenuChat: false
            },
            {
                name: 'Alessandro B.',
                avatar: '4.jpg',
                listed: true,
                lastOnline: '2022-03-18T11:42:00',
                messages: [
                    {
                        text: `Federico sta raccogliendo i soldi per il regalo di Francesca. Mettiamo 10€ ciascuno. Sei dei nostri?`,
                        date: '2022-03-18T10:15:00',
                        type: 'sent',
                        showMenu: false
                    },
                    {
                        text: `Contami per il regalo, però non so se potrò venire alla cena... :(`,
                        date: '2022-03-18T10:17:00',
                        type: 'received',
                        showMenu: false
                    }
                ],
                showMenuChat: false
            },
            {
                name: 'Alessandro L.',
                avatar: '5.jpg',
                listed: true,
                lastOnline: '2022-03-18T10:51:00',
                messages: [
                    {
                        text: `Federico sta raccogliendo i soldi per il regalo di Francesca. Mettiamo 10€ ciascuno. Sei dei nostri?`,
                        date: '2022-03-18T10:09:00',
                        type: 'sent',
                        showMenu: false
                    },
                    {
                        text: `Hey Sofy, mi sa che hai sbagliato persona ahahah`,
                        date: '2022-03-18T10:12:00',
                        type: 'received',
                        showMenu: false
                    },
                    {
                        text: `Ops, in effetti il messaggio era per un altro Alessandro...scusami!`,
                        date: '2022-03-18T10:13:00',
                        type: 'sent',
                        showMenu: false
                    }
                ],
                showMenuChat: false
            },
            {
                name: 'Claudia',
                avatar: '6.jpg',
                listed: true,
                lastOnline: '2022-03-18T11:59:00',
                messages: [
                    {
                        text: `Sabato mattina colazione e shopping insieme?`,
                        date: '2022-03-18T10:54:00',
                        type: 'received',
                        showMenu: false
                    },
                    {
                        text: `Mi sembra un'ottima idea!!!`,
                        date: '2022-03-18T11:23:00',
                        type: 'sent',
                        showMenu: false
                    }
                ],
                showMenuChat: false
            },
            {
                name: 'Federico',
                avatar: '7.jpg',
                listed: true,
                lastOnline: '2022-03-17T23:13:00',
                messages: [
                    {
                        text: `Ciao Sofia, sto raccogliendo i soldi per il regalo di Francesca. Pensavo di fare 10€ a testa e vediamo a che budget arriviamo. Puoi avvisare Alessandro per favore, che non ho il suo contatto`,
                        date: '2022-03-17T21:23:00',
                        type: 'received',
                        showMenu: false
                    }
                ],
                showMenuChat: false
            },
            {
                name: 'Davide',
                avatar: '8.jpg',
                listed: true,
                lastOnline: '2022-03-13T21:09:00',
                messages: [
                    {
                        text: `-- messaggio eliminato --`,
                        date: '2022-03-11T22:09:00',
                        type: 'received',
                        showMenu: false
                    }
                ],
                showMenuChat: false
            }
        ],
        searchEmoji: ''
    },
    methods: {
        // Funzione per mandare un nuovo messaggio all'interno della chat e ricevere automaticamente una risposta dopo un secondo
        sendMsg() {
            let activeContactChat = this.arrContacts[this.activeIndex].messages;

            if (this.newMsg.text.trim() != '') {
                activeContactChat.push(this.newMsg);
                this.newMsg = {
                    text: ``,
                    date: luxon.DateTime.now(),
                    type: 'sent',
                    showMenu: false
                };
                // Generatore di risposta random
                const arrReplies = ['Ok!', 'Forse', 'Non lo so', 'Ci penserò', 'No', 'Va bene', 'Perfetto'];
                function randomReply() {
                    let randomIndex = Math.floor(Math.random() * (arrReplies.length));
                    // console.log(arrReplies[randomIndex]);
                    return arrReplies[randomIndex];
                }
                // Risposta random visualizzata dopo un secondo
                let contactReply = {
                    text: randomReply(),
                    date: luxon.DateTime.now(),
                    type: 'received',
                    showMenu: false
                };
                this.autoscroll();
                // Visualizzazione "user sta digitando..."
                let userStatus = document.querySelector('.last-online');
                let contactIsTyping = setInterval(userStatus.innerHTML = `${this.arrContacts[this.activeIndex].name} sta digitando...`, 1000);
                // Risposta arrivata dopo un secondo e status user = online
                setTimeout(function () {
                    userStatus.innerHTML = `Online`;
                    activeContactChat.push(contactReply);
                    app.autoscroll();
                }, 1000);
                clearInterval(contactIsTyping);
                // aggiornamento ora ultimo accesso del contatto, visibile dopo 3 secondi dallo status = online
                this.arrContacts[this.activeIndex].lastOnline = luxon.DateTime.now();
                let onlineUpdate = this.showLastOnlineDate();
                setTimeout(function () {
                    userStatus.innerHTML = onlineUpdate;
                }, 3000);
            }
        },
        // Funzione per mostrare l'orario dell'ultimo accesso
        showLastOnlineDate() {
            let dt = luxon.DateTime.fromISO(this.arrContacts[this.activeIndex].lastOnline);

            let ddMMyyyy = dt.toFormat('dd/MM/yyyy');


            if (ddMMyyyy == luxon.DateTime.now().toFormat('dd/MM/yyyy')) {
                return `Ultimo accesso oggi alle ${dt.toFormat('HH:mm')}`;
            } else if (ddMMyyyy == (luxon.DateTime.now().minus({days: 1}).toFormat('dd/MM/yyyy'))) {
                // FIXME: verificare se toglie un giorno indipendentemente dall'ora o se toglie 24 ore esatte --> VERIFICA OK!!!
                return `Ultimo accesso ieri alle ${dt.toFormat('HH:mm')}`;
            } else {
                return `Ultimo accesso il ${ddMMyyyy} alle ${dt.toFormat('HH:mm')}`;
            }
        },
        // Funzione per filtrare i contatti nella lista dei contatti
        filterContacts() {
            this.arrContacts.forEach(contact => {
                if (contact.name.toLowerCase().includes(this.searchContact.toLowerCase())) {
                    contact.listed = true;
                } else {
                    contact.listed = false;
                }
            })
        },
        // Funzione per mostrare i primi 20 caratteri dell'ultimo messaggio nella lista dei contatti
        showLastMsgShort(index) {
            if (this.arrContacts[index].messages.length > 0) {
                let lastMsg = this.arrContacts[index].messages[this.arrContacts[index].messages.length - 1].text;

                if (lastMsg.length > 20) {
                    return lastMsg.substr(0,20) + "...";
                } else {
                    return lastMsg.substr(0,20);
                }
            }
        },
        // Funzione per mostrare l'orario dell'ultimo messaggio nella lista dei contatti
        showLastMsgTime(index) {
            if (this.arrContacts[index].messages.length > 0) {

                let dt = luxon.DateTime.fromISO(this.arrContacts[index].messages[this.arrContacts[index].messages.length - 1].date);

                let ddMMyyyy = dt.toFormat('dd/MM/yyyy');

                let HHmm = dt.toFormat('HH:mm');

                if (ddMMyyyy == luxon.DateTime.now().toFormat('dd/MM/yyyy')) {
                    return HHmm;
                } else if (ddMMyyyy == (luxon.DateTime.now().minus({days: 1}).toFormat('dd/MM/yyyy'))) {
                    return `Ieri`;
                } else {
                    return ddMMyyyy;
                }
            }
        },
        // Funzione per mostrare il menu a tendina dei singoli messaggi
        toggleShowMenuMsg(index) {
            return this.arrContacts[this.activeIndex].messages[index].showMenu = !this.arrContacts[this.activeIndex].messages[index].showMenu;
        },
        // Funzione per eliminare un messaggio dalla chat
        deleteMsg(index) {
            this.arrContacts[this.activeIndex].messages.splice(index, 1);
        },
        // Funzione per mostrare il menu a tendina della chat cliccando sui 3 puntini in alto a destra
        toggleShowMenuChat() {
            return this.arrContacts[this.activeIndex].showMenuChat = !this.arrContacts[this.activeIndex].showMenuChat;
        },
        // Funzione per svuotare la chat da tutti i messaggi contenuti
        clearChat() {
            this.arrContacts[this.activeIndex].messages = [];
        },
        // Funzione per rimuovere la chat e anche il contatto (non sarà più visualizzabile nella lista contatti)
        removeChat() {
            if (this.arrContacts.length == 1) {
                // FIXME:
                alert("Se c'è un solo contatto, la sua eliminazione genera un bug da fixare!");
            } else if (this.activeIndex == this.arrContacts.length - 1) {
                this.arrContacts.splice(-1);
                this.activeIndex--;
            } else { 
                this.arrContacts.splice(this.activeIndex, 1);
            }
        },
        // Funzione che ritorna l'orario di ciascun messaggio partendo dalla data in formato ISO
        timeMsg(index) {
            return luxon.DateTime.fromISO(this.arrContacts[this.activeIndex].messages[index].date).toFormat('HH:mm');
        },
        // Funzione che permette lo scroll automatico della finestra della chat quando si inseriscono nuovi messaggi
        // Credits: https://stackoverflow.com/questions/51852708/vuejs-how-to-scroll-bottom-when-data-changes
        autoscroll() {
            document.querySelector('.chat').scrollTop = document.querySelector('.chat').scrollHeight;
        },
        // Funzione per inserire e inviare emoji grazie allo script Emoji Picker 
        insert(emoji) {
            this.newMsg.text += emoji;
        },
        // Funzioni per versione mobile
        toggleChat() {
            let chatWindow = document.querySelector('.right-container');
            return chatWindow.classList.toggle('show-chat');
        },
        addNewContact() {
            let newContact = {
                name: '',
                avatar: '7.jpg',
                listed: true,
                lastOnline: '2021-01-10T09:30:00',
                messages: [
                ],
                showMenuChat: false
            };

            let newContactName = prompt('Digita il nome del contatto');

            if (newContactName.trim() != '') {
                newContact.name = newContactName;
                let newContactAvatar = prompt("Digita M per l'avatar maschile o F per l'avatar femminile");
                if (newContactAvatar.toLowerCase() == "m") {
                    newContact.avatar = 'male.jpg';
                    this.arrContacts.push(newContact);
                    this.activeIndex = this.arrContacts.length - 1; 
                } else if (newContactAvatar.toLowerCase() == "f") {
                    newContact.avatar = 'female.jpg';
                    this.arrContacts.push(newContact);
                    this.activeIndex = this.arrContacts.length - 1; 
                } else {
                    alert("L'avatar selezionato non è valido");
                }
            } else {
                alert('Il nome digitato non è valido');
            };
        }
    },
    updated() {
        this.autoscroll();
    }
})