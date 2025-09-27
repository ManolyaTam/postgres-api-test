import { createAuthor, deleteAuthor, fetchAuthors, updateAuthorName } from "./services/authors";

createAuthor({name: "yousef", bio: "lorem ipsum dolor"});
// fetchAuthors();
// updateAuthorName({id: 1, name:"omar"})
// deleteAuthor(3)