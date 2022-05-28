import React from 'react';
import Carousel from 'react-native-snap-carousel';
import screen from '../../utils/constants/dimentions';

import BookItem from '../BookItem';

import { useNavigation } from '@react-navigation/native';

const Carrousel = ({
	data,
	sliderWidth = screen.width,
	itemWidth = screen.width * 0.3,
}) => {
	const navigation = useNavigation();
	const renderItem = ({ index, item }) => (
		<BookItem
			capa={item.capa}
			onPress={() => navigation.navigate('book', { bookId: item.id })}
		/>
	);

	return (
		<Carousel
			layout="default"
			data={data}
			renderItem={renderItem}
			sliderWidth={sliderWidth}
			itemWidth={itemWidth}
			inactiveSlideScale={1}
			inactiveSlideOpacity={1}
			activeSlideAlignment="start"
		/>
	);
};

export default Carrousel;
