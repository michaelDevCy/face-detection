import React from 'react';
import PropTypes from 'prop-types';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit, inputValue }) => {
    return (
        <div>
            <p className="f3">
                {'This Magic Brain will detect faces in your pictures. Give it a try.'}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input
                        className="f4 pa2 w-70 center"
                        type='text'
                        onChange={onInputChange}
                        value={inputValue}
                    />
                    <button
                        className="w-30 grow f4 link ph3 pv2 dib white bg-light-blue"
                        onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    );
}

ImageLinkForm.propTypes = {
    onInputChange: PropTypes.func.isRequired,
    onButtonSubmit: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
}

export default ImageLinkForm;
