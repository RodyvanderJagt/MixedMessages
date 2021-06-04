//store message components
const soccerTeams = ["AFC Ajax", "PSV", "AZ Alkmaar", "Vitesse", "Feyenoord", "FC Utrecht", "FC Groningen", "Sparta Rotterdam", "Heracles", "FC Twente", "Fortuna Sittard", "FC Heerenveen", "PEC Zwolle", "Willem II", "RKC Waalwijk", "FC Emmen", "VVV Venlo", "ADO Den Haag"];
const days = ["Friday", "Saturday", "Sunday"];
const adjectives = ["magnificent", "disastrous", "exciting", "wonderful", "horrible", "exhilarating", "awesome", "beautiful"];

const randomInt = max => Math.floor(Math.random() * max);
const teamLength = soccerTeams.length;
const dayLength = days.length;
const adjLength = adjectives.length;

const generateMessage = () => {
    //pick random teams
    const teamA = soccerTeams[randomInt(teamLength)];
    const teamB = soccerTeams[randomInt(teamLength)];
    if (teamA === teamB) return generateMessage();

    const scoreA = randomInt(5);
    const scoreB = randomInt(5);
    const day = days[randomInt(dayLength)];
    const adjective = adjectives[randomInt(adjLength)];

    let message = "";
    switch(true) {
        case scoreA > scoreB: message += `${teamA} defeated ${teamB} `; break;
        case scoreA === scoreB: message += `${teamA} and ${teamB} tied `; break;
        case scoreA < scoreB: message += `${teamA} lost against ${teamB} `; break;
        default: break;
    }
    message += `with ${scoreA}-${scoreB} on ${day}. It was ${adjective}!`;
    return message;
}

console.log(generateMessage());