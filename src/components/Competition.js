import React, { useState, useEffect} from 'react'
import axios from 'axios'


const Competition = (props) => {
    const [res, setRes] = useState()
    useEffect(() => {
        axios.get('https://api.football-data.org/v2/competitions', {
            headers: {"X-Auth-Token": "16138bb845eb491585407156f83b0b4a"}
        }).then(data => setRes(data.data.competitions))
    }, [])

    console.log(res)
    return(
        <div>
           {res && res.map(r => <div>
                <p className="Competition-Match-name">{r.name} </p>
                {r.currentSeason && <p className="Competition-Match-date">{r.currentSeason.startDate} - {r.currentSeason.endDate}</p>}
                
           </div>)} 
        </div>
    )
}

export default Competition