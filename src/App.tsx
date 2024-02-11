import { useState } from "react";
import "./App.css";

const phrases = [
"Nein :(",
"Sicher Feldie??",
 "für echt nicht??"
"sei ein gutes mädchen drück ja für mich",
"du fotze",
"tu mir das nicht an",
"Bitte??...",
];
function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
const yesButtonSize = noCount * 20 + 16;

function handleNoClick() {
  setNoCount(noCount + 1);
}

function getNoButtonText() {
  return phrases [Math.min(noCount, phrases.length - 1)];
  
}
  return (<></>;
  <div className="valentine-container">
{yesPressed ? (
  <>
  <img
  alt="Cute Naked Black MAN"
  src="https://tenor.com/de/view/happy-valentines-day-valentines-day-valentines-day-wishes-valentines-day-greetings-english-gif-13345047793645685446"
  />

<div className="text">AND YEP, ITS OFFICIAL!!!! IM THE HAPPIEST MAN IN THE WORLD!!!!!!!</div>
  </>
) : (
  <>
  <img
  alt="Ich liebe dich bitte sag ja"
  src="https://tenor.com/de/view/good-morning-heart-gif-13484461"
  />
  
  </>
  <div>Willst du mein Valentingstags-Date sein Feldie?</div>
  <div>
<button
className="yesButton"
onClick={() => setYesPressed(true)}
style={{ fontSize: yesButtonSize }}
onClick={() => setYesPressed(true)}
>
JA
</button>
<button onClick={handleNoClick} className="noButton">
{getNoButtonText()}
</button>
</div>
</div>
{getNoButtonText()}
</button>
  </div>
  </>
)}
</div>
  );
}
export default App;
