export const getGreeting = () => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    if(currentHour < 12) return "Bom dia";
    if(currentHour < 18) return "Boa tarde";
    if(currentHour < 24) return "Boa noite";
}