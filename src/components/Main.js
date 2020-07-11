import React, { useState } from 'react'
import Match from './Match'
import Competition from './Competition'

const Main = props => {
    const [competitionSelected, setCompetitionSelected] = useState(true)
    return (
		<div>
			<div className="Competitions-and-Matches">
				<div className="Competitions"><div  onClick={() => setCompetitionSelected(true)}>Competition</div></div>
				<div className="Matches" ><div onClick={() => setCompetitionSelected(false)}>Match</div></div>
			</div>
			<div>{competitionSelected ? <Competition /> : <Match />}</div>
		</div>
	)
}

export default Main