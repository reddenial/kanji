import KanjiCard from "./KanjiCard";
import Aside from "./Aside";
import '../styles/KanjiList.scss'

function KanjiList({ data, kanjiCards }){

    const handleClick = (e, kanji) => {
        e.currentTarget.classList.toggle('active');
        console.log(kanji)

        const kanjiCards = data;

        if (!kanjiCards.includes(kanji.character)) {
            kanjiCards.push(kanji.character);
        } else {
            const index = kanjiCards.indexOf(kanji.character);

            kanjiCards.splice(index, 1);
        }

    }
    
    return (
        <div className="KanjiListContainer">
            <ul className="kanjiList">
                {data.map(({ examples, kanji, radical, references }) =>
                    <KanjiCard
                        key={'kanji-' + references.kodansha}
                        examples={examples}
                        kanji={kanji}
                        radical={radical}
                        references={references}
                        onClick={(e) => handleClick(e, kanji)}
                    />
                )}
            </ul>

            <Aside kanjiCards={kanjiCards} />
        </div>
    );
}

export default KanjiList