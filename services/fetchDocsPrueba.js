import 'dotenv/config';
import Papa from 'papaparse'

export const getProducts = async ({params}) => {
const res = await fetch(process.env.GOOGLE_SHEETS)
const data = await res.text();
const parsed = await new Promise((resolve, reject) => {
    Papa.parse(data, {header: true,
    complete: (result) => resolve(result.data),
error: reject});
})

if(params){
    const filtered = parsed.filter((product) => product.category === params)
    return filtered
} else {
    return parsed.slice(0,10);
}
}