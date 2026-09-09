
import Reacticon from './assets/React-icon.png'
import './style.css'

  //CONTEUDO QUE SERA USADO NA PAGINA

  export default function App() {
    const content = [
      [
        "React is extremely popular",
        "It makes building complex, interactive UIs a breeze",
        "It's powerful & flexible",
        "It has a very active and versatile ecosystem"
      ],
      [
        "Components, JSX & Props",
        "State",
        "Hooks (e.g., useEffect())",
        "Dynamic rendering"
      ],
      [
        "Official web page (react.dev)",
        "Next.js (Fullstack framework)",
        "React Native (build native mobile apps with React)"
      ],
      [
        "Vanilla JavaScript requires imperative programming",
        "Imperative Programming: You define all the steps needed to achieve a result",
        "React on the other hand embraces declarative programming",
        "With React, you define the goal and React figures out how to get there"
      ]
    ];


    return (
      <div>
        <header>
          <img src={Reacticon} alt="React logo" />
          <div>
            <h1>React.js</h1>
            <p>i.e., using the React library for rendering the UI</p>
          </div>
        </header>
  
        <div id="tabs">
          <menu>
            <button>Why React?</button>
            <button>Core Features</button>
            <button>Related Resources</button>
          </menu>
  
          <div id="tab-content">
            <ul>
              <li>React is extremely popular</li>
              <li>It makes building complex, interactive UIs a breeze</li>
              <li>It's powerful & flexible</li>
              <li>It has a very active and versatile ecosystem</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }


