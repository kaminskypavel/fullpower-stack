import axios from "axios";

const getCatImage = async (text = "hello world") => {
    const {data} = await axios.get(`https://cataas.com/cat/says/${text}?json=true`)
    return `https://cataas.com/${data.url}`;
}

export {getCatImage};