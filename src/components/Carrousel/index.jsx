import React from 'react';
import Carousel from 'react-native-snap-carousel';
import screen from '../../utils/constants/dimentions';
// import Book from '../Book';
import { Book } from '../../shared/styles';

const Carrousel = ({
	data,
	sliderWidth = screen.width,
	itemWidth = screen.width * 0.3,
}) => {
	const renderItem = ({ index, item }) => {
		console.log(item.capa);
		return <Book image={item.capa} />;
	};
	return (
		<Carousel
			layout="default"
			data={data}
			renderItem={renderItem}
			sliderWidth={sliderWidth}
			sliderHeight={screen.height * 0.3}
			itemWidth={itemWidth}
			inactiveSlideScale={1}
			activeSlideAlignment="start"
			style={{
				marginVertical: 16,
			}}
		/>
	);
};

export default Carrousel;
