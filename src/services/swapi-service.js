export default class SwapiService {

	_apiBase = "https://swapi.co/api";

	async getRecourse(url) {
		const res = await fetch(`${this._apiBase}${url}`);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`);
		}
		return res.json();
	}

	async getAllPeople() {
		const res = await this.getRecourse(`/people/`);
		return res.results;
	}

	getPerson(id) {
		return this.getRecourse(`/people/${id}/`);
	}

	async getAllPlanets() {
		const res = await this.getRecourse(`/planets/`);
		return res.results;
	}

	getPlanet(id) {
		return this.getRecourse(`/planets/${id}/`);
	}

	async getAllStarships() {
		const res = await this.getRecourse(`/starships/`);
		return res.results;
	}

	getStarship(id) {
		return this.getRecourse(`/starships/${id}/`);
	}
}
