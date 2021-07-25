import {coreApi} from "../setup/configureAxios";

const getServerAction = (path, onSuccess, onError) => {
    coreApi.get(path).then(onSuccess).catch(onError)
}

export default getServerAction;

export const postServerAction = (path,values, onSuccess, onError) => {
    coreApi.post(path, values).then(onSuccess).catch(onError)
}


