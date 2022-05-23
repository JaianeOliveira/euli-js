import React from 'react';
import { Text } from '../../../shared/styles';

import { PrimaryButton, OutlinedButton } from './styles';

const Button = ({
	type = 'normal',
	color,
	children,
	textColor,
	textBold,
	textItalic,
}) => {
	if (type === 'outlined') {
		return (
			<OutlinedButton color={color ? color : null}>
				<Text
					color={textColor ? textColor : null}
					bold={textBold ? true : false}
					italic={textItalic ? true : false}
				>
					{children}
				</Text>
			</OutlinedButton>
		);
	}
	return (
		<PrimaryButton color={color ? color : null}>
			<Text
				color={textColor ? textColor : null}
				bold={textBold ? true : false}
				italic={textItalic ? true : false}
			>
				{children}
			</Text>
		</PrimaryButton>
	);
};

export default Button;
