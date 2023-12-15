import 'dotenv/config';

export const getProducts = async ({params}) => {
    const csv = await fetch(process.env.GOOGLE_SHEETS)
    .then((res) => res.text());

    const products = csv
    .split('\n')
    .slice(1)
    .map((row) => {
        const [id, name, price, category, img] = row.split(',');

        return {id, name, price: Number(price), category, img}
    });

    if(params){
    return products.filter(product => product.category === params)
    }else {
     return products.slice(0,10)
    }
}