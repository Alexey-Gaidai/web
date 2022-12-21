export default function Clue(props) {
    const style = {
        color: '#344C11'
    }

    return (
        <h2 style={style}>Excercise № {props.taskList.join(', ')}</h2>
    );
}