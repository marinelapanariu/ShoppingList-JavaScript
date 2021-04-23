let products = [{
    name:'limes',
    price:100
}, {
    name:'corn',
    price:30
}, {
    name:'cod',
    price: 10
}];
let productList = document.getElementById("list");

products.forEach(function(product, id) {
    addElementData(id, product.name, product.price, false);
});

function addElement() {
    let newName = document.getElementById("name");
    let newPrice = document.getElementById("price");
    addElementData(products.length, newName.value, newPrice.value, true);
}

function addElementData(id, name, price, append) {
    let newElement = document.createElement("li");
    productList.appendChild(makeElement(newElement, id, name, price));
    if (append) {
        products.push({ name: name, price: price });
    }
}
function makeElement(parent, id, name, price) {
    let nameNode = document.createElement("span");
    let deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.setAttribute("onclick", `deleteElement(${id});`);
    deleteButton.setAttribute("class", `first`);
    let editButton = document.createElement("button");
    editButton.appendChild(document.createTextNode("Edit"));
    editButton.setAttribute("onclick", `setupEdit(${id});`);
    nameNode.appendChild(document.createTextNode(name));
    let priceNode = document.createTextNode(price);
    parent.setAttribute("id", `prod-${id}`);
    parent.appendChild(nameNode);
    parent.appendChild(priceNode);
    parent.appendChild(deleteButton);
    parent.appendChild(editButton);
    return parent;
}
 
 //sterge elementul din lista dar pozitia ramane ocupata
function deleteElement(id) {
    delete products[id];
    document.getElementById(`prod-${id}`).remove();
}

function setupEdit(id) {
    document.getElementById("id-input").setAttribute("value", id);
}

function edit() {
    let id = document.getElementById("id-input");
    let name = document.getElementById("name");
    let price = document.getElementById("price");
    if (id.value <= -1 || id.value >= products.length) {
        return;
    }
    products[id.value] = {
        name: name.value,
        price: price.value
    };
    let element = document.getElementById(`prod-${id.value}`);
    element.innerHTML = "";
    makeElement(element, id, name.value, price.value);
    console.log(products);
}