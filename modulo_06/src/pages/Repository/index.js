import React from 'react';
import PropTypes from 'prop-types';

import {Browser} from './styles';

export default function Repository({navigation}) {
	// const repository = navigation.getParam('repository');
	const {repository} = this.props.route.params;

	navigation.setOptions({title: repository.name});

	return <Browser source={{uri: repository.html_url}} />;
}

Repository.propTypes = {
	navigation: PropTypes.shape({
		getParam: PropTypes.func,
	}).isRequired,
};
