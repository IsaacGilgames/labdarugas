import './homepage.css'; 
import React, { useEffect, useState } from "react";



export default function Homepage() {

    const [name, setName] = useState("");
    const [winner, setwinner] = useState(0);
    const [category, setCategory] = useState("alsós");
    const [urlImg, seturlImg] = useState("");


    const kuld = () => {
        if(document.querySelector('#meccs-checkbox').checked){
            fetch('https://localhost:44376/api/SchoolTeams',{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(
                    {
                        
                        TeamName: name,
                        TeamGroup: category,
                        Wins: winner,
                        ImageUrl: urlImg,
                    }),
                    
            })
            //.then(response => response.json())
            //.then(data => console.log(data))
            .then((response =>{
                if(!response.ok){
                    throw new Error("Hiba történt a küldés során!")
                }
                else{
                    alert(`Sikeres regisztráció!`)
                }
            }))
            .catch((error)=>{alert(error)
            });
        }
        else{
            alert("Nem fogadtad el!")
    };

  return (
        <div className="OpenPage">
        <div className="container-fluid">
      {/* Navbar */}
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link" to="/">Diákláb Liga</Link>
            </li >
            <li className="nav-item">
            <Link className="nav-link" to="/resztvevok">Versenyzők</Link>
            </li>
        </ul>
        </nav>

      {/* Hero Section */}
      <div className="jumbotron jumbotron-fluid text-white text-center d-flex align-items-center justify-content-center fade-in" >
        <div className="bg-dark p-4 rounded-lg">
          <h1 className="display-4">Lépj pályára!</h1>
          <p className="lead">Vállald a kihívást, vegyél részt versenyünkön!</p>
          <Link className="btn btn-success btn-lg" to="/resztvevok">Regisztrált csapatok!</Link>
        </div>
      </div>
      
      </div>
      <div className='urlap'>

        <h1>Regisztráció</h1>
        

        <div className="container vertical center">
        <div className="title">Nevezési LAP</div>
        <div className="content vertical center">
            <div className="field horizontal center">
                <label className="label">Csapatnév:</label>
                <input type="text" id="persons"
                onChange={(e) => setName(e.target.value)}
                />
                
            </div>
            

            <div className="field horizontal center" >
            <label htmlFor="category">Versenykategória:</label>
                <select
                id="category"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                >
              <option></option>
              <option value="alsós">alsós</option>
              <option value="felsős">felsős</option>
              <option value="gimis">gimis</option>
            </select>
            </div>
           
            <div className="field horizontal center">
                <label className="label">Győzelem</label>
                <input type="number" id="persons"  min="1" onChange={(e) => setwinner(e.target.value)}/>
            </div>
            <div className="field horizontal center" >
                <label className="label">Kép:</label>
                <input id="url" type="url" onChange={(e) => seturlImg(e.target.value)} />
            </div>
            <label class="foci-checkbox">
                <input id="meccs-checkbox" type="checkbox" name="meccs" value="igen"/>
                Felhasználói feltételek elfogadása
                <span class="checkmark"></span>
                </label>
            <div className="horizontal center">
                <div className="label"></div>
                <button id="saveButton" title="Mentés" onClick={kuld}>MENTÉS</button>
            </div>
        </div>
    </div>


      </div>
      </div>
    
  );
}
