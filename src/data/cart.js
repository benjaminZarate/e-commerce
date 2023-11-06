export const productsInCart = [];

export const addItem = (item) => {
    const i = productsInCart.findIndex(product => product.item.title == item.title);
    if(i > -1)
    {
        productsInCart[i].quantity += 1;
    }else
    {
        productsInCart.push({item: item, quantity: 1});
    }
};

export const removeItem = (item) => {
    try {
        const i = productsInCart.findIndex(product => product.item.title == item.title);
        productsInCart[i].quantity--;
        if(productsInCart[i].quantity <= 0)
        {
            productsInCart.splice(i,1);
        } 
        console.log(productsInCart.length);
    } catch (error) {
        console.log("item not found " + error);
    }

}