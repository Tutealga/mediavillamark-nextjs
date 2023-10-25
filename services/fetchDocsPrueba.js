import 'dotenv/config';
import Papa from 'papaparse';

export const getProducts = async ({params}) => {
    const res = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQZfjAXicpEz5M5WMW724OIvZcrs-YWOpuH75QXR2_lBpjdr6UTkcx1i8Q4Lc5ypAUrkP1-ahqiYTFZ/pub?gid=0&output=csv')
    const data = await res.text();
    const parsed = await new Promise((resolve, reject) => {
        Papa.parse(data, {header:true,
        complete: (result) => resolve(result.data),
        error: reject
})

    })

    return parsed

}