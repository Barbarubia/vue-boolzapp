const app = new Vue({
    el: '#root',
    data: {
        newMsg: {
            text: ``,
            hour: '12:00',
            type: 'sent'
        },
        user: {
                nome: 'Sofia',
                avatar: 'io.jpg'
            },
        activeIndex: 0,
        arrContacts: [
            {
                nome: 'Michele',
                avatar: '1.jpg',
                messages: [
                    {
                        text: `Ciao! Come stai? Ho saputo che hai trovato lavoro come programmatore web!`,
                        hour: '11:34',
                        type: 'sent'
                    },
                    {
                        text: `Ciao! Alla grande, grazie! Tu?`,
                        hour: '11:59',
                        type: 'received'
                    },
                    {
                        text: `Sì, ho ricevuto diverse offerte ed è stato difficile scegliere, ma mi sto ambientando molto bene!`,
                        hour: '12:00',
                        type: 'received'
                    }
                ]
            },
            {
                nome: 'Fabio',
                avatar: '2.jpg',
                messages: [
                    {
                        text: `Ha detto mamma se stasera puoi passare dal otografo a ritirare le foto`,
                        hour: '09:34',
                        type: 'received'
                    },
                    {
                        text: `*fotografo`,
                        hour: '09:34',
                        type: 'received'
                    },
                    {
                        text: `Ok, appena mi libero ci vado`,
                        hour: '09:38',
                        type: 'sent'
                    }
                ]
            },
            {
                nome: 'Samuele',
                avatar: '3.jpg',
                messages: [
                    {
                        text: `Ciao Samuele, a che ora è la riunione domani?`,
                        hour: '19:47',
                        type: 'sent'
                    },
                    {
                        text: `Ciao Sofy, domani mattina alle 10:30`,
                        hour: '20:03',
                        type: 'received'
                    },
                    {
                        text: `Perfetto, grazie!`,
                        hour: '20:05',
                        type: 'sent'
                    },
                    {
                        text: `Di nulla. A domani :)`,
                        hour: '20:07',
                        type: 'received'
                    }
                ]
            },
            {
                nome: 'Alessandro B.',
                avatar: '4.jpg',
                messages: [
                    {
                        text: `Federico sta raccogliendo i soldi per il regalo di Francesca. Mettiamo 10€ ciascuno. Sei dei nostri?`,
                        hour: '10:15',
                        type: 'sent'
                    },
                    {
                        text: `Contami per il regalo, però non so se potrò venire alla cena... :(`,
                        hour: '10:17',
                        type: 'received'
                    }
                ]
            },
            {
                nome: 'Alessandro L.',
                avatar: '5.jpg',
                messages: [
                    {
                        text: `Federico sta raccogliendo i soldi per il regalo di Francesca. Mettiamo 10€ ciascuno. Sei dei nostri?`,
                        hour: '10:09',
                        type: 'sent'
                    },
                    {
                        text: `Hey Sofy, mi sa che hai sbagliato persona ahahah`,
                        hour: '10:12',
                        type: 'received'
                    },
                    {
                        text: `Ops, in effetti il messaggio era per un altro Alessandro...scusami!`,
                        hour: '10:13',
                        type: 'sent'
                    }
                ]
            },
            {
                nome: 'Claudia',
                avatar: '6.jpg',
                messages: [
                    {
                        text: `Sabato mattina colazione e shopping insieme?`,
                        hour: '10:54',
                        type: 'received'
                    },
                    {
                        text: `Mi sembra un'ottima idea!!!`,
                        hour: '11:23',
                        type: 'sent'
                    }
                ]
            },
            {
                nome: 'Federico',
                avatar: '7.jpg',
                messages: [
                    {
                        text: `Ciao Sofia, sto raccogliendo i soldi per il regalo di Francesca. Pensavo di fare 10€ a testa e vediamo a che budget arriviamo. Puoi avvisare Alessandro per favore, che non ho il suo contatto`,
                        hour: '21:23',
                        type: 'received'
                    }
                ]
            },
            {
                nome: 'Davide',
                avatar: '8.jpg',
                messages: [
                    {
                        text: `-- messaggio eliminato --`,
                        hour: '22:09',
                        type: 'received'
                    }
                ]
            }
        ]
    },
    methods: {
        // Funzione per mandare un nuovo messaggio all'interno della chat
        sendMsg() {

            let activeContactChat = this.arrContacts[this.activeIndex].messages;

            if (this.newMsg.text.trim() != '') {
                activeContactChat.push(this.newMsg);
                this.newMsg = {
                    text: ``,
                    hour: '12:00',
                    type: 'sent'
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
                    hour: '12:00',
                    type: 'received'
                };
                setTimeout(function () {activeContactChat.push(contactReply)}, 1000);
            }
        }
    }
})