import List from './List';
import Hello from "./Hello";
import Heading from "./Heading";
import MathShow from "./MathShow";
import Cards from "./Cards";
import Count from "./Count";
import Clock from "./Time";
import Last from "./Last";
import Clue from "./Clue";
import DateTime from "./DateTime";

export default function App() {
    const commonStyle = {
        color: '#293757',
        fontFamily: 'sans-serif',
        fontSize: '15pt',
        fontWeight: 900,
        textAlign: 'center',
    };

    return (
        <div style={commonStyle}>
            <Clue taskList={[1, 3, 4]}/>
            <Heading/>
            <List/>
            <List />

            <Clue taskList={[2]}/>
            <Hello />

            <Clue taskList={[5]}/>
            <MathShow/>

            <Clue taskList={[6]}/>
            <DateTime/>

            <Clue taskList={[7]}/>
            <Cards name="Ryan Gosling"
                   photo="https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/865d2d0e-bac6-4a78-a0ed-17a87b285069/280x420"
                   phone="+1 123 456 789"
                   email="gosling@gmail.com"
            />
            <Cards name="James McAvoy"
                   photo="https://i1.wp.com/thenerddaily.com/wp-content/uploads/2019/03/James-McAvoy.jpg?fit=768%2C570&ssl=1"
                   phone="+323 456 789"
                   email="mcavoy@ss.com"
            />

            <Clue taskList={[8]}/>
            <Count/>

            <Clue taskList={[9]}/>
            <Clock/>

            <Clue taskList={[10]}/>
            <Last/>
        </div>
    );
}