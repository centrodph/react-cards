export const objectToQueryString = (data) => {
    return Object.keys(data)
        .map(function(key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
        })
        .join('&');
};

export const shuffleArray = (items) => {
    return items
        .map((item) => {
            return {
                weight: Math.random(),
                value: item
            };
        })
        .sort((a, b) => {
            return a.weight - b.weight;
        })
        .map((item) => {
            return item.value;
        });
};

export const getUrlImageFlickr = (data) => {
    const { farm, server, id, secret } = data;
    //  https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
    return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
};
