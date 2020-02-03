

const getRes = async (url) => {
	const res = await fetch(url);
	if (!res.ok) {
		throw new Error(`Could not fetch ${url}, received ${res.status}`);
	}
	return res.json();
};

getRes("https://swapi.co/api/people/1/")
	.then((body) => {
		console.log("body: ", body);
	})
	.catch((err) => console.error("Could not fetch ", err));
