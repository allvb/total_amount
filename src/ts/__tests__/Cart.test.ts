import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('testing adding to the cart', () => {
  const cart = new Cart();
  const book = {
    id: 1001,
    name: 'War and Piece',
    author: 'Leo Tolstoy',
    price: 2000,
    pages: 1225,
  };

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  expect(cart.items[0]).toEqual(book); 
});

test('testing totalAmount of the cart', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1234, 'The Avengers', 2012, 'USA', 137, 1200, 'fantastic'));

  expect(cart.totalAmount()).toBe(4100);
});

test('testing amount with discount', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1234, 'The Avengers', 2012, 'USA', 137, 1200, 'fantastic'));
  
  expect(cart.amountWithDiscount(5)).toBe(3895);
});

test('testing deleting item from the cart', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1234, 'The Avengers', 2012, 'USA', 137, 1200, 'fantastic'));

  const newCart = new Cart();
  newCart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  newCart.add(new Movie(1234, 'The Avengers', 2012, 'USA', 137, 1200, 'fantastic'));
  
  cart.deleteItem(1001);
  expect(cart).toEqual(newCart);
});
