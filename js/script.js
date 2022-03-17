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
                ]
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
                ]
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
                ]
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
                ]
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
                ]
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
                ]
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
                ]
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
                ]
            }
        ]
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
        timeMsg(index) {
            return luxon.DateTime.fromISO(this.arrContacts[this.activeIndex].messages[index].date).toFormat('HH:mm');
        },
        autoscroll() {
            document.querySelector('.chat').scrollTop = document.querySelector('.chat').scrollHeight;
          }
    },
    updated() {
        this.autoscroll();
    }
})