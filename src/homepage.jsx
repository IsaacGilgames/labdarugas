import './homepage.css'; 



export default function Homepage() {

    

  return (
    <div className="OpenPage">
        <div className="container-fluid">
      {/* Navbar */}
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link" href="#">Diákláb Liga</a>
            </li >
            <li className="nav-item">
            <a className="nav-link" href="#">Versenyzők</a>
            </li>
        </ul>
        </nav>

      {/* Hero Section */}
      <div className="jumbotron jumbotron-fluid text-white text-center d-flex align-items-center justify-content-center fade-in" >
        <div className="bg-dark p-4 rounded-lg">
          <h1 className="display-4">Lépj pályára!</h1>
          <p className="lead">Vállald a kihívást, vegyél részt versenyünkön!</p>
          <a className="btn btn-success btn-lg" href="#">Regisztrált csapatok!</Link>
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
                <input type="text" id="persons"/>
                
            </div>
            

            <div className="field horizontal center" >
            <label htmlFor="category">Versenykategória:</label>
                <select
                id="category"
                className="form-control"
                value={category}>
              <option></option>
              <option value="alsós">alsós</option>
              <option value="felsős">felsős</option>
              <option value="gimis">gimis</option>
            </select>
            </div>
           
            <div className="field horizontal center">
                <label className="label">Győzelem</label>
                <input type="number" id="persons"  min="1" />
            </div>
            <div className="field horizontal center" >
                <label className="label">Kép:</label>
                <input id="url" type="url"  />
            </div>
            <label class="foci-checkbox">
                <input id="meccs-checkbox" type="checkbox" name="meccs" value="igen"/>
                Felhasználói feltételek elfogadása
                <span class="checkmark"></span>
                </label>
            <div className="horizontal center">
                <div className="label"></div>
                <button id="saveButton" title="Mentés" >MENTÉS</button>
            </div>
        </div>
    </div>


      </div>
      </div>
    
  );
}
