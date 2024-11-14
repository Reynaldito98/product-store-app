const checkResponse = (res) => {
    if(res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Error: ${res.status}`);
    }
}

const headers = {
    'Content-Type': "application/json"
}

const getProducts = () => {
    return fetch(`/products`, {
        headers: headers
    }).then(checkResponse)
};

const createProduct = (name, price, imageUrl) => {
    return fetch("/products", {
                method: 'POST',
                body: JSON.stringify({name, price: Number(price), image: imageUrl}),
                headers: headers,
            }).then(checkResponse)
};

const deleteProduct = id => {
    return fetch(`/products/${id}`, {
        method: 'DELETE',
        headers: headers
    }).then(checkResponse)
};

const updateProduct = (id, name, price, imageUrl) => {
    return fetch(`/products/${id}`, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify({name, price: Number(price), image: imageUrl})
    }).then(checkResponse)
};

export {getProducts, createProduct, deleteProduct, updateProduct}