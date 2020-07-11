import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Match = (props) =>{
    const [res, setRes] = useState()
    useEffect(() => {
        axios.get('https://api.football-data.org/v2/matches', {
            headers: {"X-Auth-Token": "776febd87fa04452a557f5400cd90b40"}
        }).then(data => setRes(data.data.matches))
    }, [])
    console.log(res)
    return(
        <div>
            {res && res.map(r => 
                <div>
                    <p className="Competition-Match-name">{r.homeTeam && r.homeTeam.name} - {r.awayTeam && r.awayTeam.name}</p>
                    <p className="Competition-Match-date">{r.utcDate.split("T")[0]}</p>
                    <p className="Competition-Match-date">{r.utcDate.split("T")[1].split("Z")[0]}</p>
                </div>
            )}
        </div>
    )
}

export default Match