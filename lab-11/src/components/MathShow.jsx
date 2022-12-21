import pi, { doublePi, triplePi } from "./math.js";

export default function MathShow() {
    return (
        <div>
            <h3>Math PI:</h3>
            <ul>
                <li>{pi}</li>
                <li>{doublePi()}</li>
                <li>{triplePi()}</li>
            </ul>
        </div>
    );
}
