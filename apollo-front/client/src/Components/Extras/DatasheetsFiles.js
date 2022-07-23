import React from 'react';

const DatasheetsFiles = ({ file }) => {
    const openFile = () => {
        let pdfWindow = window.open('');

        pdfWindow.document.write(
            `<html><head><title>${file.filename}</title></head><body height="100%" width="100%"><iframe title='${file.filename}' width='100%' height='100%' src='data:application/pdf;base64, ` +
                encodeURI(file.data) +
                `' aria-hidden='true'></iframe></body></html>`
        );
    };

    return (
        <button onClick={openFile} className='is-in-memory apollo-button'>
            <i className='fal fa-file-alt'></i> <span>Data Sheet</span>
        </button>
    );
};

export default DatasheetsFiles;
