import './Home.css';
import Button from './Button';

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
              <Button label="Your Daily" className="button1"></Button>
              <Button label="Flow" className="button2"></Button>
              <Button label="Timer" className="button3"></Button>
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