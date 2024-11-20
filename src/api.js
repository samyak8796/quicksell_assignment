import axios from 'axios';

export async function fetchApi(setTickets, setUsers){
    try{
        const res = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        setTickets(res.data.tickets);
        setUsers(res.data.users);
    }
    catch(error){
        console.error('Error fetching data:', error);
    };
}