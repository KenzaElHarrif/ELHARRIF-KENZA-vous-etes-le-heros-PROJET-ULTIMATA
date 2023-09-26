chapters = {
    debut :{
        titre: 'test 1',
        description:' texte 1',
        image: '',
        bouton: [
            {titre: 'Continuer','destination': 'activation',}
        ],
    },

    activation: {
        titre: 'test 2',
        description:'text 2',
        image: '',
        bouton: [
            {titre: 'Attaquer les robots','destination': 'robot',},
            {titre: 'Continuer son chemin','destination': 'blackbox',}
        ],
    },

    robot: {
        titre: '',
        description:'',
        image: '',
        bouton: [
            {titre: 'Continuer son chemin','destination': 'blackbox',}
        ],
    },

    blackbox:{
        titre: '',
        description:'',
        image: '',
        bouton: [
            {titre: 'Retrouver les blackbox','destination': 'simone',},
            {titre: 'Continuer son chemin','destination': 'verite',}],
    },

    verite:{
        titre: '',
        description:'',
        image: '',
        bouton: [
            {titre: 'Retour au début','destination': 'debut',},
        ],
    },

    simone:{
        titre: '',
        description:'',
        image: '',
        bouton: [
            {titre: 'Attaque frontale','destination': 'marionettes',},
            {titre: 'Attaque furtive','destination': 'ennemidown',}/*COMMENT ARRIVER AU CHAPITRE 4 ?? */
        ],
    },

    marionettes:{
        titre: '',
        description:'',
        image: '',
        bouton: [
            {titre: 'Retour au début','destination': 'debut',},
        ],
    },

    ennemidown:{
        titre: '',
        description:'',
        image: '',
        bouton: [
            {titre: 'Retour au début','destination': 'debut',},
        ],
    },

    choix:{
        titre: '',
        description:'',
        image: '',
        bouton: [
            {titre: 'Sauver 2S','destination': 'scanner',},
            {titre: 'Sauver 1N','destination': 'nier',},
        ],
    },

    scanner:{
        titre: '',
        description:'',
        image: '',
        bouton: [
            {titre: 'Retour au début','destination': 'debut',},
        ],
    },

    nier:{
        titre: '',
        description:'',
        image: '',
        bouton: [
            {titre: 'Retour au début','destination': 'debut',},
        ],
    },

}