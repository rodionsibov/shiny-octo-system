async function fetchData() {
    try {
        const res = await fetch('https://reqres.in/api/users')
        const { data } = await res.json()
        console.log(data);
        data.sort(() => Math.random() - 0.5)
        document.querySelector('#name').textContent = `${data[0].first_name} ${data[0].last_name}`
        document.querySelector('#email').textContent = `@${data[0].email.split('@')[0]}`
        document.querySelector('#avatar').src = `${data[0].avatar}`
        document.querySelector('#heart').textContent = `${Math.floor(Math.random() * 999)}`
        document.querySelector('#chat').textContent = `${Math.floor(Math.random() * 99)}`
        document.querySelector('#date').innerHTML = `${new Date().toLocaleTimeString()} &bull; ${new Date().toDateString()}`

    } catch (error) {
        console.log(error);
    }

}
fetchData()