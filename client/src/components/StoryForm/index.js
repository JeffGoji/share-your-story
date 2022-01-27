import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_STORY } from '../../utils/mutations';
import { QUERY_STORIES, QUERY_ME, } from '../../utils/queries';

const StoryForm = () => {
    const [storyText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const [addStory, { error }] = useMutation(ADD_STORY, {
        update(cache, { data: { addStory } }) {
            try {
                // update story array's cache
                // could potentially not exist yet, so wrap in a try/catch
                const { story } = cache.readQuery({ query: QUERY_STORIES });
                cache.writeQuery({
                    query: QUERY_STORIES,
                    data: { story: [addStory, ...story] },
                });
            } catch (e) {
                console.error(e);
            }

            // update me object's cache
            const { me } = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, story: [...me.story, addStory] } },
            });
        },
    });

    // update state based on form input changes
    const handleChange = (event) => {
        if (event.target.value.length <= 280) {
            setText(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addStory({
                variables: { storyText },
            });

            // clear form value
            setText('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="d-flex justify-content-center box-margin">

            <div className="col-12 box-bg p-2 rounded-3">
                <h1 className='text-center'>Share your story</h1>
                <p
                    className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}
                >
                    Character Count: {characterCount}/280
                    {error && <span className="ml-2">Something went wrong...</span>}
                </p>
                <form
                    className="flex-row justify-center justify-space-between-md align-stretch"
                    onSubmit={handleFormSubmit}
                >
                    <textarea
                        placeholder="Here's a new thought..."
                        value={storyText}
                        className="form-input col-12 col-md-9"
                        onChange={handleChange}
                    ></textarea>
                    <div>
                        <button className="btn btn-primary col-12 col-md-3" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StoryForm;