export function displayDate (data) {
    const date = new Date(parseInt(data));
    const dateNow = new Date();
    const yearDif = dateNow.getFullYear() - date.getFullYear();
    if (yearDif === 0) {
        const dayDif = dateNow.getDay() - date.getDay();
        if (dayDif === 0) {
            const hourDif = dateNow.getHours() - date.getHours();
            if (hourDif === 0) {
                const minDif = dateNow.getMinutes() - date.getMinutes();

                if (minDif >= 0 && minDif < 5) return "1 min ago";
                if (minDif >= 5 && minDif < 10) return "5 min ago";
                if (minDif >= 10 && minDif < 30) {
                    return "10 min ago";
                }
                return "30 min ago";
            }
            return `${date.getHours()} : ${date.getMinutes()}`;
        }
        return `${date.getDay()} ${date.toLocaleString("default", { month: "long" })}`;
    }
    return (date.getFullYear() + "." + (date.getMonth() + 1) + "_" + date.getDate());
}
