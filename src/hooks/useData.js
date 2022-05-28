import dummyData from '../data/dummy-data';

export const getBooks = (user_id, status) => {
	const userData = dummyData.find((user) => user.user_id === user_id);

	if (!userData)
		return {
			status: 404,
			message: 'Não foi possível obter os dados',
		};

	const books = !status
		? userData.books
		: userData.books.filter((book) => book.status === status);

	const books_amount = books.length;

	return {
		status: 200,
		data: {
			books_amount,
			books,
		},
	};
};

export const getUser = (user_id) => {
	const userData = dummyData.find((user) => user.user_id === user_id);

	if (!userData)
		return {
			status: 404,
			message: 'Usuário não encontado',
		};

	return {
		status: 200,
		data: userData.user_data,
	};
};

export const getBook = (user_id, book_id) => {
	const userData = dummyData.find((user) => user.user_id === user_id);
	if (!userData)
		return {
			status: 404,
			message: 'Não foi possível obter os dados',
		};

	const book = userData.books.find((book) => book.id === book_id);

	if (!book)
		return {
			status: 404,
			message: 'Livro não encontrado',
		};

	return book;
};
