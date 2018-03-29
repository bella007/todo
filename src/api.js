export const fetchData = async () => {
    try {
        const response = await fetch(`https://api.github.com/users?since=135`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('error',error);
        // return error
    }
};
