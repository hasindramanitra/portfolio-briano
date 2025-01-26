import parking from "../assets/parking.png"
import madabel from "../assets/madabel.png"
import signup from "../assets/signup.png"
const PROJECTS = [
    {
        id: 1,
        landingPage: parking,
        signupPage: signup,
        title: "Park'In",
        miniDescription: "A web application that allows you to search for all kinds of parking lots for different types of vehicles as well as make their reservations and a easily payment method.",
        description: "Park'In is a web application that allows users to search for appropriate parking spaces for their vehicle, then reserve it or cancel the reservation after 1 hour from the time of confirmation of the reservation and finally make payment of the price of the reserved parking space. using available payment methods",
        features: [
            "Choose the category of parkings",
            "Search the free parkings by countries, city, date, hours",
            "Make a reservation or cancel it",
            "Send a SMS to the user who makes the reservation with all informations about the reservation",
            "Send the invoice by email to the user in PDF Format",
            "Authentication with OAuth2(connexion via Google)",
            "Registration and Authentication"
        ],
        fronts: [
            "CSS3",
            "TAILWINDCSS",
            "FRAMER-MOTION",
            "JSX",
            "REACTJS"
        ],
        backs: [
            "PHP8",
            "DOMPDF",
            "SYMFONY6",
            "MYSQL",
            "JWT",
            "OAUTH2",
        ],
        versionning: "GIT & GITHUB"
    },
    {
        id: 2,
        landingPage: madabel,
        title: "Madabel",
        miniDescription: "A web application for accompagning a person to become a better leader in their enterprise and gives accompagnement for get hiring the learship skills.",
        description: "Madabel is a web application that allows users to test their level of leadership by answering predefined questionnaires with scores and results sent by email to the user concerned; it also offers support to improve the user's level of leadership",
        features: [
            "Registration and authentication",
            "Send user's test result by mail",
            "Language translation(french and english)",
            "Changing password",
        ],
        fronts: [
            "HTML",
            "CSS3",
            "Javascript"
        ],
        backs: [
            "PHP8",
            "DOMPDF",
            "MYSQL",
        ],
        versionning: "GIT & GITHUB"
    }
]

export default PROJECTS;