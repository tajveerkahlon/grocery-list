console.log("🍋", "🫑", "🍞", "🥩", "🥛", "🥣", "🦞", "🥪");


// grab the add button element

const addBtn = document.querySelector("#add-btn");

//this function will add items to the users "charts"
const updateList = (event) => {
    const icon = event.target;
    icon.classList.toggle("bi-bag");
    icon.classList.toggle("bi-bag-check");
     icon.classList.toggle("in-cart");


}

// this function will remove the whole division
const removeItem = (event) => {
    const icon = event.target;
    
    icon.parentElement.remove();
}; //end of remove item event

// add button event listener

addBtn.addEventListener("click", () =>{
    //get the infro from the user
    const itemInput = document.querySelector("#item");
    const emojiSelect = document.querySelector("#department");

    const item = itemInput.value.trim();
    const emoji = emojiSelect.value;

    if(item){
        //now create the division
    const itemDiv = buildItem(emoji, item);
    // now add to the list
    document.querySelector(".right").append(itemDiv);
    } else{
        alert("Please enter a name for this item!");
    }

    // user features
    itemInput.value = "";
    itemInput.focus();
    emojiSelect.value = "🥣";

    console.log(itemDiv);
});

// this function will build the html for each item
function buildItem(emoji, item){
    //create the html elements
    const itemDiv = document.createElement("div");
    const emojiSpan = document.createElement("span");
    const itemSpan = document.createElement("div");
    const bagIcon = document.createElement("i");
    const trashIcon = document.createElement("i");

    // add the text and the class info
    itemDiv.className = "item";
    emojiSpan.className = "emoji";
    emojiSpan.innerText = emoji;
    itemSpan.className = "item-description";
    itemSpan.innerText = item;
    bagIcon.className = "bi bi-bag add-icon";
    bagIcon.addEventListener("click", updateList);
    trashIcon.className = "bi bi-trash delete-icon";
    trashIcon.addEventListener("click", updateList);

    // build the component
    itemDiv.append(emojiSpan, itemSpan, bagIcon, trashIcon);

    return itemDiv;


}
