// Uses Flickr's API
export const api = `https://www.flickr.com/services/rest/?method=flickr.photos.search&`
export const api_tags = `https://www.flickr.com/services/rest/?method=flickr.tags.getHotList&`
export const api_key = process.env.REACT_APP_FLICKR_API_KEY 
export const secret_key = process.env.REACT_APP_FLICKR_API_SECRET_KEY 
