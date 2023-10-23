import qs from 'query-string';

export function filtersUrlQuery({params, key, value}) {
    const currentUrl = qs.parse(params);

    currentUrl[key] = value;

    return qs.stringifyUrl(
        { url: window.location.pathname, query: currentUrl },
        { skipNull: true }
        )
}