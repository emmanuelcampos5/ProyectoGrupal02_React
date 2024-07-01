const urlApi = "https://paginas-web-cr.com/ucr/multimedios0224/TeamEMJD"; 


async function getPost(id) {
    try {
        return apiFetch("Post", "GET", {id})
    } catch (e) {
        throw new Error("Error al consultar el post")
    }
}

async function getAllPosts() {
    try {
        return apiFetch("Post", "GET")
    } catch (e) {
        throw new Error("Error al consultar el post")
    }
}

async function apiFetch(endpoint, method, data = null) {
    try {
        let body = null; 
        let params = '';
        if (method == "GET" && data) {
            let urlParams = new URLSearchParams();
            for (let key in data) {
                urlParams.append(key, data[key])
            }
            params = `?${urlParams.toString()}`
        } else if(data) {
            body = JSON.stringify(data);
        }

        let res = await fetch(`${urlApi}/${endpoint}/index.php${params}`, {
            method,
            body
        })
        if (!res.ok) {
            throw new Error("Error al consultar")
        }
        let dataRes = await res.json();
        return dataRes;
    } catch (e) {
        throw e;
    }
}

const api = {
    Post: {
        get: getPost,
        getAll: getAllPosts
    }
}

export default api;