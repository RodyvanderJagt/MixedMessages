//store message components
const soccerTeams = ["AFC Ajax", "PSV", "AZ Alkmaar", "Vitesse", "Feyenoord", "FC Utrecht", "FC Groningen", "Sparta Rotterdam", "Heracles", "FC Twente", "Fortuna Sittard", "FC Heerenveen", "PEC Zwolle", "Willem II", "RKC Waalwijk", "FC Emmen", "VVV Venlo", "ADO Den Haag"];
const days = ["Friday", "Saturday", "Sunday"];
const adjectives = ["magnificent", "disastrous", "exciting", "wonderful", "horrible", "boring", "awesome", "beautiful"];

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

    console.log(teamA, teamB, day, adjective, scoreA, scoreB);

}

generateMessage();