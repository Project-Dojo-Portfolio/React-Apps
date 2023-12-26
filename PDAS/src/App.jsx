import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <h1 className='title'>Personal Digital Assistants</h1>
                </div>
            </section>

            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCard 
                                title="Alexa" 
                                handle= "@alexa" 
                                image={AlexaImage} 
                                description='Alexa was created by Amazon and helps you buy things' />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard 
                                title="Siri" 
                                handle= "@siri"  
                                image={SiriImage} 
                                description='Siri was made by Apple is being phased out'/>
                        </div>
                        <div className='column is-4'>
                            <ProfileCard 
                                title="Cortana" 
                                handle= "@cortana" 
                                image={CortanaImage}
                                description='Cortana was made by Microsoft who knows what it does?' />
                        </div>
                    </div>
                </section>
            </div>
         
        </div>
    )
}

export default App;