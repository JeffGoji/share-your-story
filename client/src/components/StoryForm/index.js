import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_STORY } from '../../utils/mutations';
import { QUERY_STORIES, QUERY_ME, } from '../../utils/queries';

const StoryForm = () => {
    const [storyText, setText] = useState('');
    const [storyTitle, setTitle] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const [addStory, { error }] = useMutation(ADD_STORY, {
        update(cache, { data: { addStory } }) {
            console.log('I made it here'); //<---
            try {
                // update story array's cache
                // could potentially not exist yet, so wrap in a try/catch
                // debugger
                let { stories } = cache.readQuery({ query: QUERY_STORIES });

                cache.writeQuery({
                    query: QUERY_STORIES,
                    data: { stories: [addStory, stories] },

                });


                console.log('I made it here X2!!');
            } catch (e) {
                console.error(e);

            }

            // update me object's cache
            const { me } = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, stories: [...me.stories, addStory] } },
            });
        },
    });

    // update state based on form input changes
    const titleHandleChange = (event) => {
        if (event.target.value.length <= 1000) {
            setTitle(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    const textHandleChange = (event) => {
        if (event.target.value.length <= 1000) {
            setText(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addStory({
                variables: { storyText, storyTitle },
            });

            // clear form value
            setText('');
            setTitle('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="box-margin">
            <div className="container-fluid">

                <h1 className='text-center'>Share your story</h1>
                <label
                    className={`m-0 ${characterCount === 1000 || error ? 'text-error, 1000 characters or less' : ''}`}
                >
                    Character Count: {characterCount}/1000

                </label>
                <div>

                    <form onSubmit={handleFormSubmit}>


                        <label className="form-label mt-1">Your Title</label>
                        <input
                            name="storyTitle"
                            type="text" className="form-control rounded-3 mb-3" placeholder="Your title"
                            onChange={titleHandleChange}
                            value={storyTitle}
                            onSubmit={handleFormSubmit}
                        />


                        <label className="form-label mt-1">Your Story</label>

                        <textarea
                            placeholder="Share your story..."
                            value={storyText}
                            className="form-control col-12 col-md-9 rounded-3 justify-content-center"
                            rows="12"
                            onChange={textHandleChange}
                        />


                        <br />
                        <button className="btn btn-primary col-12 col-md-3" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div >

    );
};

export default StoryForm;