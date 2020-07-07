import { useState, useEffect } from 'react';
import axios from 'axios';
let url = 'https://todo-app-server-lab32.herokuapp.com/api/v1/todo';
let config = {
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors',
};
function useAjax(cb) {
    const [items, setItems] = useState([]);

    
    const get = async () => {
        let response = await axios.get(url, config);
        cb(response.data);
    };

    const post = async (item) => {
        item.complete = false;
        let data = {
            item: item.item,
            difficulty: item.difficulty,
            complete: item.complete,
            assignee: item.assignee,
        };
        await axios.post(url, data, config);
        let response = await get();
        setItems([response]);
    };

    const update = async (item, _id) => {
        url = `${url}/${_id}`;
        let data = {
            item: item.item,
            difficulty: item.difficulty,
            complete: !item.complete,
            assignee: item.assignee,
        };
        await axios.put(url, data, config);
        let response = await get();
        setItems([response]);
    };

    const deleted = async (_id) => {
        url = `${url}/${_id}`;
        await axios.delete(url, config);
        let response = await get();
        setItems([response]);
    };


    useEffect(() => {
        get();
    });

    return [post, update, deleted, items];
}

export default useAjax;