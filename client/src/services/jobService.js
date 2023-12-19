const url = 'http://localhost:5000/api/jobs';

export const getAll = () => {
    return fetch(`${url}`)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const getOne = (storyId) => {
    return fetch(`${url}/details/${storyId}`)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const create = (
    title, city, country, imageURL, synopsis, category
    ) => {
    let newStory = {
        title :title,
        city:city,
        country:country,
        imageURL:imageURL,
        synopsis:synopsis,
        category:category
    };

    return fetch(`${url}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
           
        },
        body: JSON.stringify(newStory)
    });
};

export const update = (storyId, story) => {
    return fetch(`${url}/${storyId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
           
        },
        body: JSON.stringify(story)
    })
}

export const deleteStory = (storyId) => {
    return fetch(`${url}/${storyId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            
        },
        
    })
}