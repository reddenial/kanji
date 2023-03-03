import '../styles/KanjiCard.scss'

function KanjiCard({ examples, kanji, radical, references, onClick }) {
    return (
        <li className="kanjiCard" onClick={onClick}>
            <div className="kanjiMain">
                <div className="kanjiCharacter">{kanji.character} </div>
                <div className="kanjiMeaning">{kanji.meaning.english} </div>
            </div>
            <div className="kanjiReadings">
                {kanji.kunyomi.hiragana !== 'n/a' && <div className="kanjiKunyomi">{kanji.kunyomi.hiragana}</div>}
                {kanji.onyomi.katakana !== 'n/a' && <div className="kanjiOnyomi">{kanji.onyomi.katakana}</div>}
            </div>
        </li>
    );
}   

export default KanjiCard