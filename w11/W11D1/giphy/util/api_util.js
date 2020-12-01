import { $CombinedState } from "redux"

export const fetchSearchGiphys = (searchTerm) => {
    const key = 'wVaj1gv7NZl0kkqy8mElOFBjIO7lGyUE'
    return $.ajax({
        url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${key}&limit=2`,
        method: 'GET'
    })
}

