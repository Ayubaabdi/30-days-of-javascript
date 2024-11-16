async function fetchData() {
  try {
    console.log("started fetching data");

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error(`HTTP Error! status ${response.status} `);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();

async function postData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: "whats is the title of post",
        body: "hi am the post",
        user: 1,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error! ${response.status}`);
    }
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

postData();
