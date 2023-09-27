const simoneDestiInit= 'ennemidown';
const simoneDestiRobot = 'choix';

simoneDesti = simoneDestiInit;


chapters = {
    debut :{
        titre: `Gloire à l’humanité`,
        description:`Il y a plusieurs années auparavant, les extraterrestres ont mis fin à la grande ère de l’humanité. Peu après leur arrivée sur Terre, ils ont lâché leur plus grande arme, des robots. Les humains n’ont trouvé comme solution que d’aller se réfugier sur la lune. Une dizaine d’années plus tard, YoRha fut créé afin de repousser l’ennemi et aider l’humanité à reprendre leur planète. Malheureusement, cela fait bien longtemps que nous nous battons. 
        \nC’est pour cette raison que vous, soldat, avez pour mission de vous battre en l’honneur de l’humanité. Afin de reprendre ce qu’appartient à nos créateurs. Nous avons confiance en vous. `,
        image: ``,
        bouton: [
            {titre: 'Continuer','destination': 'activation',}
        ],
    },

    activation: {
        titre: `test2`,
        description:`texte2`,
        image: ``,
        bouton: [
            {titre: 'Attaquer les robots','destination': 'robot',},
            {titre: 'Continuer son chemin','destination': 'blackbox',}
        ],
    },

    robot: {
        titre: ``,
        description:``,
        image: ``,
        bouton: [
            {titre: 'Continuer son chemin','destination': 'blackbox',}
        ],
    },

    blackbox:{
        titre: ``,
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