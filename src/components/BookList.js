import React from 'react';
import BookCard from './BookCard';

const BookList = ({books, addBookToCart, cartItems}) =>(
	<div className="book-list">
		{books.length > 0 && 
			<React.Fragment>
			{books.map(book =>
				<BookCard  
					key={book.bookID}
				 	book={book} 
				 	addBookToCart={addBookToCart}
				 	cartItems={cartItems}
				/>
			)}
			</React.Fragment>
		}
		{books.length === 0 &&
			<h3>No results found!</h3>
		}
	</div>
)

export default BookList;