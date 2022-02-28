import { useState } from "react";
import CreateCandidatStyle from './CreateCandidatStyle.css'
import axios from 'axios';
const CreateCandidat = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [adresse, setAdresse] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    const candidat = {nom: nom, prenom: prenom, adresse: adresse, email: email, mobile: mobile}
    axios.post('https://app-9f355f19-90a4-4e35-ade0-3982076a7ad4.cleverapps.io/candidats', { candidat })
      .then(res=>{
        console.log(res);
        console.log(res.data);
      })
  }

  return (
    <div className="create">
      <h2>Ajouter Candidat</h2>
      <form>
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
        <label>Email:</label>
        <input 
          type="text" 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
 
export default CreateCandidat;