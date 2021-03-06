import { useState } from "react";
import CreateFormationStyle from './CreateFormationStyle.css'
import axios from 'axios';

const CreateFormation = () => {
  const [codeFormation, setCodeFormation] = useState('');
  const [diplome, setDiplome] = useState('');
  const [doubleDiplome, setDoubleDiplome] = useState('');
  const [nomFormation, setNomFormation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    const formation = {codeFormation: codeFormation, diplome: diplome, doubleDiplome: doubleDiplome, nomFormation: nomFormation}
    fetch('https://app-9f355f19-90a4-4e35-ade0-3982076a7ad4.cleverapps.io/enseignants', {
            method: 'POST',
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
            }
        });
    
    // axios.post('https://app-9f355f19-90a4-4e35-ade0-3982076a7ad4.cleverapps.io/formations', { formation })
    //   .then(res=>{
    //     console.log(res);
    //     console.log(res.data);
    //   })
  }

  return (
    <div className="create">
      <h2>Ajouter Formation</h2>
      <form>
        <label>codeFormation:</label>
        <input 
          type="text" 
          required 
          value={codeFormation}
          onChange={(e) => setCodeFormation(e.target.value)}
        />
        <label>diplome:</label>
        <input 
          type="text" 
          required 
          value={diplome}
          onChange={(e) => setDiplome(e.target.value)}
        />
        <label>doubleDiplome:</label>
        <input 
          type="text" 
          required 
          value={doubleDiplome}
          onChange={(e) => setDoubleDiplome(e.target.value)}
        />
        <label>Nom Formation:</label>
        <input 
          type="text" 
          required 
          value={nomFormation}
          onChange={(e) => setNomFormation(e.target.value)}
        />
        <button onClick={handleSubmit}>Ajouter</button>
      </form>
    </div>
  );
}
 
export default CreateFormation;