import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
    params: {lon: '24.02324', lat: '49.83826'},
    headers: {
        'x-rapidapi-key': '2e27acb5f6msh3ba9e14ed7e7765p17eb94jsn0b4ba6aafccc',
        // 'x-rapidapi-key': '0dc9d198c3msh457c79075011c28p1712a2jsn2fb2daa4bd28',
        'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
};

export function apppi() {
    let arr = '';
    axios.request(options)
        .then(function (response) {
            console.log(response.data.data[0].weather)
            arr = response.data.data[0].weather;
            console.log(arr)
        }).catch(function (error) {
        console.error(error);
    });
    console.log(arr)
    return arr;

}