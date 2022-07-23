import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

// Redux Action
import {
    showDatasheetDetails,
    showDrawingDetails,
    showManualDetails,
} from '../../actions/imageActions';
import { addToInquiry, removeFromInq } from '../../actions/inquiryActions';

import DatasheetsFiles from '../Extras/DatasheetsFiles';
import Spinning from '../Extras/Spinning';
import ManualsFiles from '../Extras/ManualsFiles';
import DrawingsFiles from '../Extras/DrawingsFiles';

const ProductData = ({ product, pathname }) => {
    const dispatch = useDispatch();

    const showDatasheet = useSelector((state) => state.showDatasheet);
    const showDrawing = useSelector((state) => state.showDrawing);
    const showManual = useSelector((state) => state.showManual);

    const { error, datasheet } = showDatasheet;
    const { drawing } = showDrawing;
    const { manual } = showManual;

    const [datasheets, setDatasheets] = useState([]);
    const [drawings, setDrawings] = useState([]);
    const [manuals, setManuals] = useState([]);
    const [thisproduct, setThisproduct] = useState([]);
    const [loading, setLoading] = useState(true);

    // For inquiry removal
    const [chosen, setChosen] = useState(false);
    const [timer, setTimer] = useState(false);

    useEffect(() => {
        product.datasheet &&
            product.datasheet.length > 0 &&
            product.datasheet.forEach((el) => {
                dispatch(showDatasheetDetails(el.id));
            });

        // eslint-disable-next-line
    }, [dispatch, product.id]);

    useEffect(() => {
        try {
            setThisproduct(product);
            setLoading(false);
        } catch (error) {
            setLoading(true);
        }

        // eslint-disable-next-line
    }, [product]);

    useEffect(() => {
        product.drawing &&
            product.drawing.length > 0 &&
            product.drawing.forEach((el) => {
                dispatch(showDrawingDetails(el.id));
            });

        // eslint-disable-next-line
    }, [dispatch, product.id]);

    useEffect(() => {
        product.manual &&
            product.manual.length > 0 &&
            product.manual.forEach((el) => {
                dispatch(showManualDetails(el.id));
            });

        // eslint-disable-next-line
    }, [dispatch, product.id]);

    useEffect(() => {
        if (datasheet && datasheet.data) {
            setDatasheets([datasheet.data]);
        }
    }, [datasheet, product.id]);

    useEffect(() => {
        const SetDrawings = () => {
            if (drawing && drawing.data) {
                setDrawings([drawing.data]);
            }
        };

        return SetDrawings();
    }, [drawing, product.id]);

    useEffect(() => {
        const SetManuals = () => {
            if (manual && manual.data) {
                setManuals([manual.data]);
            }
        };

        return SetManuals();
    }, [manual, product.id]);

    useEffect(() => {
        if (timer) {
            const getMessage = document.getElementById('msg');
            getMessage.classList.add('show-message');

            setTimeout(() => {
                if (timer && getMessage.classList.contains('show-message')) {
                    getMessage.classList.remove('show-message');
                }
            }, 5200);
        }
    }, [timer]);

    const addInquiry = (e, fmlink) => {
        e.preventDefault();
        setLoading(true);
        setChosen(true);
        setTimer(true);
        dispatch(addToInquiry(fmlink, pathname));
    };

    const removeFromInquiry = (e, id) => {
        e.preventDefault();
        setLoading(true);
        setChosen(false);
        dispatch(removeFromInq(id));
    };

    useEffect(() => {
        const setStorage = JSON.parse(localStorage.getItem('inquiryItems'));

        if (product._id && setStorage && setStorage.length > 0) {
            setStorage.map((iis) => iis.id === product._id && setChosen(true));
        }

        setLoading(false);
    }, [chosen, product]);

    return loading && thisproduct !== [] && thisproduct !== null ? (
        <Spinning />
    ) : error ? (
        <div className='error-block'>
            <section>
                <h4>There was an error loading data</h4>
            </section>
        </div>
    ) : (
        <div className='blue-background'>
            <section>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <h3>Technical Data</h3>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7}>
                        <div className='technical-data'>
                            <div className='table-data'>
                                <div className='table-row'>
                                    <div className='left-column'>
                                        Manufacturer
                                    </div>
                                    <div className='right-column'>
                                        {thisproduct.manufacturer &&
                                            thisproduct.manufacturer.title}
                                    </div>
                                </div>
                                {thisproduct.technology && (
                                    <div className='table-row'>
                                        <div className='left-column'>
                                            Technology
                                        </div>
                                        <div className='right-column'>
                                            {thisproduct.technology.title}
                                        </div>
                                    </div>
                                )}
                                {thisproduct.category &&
                                    thisproduct.category.length > 0 && (
                                        <div className='table-row'>
                                            <div className='left-column'>
                                                Product Series
                                            </div>
                                            <div className='right-column'>
                                                <ul className='div-series'>
                                                    {thisproduct.category.map(
                                                        (prodcat) => (
                                                            <li
                                                                key={prodcat.id}
                                                            >
                                                                {prodcat.title}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                {thisproduct.secondCategory &&
                                    thisproduct.secondCategory.length > 0 && (
                                        <div className='table-row'>
                                            <div className='left-column'>
                                                Product Category
                                            </div>
                                            <div className='right-column'>
                                                <ul className='div-series'>
                                                    {thisproduct.secondCategory &&
                                                        thisproduct.secondCategory.map(
                                                            (prodcat) => (
                                                                <li
                                                                    key={
                                                                        prodcat.id
                                                                    }
                                                                >
                                                                    {
                                                                        prodcat.title
                                                                    }
                                                                </li>
                                                            )
                                                        )}
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                {thisproduct.sizeDiagonal && (
                                    <div className='table-row'>
                                        <div className='left-column'>
                                            Size Diagonal
                                        </div>
                                        <div className='right-column'>
                                            {thisproduct.sizeDiagonal.title}
                                        </div>
                                    </div>
                                )}
                                {thisproduct.resolutionMax && (
                                    <div className='table-row'>
                                        <div className='left-column'>
                                            Resolution (max)
                                        </div>
                                        <div className='right-column'>
                                            {thisproduct.resolutionMax.title}
                                        </div>
                                    </div>
                                )}
                                {thisproduct.brightness && (
                                    <div className='table-row'>
                                        <div className='left-column'>
                                            Brightness [cd/m2]
                                        </div>
                                        <div className='right-column'>
                                            {thisproduct.brightness.title}
                                        </div>
                                    </div>
                                )}
                                {thisproduct.perspective && (
                                    <div className='table-row'>
                                        <div className='left-column'>
                                            Viewing angle U/D/L/R
                                        </div>
                                        <div className='right-column'>
                                            {thisproduct.perspective.title}
                                        </div>
                                    </div>
                                )}
                                {thisproduct.controller &&
                                    thisproduct.controller.length > 0 && (
                                        <div className='table-row'>
                                            <div className='left-column'>
                                                Controller
                                            </div>
                                            <div className='right-column'>
                                                <ul className='div-series'>
                                                    {thisproduct.controller.map(
                                                        (prodcat) => (
                                                            <li
                                                                key={prodcat.id}
                                                            >
                                                                {prodcat.title}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                {thisproduct.interface &&
                                    thisproduct.interface.length > 0 && (
                                        <div className='table-row'>
                                            <div className='left-column'>
                                                Interfaces
                                            </div>
                                            <div className='right-column'>
                                                <ul className='div-series'>
                                                    {thisproduct.interface.map(
                                                        (prodcat) => (
                                                            <li
                                                                key={prodcat.id}
                                                            >
                                                                {prodcat.title}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                {thisproduct.powerSupply &&
                                    thisproduct.powerSupply !== '' && (
                                        <div className='table-row'>
                                            <div className='left-column'>
                                                Power Supply
                                            </div>
                                            <div className='right-column'>
                                                {thisproduct.powerSupply}
                                            </div>
                                        </div>
                                    )}
                                {thisproduct.characteristics &&
                                    thisproduct.characteristics.length > 0 && (
                                        <div className='table-row'>
                                            <div className='left-column'>
                                                Format
                                            </div>
                                            <div className='right-column'>
                                                {product.characteristics[0] &&
                                                    product.characteristics[0]
                                                        .title}
                                            </div>
                                        </div>
                                    )}
                                {thisproduct.dimension && (
                                    <div className='table-row'>
                                        <div className='left-column'>
                                            Dimensions
                                        </div>
                                        <div className='right-column'>
                                            {thisproduct.dimension}
                                        </div>
                                    </div>
                                )}
                                {thisproduct.touchpoints &&
                                thisproduct.touchpoints !== '' ? (
                                    <Fragment>
                                        <div className='table-row'>
                                            <div className='left-column'>
                                                Touch
                                            </div>
                                            <div className='right-column'>
                                                Yes
                                            </div>
                                        </div>
                                        <div className='table-row'>
                                            <div className='left-column'>
                                                Touch Points
                                            </div>
                                            <div className='right-column'>
                                                {product.touchpoints}
                                            </div>
                                        </div>
                                    </Fragment>
                                ) : (
                                    <div className='table-row'>
                                        <div className='left-column'>Touch</div>
                                        <div className='right-column'>No</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5}>
                        <div className='product-downloads-and-more'>
                            {!chosen ? (
                                <button
                                    className='is-in-memory'
                                    onClick={(e) =>
                                        addInquiry(e, product.fmlink)
                                    }
                                >
                                    <i className='fas fa-save'></i>{' '}
                                    <span>Add to Inquiry List</span>
                                </button>
                            ) : (
                                <button
                                    className='is-in-memory'
                                    onClick={(e) =>
                                        removeFromInquiry(e, product._id)
                                    }
                                >
                                    <i className='fal fa-trash-alt'></i>{' '}
                                    <span>Remove from Inquiry List</span>
                                </button>
                            )}
                            <div
                                className='product-downloads-and-more downloads-block'
                                style={{ margin: '70px 0 0' }}
                            >
                                <h4>Donwloads</h4>
                                <p>
                                    Below are the downloads available for this
                                    product. If you require any further
                                    information please{' '}
                                    <Link to='/contact-us'>contact us</Link>
                                </p>
                                {datasheets && datasheets.length > 0
                                    ? datasheets.map((ds) => (
                                          <DatasheetsFiles
                                              key={ds.id}
                                              file={ds}
                                          />
                                      ))
                                    : 'Data Sheet not available'}
                                <br />
                                {drawings &&
                                    drawings.length > 0 &&
                                    drawings.map((dr) => (
                                        <DrawingsFiles key={dr.id} file={dr} />
                                    ))}
                                <br />
                                {manuals && manuals.length > 0
                                    ? manuals.map((mn) => (
                                          <ManualsFiles key={mn.id} file={mn} />
                                      ))
                                    : 'Manual not available'}
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};

export default ProductData;
