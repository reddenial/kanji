import '../styles/Aside.scss'

function Aside({ kanjiCards }) {
    return (
        <div className='aside-col'>
            <span>The kanjis cliked :</span>
            {kanjiCards.map((name, i) =>
                <div key={i}> {name} </div>
            )}
        </div>
    )
}

export default Aside