import Resume from './resume.js'
import Skills from './skills';
import Education from './education';
import Navigation from './navigation';
import Experience from './experience';

import { useState } from 'react';
import { createContext } from 'react';
import ContactBar from './contactBar';
import Projects from './project';
const LayoutContext = createContext();


function App() {
  const [isColumn, setIsColumn] = useState(true);
  const styleLayoutColumn = {
    flexDirection: isColumn ? 'column' : 'column',
  };
  return (

    <LayoutContext.Provider value={[isColumn, setIsColumn]}>

      <div className='App bg-dark'>
        <Navigation></Navigation>

        <section id="about">
          <ContactBar></ContactBar>

          <Resume />
        </section>


        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects>
          </Projects>
        </section>
      </div>


    </LayoutContext.Provider>

  );
}

export default App;
