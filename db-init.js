const db = require("./db")

async function initDB() {
    await db.sequelize.sync({force: true})
    
    await db.model.Signification.create({
        message: "Une main de fer dans un gant de velours... Votre caract�re bien tremp� vous cause parfois du tort, mais pas question de vous adoucir : vous �tes comme vous �tes, que �a plaise ou non ! Au moins, vous avez le m�rite de jouer cartes sur table. Vos amis savent qu'ils peuvent compter sur votre loyaut�.",
        nombre: 1,
    })

    await db.model.Signification.create({
        message: "Au premier abord, on vous juge froide, distante. Mais c'est mal vous conna�tre car sous votre carapace glaciale, vous �tes ultrasensible ! Le sarcasme et l'ironie vous prot�gent des d�ceptions... Combien de fois avez-vous accord� votre confiance � des gens qui ne la m�ritaient pas ?",
        nombre: 2,
    })

    await db.model.Signification.create({
        message: "Vous avez l'�me d'une artiste ! Dessin, chant, danse... Vous vous �panouissez dans les activit�s cr�atives, et vous avez une imagination d�bordante.",
        nombre: 3,
    })

    await db.model.Signification.create({
        message: "La spontan�it�, ce n'est pas votre truc. Dans votre vie, tout doit �tre rang�, organis�, planifi�, sinon c'est la panique ! Au travail, les responsabilit�s vous font peur : vous pr�f�rez vous mettre au service d'un sup�rieur plut�t que de prendre les commandes. Votre prudence naturelle vous pousse � ne pas vous aventurer en terrain inconnu...",
        nombre: 4,
    })

    await db.model.Signification.create({
        message: "Le changement, l'impr�vu, la nouveaut�, vous adorez ! Ultra curieuse, vous �tes bien d�cid�e � tout essayer, et les exp�riences extr�mes ne vous font pas peur.",
        nombre: 5,
    })

    await db.model.Signification.create({
        message: "Vous attendez le prince charmant !",
        nombre: 6,
    })

    await db.model.Signification.create({
        message: "Sous votre petit air myst�rieux, vous cachez des capacit�s d'observation et d'analyse incroyables. D'ailleurs, lorsque vous leur donnez des conseils, vos proches les suivent � la lettre !",
        nombre: 7,
    })

    await db.model.Signification.create({
        message: "Des projets, vous en avez toujours en pagaille ! Visionnaire, vous avez l'�me d'un chef : vous commandez, et les autres vous ob�issent sans discuter. Et � l'arriv�e, on reconna�t vos m�rites.",
        nombre: 8,
    })

    await db.model.Signification.create({
        message: "Vous r�vez d'un monde paisible et harmonieux... L'id�aliste de la famille, c'est vous ! Vous �tes vuln�rable face au mensonge et � la trahison. Pourtant, lorsque les choses se corsent, vous �tes capable de vous d�mener pour r�soudre les probl�mes au plus vite. Pas question de rester passive face aux situations difficiles !",
        nombre: 9,
    })

}

initDB()
    .then(() => {
        console.log("base initalis�e")
    })