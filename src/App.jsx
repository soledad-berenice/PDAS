import ProfileCard from "./ProfileCard"

function App() {

  return (
    <>
      <h1>Componente App</h1>
        <section className="hero is-dark">
          <div className="hero-body">
            <p className="title">Personal Digital Asistents</p>
          </div>
        </section>
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-4">
                <ProfileCard />
                
              </div>
              <div className="column is-4">
                <ProfileCard />
                
              </div>
              <div className="column is-4">
                <ProfileCard 
                title="Alexa"
                handle="@alexa24"
                image=""https://upload.wikimedia.org/wikipedia/commons/c/cc/Amazon_Alexa_App_Logo.png
                />
                
              </div>
            </div>
          </section>
        </div>
      </>
  )
}

export default App
