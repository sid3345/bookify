import React from 'react';


const BookCard = ({book, addBookToCart, cartItems}) =>{
	let doesBookExistInCart = cartItems.filter(item=> item.bookID === book.bookID).length > 0;
	return(
		<div className="book-list-item">
			<p>{book.title.toString().substring(0, 80)}</p>
			<p className="book-details"><i className="fas fa-rupee-sign"></i> Author(s): {book.authors.toString().substring(0, 80)}</p>
			<p className="book-details"><i className="fas fa-rupee-sign"></i> ISBN: {book.isbn}</p>
			<p className="book-details"><i className="fas fa-rupee-sign"></i> Language: {book.language_code ? 'English':''}</p>
			<p className="book-details"><i className="fas fa-rupee-sign"></i> Rating: {book.average_rating}</p>
			<p className="book-details"><i className="fas fa-rupee-sign"></i> Rating Count: {book.ratings_count}</p>
			<p className="book-price"><i className="fas fa-rupee-sign"></i> Price: {book.price}</p>
			<button 
				onClick={()=>addBookToCart(book)} 
				className={`cart-button ${doesBookExistInCart? 'in-cart':''}`}
			>
				{doesBookExistInCart? <span><i className="fas fa-check"></i> Added</span>: <span>Add To Cart</span>}
			</button>
		</div>
	);
	

}

export default BookCard;