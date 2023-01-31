
const startButton = document.getElementById("start");
const valueButton = document.getElementById("start").value; 

const images = document.getElementById("images");
const firstText = document.getElementById("front");
    
const nextButton = document.getElementById("next");

const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const radio3 = document.getElementById("radio3");

const radioBox = document.getElementById("radio");

const question = document.getElementById("question");

const answer = document.getElementById("answer");
const quiz = document.getElementById("quiz-container");
const quizPicture = document.getElementById("quiz-pic");

let cardImage1 = document.getElementById("card-image1");
let cardImage2 = document.getElementById("card-image2");
let cardImage3 = document.getElementById("card-image3");
    
let cardTitle1 = document.getElementById("card-title-1");
let cardTitle2 = document.getElementById("card-title-2");
let cardTitle3 = document.getElementById("card-title-3");
    
let cardText1 = document.getElementById("card-text1");
let cardText2 = document.getElementById("card-text2");
let cardText3 = document.getElementById("card-text3");

let scoreA = "";
let scoreB = "";
let scoreC = "";
let count = 0;

// button that starts the quiz
startButton.addEventListener("click", function() {
    firstText.style.visibility = "hidden";
    images.style.visibility = "visible";
    question.innerHTML = questions[0].question;
    quizPicture.src = questions[0].picture;
});

// checks which string is the longest and returns winning letter 
const checkScore = () => {
    if (scoreA.length >= scoreB.length && scoreA.length >= scoreC.length) {
        return "a";
    } else if (scoreB.length >= scoreA.length && scoreB.length >= scoreC.length) {
        return "b";
    } else {
        return "c";
    }
}

const questions = [
    {  // 1
        question: "Your hobby is:",
        picture: "pics/simpsons-fun.jpg"
    },
    {  // 2
        question: "On TV you would watch:",
        answer: {
            a: "Reality shows / drama",
            b: "Action / Adventure",
            c: "I turned my TV into aquarium"
        },
        picture: "pics/simpsons-tv2.jfif"
    },
    {  // 3
        question: "Your favourite animal:",
        answer: {
            a: "Chimps <br> are cute",
            b: "Dogs are <br> the best",
            c: "Cats rule"
        },
        images: {
            a: "pics/mrteeny.jfif",
            b: "pics/scratchy.jfif",
            c: "pics/doggy.jfif"
        },
        picture: "pics/sapien.jpg"
    },
    {  // 4
        question: "Your thoughts about food:",
        answer: {
            a: "Got food?  	🍗 🍕 🌭 🥙 🥨 🦞 🧁 🎂 🥣",
            b: "I am allergic to everything",
            c: "I like cooking not eating"
        },
        picture: "pics/homer-donuts2.jfif"
    },
    {  // 5
        question: "Saturday evening. You are in:",
        answer: {
            a: "Cozy king <br> size bed",
            b: "Thoughts <br> and prayers",
            c: "I'm a king <br> of disco"
        },
        images: {
            a: "pics/homer-sleep2.jpg",
            b: "pics/disco.jfif",
            c: "pics/ned-pray.jfif"
        },
        picture: "pics/homer-stars.jfif"
    },
    {  // 6
        question: "Your dream job:",
        answer: {
            a: "Work in nuclear power plant",
            b: "Own a nuclear power plant",
            c: "Sell donuts 🍩"
        },
        picture: "pics/homer-work.jfif"
    },
    {  // 7
        question: "Your favourite phrase:",
        answer: {
            a: "Ha ha !",
            b: "Okily dokily <br> hidely ho !",
            c: "D'oh !"
        },
        images: {
            a: "pics/haha.jfif",
            b: "pics/doh.jfif",
            c: "pics/ned-hid.jfif"
        },
        picture: "pics/comic2.jfif"
    },
    {  // 8
        question: "Your holiday destination:",
        answer: {
            a: "The further the better, prefferably Mars",
            b: "Somewhere very warm, like Africa",
            c: "I enjoy cold, take me to Alaska!"
        }, 
        picture: "pics/homer-space.jfif"
    },
    {  // 9
        question: "Your dream:",
        answer: {
            a: "Donuts is <br> all I need",
            b: "Money <br> and diamonds",
            c: "I want to be <br> a superstar"
        },
        images: {
            a: "pics/donuts2.jfif",
            b: "pics/superstar.jfif",
            c: "pics/burns-money2.jfif"
        },
        picture: "pics/homer-fun.jpg"
    },
    {  // 10
        question: "Your biggest fear:",
        answer: {
            a: "My own shadow - I just can't outrun it!",
            b: "Going to hell after death",
            c: "Cobras!!!  🐍"
        },
        picture: "pics/hoer-bart.jpg"
    }            
]

const answers = [
    {  // 1
        "title": "Homer",
        "text": "<br>Mmmmmm.... donuts ahhhhrrrrr",
        "picture": "pics/homer-mmmm.jfif"
    },
    {  // 2
        "title": "Marge",
        "text": "<br>Why I'm so funny when there's noone around?",
        "picture": "pics/marge2.png"
    },  // 3
    {
        "title": "Bart",
        "text": "<br>Eat my shorts!",
        "picture": "pics/bart2.jfif"
    },
    {  // 4
        "title": "Lisa",
        "text": "<br>Save the whales!",
        "picture": "pics/lisa-port.jfif"
    },
    {  // 5
        "title": "Moe",
        "text": "<br>I'll eat a booger",
        "picture": "pics/moe-pic.jfif"
    },
    {  // 6
        "title": "Millhouse",
        "text": "<br>My mom says I'm cool",
        "picture": "pics/millhouse.jpg"
    },
    {  // 7
        "title": "Skinner",
        "text": "<br>Steamed hams for dinner!",
        "picture": "pics/skinn.png"
    },
    {  // 8
        "title": "Ralph",
        "text": "<br>I was done before we came in",
        "picture": "pics/ralph-thinks.jpg"
    },
    {  // 9
        "title": "Apu",
        "text": "<br>Thank you, come again!",
        "picture": "pics/apu.jpg"
    },
    {  // 10
        "title": "Cletus",
        "text": "<br>Hey a head! Oh, Dang it's been scooped out",
        "picture": "pics/cletus.jpg"
    },
    {  // 11
        "title": "Lenny",
        "text": "<br>Idiots? Why do we re-elect this guy?",
        "picture": "pics/lenny.jpg"
    },
    {  // 12
        "title": "Mr. Burns",
        "text": "<br>Release the hounds!",
        "picture": "pics/burns-alien.png"
    },
    {  // 13
        "title": "Clancy Wiggum",
        "text": "<br>We're surface police. What you need is sewer cops",
        "picture": "pics/wiggum.jfif"
    },
    {  // 14
        "title": "Barney",
        "text": "<br>You should always drink to enhance you social skills",
        "picture": "pics/barney2.png"
    },
    {  // 15
        "title": "Abe Simpson",
        "text": "<br>My Homer is not a Communist. He may be a liar,an idiot, a Communist, but he is NOT a porn star!",
        "picture": "pics/abe-angry2.jfif"
    },

    

]

// last function to run , displays the answer - 3 cards
const displayAnswer = (score) => {

    quiz.style.visibility = "hidden";
    images.style.visibility = "hidden";
    answer.style.visibility = "visible";
    nextButton.style.visibility = "hidden";

    switch (score) {
        case "a":
            if (scoreB.length > scoreC.length) {
                cardImage1.src = answers[0].picture;
                cardTitle1.innerHTML = answers[0].title;
                cardText1.innerHTML = answers[0].text;
                cardImage2.src = answers[1].picture;
                cardTitle2.innerHTML = answers[1].title;
                cardText2.innerHTML = answers[1].text;
                cardImage3.src = answers[8].picture;
                cardTitle3.innerHTML = answers[8].title;
                cardText3.innerHTML = answers[8].text;
            } else {
                cardImage1.src = answers[6].picture;
                cardTitle1.innerHTML = answers[6].title;
                cardText1.innerHTML = answers[6].text;
                cardImage2.src = answers[7].picture;
                cardTitle2.innerHTML = answers[7].title;
                cardText2.innerHTML = answers[7].text;
                cardImage3.src = answers[3].picture;
                cardTitle3.innerHTML = answers[3].title;
                cardText3.innerHTML = answers[3].text;
            }
            break;
            case "b":
                if (scoreA.length > scoreC.length) {
                cardImage1.src = answers[4].picture;
                cardTitle1.innerHTML = answers[4].title;
                cardText1.innerHTML = answers[4].text;
                cardImage2.src = answers[8].picture;
                cardTitle2.innerHTML = answers[8].title;
                cardText2.innerHTML = answers[8].text;
                cardImage3.src = answers[9].picture;
                cardTitle3.innerHTML = answers[9].title;
                cardText3.innerHTML = answers[9].text;
            } else {
                cardImage1.src = answers[7].picture;
                cardTitle1.innerHTML = answers[7].title;
                cardText1.innerHTML = answers[7].text;
                cardImage2.src = answers[5].picture;
                cardTitle2.innerHTML = answers[5].title;
                cardText2.innerHTML = answers[5].text;
                cardImage3.src = answers[10].picture;
                cardTitle3.innerHTML = answers[10].title;
                cardText3.innerHTML = answers[10].text;
            }
            break;
            case "c":
                if (scoreA.length > scoreB.length) {
                cardImage1.src = answers[2].picture;
                cardTitle1.innerHTML = answers[2].title;
                cardText1.innerHTML = answers[2].text;
                cardImage2.src = answers[0].picture;
                cardTitle2.innerHTML = answers[0].title;
                cardText2.innerHTML = answers[0].text;
                cardImage3.src = answers[11].picture;
                cardTitle3.innerHTML = answers[11].title;
                cardText3.innerHTML = answers[11].text;
            } else {
                cardImage1.src = answers[14].picture;
                cardTitle1.innerHTML = answers[14].title;
                cardText1.innerHTML = answers[14].text;
                cardImage2.src = answers[13].picture;
                cardTitle2.innerHTML = answers[13].title;
                cardText2.innerHTML = answers[13].text;
                cardImage3.src = answers[12].picture;
                cardTitle3.innerHTML = answers[12].title;
                cardText3.innerHTML = answers[12].text;

                cardText1.style.fontSize = "smaller";
            }
            break;
            default:  
                console.log("ooops");
    }
}

// button that changes the screen to images 
nextButton.addEventListener("click", function() {
    // when last question is reached, function checkScore is called and 
    // its return value is assigned to a variable, which is 
    // then passed as argument to displayAnswer function
    if (count == 9) {
        const finalScore = checkScore();
        displayAnswer(finalScore);
    }

    question.innerHTML = questions[count+1].question;

    label1.innerHTML = questions[count+1].answer["a"];
    label2.innerHTML = questions[count+1].answer["b"];
    label3.innerHTML = questions[count+1].answer["c"];

    image1.src = questions[count+1].images["a"];
    image2.src = questions[count+1].images["b"];
    image3.src = questions[count+1].images["c"];

    quizPicture.src = questions[count + 1].picture;

    radioBox.style.visibility = "hidden";
    images.style.visibility = "visible";

    let options = document.getElementsByName('options');
    let selected = ""; 
    
    // get value from selected radio button
    for(let i = 0; i < options.length; i++){
        if(options[i].checked){
            selected = options[i].value;
        }
    }

    // add value to the score
    addScore(selected);   
    
});

// image is a button and changes the screen to radio buttons
images.addEventListener("click", function() {
    
    // before last radios launches the button apearance needs to change
    if (count == 9) {
        nextButton.value = "Result";
        nextButton.style.backgroundColor = "#997a8d";
    }

    images.style.visibility = "hidden";   
    radioBox.style.visibility = "visible";
    question.innerHTML = questions[count].question;
    quizPicture.src = questions[count].picture;

    question.innerHTML = questions[count].question;
    radio1.innerHTML = questions[count].answer["a"];
    radio2.innerHTML = questions[count].answer["b"];
    radio3.innerHTML = questions[count].answer["c"];

    quizPicture.src = questions[count].picture;

    
}); 

// this function is called  both via inline html and from other function, 
// everytime a button next or image is pressed
// it adds to score / count variables and returns them
function addScore (value) {
    switch (value) {
        case "a":
            scoreA += "a"
            count++
            break;
        case "b":
            scoreB += "b"
            count++
            break;
        case "c":
            scoreC += "c"
            count++
            break;
        default:
            console.log("ooops");
    }
    return scoreA, scoreB, scoreC, count;
}





       




    
