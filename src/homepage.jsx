import './homepage.css'; 



export default function Homepage() {

    

  return (
    <div class="OpenPage">
        <div class="container-fluid">

      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link" href="#">Diákláb Liga</a>
            </li >
            <li class="nav-item">
            <a class="nav-link" href="#">Versenyzők</a>
            </li>
        </ul>
        </nav>


      <div class="jumbotron jumbotron-fluid text-white text-center d-flex align-items-center justify-content-center fade-in" >
        <div class="bg-dark p-4 rounded-lg">
          <h1 class="display-4">Lépj pályára!</h1>
          <p class="lead">Vállald a kihívást, vegyél részt versenyünkön!</p>
          <a class="btn btn-success btn-lg" href="/resztvevok">Regisztrált csapatok!</a>
        </div>
      </div>
      
      </div>
      <div class='urlap'>

        <h1>Regisztráció</h1>
        <div class="container vertical center">
        <div class="title">Nevezési LAP</div>
        <div class="content vertical center">
            <div class="field horizontal center">
                <label class="label">Csapatnév:</label>
                <input type="text" id="persons">
                
            </div>
            

            <div class="field horizontal center" >
            <label htmlFor="category">Versenykategória:</label>
                <select id="category" class="form-control">
              <option></option>
              <option value="alsós">alsós</option>
              <option value="felsős">felsős</option>
              <option value="gimis">gimis</option>
            </select>
            </div>
           
            <div class="field horizontal center">
                <label class="label">Győzelem</label>
                <input type="number" id="persons" >
            </div>
            <div class="field horizontal center" >
                <label class="label">Kép:</label>
                <input id="url" type="url" >
            </div>
            <label class="foci-checkbox">
                <input id="meccs-checkbox" type="checkbox" name="meccs" value="igen"/>
                Felhasználói feltételek elfogadása
                <span class="checkmark"></span>
                </label>
            <div class="horizontal center">
                <div class="label"></div>
                <button id="saveButton" title="Mentés">MENTÉS</button>
            </div>
        </div>
    </div>


      </div>
      </div>
    
  );
}
