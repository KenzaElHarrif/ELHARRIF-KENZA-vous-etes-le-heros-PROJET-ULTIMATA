const simoneDestiInit= 'ennemidown';
const simoneDestiRobot = 'choix';

simoneDesti = simoneDestiInit;


chapters = {
    debut :{
        titre: `Gloire à l’humanité`,
        description:`Il y a de nombreuses années, une menace extraterrestre a brisé l’âge d’or de l’humanité en déployant une redoutable armada de robots. Face à cette catastrophe, les survivants ont pris refuge sur la lune. Une décennie s’est écoulée depuis lors, et c’est à ce moment que l’organisation YoRha a vu le jour.
        \nLa guerre n’a pourtant cessé de continuer jusqu’à ce jour. C’est pour cette raison que vous, soldat, avez pour mission de vous battre en l’honneur de l’humanité afin de reprendre la planète natale de nos créateurs. Nous avons confiance en vous. Gloire... À l’humanité.`,
        image: ``,
        bouton: [
            {titre: 'Continuer','destination': 'activation',}
        ],
    },

    activation: {
        titre: `Activation`,
        description:`Activation de l'androïde Unité 1 type Nier. Bonjour, 1N, je suis Pod A, votre assistant. Je vous accompagnerai à chacune des étapes de votre mission. L'androïde 2S, Unité 2 Type Scanner, s’est également joint à votre mission et a déjà identifié un ennemi au parc d’attractions. La mission débute maintenant.
        \nMais avant, rappelez-vous : Gloire... à l’humanité.
        \nAlerte ! Lorsque vous arrivés à l’entrée du parc d’attractions, des robots semblent adopter un comportement pacifique. Analyse des possibilités...`,
        image: ``,
        bouton: [
            {titre: 'Attaquer les robots','destination': 'robot',},
            {titre: 'Continuer son chemin','destination': 'blackbox',}
        ],
    },

    robot: {
        titre: `Attaquer les robots`,
        description:`Vous attaquez les robots, ils n’attaquent pas en retour. 2S a piraté l’un d’eux, il semble émettre un message... Lecture du message.
        \n..-…--..---..-..-.---..-
        \nC'est étrange. Je n’arrive pas à traduire ce code. Veuillez continuer votre mission.`,
        image: ``,
        bouton: [
            {titre: 'Continuer son chemin','destination': 'blackbox',}
        ],
    },

    blackbox:{
        titre: `Les Blackbox`,
        description:``,
        image: ``,
        bouton: [
            {titre: 'Retrouver les blackbox','destination': 'simone',},
            {titre: 'Continuer son chemin','destination': 'verite',}],
    },

    verite:{
        titre: ``,
        description:``,
        image: ``,
        bouton: [
            {titre: 'Retour au début','destination': 'debut',},
        ],
    },

    simone:{
        titre: ``,
        description:``,
        image: ``,
        bouton: [
            {titre: 'Attaque frontale','destination': 'marionettes',},
            {titre: 'Attaque furtive','destination': simoneDesti,}/*COMMENT ARRIVER AU CHAPITRE 4 ?? */
        ],
    },

    marionettes:{
        titre: ``,
        description:``,
        image: ``,
        bouton: [
            {titre: 'Retour au début','destination': 'debut',},
        ],
    },

    ennemidown:{
        titre: ``,
        description:``,
        image: ``,
        bouton: [
            {titre: 'Retour au début','destination': 'debut',},
        ],
    },

    choix:{
        titre: ``,
        description:``,
        image: ``,
        bouton: [
            {titre: 'Sauver 2S','destination': 'scanner',},
            {titre: 'Sauver 1N','destination': 'nier',},
        ],
    },

    scanner:{
        titre: ``,
        description:``,
        image: ``,
        bouton: [
            {titre: 'Retour au début','destination': 'debut',},
        ],
    },

    nier:{
        titre: ``,
        description:``,
        image: ``,
        bouton: [
            {titre: 'Retour au début','destination': 'debut',},
        ],
    },

}

function goToChapter(chapter){
        if(chapters[chapter]){
            if(chapter == 'robot'){
                chapters.simone.bouton[1].destination = simoneDestiRobot;
            }

            //

            console.log(chapters[chapter].titre);
            console.log(chapters[chapter].description);
            console.log("Options:")

            chapters[chapter].bouton.forEach( function (bout){
                console.log(`${bout.titre} \ntapez: goToChapter(\'${bout.destination}\')`  );
            });
        }
        
        else{
            console.log(`Attention! C'est la mauvaise clé.`);
        }
        return 'Pod A attend votre décision...-..-.-..-';
}

goToChapter('debut');

