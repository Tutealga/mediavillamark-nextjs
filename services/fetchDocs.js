import 'dotenv/config';

export const getProducts = async ({params}) => {
    const csv = await fetch(process.env.GOOGLE_SHEETS)
    .then((res) => res.text());

    const products = csv
    .split('\n')
    .slice(1)
    .map((row) => {
        const [update, category, name, native, website, x, discord, announced, categoria, subcategory, img] = row.split(',');

        return {update, category, name, native, website, x, discord, announced, categoria, subcategory, img}
    });

    return products.filter(product => product.categoria === params)
}