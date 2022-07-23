import React from 'react';

const DrawingsFiles = ({ file }) => {
    const openFile = () => {
        let pdfWindow1 = window.open('');

        pdfWindow1.document.write(
            `<html><head><title>${file.filename}</title></head><body height="100%" width="100%"><iframe title='${file.filename}' width='100%' height='100%' src='data:application/pdf;base64, ` +
                encodeURI(file.data) +
                `' aria-hidden='true'></iframe></body></html>`
        );
    };

    return (
        <button onClick={openFile} className='is-in-memory apollo-button'>
            <i className='fal fa-file-signature'></i> <span>Drawing</span>
        </button>
    );
};

export default DrawingsFiles;
