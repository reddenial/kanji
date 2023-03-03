import React from 'react'
import '../styles/Layout.scss'
import KanjiList from './KanjiList'
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
                    document.getElementById('loader').style.display = 'none';

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

    render() {

        return (
            <div className="main">
                <div id="loader">
                    <div className="lds-dual-ring"></div>
                </div>
                <KanjiList 
                    data={this.state.listOfKanjis} 
                    kanjiCards={this.state.kanjiCards} 
                />
            </div>
        )
    }
}

export default App