import React from 'react';

const ManualsFiles = ({ file }) => {
    const openFile = () => {
        let pdfWindow3 = window.open('');

        pdfWindow3.document.write(
            `<html><head><title>${file.filename}</title></head><body height="100%" width="100%"><iframe title='${file.filename}' width='100%' height='100%' src='data:${file.mimeType};base64, ` +
                encodeURI(file.data) +
                `' aria-hidden='true'></iframe></body></html>`
        );
    };

    return (
        <button onClick={openFile} className='is-in-memory apollo-button'>
            <i className='fal fa-file-user'></i> <span>Manual</span>
        </button>
    );
};

export default ManualsFiles;
