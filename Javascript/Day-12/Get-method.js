async function fetchData () {
    try {

        console.log("started fetching data")

        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        
        if(!response.ok) {
            throw new Error (`HTTP Error! status ${response.status} `);
        }

        const data = await response.json()
        console.log(data)

    }catch (error) {
        console.log(error)
    }
}

fetchData()