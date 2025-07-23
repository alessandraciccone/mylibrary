import Alert from "react-bootstrap/Alert";

const Welcome = () => {
  return (
    <Alert variant="black" className="text-center">
      <Alert.Heading className="text-white">
        Benvenuto nella nostra libreria!
      </Alert.Heading>
      <p className="text-white">
        La Nebbia delle Rune è una libreria fantasy che sembra uscita da un
        incantesimo dimenticato. Tra scaffali di legno antico e scale che si
        spostano da sole, ogni libro racchiude mondi dove i draghi discutono di
        filosofia e le streghe sorseggiano tè tra incantesimi. I lettori non
        cercano solo storie... cercano avventure che li scelgono.
      </p>
    </Alert>
  );
};

export default Welcome;
