import React, {useState, useEffect} from 'react';
import PlayerFinder from "../apis/PlayerFinder";
import { InfoSection } from '../../components';
import { PlayersList } from '../../components';
import { Fragment } from 'react';


function Players() {

  const [laliga, setPlayers] = useState([])
  

  useEffect(() => {
    const getPlayers = async () => {
      const response = await PlayerFinder.get("/");
    
      fetch("http://localhost:8000/api")
      .then(res => res.json())
      .then(res => setPlayers(res)) 
    }
    getPlayers()
    
  }, [])

  return (
    <Fragment>
      <div className="container">
          <div className="row">
            <div className="col-7">
              <h2 style={{textAlign: 'center'}}>Player List</h2>
              <PlayersList laliga={laliga}/>
            </div>

          </div>
      </div>
    </Fragment>
  );
}

export default Players; 
 