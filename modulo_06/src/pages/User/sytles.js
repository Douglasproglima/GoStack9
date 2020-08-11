import Styled from 'styled-components/native';

export const Container = Styled.View`
	background-color: #424242;
	flex: 1;
	padding: 10px;
`;
export const Header = Styled.View`
	align-items: center;
	padding-bottom: 10px;
	border-bottom-width: 1px;
	border-color: #eeeeee;
`;

export const Avatar = Styled.Image`
	width: 120px;
	height: 120px;
	border-radius: 60px;
	background: #eeeeee;
`;
export const Name = Styled.Text`
	font-size: 20px;
	color: #ffffff;
	font-weight: bold;
	margin-top: 10px;
	text-align: center;
`;

export const Bio = Styled.Text`
	font-size: 14px;
	line-height: 18px;
	color: #ffffff;
	margin-top: 5px;
	text-align: center;
`;

/* ITEMS */
export const Stars = Styled.FlatList.attrs({
	showVerticalScrollIndicator: false,
})`
	margin-top: 20px;
`;

export const Starred = Styled.View`
	background: #eceff1;
	border-radius: 4px;
	padding: 10px 15px;
	margin-bottom: 20px;
	flex-direction: row;
	align-items: center;
`;
export const OwnerAvatar = Styled.Image`
	height: 42px;
	width: 42px;
	border-radius: 21px;
	background: #eeeeee;
`;

export const Info = Styled.View`
	margin-left: 10px;
	flex: 1;
`;

export const Title = Styled.Text.attrs({
	numberOfLines: 1,
})`
	font-size: 15px;
	font-weight: bold;
	color: #212121;
`;

export const Author = Styled.Text`
	font-size: 13px;
	color: #212121;
	margin-top: 2px;
`;

export const Loading = Styled.ActivityIndicator.attrs({
	color: '#999999',
})`
	margin-top: 20px;
`;
