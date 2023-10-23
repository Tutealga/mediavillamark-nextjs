import { rdb } from "@/firebase/firebase";
import { get, ref, query, limitToFirst, orderByChild, equalTo } from 'firebase/database';
import 'dotenv/config';

export const getProducts = async ({params}) => {
    const db = ref(rdb, process.env.FIREBASE_RDB)

    if(params){
        const response = await get(query(db, orderByChild('category'), equalTo(params)))
        const products = await response.val()
        if(!products) return []
        return Object.values(products)
    }else {
        const response = await get(query(db, limitToFirst(10)))
        const products = await response.val()
        return Object.values(products)
    }
}