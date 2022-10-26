import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { AddPost } from './postSlice';

const PostAddForm = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onTitleChange = (e) => setTitle(e.target.value);
    const onContentChange = (e) => setContent(e.target.value);

    const onSaveClick = (e) => {

        e.preventDefault();
        if (title && content) {
            dispatch(AddPost(title, content));

            setTitle('');
            setContent('');
        }
    }

    return (
        <section className='container-fluid w-50'>
            <form>
                <h1 className="h3 mb-3 fw-normal">Add New Post.</h1>

                <label className='label' htmlFor='inputForTitle'>Title</label>
                <input
                    id='inputForTitle'
                    type="text" className="form-control"
                    placeholder="title"
                    value={title}
                    onChange={onTitleChange}
                />
                <label className='label' htmlFor='textForContent'>Content</label>
                <textarea
                    id='textForContent'
                    className="form-control"
                    placeholder="Content"
                    value={content}
                    rows="3"
                    onChange={onContentChange}
                />
                <button
                    className="my-3 w-100 btn btn-lg btn-primary"
                    type="submit"
                    onClick={onSaveClick}
                >
                    Sign in
                </button>
            </form>
        </section>
    );
}

export default PostAddForm;
