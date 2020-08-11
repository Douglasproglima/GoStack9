import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Keyboard, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import LinearGradient from 'react-native-linear-gradient';
import {
	Container,
	Form,
	Input,
	SubmitButton,
	List,
	User,
	Avatar,
	Name,
	Bio,
	ProfileButton,
	ProfileButtonText,
} from './styles';
import api from '../../services/api';
import '../../config/ReactotronConfig';

export default class Main extends Component {
	static navigationOptions = {
		title: 'Usuários',
	};

	static propTypes = {
		navigation: PropTypes.shape({
			navigate: PropTypes.func,
		}).isRequired,
	};

	state = {
		newUser: '',
		users: [],
		loading: false,
	};

	// Busca os Dados do LocalStorage
	async componentDidMount() {
		// console.tron.log(this.props);
		const users = await AsyncStorage.getItem('users');
		if (users) this.setState({users: JSON.parse(users)});
	}

	// Atualiza o LocalStorage quando houver alteração no user
	async componentDidUpdate(prevProps, prevState) {
		const {users} = this.state;
		if (prevState.users !== users)
			await AsyncStorage.setItem('users', JSON.stringify(users));
	}

	handleAddUser = async () => {
		const {users, newUser} = this.state;

		this.setState({loading: true});

		const response = await api.get(`/users/${newUser}`);
		const data = {
			name: response.data.name,
			login: response.data.login,
			bio: response.data.bio,
			avatar: response.data.avatar_url,
		};

		// console.warn(data);
		this.setState({
			users: [...users, data],
			newUser: '',
			loading: false,
		});

		Keyboard.dismiss();
	};

	handleNavigation = (user) => {
		const {navigation} = this.props;
		console.tron.log(navigation.navigate);
		navigation.navigate('User', {user});
	};

	render() {
		const {users, newUser, loading} = this.state;

		return (
			<Container>
				{/* <LinearGradient colors={['#000a12', '#4f5b62', '#263238']}> */}
				<Form>
					<Input
						autoCorrect={false}
						autoCapitalize="none"
						placeholder="Pesquisar Usuário"
						value={newUser}
						onChangeText={(text) => this.setState({newUser: text})}
						returnKeyType="send"
						onSubmitEditing={this.handleAddUser}
					/>
					<SubmitButton loading={loading} onPress={this.handleAddUser}>
						{loading ? (
							<ActivityIndicator color="#ffffff" />
						) : (
							<Icon name="search" size={25} color="#ffffff" />
						)}
					</SubmitButton>
				</Form>
				<List
					data={users}
					keyExtractor={(user) => user.login}
					renderItem={({item}) => (
						<User>
							<Avatar source={{uri: item.avatar}} />
							<Name>{item.name}</Name>
							<Bio>{item.bio}</Bio>
							<ProfileButton onPress={() => this.handleNavigation(item)}>
								<ProfileButtonText>Ver Perfil</ProfileButtonText>
							</ProfileButton>
						</User>
					)}
				/>
				{/* </LinearGradient> */}
			</Container>
		);
	}
}
