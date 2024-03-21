let bookCollection;
if(localStorage.getItem("books")){
bookCollection = JSON.parse(localStorage.getItem("books"))
}else{
    const arrOfBooks = [];
    localStorage.setItem("books",JSON.stringify(arrOfBooks));
    bookCollection = JSON.parse(localStorage.getItem("books"));
}
// console.log(bookCollection);
const library = document.querySelector(".current-library");
// const submit = document.querySelector("#submit");
const form = document.querySelector("form");

function removeBook(e){
    e.target.parentNode.parentNode.remove();
    for(let i = 0;i<bookCollection.length;i++){
       if(bookCollection[i].name === e.target.parentNode.children[0].innerText){
        bookCollection.splice(i,1);
       }
    }
    localStorage.setItem("books", JSON.stringify(bookCollection));
}

displayBooks()

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const name = document.getElementById("name").value;
    const author = document.getElementById("author").value;
    const pic = document.getElementById("img1").value
    const price = `$${document.getElementById("price").value}`
    const stock = document.getElementById("drop").value;

    const newBook = {
        name,
        author,
        pic,
        price,
        stock
    }

    bookCollection.push(newBook);
    
    form.reset();
    localStorage.setItem("books", JSON.stringify(bookCollection));
    displayBooks()
});

function displayBooks() {
    library.textContent="";
    bookCollection.forEach(book => {
        const div = document.createElement("div");
        div.classList.add("book")
    
        const image = document.createElement("img");
        image.setAttribute("src", book.pic);
        div.append(image);
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book_info");
        const bookTitle = document.createElement("h2");
        bookTitle.classList.add("book_title");
        const bookAuthor = document.createElement("h2");
        bookAuthor.classList.add("book_author");
        const bookPrice = document.createElement("p");
        bookPrice.classList.add("book_price");
        const inStockButton = document.createElement("button");
        const removeButton = document.createElement("button");
        inStockButton.classList.add("in-stock-button");
        removeButton.classList.add("remove-button");
        inStockButton.innerText = "In stock";
        removeButton.innerText = "Remove";
        removeButton.addEventListener("click",removeBook);
        const br = document.createElement("br");
    
        if(book.stock < 1){
            inStockButton.classList.remove("in-stock-button");
            inStockButton.classList.add("out-of-stock-button");
            inStockButton.innerText = "Out of Stock";
        }
    
        bookPrice.innerText = book.price
        bookAuthor.innerText = book.author
        bookTitle.innerText = book.name;
        bookDiv.append(bookTitle);
        bookDiv.append(bookAuthor);
        bookDiv.append(bookPrice);
        bookDiv.append(inStockButton);
        bookDiv.append(br);
        bookDiv.append(removeButton)
        div.append(bookDiv);
        library.append(div);
        
        // let inventory = {};
        // inventory[name] = document.getElementById("drop").value;
    });
}