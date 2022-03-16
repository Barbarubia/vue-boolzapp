const app = new Vue({
    el: '#root',
    data: {
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
                avatar: '2.jpg'
            },
            {
                nome: 'Samuele',
                avatar: '3.jpg'
            },
            {
                nome: 'Alessandro B.',
                avatar: '4.jpg'
            },
            {
                nome: 'Alessandro L.',
                avatar: '5.jpg'
            },
            {
                nome: 'Claudia',
                avatar: '6.jpg'
            },
            {
                nome: 'Federico',
                avatar: '7.jpg'
            },
            {
                nome: 'Davide',
                avatar: '8.jpg'
            }
        ]
    }
})