export default function DateTime() {
    const hour = new Date().getHours();

    if (hour >= 4 && hour < 12)
        return <h2>Доброе утро!</h2>;
    else if (hour >= 12 && hour < 17)
        return <h2>Добрый день!</h2>;
    else if (hour >= 17 && hour < 24)
        return <h2>Good Evening!</h2>;
    else
        return <h2>Have a sweet dreams!</h2>
}