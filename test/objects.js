class User {
	constructor(email, name) {
		this.email = email;
		this.name = name;
		this.score = 0;
	}
	login() {
		console.log(this.email, "has logged in");
		return this;
	}
	logout() {
		console.log(this.email, "has logged out");
		return this;
	}
	updateScore(score) {
		this.score += score;
		console.log(`${this.score} is updated for user ${this.email}`);
		return this;
	}
}
class Profile {}

const user2 = new User("mail@mail.com", "Mail");

user2.login().updateScore(5).updateScore(7).logout();
