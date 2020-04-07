import { baseUrl } from '../common/baseUrl'
import fetch from 'node-fetch'



class apiService {
    get = async (url) => {
        return new Promise(async (resolve, reject) => {
            try {
                let res = await fetch(baseUrl + url);
                let data = await res.json();
                if (res.ok) {
                    resolve(data);
                }
                else {
                    reject(resolve);
                }
            } catch (error) {
                reject(error);
            }
        })
    }
    put = async (url, body) => {
        return new Promise(async (resolve, reject) => {
            try {
                const option = {
                    method: 'PUT',
                    body: JSON.stringify(body),
                    headers: { 'Content-Type': 'application/json' }
                }
                let res = await fetch(baseUrl + url, option);
                let data = await res.json();
                if(res.ok){
                    resolve(data)
                }
                else{
                    reject(data);
                }
            } catch (error) {
                reject(error)
            }
        })
    }
}

export default new apiService();