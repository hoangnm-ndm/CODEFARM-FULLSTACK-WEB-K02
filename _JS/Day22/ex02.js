// Test case:

// Output:
// "Học <strong>JavaScript</strong> không khó, Học <strong>javascript</strong> khó đã có CodeFarm lo, CodeFarm - Học là có việc!"

const highlightKeyword = (content, keyword) => content.replace(new RegExp(`(${keyword})`, "gi"), "<strong>$1</strong>");

let myContent = highlightKeyword(
	"Học JavaScript không khó, Học javascript khó đã có CodeFarm lo, CodeFarm - Học là có việc!",
	"javascript"
);

document.write(myContent);
