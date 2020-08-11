import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import LinearGradient from 'react-native-linear-gradient';
import api from '../../services/api';
import {
	Container,
	Header,
	Avatar,
	Name,
	Bio,
	Stars,
	Starred,
	OwnerAvatar,
	Info,
	Title,
	Author,
	Loading,
} from './sytles';

export default class User extends Component {
	static propTypes = {
		navigation: PropTypes.shape({
			getParam: PropTypes.func,
		}).isRequired,
	};

	state = {
		stars: [],
		page: 1,
		loading: true,
	};

	async componentDidMount() {
		this.load();
	}

	load = async (page = 1) => {
		const {stars} = this.state;
		const {navigation} = this.props;
		const {user} = this.props.route.params;
		navigation.setOptions({title: user.name});

		const response = await api.get(`/users/${user.login}/starred`, {
			params: {page},
		});
		console.tron.log(response);

		this.setState({
			stars: page >= 2 ? [...stars, ...response.data] : response.data,
			page,
			loading: false,
			refreshing: false,
		});
	};

	loadMore = () => {
		const {page} = this.state;

		const nextPage = page + 1;

		this.load(nextPage);
	};

	refreshList = () => {
		this.setState({refreshing: true});

		this.load();
	};

	handleNavigate = (repository) => {
		const {navigation} = this.props;

		navigation.navigate('Repository', {repository});
	};

	render() {
		const {stars, loading, refreshing} = this.state;
		const {user} = this.props.route.params;

		return (
			<Container>
				<Header>
					<Avatar source={{uri: user.avatar}} />
					<Name>{user.name}</Name>
					<Bio>{user.bio}</Bio>
				</Header>

				{loading ? (
					<Loading />
				) : (
					<Stars
						data={stars}
						onRefresh={this.refreshList}
						refreshing={refreshing}
						onEndReachedThreshold={0.2}
						onEndReached={this.loadMore}
						KeyExtractor={(star) => String(star.id)}
						renderItem={({item}) => (
							<Starred onPress={() => this.handleNavigate(item)}>
								<OwnerAvatar source={{uri: item.owner.avatar_url}} />
								<Info>
									<Title>{item.name}</Title>
									<Author>{item.owner.login}</Author>
								</Info>
							</Starred>
						)}
					/>
				)}
			</Container>
		);
	}
}
