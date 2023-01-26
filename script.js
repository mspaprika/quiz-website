
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

startButton.addEventListener("click", function() {
    firstText.style.visibility = "hidden";
    images.style.visibility = "visible";
    question.innerHTML = "Your hobby is:"
    quizPicture.src = "pics/simpsons-fun.jpg";
});

const checkScore = () => {
    if (scoreA.length >= scoreB.length && scoreA.length >= scoreC.length) {
        console.log("Most A");
        return "a";
    } else if (scoreB.length >= scoreA.length && scoreB.length >= scoreC.length) {
        console.log("Most B");
        return "b";
    } else {
        console.log("Most C");
        return "c";
    }
}

const questions = [
    {
        question: "Your hobby is:",
        picture: ""
    },
    {
        question: "On TV you would watch:",
        answer: {
            a: "Reality shows / drama",
            b: "Action / Adventure",
            c: "TV ? I don't have one"
        },
        picture: "pics/simpsons-tv2.jfif"
    },
    {
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
    {
        question: "Your thoughts about food:",
        answer: {
            a: "Got food?",
            b: "I am allergic to everything",
            c: "I like cooking not eating"
        },
        picture: "pics/homer-donuts2.jfif"
    },
    {
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
    {
        question: "Your dream job:",
        answer: {
            a: "Working in nuclear power plant",
            b: "Any job, as long I help people",
            c: "Smart people don't work"
        },
        picture: "pics/homer-work.jfif"
    },
    {
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
    {
        question: "Your holiday destination:",
        answer: {
            a: "The further the better, prefferably Mars",
            b: "Somewhere very warm, like Africa",
            c: "I enjoy cold, take me to Alaska!"
        }, 
        picture: "pics/homer-space.jfif"
    },
    {
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
    {
        question: "Your biggest fear:",
        answer: {
            a: "My own shadow - I just can't outrun it!",
            b: "Going to hell after death",
            c: "What if my dog eats my homework..."
        },
        picture: "pics/hoer-bart.jpg"
    }            
]

const answers = [
    {
        "title": "Homer",
        "text": "<br>Mmmmmm.... donuts",
        "picture": "pics/homer-mmmm.jfif"
    },
    {
        "title": "Marge",
        "text": "<br>Why I'm so funny when there's noone around?",
        "picture": "pics/marge2.png"
    },
    {
        "title": "Bart",
        "text": "<br>Eat my shorts!",
        "picture": "pics/bart2.jfif"
    },
    {
        "title": "Lisa",
        "text": "<br>For once in your life, be cool",
        "picture": "pics/lisa-port.jfif"
    },
    {
        "title": "Moe",
        "text": "<br>I'll eat a booger",
        "picture": "pics/moe-pic.jfif"
    },
    {
        "title": "Millhouse",
        "text": "<br>My mom says I'm cool",
        "picture": "pics/millhouse.jpg"
    },
    {
        "title": "Skinner",
        "text": "<br>Steamed hams for dinner please!",
        "picture": "pics/skinn.png"
    },
    {
        "title": "Ralph",
        "text": "<br>I was done before we came in",
        "picture": "pics/ralph-thinks.jpg"
    },
    {
        "title": "Apu",
        "text": "<br>Thank you, come again!",
        "picture": "pics/apu.jpg"
    }
]

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
                cardImage3.src = answers[6].picture;
                cardTitle3.innerHTML = answers[6].title;
                cardText3.innerHTML = answers[6].text;
            } else {
                cardImage1.src = answers[7].picture;
                cardTitle1.innerHTML = answers[7].title;
                cardText1.innerHTML = answers[7].text;
                cardImage2.src = answers[5].picture;
                cardTitle2.innerHTML = answers[5].title;
                cardText2.innerHTML = answers[5].text;
                cardImage3.src = answers[4].picture;
                cardTitle3.innerHTML = answers[4].title;
                cardText3.innerHTML = answers[4].text;
            }
            break;
            case "c":
                if (scoreA.length > scoreB.length) {
                cardImage1.src = answers[2].picture;
                cardTitle1.innerHTML = answers[2].title;
                cardText1.innerHTML = answers[2].text;
                cardImage2.src = answers[4].picture;
                cardTitle2.innerHTML = answers[4].title;
                cardText2.innerHTML = answers[4].text;
                cardImage3.src = answers[5].picture;
                cardTitle3.innerHTML = answers[5].title;
                cardText3.innerHTML = answers[5].text;
            } else {
                cardImage1.src = answers[3].picture;
                cardTitle1.innerHTML = answers[3].title;
                cardText1.innerHTML = answers[3].text;
                cardImage2.src = answers[7].picture;
                cardTitle2.innerHTML = answers[7].title;
                cardText2.innerHTML = answers[7].text;
                cardImage3.src = answers[1].picture;
                cardTitle3.innerHTML = answers[1].title;
                cardText3.innerHTML = answers[1].text;
            }
            break;
            default:  
                console.log("ooops");
    }
}

nextButton.addEventListener("click", function() {
    console.log(answers[0].title);
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
    

    for(let i = 0; i < options.length; i++){
        if(options[i].checked){
            selected = options[i].value;
        }
    }

    addScore(selected);   
    
});

images.addEventListener("click", function() {
    
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

function addScore (value) {
    console.log("addScore", value, "count", count);
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
    console.log(scoreC, scoreB, scoreA);
    return scoreA, scoreB, scoreC, count;
}





       




    
