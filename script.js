const book = document.querySelector(".current-library");
// const submit = document.querySelector("#submit");
const form = document.querySelector("form");
let inventory = {};
function removeBook(e){
    e.target.parentNode.parentNode.remove();
}


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const div = document.createElement("div");
    div.classList.add("book")
    const pic = document.getElementById("img1").value
    const image = document.createElement("img");
    image.setAttribute("src", pic);
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
    const price = `$${document.getElementById("price").value}`
    const author = document.getElementById("author").value;
    const name = document.getElementById("name").value;
    bookPrice.innerText = price
    bookAuthor.innerText = author
    bookTitle.innerText = name;
    bookDiv.append(bookTitle);
    bookDiv.append(bookAuthor);
    bookDiv.append(bookPrice);
    bookDiv.append(inStockButton);
    bookDiv.append(br);
    bookDiv.append(removeButton)
    div.append(bookDiv);
    book.append(div);
    inventory[name] = document.getElementById("drop").value;
    if(document.getElementById("drop").value < 1){
        inStockButton.classList.remove("in-stock-button");
        inStockButton.classList.add("out-of-stock-button");
        inStockButton.innerText = "Out of Stock";
    }
    form.reset();
})