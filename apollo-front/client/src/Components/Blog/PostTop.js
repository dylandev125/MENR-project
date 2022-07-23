import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const PostTop = ({ topContent, blogposts }) => {
    const { title, content, date, featuredimg } = topContent;
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
        const filterPosts = blogposts
            .sort((a, b) =>
                new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1
            )
            .slice(0, 10);

        setLatestPosts(filterPosts);

        // eslint-disable-next-line
    }, [blogposts]);

    return (
        <div className='singlepost'>
            <section>
                <Grid container spacing={4} justifyContent='center'>
                    <Grid item xs={12} sm={10} md={8}>
                        <div className='image-container'>
                            <div className='content-boxed'>
                                <h1>{title}</h1>
                                <Moment format='MMMM DD, YYYY'>{date}</Moment>
                            </div>
                            <img
                                src={`http://localhost:5079/${featuredimg}`}
                                alt={title}
                                width='667'
                                height='500'
                            />
                        </div>
                        <div className='content-boxed'>
                            <div
                                className='page-content'
                                dangerouslySetInnerHTML={{ __html: content }}
                            ></div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={10} md={4}>
                        <div className='sidebar'>
                            <h5>Latest Posts</h5>
                            <Link to='/blog' className='apollo-white-button'>
                                or Go to Blog page for more
                            </Link>
                        </div>
                        <div className='latest-posts-list'>
                            {latestPosts.length > 0 &&
                                latestPosts.map((lp) => (
                                    <Link
                                        to={`/blog/${lp.fmlink}`}
                                        key={lp._id}
                                        className='lp-item-container'
                                    >
                                        <div className='hp-small-size'>
                                            <img
                                                src={`http://localhost:5079/${lp.featuredimg}`}
                                                alt={lp.fmtitle}
                                                width='300'
                                                height='150'
                                            />
                                        </div>
                                        <div className='lp-item-text'>
                                            <h4
                                                dangerouslySetInnerHTML={{
                                                    __html: lp.fmtitle,
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
