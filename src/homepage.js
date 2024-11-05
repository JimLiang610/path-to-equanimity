import './homepage.css';

function Home() {
    return (
      <>
        <nav className="topNav">
          {/*TODO: this needs to be changed depending on the time of day + styling  */}
          <h1 className="topNavText">Welcome!</h1>
        </nav>
        <main>
          <section>
            <h2 className="sectionHeading">Your Meditations</h2>
            {/*TODO: create a flex box using div. two buttons per row, spanning half the width of the screen*/}
            <div className="meditationSessions">
              <button className="button1">Your Daily</button>
              <button className="button2">Flow</button>
              <button className="button3">Timer</button>
            </div>
          </section>

          <section> 
            <h2 className="sectionHeading">Daily Quote</h2>
            <p>Placeholder daily quote</p>
          </section>
        </main>
      </>
    );
}

export default Home;