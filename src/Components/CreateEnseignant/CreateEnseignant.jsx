import { useState } from "react";
import CreateEnseignantStyle from './CreateEnseignantStyle.css'
import axios from 'axios';
const CreateEnseignant = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [noEnseignant, setNoEnseignant] = useState('');
  const [adresse, setAdresse] = useState('');
  const [emailUbo, setEmailUbo] = useState('');
  const [emailPerso, setEmailPerso] = useState('');
  const [mobile, setMobile] = useState('');
  const [pays, setPays] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    const enseignant = {nom: nom, prenom: prenom, adresse: adresse, emailUbo: emailUbo, emailPerso: emailPerso, mobile: mobile, pays: pays, noEnseignant:noEnseignant}
    console.log(enseignant);
    console.log(nom);
    fetch('https://app-9f355f19-90a4-4e35-ade0-3982076a7ad4.cleverapps.io/enseignants', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(enseignant)
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
    // axios.post('https://app-9f355f19-90a4-4e35-ade0-3982076a7ad4.cleverapps.io/enseignants', { enseignant }, {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    //   .then(res=>{
    //     console.log(res);
    //     console.log(res.data);
    //   })
  }

  return (
    <div className="create">
      <h2>Ajouter Enseignant</h2>
      <form>
      <label>Numero Enseignant:</label>
        <input 
          type="text" 
          required 
          value={noEnseignant}
          onChange={(e) => setNoEnseignant(e.target.value)}
        />
        <label>Nom:</label>
        <input 
          type="text" 
          required 
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <label>Prenom:</label>
        <input 
          type="text" 
          required 
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
        <label>Adresse:</label>
        <input 
          type="text" 
          required 
          value={adresse}
          onChange={(e) => setAdresse(e.target.value)}
        />
        <label>Email UBO:</label>
        <input 
          type="text" 
          required 
          value={emailUbo}
          onChange={(e) => setEmailUbo(e.target.value)}
        />
        <label>Email Perso:</label>
        <input 
          type="text" 
          required 
          value={emailPerso}
          onChange={(e) => setEmailPerso(e.target.value)}
        />
        <label>Pays:</label>
        <input 
          type="text" 
          required 
          value={pays}
          onChange={(e) => setPays(e.target.value)}
        />
        <label>Mobile:</label>
        <input 
          type="text" 
          required 
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button onClick={handleSubmit}>Ajouter</button>
      </form>
    </div>
  );
}
 
export default CreateEnseignant;