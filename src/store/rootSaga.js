export const isExistAndTrue = envVar =>
    (typeof envVar === 'boolean' && envVar) ||
    (typeof envVar === 'string' && envVar.toLowerCase() === 'true');

export default function* rootSagaWatcher(props) {


}
