document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'Avocado',
            img: 'Images/avocado.jpg'
        },
        {
            name: 'Banana',
            img: 'Images/Banana.jpg'
        },
        {
            name: 'Cherry',
            img: 'Images/Cherry.jpg'
        },
        {
            name: 'Chilly',
            img: 'Images/Chilly.jpg'
        },
        {
            name: 'Orange',
            img: 'Images/Orange.jpg'
        },
        {
            name: 'Watermelon',
            img: 'Images/Watermelon.jpg'
        },
        {
            name: 'Avocado',
            img: 'Images/avocado.jpg'
        },
        {
            name: 'Banana',
            img: 'Images/Banana.jpg'
        },
        {
            name: 'Cherry',
            img: 'Images/Cherry.jpg'
        },
        {
            name: 'Chilly',
            img: 'Images/Chilly.jpg'
        },
        {
            name: 'Orange',
            img: 'Images/Orange.jpg'
        },
        {
            name: 'Watermelon',
            img: 'Images/Watermelon.jpg'
        }

    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('#grid')
    const scoreDisplay = document.querySelector('#score')
    const result = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenIds = []
    let cardsWon = []
    let score


    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'Images/Blank.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.append(card)

        }
        score = 0

    }


    function checkMatch() {
        const cards = document.querySelectorAll('img')
        optionid1 = cardsChosenIds[0]
        optionid2 = cardsChosenIds[1]

        if (optionid1 == optionid2) {
            cards[optionid1].setAttribute('src', 'Images/blank.jpg')
            cards[optionid2].setAttribute('src', 'Images/blank.jpg')
        }

        else if (cardsChosen[0] == cardsChosen[1]) {
            cards[optionid1].setAttribute('src', 'Images/white.jpg')
            cards[optionid2].setAttribute('src', 'Images/white.jpg')
            cards[optionid1].removeEventListener('click', flipCard)
            cards[optionid2].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
            score += 100
        }
        else {
            cards[optionid1].setAttribute('src', 'Images/blank.jpg')
            cards[optionid2].setAttribute('src', 'Images/blank.jpg')
            if (score > 20)
                score -= 10
        }
        scoreDisplay.textContent = score


        cardsChosen = []
        cardsChosenIds = []

        if (cardsWon.length == cardArray.length / 2) {
            result.textContent = "You won"
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenIds.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkMatch, 500)
        }
    }
    createBoard()
})
