import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
	background-color: #424242;
	flex: 1;
	padding: 20px;
`;

export const Form = styled.View`
	flex-direction: row;
	padding-bottom: 15px;
	border-bottom-width: 1px;
	border-color: #eeeeee;
	/* border-color: #eee; */
`;

export const Input = styled.TextInput.attrs({
	placeholderTextColor: '#999999',
})`
	flex: 1;
	height: 40px;
	background: #eeeeee;
	padding: 0 15px;
	border: 1px solid #eeeeee;
	border-radius: 5px;
`;

export const SubmitButton = styled(RectButton)`
	justify-content: center;
	align-items: center;
	padding: 9px;
	background: #f47b00;
	border-radius: 4px;
	padding: 0 12px;
	opacity: ${(props) => (props.loading ? 0.4 : 1)};
`;

export const List = styled.FlatList.attrs({
	showVerticalScrollIndicator: false,
})`
	margin-top: 20px;
`;

export const User = styled.View`
	align-items: center;
	margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
	width: 150px;
	height: 150px;
	border-radius: 100px;
	background: #eeeeee;
`;

export const Name = styled.Text`
	font-size: 18px;
	color: #ffffff;
	font-weight: bold;
	margin-top: 4px;
	text-align: center;
`;

export const Bio = styled.Text.attrs({
	numberOfLines: 2,
})`
	font-size: 14px;
	line-height: 18px;
	color: #ffffff;
	margin-top: 5px;
	text-align: center;
`;

export const ProfileButton = styled(RectButton)`
	margin-top: 10px;
	align-self: stretch;
	border-radius: 4px;
	background: #f47b00;
	align-items: center;
	height: 36px;
`;

export const ProfileButtonText = styled.Text`
	font-size: 14px;
	font-weight: bold;
	justify-content: center;
	align-items: center;
	padding: 7px;
	color: #ffffff;
	text-transform: uppercase;
`;
