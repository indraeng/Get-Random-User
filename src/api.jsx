export const getRandomUser = async () => {
    const result = await fetch('https://randomuser.me/api/', {
        method: 'GET'
    });
    return await result.json();
}