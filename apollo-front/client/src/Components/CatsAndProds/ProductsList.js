import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import Pagination from 'reactjs-hooks-pagination';

// CSS
import './products.css';

// Actions
import { filteredProducts, listProducts } from '../../actions/productActions';

// Parts
import Spinning from '../Extras/Spinning';
import ProductItem from './ProductItem';
import FiltersSidebar from '../Extras/FiltersSidebar';
import FiltersSidebarNoResNoTouch from '../Extras/FiltersSidebarNoResNoTouch';
import FiltersSidebarNoTouch from '../Extras/FiltersSidebarNoTouch';

const ProductsList = ({ pathname, title, title2, forApi }) => {
    const dispatch = useDispatch();

    const productFilteredList = useSelector(
        (state) => state.productFilteredList
    );
    const { error, filtered } = productFilteredList;
    const productList = useSelector((state) => state.productList);
    const { products } = productList;

    let optionsSort = useMemo(() => [], []);

    const [productsBycat, setProductsBycat] = useState([]);
    const [filterCombination, setFiltercombination] = useState([]);
    const [noFilterResults, setNoFilterResults] = useState(true);
    const [finalProducts, setFinalProducts] = useState([]);
    const [initialFilters, setInitialFilters] = useState([]);
    const [isNormal, setIsNormal] = useState(true);
    const [getFilters, setGetFilters] = useState({
        serie: '',
        category: '',
        forManu: [],
        forDiag: [],
        forRes: [],
        forBright: [],
        forInter: [],
        forAngle: [],
        forTemp: [],
        forTouch: [],
        forFormat: [],
        forPower: [],
        forSize: [],
        forCont: [],
        forOpt: [],
    });
    const [loading, setLoading] = useState(true);
    const [sorted, setSorted] = useState([]);
    const [sortList, setSort] = useState(
        localStorage.getItem('alphabetical')
            ? localStorage.getItem('alphabetical')
            : 'asc'
    );
    const [isDisabled, setIsDisabled] = useState(false);
    const [isDisabled2, setIsDisabled2] = useState(false);
    const [filterSort, setFilterSort] = useState(
        localStorage.getItem('sorting')
            ? localStorage.getItem('sorting')
            : 'interface'
    );
    const [pageLimit, setPageLimit] = useState(
        localStorage.getItem('perpage') ? localStorage.getItem('perpage') : 10
    );
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState([]);
    const [perpage, setPerpage] = useState(0);
    const [forManu, setForManu] = useState(
        localStorage.getItem('manufacturers')
            ? JSON.parse(localStorage.getItem('manufacturers'))
            : []
    );
    const [forDiag, setForDiag] = useState(
        localStorage.getItem('diagonal')
            ? JSON.parse(localStorage.getItem('diagonal'))
            : []
    );
    const [forRes, setForRes] = useState(
        localStorage.getItem('resolutions')
            ? JSON.parse(localStorage.getItem('resolutions'))
            : []
    );
    const [forBright, setForBright] = useState(
        localStorage.getItem('brightness')
            ? JSON.parse(localStorage.getItem('brightness'))
            : []
    );
    const [forInter, setForInter] = useState(
        localStorage.getItem('interface')
            ? JSON.parse(localStorage.getItem('interface'))
            : []
    );
    const [forAngle, setForAngle] = useState(
        localStorage.getItem('angle')
            ? JSON.parse(localStorage.getItem('angle'))
            : []
    );
    const [forTemp, setForTemp] = useState(
        localStorage.getItem('temperature')
            ? JSON.parse(localStorage.getItem('temperature'))
            : []
    );
    const [forTouch, setForTouch] = useState(
        localStorage.getItem('touchscreen')
            ? localStorage.getItem('touchscreen')
            : []
    );
    const [forFormat, setForFormat] = useState(
        localStorage.getItem('format')
            ? localStorage.getItem('format')
            : []
    );
    const [forPower, setForPower] = useState(
        localStorage.getItem('power')
            ? localStorage.getItem('power')
            : []
    );
    const [forSize, setForSize] = useState(
        localStorage.getItem('size')
            ? localStorage.getItem('size')
            : []
    );
    const [forCont, setForCont] = useState(
        localStorage.getItem('cont')
            ? localStorage.getItem('cont')
            : []
    );
    const [forOpt, setForOpt] = useState(
        localStorage.getItem('option')
            ? localStorage.getItem('option')
            : []
    );
    useEffect(() => {
        let resetFb = document.getElementById('filters-container');

        if (resetFb !== null) {
            resetFb.style.transform = 'translateY(' + 0 + 'px)';
        }

        // eslint-disable-next-line
    }, [currentPage]);

    useEffect(() => {
        if (forApi.title !== '' || forApi.title2 !== '') {
            dispatch(listProducts(forApi));
        }
    }, [dispatch, forApi, pathname]);

    useEffect(() => {
        const ProductSetup = () => {
            if (!productList.loading && !productList.error && products) {
                const endPr = products && products.length + 1;
                const minusZeroPro = products && products.slice(1, endPr);
                setFinalProducts(minusZeroPro);
                setInitialFilters(products[0]);
            }
        };

        ProductSetup();
        return () => {
            setLoading(true);
            setFinalProducts([]);
        };
    }, [products, productList.error, productList.loading, pathname]);

    useEffect(() => {
        setFiltercombination([]);
        const FilterProducts = () => {
            const end = filtered && filtered.length + 1;
            const minusZero = filtered && filtered.slice(0, end);
            if (filtered && filtered.length > 0) {
                setFiltercombination(minusZero);
                setIsNormal(false);
                setNoFilterResults(false);
            } else {
                setNoFilterResults(true);
            }

            if (finalProducts && finalProducts.length > 0) {
                setProductsBycat(finalProducts);
            }
        };

        FilterProducts();

        return () => {
            setFiltercombination([]);
            setProductsBycat([]);
            setLoading(true);
        };
    }, [finalProducts, filtered, pathname]);

    useEffect(() => {
        if (
            forManu.length > 0 ||
            forDiag.length > 0 ||
            forRes.length > 0 ||
            forBright.length > 0 ||
            forInter.length > 0 ||
            forAngle.length > 0 ||
            forTemp.length > 0 ||
            forTouch.length > 0 ||
            forFormat.length > 0 ||
            forPower.length > 0 ||
            forSize.length > 0 ||
            forCont.length > 0 ||
            forOpt.length > 0
        ) {
            setGetFilters({
                serie: title ? title : '',
                category: title2 ? title2 : '',
                id1: forApi.id1 ? forApi.id1 : 0,
                id2: forApi.id2 ? forApi.id2 : 0,
                id3: forApi.id3 ? forApi.id3 : 0,
                forManu: forManu.length > 0 ? forManu : [],
                forDiag: forDiag.length > 0 ? forDiag : [],
                forRes: forRes.length > 0 ? forRes : [],
                forBright: forBright.length > 0 ? forBright : [],
                forInter: forInter.length > 0 ? forInter : [],
                forAngle: forAngle.length > 0 ? forAngle : [],
                forTemp: forTemp.length > 0 ? forTemp : [],
                forTouch: forTouch.length > 0 ? forTouch : [],
                forFormat: forFormat.length > 0 ? forFormat : [],
                forPower: forPower.length > 0 ? forPower : [],
                forSize: forSize.length > 0 ? forSize : [],
                forCont: forCont.length > 0 ? forCont : [],
                forOpt: forOpt.length > 0 ? forOpt : [],
            });

            if (!noFilterResults) {
                setOffset(0);
                setCurrentPage(
                    sorted && sorted.slice(0, parseInt(pageLimit, 10))
                );
            }

            setIsNormal(false);
        } else {
            setIsNormal(true);
        }

        // eslint-disable-next-line
    }, [
        title,
        title2,
        forManu,
        forDiag,
        forRes,
        forBright,
        forInter,
        forAngle,
        forTemp,
        forTouch,
        forFormat,
        forPower,
        forSize,
        forCont,
        forOpt,
    ]);

    useEffect(() => {
        if (
            getFilters.forManu.length > 0 ||
            getFilters.forDiag.length > 0 ||
            getFilters.forRes.length > 0 ||
            getFilters.forBright.length > 0 ||
            getFilters.forInter.length > 0 ||
            getFilters.forAngle.length > 0 ||
            getFilters.forTemp.length > 0 ||
            getFilters.forTouch.length > 0 ||
            getFilters.forFormat.length > 0 ||
            getFilters.forPower.length > 0 ||
            getFilters.forSize.length > 0 ||
            getFilters.forCont.length > 0 ||
            getFilters.forOpt.length > 0
        ) {
            dispatch(filteredProducts(getFilters));
        } else {
            dispatch(
                filteredProducts({
                    serie: title ? title : '',
                    category: title2 ? title2 : '',
                    id1: 0,
                    id2: 0,
                    id3: 0,
                    forManu: [],
                    forDiag: [],
                    forRes: [],
                    forBright: [],
                    forInter: [],
                    forAngle: [],
                    forTemp: [],
                    forTouch: [],
                    forFormat: [],
                    forPower: [],
                    forSize: [],
                    forCont: [],
                    forOpt: [],
                })
            );
        }

        // eslint-disable-next-line
    }, [dispatch, getFilters]);

    useEffect(() => {
        const SetData = () => {
            if (filterCombination.length >= 1 && !isNormal) {
                const sorted = filterCombination.sort((a, b) => {
                    const isReversed = sortList === 'asc' ? 1 : -1;
                    return isReversed * a.fmtitle.localeCompare(b.fmtitle);
                });

                setSorted(sorted);
            } else if (filtered && filtered.length === 1) {
                setNoFilterResults(true);
                setSorted([]);
            } else if (productsBycat && productsBycat.length > 0 && isNormal) {
                const sorted = productsBycat.sort((a, b) => {
                    const isReversed = sortList === 'asc' ? 1 : -1;
                    return isReversed * a.fmtitle.localeCompare(b.fmtitle);
                });

                setSorted(sorted);
            }
        };

        SetData();
        setLoading(false);

        return () => {
            setLoading(true);
            setSorted([]);
        };
    }, [productsBycat, filterCombination, sortList, filtered, isNormal]);

    const onChange = (e) => {
        e.preventDefault();
        if (e.target.value === '10') {
            setPageLimit(10);
        } else if (e.target.value === '20') {
            setPageLimit(20);
        } else if (e.target.value === '50') {
            setPageLimit(50);
        } else if (e.target.value === '75') {
            setPageLimit(75);
        } else if (e.target.value === '100') {
            setPageLimit(100);
        }
    };

    const onPageChanged = (page) => {
        const offset = (page - 1) * pageLimit;
        setOffset(offset);

        setCurrentPage(
            sorted && sorted.slice(offset, offset + parseInt(pageLimit, 10))
        );
    };

    const onChangeSelect = (e) => {
        e.preventDefault();
        localStorage.setItem('sorting', `${e.target.value}`);
        setFilterSort(e.target.value);
    };

    const onPageChangedReset = (e) => {
        e.preventDefault();
        setForManu([]);
        setForDiag([]);
        setForRes([]);
        setForBright([]);
        setForInter([]);
        setForAngle([]);
        setForTemp([]);
        setForTouch([]);
        setForFormat([]);
        setForPower([]);
        setForSize([]);
        setForCont([]);
        setForOpt([]);
        setIsNormal(true);
        setFiltercombination([]);
        setGetFilters({
            serie: title ? title : '',
            category: title2 ? title2 : '',
            id1: 0,
            id2: 0,
            id3: 0,
            forManu: [],
            forDiag: [],
            forRes: [],
            forBright: [],
            forInter: [],
            forAngle: [],
            forTemp: [],
            forTouch: [],
            forFormat: [],
            forPower: [],
            forSize: [],
            forCont: [],
            forOpt: [],
        });
    };

    useEffect(() => {
        setCurrentPage(
            sorted && sorted.slice(offset, offset + parseInt(pageLimit, 10))
        );

        // Dennis
        /*document
            .querySelectorAll('.pagination-wrap nav ul li')
            .forEach((el) => {
                el.addEventListener('click', () => {
                    window.scroll({
                        top: 0,
                        left: 0,
                        behavior: 'instant',
                    });
                });
            });*/

        return () => {
            document
                .querySelectorAll('.pagination-wrap nav ul li')
                .forEach((el) => {
                    el.removeEventListener('click', el);
                });
            setCurrentPage([]);
        };

        // eslint-disable-next-line
    }, [offset, sorted, sortList, pageLimit]);

    const ascendingOrder = () => {
        setIsDisabled(true);
        setIsDisabled2(false);
        setSort('asc');
    };

    const descendingOrder = () => {
        setIsDisabled(false);
        setIsDisabled2(true);
        setSort('des');
    };

    useEffect(() => {
        const RunFunction = () => {
            localStorage.setItem('perpage', `${pageLimit}`);
            setCurrentPage(sorted && sorted.slice(offset, offset + pageLimit));
            setPerpage(Number(localStorage.getItem('perpage')));
        };

        RunFunction();

        return () => {
            setCurrentPage([]);
        };

        // eslint-disable-next-line
    }, [pageLimit]);

    useEffect(() => {
        const FinalEffect = () => {
            localStorage.setItem('alphabetical', `${sortList}`);
            if (sortList === 'asc') {
                setIsDisabled(true);
                setIsDisabled2(false);
            } else {
                setIsDisabled(false);
                setIsDisabled2(true);
            }
            setLoading(false);
        };

        FinalEffect();
        return () => {
            setLoading(true);
        };
    }, [sortList]);

    // This is only for
    // the sidebar auto scroll
    // widht the filter options
    useEffect(() => {
        function paralAb() {
            let theOffsetAb = window.pageYOffset;
            let filterBlock = document.getElementById('filters-container');
            let theBoundary = document.getElementById('filter-boundary');
            let filterContainer = document.getElementById(
                'products-list-container'
            );

            let start = '';
            let end = '';
            let box = filterContainer !== null ? filterBlock.offsetHeight : '';

            if (
                filterContainer !== null &&
                filterContainer !== null &&
                theBoundary !== null
            ) {
                start = theBoundary.offsetTop + 150;
                end =
                    filterContainer.offsetTop +
                    filterContainer.offsetHeight -
                    box +
                    filterBlock.offsetHeight -
                    250;
            }

            if (
                theOffsetAb > start &&
                theOffsetAb < end &&
                filterContainer !== null
            ) {
                filterBlock.style.transform =
                    'translateY(' + (theOffsetAb - start) + 'px)';
            } else if (
                filterBlock &&
                filterContainer &&
                filterBlock.offsetHeight > filterContainer.offsetHeight
            ) {
                filterBlock.style.transform = 'none';
                filterBlock.style.bottom = 0;
            }
        }

        document.addEventListener('scroll', paralAb, true);

        return () => {
            document.removeEventListener('scroll', paralAb, true);
        };
    });
    // This is only for
    // the sidebar auto scroll
    // widht the filter options

    useEffect(() => {
        const SetSelect = () => {
            initialFilters &&
                initialFilters[0] &&
                initialFilters[0].manufacturer &&
                optionsSort.push({
                    type: 'manufacturer',
                    label: 'Manufacturer',
                });

            initialFilters &&
                initialFilters[0] &&
                initialFilters[0].sizeDiagonal &&
                optionsSort.push({
                    type: 'sizeDiagonal',
                    label: 'Size Diagonal',
                });

            initialFilters &&
                initialFilters[0] &&
                initialFilters[0].resolutionMax &&
                optionsSort.push({
                    type: 'resolutionMax',
                    label: 'Max Resolution',
                });

            initialFilters &&
                initialFilters[0] &&
                initialFilters[0].brightness &&
                optionsSort.push({
                    type: 'brightness',
                    label: 'Brightness [cd/m²]',
                });

            initialFilters &&
                initialFilters[0] &&
                initialFilters[0].interface &&
                optionsSort.push({ type: 'interface', label: 'Interface' });

            initialFilters &&
                initialFilters[0] &&
                initialFilters[0].perspective &&
                optionsSort.push({
                    type: 'perspective',
                    label: 'Viewing Angle U/D/L/R',
                });

            initialFilters &&
                initialFilters[0] &&
                initialFilters[0].temperatureRange &&
                optionsSort.push({
                    type: 'temperatureRange',
                    label: 'Temperature Range',
                });

            initialFilters &&
                initialFilters[0] &&
                initialFilters[0].touch &&
                optionsSort.push({
                    type: 'touch',
                    label: 'Touch (No/Integrated/Optional)',
                });

            initialFilters &&
                initialFilters[0] &&
                initialFilters[0].characteristics &&
                optionsSort.push({
                    type: 'characteristics',
                    label: 'Format',
                });

            initialFilters &&
                initialFilters[0] &&
                initialFilters[0].powerSupply &&
                optionsSort.push({
                    type: 'powerSupply',
                    label: 'Power Supply',
                });
            initialFilters &&
                initialFilters[0] &&
                initialFilters[0].diagonale &&
                optionsSort.push({
                    type: 'diagonale',
                    label: 'Diagonale',
                });
            initialFilters &&
                initialFilters[0] &&
                initialFilters[0].controller &&
                optionsSort.push({
                    type: 'controller',
                    label: 'Controller',
                });
            initialFilters &&
                initialFilters[0] &&
                initialFilters[0].options &&
                optionsSort.push({
                    type: 'options',
                    label: 'options',
                });
        };

        return SetSelect();

        // eslint-disable-next-line
    }, [initialFilters]);

    return loading ? (
        <Spinning />
    ) : productList.error && productsBycat.length === 0 ? (
        <section className='no-product'></section>
    ) : (
        <div id='filter-boundary' className='products-block'>
            <section>
                <Grid container justifyContent='center' spacing={5}>
                    <Grid item xs={12} sm={12} md={4} lg={3}>
                        <div
                            id='products-list-container'
                            className='filter-box-wrapper'
                        >
                            {title === 'PCAP Technology' ? (
                                <FiltersSidebarNoResNoTouch
                                    filterCombination={
                                        filterCombination
                                            ? filterCombination
                                            : []
                                    }
                                    initialFilters={
                                        initialFilters ? initialFilters[0] : []
                                    }
                                    products={productsBycat}
                                    error={error}
                                    forManu={forManu}
                                    setForManu={setForManu}
                                    forDiag={forDiag}
                                    setForDiag={setForDiag}
                                    forRes={forRes}
                                    setForRes={setForRes}
                                    forBright={forBright}
                                    setForBright={setForBright}
                                    forInter={forInter}
                                    setForInter={setForInter}
                                    forAngle={forAngle}
                                    setForAngle={setForAngle}
                                    forTemp={forTemp}
                                    setForTemp={setForTemp}
                                    forTouch={forTouch}
                                    setForTouch={setForTouch}
                                    setFiltercombination={setFiltercombination}
                                    noFilterResults={noFilterResults}
                                    pathname={pathname}
                                    setIsNormal={setIsNormal}
                                />
                            ) : title === 'Infinite PCAP Touch Design' ? (
                                <FiltersSidebarNoTouch
                                    filterCombination={
                                        filterCombination
                                            ? filterCombination
                                            : []
                                    }
                                    initialFilters={
                                        initialFilters ? initialFilters[0] : []
                                    }
                                    products={productsBycat}
                                    error={error}
                                    forManu={forManu}
                                    setForManu={setForManu}
                                    forDiag={forDiag}
                                    setForDiag={setForDiag}
                                    forRes={forRes}
                                    setForRes={setForRes}
                                    forBright={forBright}
                                    setForBright={setForBright}
                                    forInter={forInter}
                                    setForInter={setForInter}
                                    forAngle={forAngle}
                                    setForAngle={setForAngle}
                                    forTemp={forTemp}
                                    setForTemp={setForTemp}
                                    forTouch={forTouch}
                                    setForTouch={setForTouch}
                                    setFiltercombination={setFiltercombination}
                                    noFilterResults={noFilterResults}
                                    pathname={pathname}
                                    setIsNormal={setIsNormal}
                                />
                            ) : (
                                <FiltersSidebar
                                    filterCombination={
                                        filterCombination
                                            ? filterCombination
                                            : []
                                    }
                                    initialFilters={
                                        initialFilters ? initialFilters[0] : []
                                    }
                                    products={productsBycat}
                                    error={error}
                                    forManu={forManu}
                                    setForManu={setForManu}
                                    forDiag={forDiag}
                                    setForDiag={setForDiag}
                                    forRes={forRes}
                                    setForRes={setForRes}
                                    forBright={forBright}
                                    setForBright={setForBright}
                                    forInter={forInter}
                                    setForInter={setForInter}
                                    forAngle={forAngle}
                                    setForAngle={setForAngle}
                                    forTemp={forTemp}
                                    setForTemp={setForTemp}
                                    forTouch={forTouch}
                                    setForTouch={setForTouch}
                                    forFormat={forFormat}
                                    setForFormat={setForFormat}
                                    forPower={forPower}
                                    setForPower={setForPower}
                                    forSize={forSize}
                                    setForSize={setForSize}
                                    forCont={forCont}
                                    setForCont={setForCont}
                                    forOpt={forOpt}
                                    setForOpt={setForOpt}
                                    setFiltercombination={setFiltercombination}
                                    noFilterResults={noFilterResults}
                                    pathname={pathname}
                                    setIsNormal={setIsNormal}
                                />
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={9}>
                        <Grid container style={{ marginBottom: 70 }}>
                            <Grid
                                item
                                xs={12}
                                className='top-sorting-container'
                            >
                                <div className='top-sorting'>
                                    <span>Items Per Page:</span>
                                    <select
                                        className='sorting-dropdown'
                                        name='perpage'
                                        value={pageLimit}
                                        onChange={(e) => onChange(e)}
                                    >
                                        <option
                                            className='sorting-dropdown-option'
                                            value='10'
                                        >
                                            10
                                        </option>
                                        <option
                                            className='sorting-dropdown-option'
                                            value='20'
                                        >
                                            20
                                        </option>
                                        <option
                                            className='sorting-dropdown-option'
                                            value='50'
                                        >
                                            50
                                        </option>
                                        <option
                                            className='sorting-dropdown-option'
                                            value='75'
                                        >
                                            75
                                        </option>
                                        <option
                                            className='sorting-dropdown-option'
                                            value='100'
                                        >
                                            100
                                        </option>
                                    </select>
                                </div>
                                <div className='filter-dropdown top-sorting'>
                                    <span>Sort By:</span>
                                    {optionsSort.length > 0 && (
                                        <select
                                            className='sorting-dropdown'
                                            name='filtersort'
                                            onChange={(e) => onChangeSelect(e)}
                                            defaultValue={filterSort}
                                            style={{
                                                textTransform: 'none',
                                                fontFamily: 'var(--fontuno)',
                                            }}
                                        >
                                            {optionsSort.map((op, index) => (
                                                <option
                                                    key={index}
                                                    className='sorting-dropdown-option'
                                                    value={op.type}
                                                >
                                                    {op.label}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                </div>
                                <div className='top-sorting'>
                                    <span>Order:</span>
                                    <div className='aphabetical'>
                                        <button
                                            onClick={ascendingOrder}
                                            className='apollo-button filter-buttons'
                                            disabled={isDisabled}
                                        >
                                            Ascending
                                        </button>{' '}
                                        <button
                                            onClick={descendingOrder}
                                            className='apollo-button filter-buttons'
                                            disabled={isDisabled2}
                                        >
                                            Descending
                                        </button>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>

                        {(currentPage.length > 0 && !error && isNormal) ||
                        (currentPage.length > 0 && !error && !isNormal) ||
                        (currentPage.length > 0 && error && isNormal) ? (
                            <div className='list-container'>
                                {currentPage.length > 0 &&
                                    currentPage.map((product) => (
                                        <ProductItem
                                            pathname={pathname}
                                            product={product}
                                            key={product._id}
                                        />
                                    ))}
                            </div>
                        ) : (
                            error &&
                            !isNormal && (
                                <div style={{ textAlign: 'center' }}>
                                    <h4>
                                        There is no products with this filter
                                        combination
                                    </h4>
                                    <div className='button-read-more'>
                                        <button
                                            onClick={(e) =>
                                                onPageChangedReset(e)
                                            }
                                            className='apollo-button'
                                            style={{
                                                boder: 'none',
                                                marginLeft: 20,
                                            }}
                                        >
                                            Clear Filters
                                        </button>
                                    </div>
                                </div>
                            )
                        )}

                        <Grid container justifyContent='center'>
                            <Grid item xs={12} sm={5} md={4}>
                                <div className='pagination-wrap'>
                                    {sorted && (
                                        <Pagination
                                            totalRecords={sorted.length}
                                            pageLimit={perpage}
                                            pageRangeDisplayed={3}
                                            onChangePage={onPageChanged}
                                        />
                                    )}
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};

// const delDuplicates = (array) => [...new Set(array)];

export default ProductsList;
