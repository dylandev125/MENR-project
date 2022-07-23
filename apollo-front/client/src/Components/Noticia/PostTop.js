import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

// Parts
import ImageNews from '../Layout/ImageNews';

const PostTop = ({ topContent, noticias }) => {
    const { title, content, date, fmintro, subtitle, media } = topContent;
    const [latestPosts, setLatestPosts] = useState([]);

    useEffect(() => {
        function paralAb() {
            let theOffsetAb = window.pageYOffset;
            let oneHalfAb = document.getElementById('half-one-about');
            let twoHalfAb = document.getElementById('half-two-about');

            let limit = '';

            if (oneHalfAb !== null) {
                limit = oneHalfAb.offsetTop + oneHalfAb.offsetHeight;
            }

            if (theOffsetAb > 10 && oneHalfAb !== null) {
                oneHalfAb.style.transform =
                    'translateY(' + (-50 - (theOffsetAb * 25) / limit) + '%)';
                twoHalfAb.style.transform =
                    'translateY(' + (-50 + (theOffsetAb * 25) / limit) + '%)';
            }
        }

        document.addEventListener('scroll', paralAb, true);

        return () => {
            document.removeEventListener('scroll', paralAb, true);
        };
    });

    useEffect(() => {
        const filterPosts = noticias
            .sort((a, b) => (new Date(a.crDate) > new Date(b.crDate) ? -1 : 1))
            .slice(0, 10);

        setLatestPosts(filterPosts);

        // eslint-disable-next-line
    }, [noticias]);

    return (
        <div className='singlepost'>
            <section>
                <Grid container spacing={4} justifyContent='center'>
                    <Grid item xs={12} sm={10} md={8}>
                        <div className='image-container'>
                            <div className='content-boxed'>
                                <h1>
                                    {title.replace(
                                        /Distec/g,
                                        'Apollo Display Technologies'
                                    )}
                                </h1>
                                <h2>
                                    {subtitle.replace(
                                        /Distec/g,
                                        'Apollo Display Technologies'
                                    )}
                                </h2>
                                <Moment format='MMMM DD, YYYY'>{date}</Moment>
                                <blockquote
                                    dangerouslySetInnerHTML={{
                                        __html: fmintro,
                                    }}
                                ></blockquote>
                            </div>
                            {media && <ImageNews imgid={media.id} />}
                        </div>
                        <div className='content-boxed'>
                            <div
                                className='page-content'
                                dangerouslySetInnerHTML={{
                                    __html: content
                                        .replace(
                                            /Distec/g,
                                            'Apollo Display Technologies'
                                        )
                                        .replace(
                                            /https:\/\/www.distec.de\/en/g,
                                            'https://apollo.ferociousmediaweb.com'
                                        )
                                        .replace(/\/detail/, '')
                                        .replace(/\/distec/, '')
                                        .replace(
                                            /contact us/g,
                                            '<a href="/contact-us">contact us</a>'
                                        )
                                        .replace(
                                            'sales@distec.de',
                                            'info@apollodisplays.com'
                                        ),
                                }}
                            ></div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={10} md={4}>
                        <div className='sidebar'>
                            <h5>Latest News</h5>
                            <Link to='/news' className='apollo-white-button'>
                                or Go to News Page for more
                            </Link>
                        </div>
                        <div className='latest-posts-list'>
                            {latestPosts.length > 0 &&
                                latestPosts.map((lp) => (
                                    <Link
                                        to={`/news/${lp.fmlink}`}
                                        key={lp._id}
                                        className='lp-item-container'
                                    >
                                        <div className='hp-small-size'>
                                            {lp.media && (
                                                <ImageNews
                                                    imgid={lp.media[0].id}
                                                />
                                            )}
                                        </div>
                                        <div className='lp-item-text'>
                                            <h4
                                                dangerouslySetInnerHTML={{
                                                    __html: lp.fmtitle.replace(
                                                        /Distec/g,
                                                        'Apollo Display Technologies'
                                                    ),
                                                }}
                                            ></h4>
                                            <Moment format='DD MMMM YYYY'>
                                                {lp.createdAt}
                                            </Moment>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
};

export default PostTop;
