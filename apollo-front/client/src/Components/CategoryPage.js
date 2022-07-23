import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation, Link } from 'react-router-dom';

// Actions
import { listSerieDetails } from '../actions/serieActions';
import { listCategoryDetails } from '../actions/categoryActions';

// CSS
import './About/about.css';
import './Home/home.css';
import './CatsAndProds/products.css';

// Parts
import Spinning from './Extras/Spinning';
import TopSerie from './Series/TopSerie';
import ProductsList from './CatsAndProds/ProductsList';
import NotFound from './Extras/NotFound';
import InquirySection from './CatsAndProds/InquirySection';
import FirstBoxes from './CatsAndProds/FirstBoxes';
import SecondSection from './CatsAndProds/SecondSection';
import { Grid } from '@mui/material';

const SeriePage = () => {
    const dispatch = useDispatch();
    const { fmlink } = useParams();
    const url = useLocation();

    const serieDetails = useSelector((state) => state.serieDetails);
    const { serie } = serieDetails;
    const categoryDetails = useSelector((state) => state.categoryDetails);
    const { category } = categoryDetails;

    const [topInfo, setTopInfo] = useState({
        sfmtitle: '',
        sfmcontent: '',
        sfeaturedimg: '',
        sfmsubtitle: '',
    });
    const [topInfo2, setTopInfo2] = useState({
        cfmtitle: '',
        cfmcontent: '',
        cfeaturedimg: '',
        cfmsubtitle: '',
    });
    const [serieTitle, setSerieTitle] = useState('');
    const [categoryTitle, setCategoryTitle] = useState('');
    const [doneData, setDoneData] = useState(false);
    const [finalSerie, setFinalSerie] = useState(null);
    const [finalCategory, setFinalCategory] = useState(null);
    const [finalLocation, setFinalLocation] = useState('');
    const [done, setDone] = useState(false);
    const [forApi, setForApi] = useState({
        id1: 0,
        title: '',
        id2: 0,
        title2: '',
    });
    const [loading, setLoading] = useState(true);
    const [mount, setMount] = useState(false);

    useEffect(() => {
        setFinalLocation(fmlink);
    }, [fmlink]);

    useEffect(() => {
        dispatch(listSerieDetails(finalLocation));
        dispatch(listCategoryDetails(finalLocation));
    }, [dispatch, finalLocation]);

    useEffect(() => {
        const SetMain = async () => {
            if (serie && serie.fmtitle) {
                setFinalSerie(serie);
            }

            if (category && category.fmtitle) {
                setFinalCategory(category);
            }
        };

        SetMain();
        setDoneData(true);

        return () => {
            setFinalSerie(null);
            setFinalCategory(null);
            setDoneData(false);
        };
    }, [serie, category, finalLocation]);

    const SetContent = useCallback(() => {
        if (doneData) {
            if (finalSerie !== null && finalCategory !== null) {
                setSerieTitle(finalSerie.fmtitle);
                setCategoryTitle(finalCategory.fmtitle);
                setForApi({
                    id1: finalSerie.id,
                    title: finalSerie.fmtitle,
                    id2: finalCategory.id,
                    title2: finalCategory.fmtitle,
                });
                setTopInfo({
                    sfmtitle: finalSerie.fmtitle,
                    sfmcontent: finalSerie.fmcontent,
                    sfeaturedimg: finalSerie.featuredimg,
                    sfmsubtitle: finalSerie.fmsubtitle,
                });
                setTopInfo2({
                    cfmtitle: finalCategory.fmtitle,
                    cfmcontent: finalCategory.fmcontent,
                    cfeaturedimg: finalCategory.featuredimg,
                    cfmsubtitle: finalCategory.fmsubtitle,
                });
            } else if (finalSerie !== null && finalCategory === null) {
                setSerieTitle(finalSerie.fmtitle);
                setCategoryTitle('');
                setForApi({
                    id1: finalSerie.id,
                    title: finalSerie.fmtitle,
                    id2: 0,
                    title2: '',
                });
                setTopInfo({
                    sfmtitle: finalSerie.fmtitle,
                    sfmcontent: finalSerie.fmcontent,
                    sfeaturedimg: finalSerie.featuredimg,
                    sfmsubtitle: finalSerie.fmsubtitle,
                });
                setTopInfo2({
                    cfmtitle: '',
                    cfmcontent: '',
                    cfeaturedimg: '',
                    cfmsubtitle: '',
                });
            } else if (finalSerie === null && finalCategory !== null) {
                setSerieTitle('');
                setCategoryTitle(finalCategory.title);
                setForApi({
                    id1: 0,
                    title: '',
                    id2: finalCategory.id,
                    title2: finalCategory.title,
                });
                setTopInfo({
                    sfmtitle: '',
                    sfmcontent: '',
                    sfeaturedimg: '',
                    sfmsubtitle: '',
                });
                setTopInfo2({
                    cfmtitle: finalCategory.title,
                    cfmcontent: finalCategory.fmcontent,
                    cfeaturedimg: finalCategory.featuredimg,
                    cfmsubtitle: finalCategory.fmsubtitle,
                });
            }
        }
    }, [finalSerie, finalCategory, doneData]);

    useEffect(() => {
        const AllDone = () => {
            setDone(false);
            SetContent();
        };

        AllDone();
        setDone(true);
    }, [SetContent]);

    const LetsLoad = useCallback(() => {
        if (done) {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [done]);

    useEffect(() => {
        LetsLoad();
        if (!loading) {
            setMount(true);
        }
    }, [LetsLoad, loading]);

    return loading && !mount ? (
        <Spinning />
    ) : serieDetails.error && categoryDetails.error ? (
        <section>
            <NotFound />
        </section>
    ) : (
        <div className='all-body serie-page'>
            <TopSerie
                title={
                    topInfo.sfmtitle !== ''
                        ? topInfo.sfmtitle
                        : topInfo2.cfmtitle
                }
                content={
                    topInfo.sfmcontent !== ''
                        ? topInfo.sfmcontent
                        : topInfo2.cfmcontent
                }
                featuredimg={
                    topInfo.sfeaturedimg !== '' &&
                    topInfo.sfeaturedimg !== undefined
                        ? topInfo.sfeaturedimg
                        : topInfo2.cfeaturedimg !== undefined
                        ? topInfo2.cfeaturedimg
                        : 'uploads/big-placeholder.jpg'
                }

                subtitle={
                    topInfo.sfmsubtitle
                        ? topInfo.sfmsubtitle
                        : topInfo2.cfmsubtitle
                }
            />

            {mount &&
                topInfo.sfmtitle !== 'Hover Touch' &&
                topInfo.sfmtitle !==
                    'Cover Glasses for TFT Displays and Touch Screens ' &&
                topInfo.sfmtitle !== 'EMI shielded / NVIS TFT displays' &&
                topInfo.sfmtitle !== 'Technical Services and Processes' &&
                topInfo.sfmtitle !== 'Embedded OEM/ODM Service' &&
                topInfo.sfmtitle !== 'Content Management System' &&
                topInfo.sfmtitle !== 'Case Studies' && (
                    <ProductsList
                        title={serieTitle}
                        title2={categoryTitle}
                        forApi={forApi}
                        pathname={url.pathname}
                    />
                )}

            {finalSerie &&
                finalSerie !== null &&
                topInfo.sfmtitle !== 'EMI shielded / NVIS TFT displays' &&
                finalSerie.extraboxes
                    .sort((a, b) => (a.eposition < b.eposition ? -1 : 1))
                    .map((exb) =>
                        exb.eposition % 2 === 0 ? (
                            <SecondSection boxtwo={exb} />
                        ) : (
                            <FirstBoxes boxone={exb} />
                        )
                    )}

            {finalCategory &&
                finalCategory !== null &&
                finalCategory.extraboxes
                    .sort((a, b) => (a.eposition < b.eposition ? -1 : 1))
                    .map((exb) =>
                        exb.eposition % 2 === 0 ? (
                            <SecondSection boxtwo={exb} />
                        ) : (
                            <FirstBoxes boxone={exb} />
                        )
                    )}

            {topInfo.sfmtitle === 'EMI shielded / NVIS TFT displays' && (
                <div className='gray-bg'>
                    <section>
                        <Grid container justifyContent='center'>
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                style={{ textAlign: 'center' }}
                            >
                                <div className='cta-categories'>
                                    <Link
                                        to='/contact-us'
                                        className='apollo-button'
                                    >
                                        Contact Us Now
                                    </Link>
                                </div>
                            </Grid>
                        </Grid>
                    </section>
                </div>
            )}

            <InquirySection />
        </div>
    );
};

export default SeriePage;
