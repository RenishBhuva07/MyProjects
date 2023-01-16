import logo from './logo.svg';

function App() {
  return (
    <>
      <div className="container mt-5">

        <div className="App_wrapper text-center d-flex justify-content-center h-100 align-items-center">

          <div className="card cardd p-4">

            <img src={logo} className="App-logo" alt="logo" />
            <p className='fw-bold Home-content ltr-spcng-3'>
              <span className='fs-2 wlcm'>Welcome</span><br />To My<br /><span className='fs-1 App-name'>Theme Crud App</span>.
            </p>
            <a className="App-link" href="https://renishbhuvaportfolio07.netlify.app/" target="_blank" rel="noopener noreferrer">
              <h2 className='fs-2 fw-bold Author'>Renish Bhuva</h2>
            </a>

          </div>

        </div>
      </div>
    </>
  );
}

export default App;