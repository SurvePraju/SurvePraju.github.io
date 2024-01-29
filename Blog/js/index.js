var count = 1;
const addParagraph = function () {
    var blogElement = document.querySelector(".blog-content");
    if (!blogElement.querySelector("input")) {
        // Create a new text box element
        var textBox = document.createElement("input");

        // Set the type attribute to "text" for a text box
        textBox.setAttribute("type", "text");
        textBox.setAttribute("placeholder", "Enter the Paragraph");

        // You can set other attributes or properties as needed
        textBox.setAttribute("id", "newTextBox");
        textBox.setAttribute("name", "input-" + count);
        textBox.setAttribute("class", "text-paragraph");
        // Select the element with the class "blog"


        // Append the new text box to the selected element
        if (blogElement) {
            blogElement.appendChild(textBox);
            count++;
            console.log(count);
            textBox.focus()
        } else {
            console.log("Element with class 'blog' not found.");
        }
    }
    else {
        blogElement.removeChild(blogElement.lastElementChild);
        count--;
        console.log(count);
        addParagraph();
    }
}
const addTitle = function () {
    var blogElement = document.querySelector(".blog-content");
    if (!blogElement.querySelector("input")) {
        // Create a new text box element
        var textBox = document.createElement("input");

        // Set the type attribute to "text" for a text box
        textBox.setAttribute("type", "text");
        textBox.setAttribute("placeholder", "Enter the Title");

        // You can set other attributes or properties as needed
        textBox.setAttribute("id", "newTextBox");
        textBox.setAttribute("name", "input-" + count);
        textBox.setAttribute("class", "text-title");
        // Select the element with the class "blog"


        // Append the new text box to the selected element
        if (blogElement) {
            blogElement.appendChild(textBox);
            count++;
            console.log(count);
            textBox.focus()
        } else {
            console.log("Element with class 'blog' not found.");
        }
    }
    else {
        blogElement.removeChild(blogElement.lastElementChild);
        count--;
        console.log(count);
        addTitle();
    }
}
const addImage = function () {
    var blogElement = document.querySelector(".blog-content");
    if (!blogElement.querySelector("input")) {
        // Create a new text box element
        var textBox = document.createElement("input");

        // Set the type attribute to "text" for a text box
        textBox.setAttribute("type", "image");
        textBox.setAttribute("placeholder", "Enter the Paragraph");

        // You can set other attributes or properties as needed
        textBox.setAttribute("id", "newImageBox");
        textBox.setAttribute("name", "input-" + count);
        textBox.setAttribute("class", "text-image");
        // Select the element with the class "blog"


        // Append the new text box to the selected element
        if (blogElement) {
            blogElement.appendChild(textBox);
            count++;
            console.log(count);
            textBox.focus()
        } else {
            console.log("Element with class 'blog' not found.");
        }
    }
    else {
        blogElement.removeChild(blogElement.lastElementChild);
        count--;
        console.log(count);
        addImage();
    }
}