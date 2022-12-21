export default function List() {
    const foodList = ['Pasta', 'Beef Steak', 'Chiken Wings', 'Childs', 'Poeples'];
    const listItems = foodList.map((food, index) => <li key={index}>{food}</li>);

    return (
        <ul>{listItems}</ul>
    );
}