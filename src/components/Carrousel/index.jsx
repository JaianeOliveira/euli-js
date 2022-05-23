import React from 'react';
import Carousel from 'react-native-snap-carousel';
import screen from '../../utils/constants/dimentions';
import { Book } from '../../shared/styles';

const Carrousel = ({
	data,
	sliderWidth = screen.width,
	itemWidth = screen.width * 0.3,
}) => {
	const renderItem = ({ index, item }) => {
		return <Book image={item.capa} />;
	};
	return (
		<Carousel
			layout="default"
			data={data}
			renderItem={renderItem}
			sliderWidth={sliderWidth}
			itemWidth={itemWidth}
			inactiveSlideScale={1}
			activeSlideAlignment="start"
		/>
	);
};

export default Carrousel;
