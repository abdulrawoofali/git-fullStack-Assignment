import axios from "axios";
import React, { Component } from "react";
import User from "./User";

class Repos extends Component {
	constructor() {
		super();
		this.state = {
			repos: []
		};
	}

	handleClick = (name) => {
		this.props.history.push(
			`/repos/${this.props.match.params.username}/${name}`
		);
	};

	async componentDidMount() {
		const { data } = await axios.get(
			`https://api.github.com/users/${this.props.match.params.username}/repos`
		);
		this.setState({ repos: data });
	}

	async componentDidUpdate(prevProps) {
		if (prevProps.match.params.username === this.props.match.params.username) {
			return;
		}
		const { data } = await axios.get(
			`https://api.github.com/users/${this.props.match.params.username}/repos`
		);
		this.setState({ repos: data });
	}

	render() {
		return (
			<>
				<User history={this.props.history} match={this.props.match} />
				<div className="gallery">
					{this.state.repos.length === 0 ? (
						<h3>No Repos</h3>
					) : (
						this.state.repos.map((repo) => (
							<div
								key={repo.id}
								className="repo"
								onClick={() => this.handleClick(repo.name)}>
								<img
									src={repo.owner.avatar_url}
									className={"my-custom-image"}
									alt={"Repo image"}
								/>
								<div className="col">
									<h3 className="repo-name">{repo.name.trim()}</h3>
									<div className="repo-desc">{repo.description}</div>
								</div>
							</div>
						))
					)}
				</div>
			</>
		);
	}
}

export default Repos;
