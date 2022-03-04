import { useState, useEffect } from "react";
import CreatePromotionStyle from './CreatePromotionStyle.css'
import axios from 'axios';


const CreatePromotion = () => {
  const [siglePromotion, setSiglePromotion] = useState('');
  const [enseignant, setEnseignant] = useState();
  const [anneeUniversitaire, setAnneeUniversitaire] = useState();
  const [formation, setFormation] = useState();
  const [enseignantList, setEnseignantList] = useState([]);
  const [formationList, setFormationList] = useState([]);
  const [processusStage, setProcesusStage] = useState('');

  useEffect(() => {
    axios.get("https://app-9f355f19-90a4-4e35-ade0-3982076a7ad4.cleverapps.io/enseignants")
    .then(response => setEnseignantList(response.data));  
    axios.get("https://app-9f355f19-90a4-4e35-ade0-3982076a7ad4.cleverapps.io/formations")
    .then(response => setFormationList(response.data));  
  },[]);
  const handleSubmit = (e) => {
    e.preventDefault()
    const id = {
      anneeUniversitaire: anneeUniversitaire,
      codeFormation: formation.codeFormation
    }
    const promotion = {siglePromotion: siglePromotion, processusStage: processusStage, enseignant: enseignant, formation: formation}
    fetch('https://app-9f355f19-90a4-4e35-ade0-3982076a7ad4.cleverapps.io/promotions', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(promotion)
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
    // const formation = {codeFormation: codeForamation, diplome: diplome, doubleDiplome: doubleDiplome, nomFormation: nomFormation}
    // axios.post('https://app-9f355f19-90a4-4e35-ade0-3982076a7ad4.cleverapps.io/formations', { formation })
    //   .then(res=>{
    //     console.log(res);
    //     console.log(res.data);
    //   })
  }

  return (
    <div className="create">
      <h2>Ajouter Promotion</h2>
      <form>
        <label>sigle Promotion:</label>
        <input 
          type="text" 
          required 
          value={siglePromotion}
          onChange={(e) => setSiglePromotion(e.target.value)}
        />

        <label>processus stage:</label>
        <input 
          type="text" 
          required 
          value={processusStage}
          onChange={(e) => setProcesusStage(e.target.value)}
        />
        <label>annee universitaire:</label>
        <input 
          type="text" 
          required 
          value={anneeUniversitaire}
          onChange={(e) => setAnneeUniversitaire(e.target.value)}
        />
        <label> Enseignant:</label>
        <select value={enseignant} onChange={(e) => setEnseignant(e.target.value)}>
            {enseignantList.map((enseignant) => (
              <option value={enseignant.nom}>{enseignant.nom}</option>
            ))}
        </select>

        <label> formation:</label>
        <select value={formation} onChange={(e) => setFormation(e.target.value)}>
            {formationList.map((formation) => (
              <option value={formation.codeFormation}>{formation.codeFormation}</option>
            ))}
        </select>
        
        <button onClick={handleSubmit}>Ajouter</button>
      </form>
    </div>
  );
}
 
export default CreatePromotion;