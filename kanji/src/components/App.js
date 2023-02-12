import React from 'react'
import '../styles/Layout.css'
import KanjiCard from './KanjiCard'
import Aside from './Aside'

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            listOfKanjis: [],
            isActive: false,
            kanjiCards: []
        };
    }

    componentDidMount() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'cebb1b03a2mshfaab6b7fc773f51p149a6ajsnea4f5990e382',
                'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
            }
        };

        fetch('https://kanjialive-api.p.rapidapi.com/api/public/kanji/all', options)
            .then(response => response.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        listOfKanjis: result,
                    });
                },
                // Remarque : il est important de traiter les erreurs ici
                // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
                // des exceptions provenant de réels bugs du composant.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                },
            )
    }


    handleClick(e, kanji) {
        e.currentTarget.classList.toggle('active');
        console.log(kanji)

        const kanjiCards = this.state.kanjiCards;

        console.log(kanjiCards);
        if (!kanjiCards.includes(kanji.character)) {
            kanjiCards.push(kanji.character);
        } else {
            const index = kanjiCards.indexOf(kanji.character);

            kanjiCards.splice(index, 1);
        }

        this.setState({
            kanjiCards: kanjiCards
        });
    }

    render() {

        const kanjiCards = this.state.kanjiCards;

        return (
            <div className="main">
                <ul className="kanjiList">
                    {this.state.listOfKanjis.slice(0, 100).map(({ examples, kanji, radical, references }) =>
                        <KanjiCard
                            key={'kanji-' + kanji.meaning.english + references.kodansha}
                            examples={examples}
                            kanji={kanji}
                            radical={radical}
                            references={references}
                            onClick={(e) => this.handleClick(e, kanji)}
                        />
                    )}
                </ul>
                <Aside kanjiCards={kanjiCards} />
            </div>
        )
    }
}

export default App