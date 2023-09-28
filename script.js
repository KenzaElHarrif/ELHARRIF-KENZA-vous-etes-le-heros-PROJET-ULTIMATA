//NOTE SUR LE TEXTE: Puisque le narrateur est un robot accompagnateur (Pod), à certains endroit le texte est FAIT EXPRÈS pour être inlisible, comme un glitch, une erreur, etc.
//C'est parties ne sont pas des erreurs dans le code.

const simoneDestiInit= 'danse';
const simoneDestiRobot = 'choix';

simoneDesti = simoneDestiInit;


chapters = {
    debut :{
        titre: `Gloire à l’humanité`,
        description:`Message entrant: .--.-.-
        \nIl y a de nombreuses années, une menace extraterrestre a brisé l’âge d’or de l’humanité en déployant une redoutable armada de robots. Face à cette catastrophe, les survivants ont pris refuge sur la lune. Des siècles se sont écoulés depuis, et c’est à ce moment que l’organisation YoRha a vu le jour.
        \nLa guerre n’a pourtant cessé de continuer jusqu’à ce jour. C’est pour cette raison que vous, soldat, avez pour mission de vous battre en l’honneur de l’humanité afin de reprendre la planète natale de nos créateurs. Nous avons confiance en vous. Gloire... À l’humanité.`,
        image: `./assets/images/gloire-a-humanite.png`,//gloire-a-humanite
        bouton: [
            {titre: 'Continuer','destination': 'activation',}
        ],
    },

    activation: {
        titre: `Activation`,
        description:`Activation de l'androïde Unité 1 type Nier. Bonjour, 1N, je suis Pod A, votre assistant. Je vous accompagnerai à chacune des étapes de votre mission. L'androïde 2S, Unité 2 Type Scanner, s’est également joint à votre mission et a déjà identifié un ennemi au parc d’attractions. La mission débute maintenant.
        \nMais avant, rappelez-vous : Gloire... à l’humanité.
        \nAlerte ! Lorsque vous arrivés à l’entrée du parc d’attractions, des robots semblent adopter un comportement pacifique.`,
        image: `./assets/images/activation.gif`,//activation
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
        image: `./assets/images/attaque-robots.jpg`,//attaque-robots
        bouton: [
            {titre: 'Continuer son chemin','destination': 'blackbox',}
        ],
    },

    blackbox:{
        titre: `Les Blackbox`,
        description:`Vous avancez plus loin. 2S scanne les environs. ALERTE ! Elle semble détecter les blackbox d’autres androïdes récemment disparus.
        \nPermission de vous rappeler ce qu’est une blackbox, 1N. La blackbox constitue le noyau essentiel d’un androïde. Ce noyau permet l'exécution de multiples fonctions, telles que, dans ce cas précis, celle d’un traqueur. En cas d’extrême urgence, vous pouvez utiliser votre blackbox comme arme nucléaire.`,
        image: `./assets/images/alert-blackbox.gif`,//alert-blackbox
        bouton: [
            {titre: 'Retrouver les blackbox','destination': 'simone',},
            {titre: 'Continuer son chemin','destination': 'verite',}],
    },

    verite:{
        titre: `La vérité`,
        description:`Vous explorez le parc à la recherche de l’ennemi, mais vous rencontrez 1B, une androïde désertée très dangereuse. Sans avoir le temps de réagir, 1B vous attaque, vous laissant comme dernière mémoire, une vérité choquante...
        \n..--.-.-.--YoRha... Vous utilise... Vos combats éternels ne mènent à rien... L’humanité a complètement disparue depuis des siècles...--.--..---
        \nVous mourrez...
        \nDonnées envoyées à la base. Vous pouvez recommencer. `,
        image: `./assets/images/verite-deserte.jpg`,//verite-deserte(à choisir)
        bouton: [
            {titre: 'Retour au début','destination': 'debut',},
        ],
    },

    simone:{
        titre: `La chanteuse robot`,
        description:`Le signal des blackbox vous conduit au grand théâtre du château central où un ennemi de type Goliath est détecté. Sur une grande scène, Simone, la chanteuse d’opéra robot, entonne un chant horrible et strident. Un chant qui marque le début d’un combat.`,
        image: `./assets/images/simone-entree.jpg`,//simone-entree
        bouton: [
            {titre: 'Attaque frontale','destination': 'marionettes',},
            {titre: 'Attaque furtive','destination': simoneDesti,}
        ],
    },

    marionettes:{
        titre: `Marionnettes`,
        description:`ALERTE! Les androïdes disparus sont des marionnettes de Simone. Vos données sont compromimimimimi..... seeeee....
        \nSimone pirate votre corps et vous en perdez le contrôle. Involontairement, vous tuez 2S... Vous devenez l'arme de Simone, une autre de ses marionnettes.
        \nJe n’ai pas pu sauvegarder vos... d.d.d.d.d.onn.... `,
        image: `./assets/images/android-marionnettes.png`,//android-marionnettes
        bouton: [
            {titre: 'Retour au début','destination': 'debut',},
        ],
    },

    danse:{
        titre: `Une grande danse`,
        description:`L’attaque furtive réussit. 2S pirate Simone et elle se faufile dans sa mémoire. Des images floues surgissent autant dans la mémoire de 2S que dans la votre : amour, beauté, meurtre, contrôle, amour, beautémeurtrecontroleamourbeautemeurtrecontrole.... ERREUR! Les robots n’ont aucune capacité d’émotions...
        \nGrâce à cette déstabilisation, vous abattez Simone dans une grande danse déchaînée. Mais sa mémoire vous laisse troublé. Pour l’instant, le rapport à envoyer à la base est plus important.
        \nBravo pour cette mission 1N... Gloire à l’humanité.`,
        image: `./assets/images/grande-danse-simone.jpg`,//grande-danse-simone
        bouton: [
            {titre: 'Retour au début','destination': 'debut',},
        ],
    },

    choix:{
        titre: `Faites votre choix`,
        description:`ERREUR! Trop de blackbox détectées. Trop d’androids sont contrrr ooo ôoolés... ERREUR! Détection de robots agressifs !... Eee... ERR.EUR.-.--.--- Les robots que vous avez tués ont lancé un signal d’alerte. Vous êtes encerclés. Simone ordonne leur attaque... Je ne peux que sauver l’un d’entre vous.
        \nUne décision finale est requise.`,
        image: `./assets/images/choix-nier-scanner.gif`,//choix-nier-scanner
        bouton: [
            {titre: 'Sauver 2S','destination': 'scanner',},
            {titre: 'Sauver 1N','destination': 'nier',},
        ],
    },

    scanner:{
        titre: `Unité 2 Type Scanner`,
        description:`Simone n’a pas été combattu, mais les données de 2S ont été sauvegardés et renvoyés à la base. Votre mort a laissé 2S troublé. Pour une raison inconnue de tous, 2S a déserté YoRha quelques mois après votre mort. Aujourd’hui, j’accompagne 2S partout, elle se bat maintenant en votre mémoire... `,
        image: `./assets/images/2b-jungle.jpg`,//2b-jungle
        bouton: [
            {titre: 'Retour au début','destination': 'debut',},
        ],
    },

    nier:{
        titre: `Unité 1 Type Nier`,
        description:`Vous réussissez à emmener Simone dans votre mort à l’aide de votre blackbox. Vos données ont été sauvegardées à la base de YoRha. Malheureusement, les données de 2S seront à jamais perdues.
        \nLors de la détonation de la blackbox, 2S se faufile dans votre mémoire afin de vous partager ses dernières pensées. Elle vous montre l’image d’un grand héro accomplissant sa mission. Vous êtes ce héros, Nier.`,
        image: `./assets/images/blackbox_end.jpg`,//blackbox-end
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

            else if(chapter == 'debut'){
                chapters.simone.bouton[1].destination = simoneDestiInit;
            }

            console.log(chapters[chapter].titre);
            console.log(chapters[chapter].description);
            console.log("Options:")

            chapters[chapter].bouton.forEach( function (bout){
                console.log(`${bout.titre} \nTapez: goToChapter(\'${bout.destination}\')`  );
            });
        }
        
        else{
            console.log(`Attention! C'est la mauvaise clé. Veuillez revoir l'appelation plus haut.`);
        }
        return 'Pod A attend votre décision...-..-.-..-';
}

goToChapter('debut');

