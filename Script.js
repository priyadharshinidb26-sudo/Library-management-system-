function addBook() {
    var book = document.getElementById("bookName").value;
    var author = document.getElementById("authorName").value;

    if (book == "" || author == "") {
        alert("Enter book and author");
        return;
    }

    var li = document.createElement("li");
    li.innerText = book + " by " + author;

    document.getElementById("bookList").appendChild(li);

    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";
}
