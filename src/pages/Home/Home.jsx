import './Home.css'
import { links } from '../../data'
import Features from '../../components/homeFeatures/Features'
import {Helmet} from "react-helmet";
const Home = () => {

  return (
      <>
        <Helmet>
            <title>Minepod Discord Bot - Home</title>
        </Helmet>
    <main>
      <section class="header container">
        <div>
          <h1>The Best Addition for your Discord Server!</h1>
          <h4>Currency, Moderation, Fun, and so much more to explore with Minepod!</h4>
          <div> 
            <button className="btn" onClick={()=>{window.location.href = links.invite}}>Get Started</button>
          </div>
        </div>
      </section>
    </main>
    <br /><br />
    <Features/>
    </>
    

  )
}

export default Home