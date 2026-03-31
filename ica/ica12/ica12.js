let newBtn =  document.querySelector('#js-new-quote')
newBtn.addEventListener('click', getQuote)

let current = {
    quesiton: "",
    answer:  ""
}

let answerBtn = document.querySelector('#js-tweet').addEventListener('click', showAnswer)
const answerText = document.querySelector('#js-answer-text')


const endPoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

async function getQuote() {
    // alert("THIS WORKS!")
    try {
        const response = await fetch(endPoint);
        if (!response.ok) {
            throw Error(response.statusText)
        }
        const json = await response.json();
        console.log(json)
        dsiplayQuote(json['question'])
        current.quesiton = json["question"]
        current.answer = json["answer"]
        console.log(current.answer)
    } catch (err) {
        console.log(err)
        alert('Failed to fetch new quote')
    }
}

function dsiplayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
    answerText.textContent = "";
}

function showAnswer () {
    answerText.textContent = current.answer
}

getQuote();