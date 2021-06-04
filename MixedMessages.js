//store message components
const soccerTeams = ["AFC Ajax", "PSV", "AZ Alkmaar", "Vitesse", "Feyenoord", "FC Utrecht", "FC Groningen", "Sparta Rotterdam", "Heracles", "FC Twente", "Fortuna Sittard", "FC Heerenveen", "PEC Zwolle", "Willem II", "RKC Waalwijk", "FC Emmen", "VVV Venlo", "ADO Den Haag"];
const days = ["Friday", "Saturday", "Sunday"];
const adjectives = ["magnificent", "disastrous", "exciting", "wonderful", "horrible", "exhilarating", "awesome", "beautiful"];

const randomInt = max => Math.floor(Math.random() * max);

const generateMessage = () => {
    //pick random teams
    const teamLength = soccerTeams.length;
    const teamA = soccerTeams[randomInt(teamLength)];
    const teamB = soccerTeams[randomInt(teamLength)];
    if (teamA === teamB) return generateMessage();

    //pick remaining message components
    const maxScore = 5;
    const scoreA = randomInt(maxScore);
    const scoreB = randomInt(maxScore);
    const day = days[randomInt(days.length)];
    const adjective = adjectives[randomInt(adjectives.length)];

    //Generate message based on match outcome
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