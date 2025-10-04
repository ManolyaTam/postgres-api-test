import { createAuthor, deleteAuthor, fetchAuthors, updateAuthorName } from "./services/authors";
import { createGenre, deleteGenre, fetchGenres, updateGenreTitle } from "./services/genres";
import { createBook, deleteBook, fetchBooks, updateBookTitle } from "./services/books";
import { createBookAuthorRel, deleteBookAuthorRel, fetchBookAuthorsRel } from "./services/books-authors"

// createAuthor({name: "yousef", bio: "lorem ipsum dolor"});
// fetchAuthors();
// updateAuthorName({id: 1, name:"omar"})
// deleteAuthor(3)

// createGenre({title: "fiction", description: "stories, novels..."})
// fetchGenres();
// updateGenreTitle({id: 1, name: "fiction - updated"})
// deleteGenre(2)

// createBook({title: "harry potter and the philosophers stone", description: "first book in the series", genreId: 1, isbn: '3234567890123'})
// fetchBooks()
// updateBookTitle({id: 2, title: 'harry potter - Updated'})
// deleteBook(7)

// createBookAuthorRel({authorId: 1, bookId: 2, isMainAuthor: true})
// fetchBookAuthorsRel()
// deleteBookAuthorRel({authorId: 1, bookId: 2})