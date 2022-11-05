import React, {useState, useEffect} from 'react';
import { InfoSection } from '../../components';
import { PlayersList } from '../../components';
import { Fragment } from 'react';

function Players() {

  const [players, setPlayers] = useState([])

  useEffect(() => {
    const getPlayers = () => {
      fetch('http://localhost:8000/api')
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
              <PlayersList players={players}/>
            </div>
            <div className="col-5">
              <h2 style={{textAlign: 'center'}}>Player Form</h2>
              
            </div>
          </div>
        </div>
      </Fragment>
  );
}

export default Players;
 