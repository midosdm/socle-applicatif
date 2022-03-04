import { useState, useEffect } from "react";
import ModifierFormationStyle from './ModifierFormationStyle.css';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const ModifierFormation = () => {
    const [codeFormation, setCodeFormation] = useState('');
    const [diplome, setDiplome] = useState('');
    const [doubleDiplome, setDoubleDiplome] = useState('');
    const [nomFormation, setNomFormation] = useState('');
    const history = useHistory();
  const {id} = useParams();
  const [oldFormation, setOldFormation] = useState([]);

    useEffect(() => {
        axios.get("https://app-9f355f19-90a4-4e35-ade0-3982076a7ad4.cleverapps.io/formations/" + id)
        .then(response => setOldFormation(response.data))
    }, []);


  const handleSubmit = (e) => {
    e.preventDefault()
    const formation = {codeFormation: codeFormation, diplome: diplome, doubleDiplome: doubleDiplome, nomFormation: nomFormation}
    console.log(formation);
    console.log(nomFormation);

    console.log(oldFormation);
    fetch('https://app-9f355f19-90a4-4e35-ade0-3982076a7ad4.cleverapps.io/formations', {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formation)
        }).then((response) => {
            if(!response.ok){
                response.json().then(
                    data => {
                      console.log(data.message);
                    }
                )
                console.log('error');
            }
            else {
                console.log('success');
                history.push('/formations');
            }
        });
    
  }

  return (
    <div className="create">
      <h2>Modifier Formation</h2>
      <form>
        <label>codeFormation:</label>
        <input 
          type="text" 
          required 
            placeholder={oldFormation.codeFormation}
          value={codeFormation}
          onChange={(e) => setCodeFormation(e.target.value)}
        />
        <label>diplome:</label>
        <input 
          type="text" 
          required 
          placeholder={oldFormation.diplome}

          value={diplome}
          onChange={(e) => setDiplome(e.target.value)}
        />
        <label>doubleDiplome:</label>
        <input 
          type="text" 
          required 
          placeholder={oldFormation.doubleDiplome}

          value={doubleDiplome}
          onChange={(e) => setDoubleDiplome(e.target.value)}
        />
        <label>Nom Formation:</label>
        <input 
          type="text" 
          required 
          placeholder={oldFormation.nomFormation}

          value={nomFormation}
          onChange={(e) => setNomFormation(e.target.value)}
        />
        <button onClick={handleSubmit}>Modifier</button>
      </form>
    </div>
  );
}
 
export default ModifierFormation;