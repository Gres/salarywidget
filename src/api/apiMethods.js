import HttpClient from './http-client';

class APIMethods {
    get(resource, params = {}) {
        return HttpClient.get(resource, {params});
    }

    create(resource, {data, ...params} = {}) {
        return HttpClient.post(resource, data, {params});
    }

    update(resource, {data, ...params}) {
        return HttpClient.put(resource, data, {params});
    }

    delete(resource, params) {
        return HttpClient.delete(resource, {params});
    }
}

export default new APIMethods();
