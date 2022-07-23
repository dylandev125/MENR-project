import React, { useEffect, useRef } from 'react';
import { withRouter, Link } from 'react-router-dom';
import MetisMenu from 'metismenujs';
import { useDispatch, useSelector } from 'react-redux';
import SimpleBar from 'simplebar-react';
import {
	getBlogposts,
	getCategories,
	getFolders,
	getPreviews,
	getSeries,
	getNoticias,
} from '../../store/actions';

const SidebarContent = ({
	folders,
	series,
	categories,
	previews,
	pages,
	blogposts,
	noticias,
}) => {
	return (
		<div id='sidebar-menu'>
			<ul className='metismenu list-unstyled' id='side-menu'>
				<li className='menu-title'>Main</li>

				<li>
					<Link to='/dashboard' className='waves-effect'>
						<i className='ti-home'></i>
						<span>Dashboard</span>
					</Link>
				</li>

				<li className='menu-title'>Products</li>
				<li>
					<Link to='/#' className='has-arrow waves-effect'>
						<i className='ti-folder'></i>
						<span>Folders</span>
					</Link>
					<ul className='sub-menu' aria-expanded='false'>
						<li>
							<Link to='add-folder'>Add New</Link>
						</li>
						<li>
							<Link to='all-folders'>
								<span className='badge badge-pill badge-primary float-right'>
									{folders.length}
								</span>
								All Folders
							</Link>
						</li>
					</ul>
				</li>
				<li>
					<Link to='/#' className='has-arrow waves-effect'>
						<i className='ti-layout-list-thumb'></i>
						<span>Series</span>
					</Link>
					<ul className='sub-menu' aria-expanded='false'>
						<li>
							<Link to='add-serie'>Add New</Link>
						</li>
						<li>
							<Link to='all-series'>
								<span className='badge badge-pill badge-primary float-right'>
									{series.length}
								</span>
								All Series
							</Link>
						</li>
					</ul>
				</li>
				<li>
					<Link to='/#' className='has-arrow waves-effect'>
						<i className='ti-list'></i>
						<span>Categories</span>
					</Link>
					<ul className='sub-menu' aria-expanded='false'>
						<li>
							<Link to='add-category'>Add New</Link>
						</li>
						<li>
							<Link to='all-categories'>
								<span className='badge badge-pill badge-primary float-right'>
									{categories.length}
								</span>
								All Categories
							</Link>
						</li>
					</ul>
				</li>
				<li>
					<Link to='/#' className='has-arrow waves-effect'>
						<i className='ti-layout-media-overlay-alt'></i>
						<span>Products</span>
					</Link>
					<ul className='sub-menu' aria-expanded='false'>
						<li>
							<Link to='add-product'>Add New</Link>
						</li>
						<li>
							<Link to='all-products'>
								<span className='badge badge-pill badge-primary float-right'>
									{previews.length}
								</span>
								All Products
							</Link>
						</li>
					</ul>
				</li>

				<li className='menu-title'>Content</li>
				<li>
					<Link to='/#' className='has-arrow waves-effect'>
						<i className='ti-file'></i>
						<span>Pages</span>
					</Link>
					<ul className='sub-menu' aria-expanded='false'>
						<li>
							<Link to='add-page'>Add New</Link>
						</li>
						<li>
							<Link to='all-pages'>
								<span className='badge badge-pill badge-primary float-right'>
									{pages.length}
								</span>
								All Pages
							</Link>
						</li>
					</ul>
				</li>
				<li>
					<Link to='/#' className='has-arrow waves-effect'>
						<i className='ti-write'></i>
						<span>News</span>
					</Link>
					<ul className='sub-menu' aria-expanded='false'>
						<li>
							<Link to='add-noticia'>Add New Item</Link>
						</li>
						<li>
							<Link to='all-noticias'>
								<span className='badge badge-pill badge-primary float-right'>
									{noticias.length}
								</span>
								All News
							</Link>
						</li>
					</ul>
				</li>
				<li>
					<Link to='/#' className='has-arrow waves-effect'>
						<i className='ti-write'></i>
						<span>Blog</span>
					</Link>
					<ul className='sub-menu' aria-expanded='false'>
						<li>
							<Link to='add-blogpost'>Add New Post</Link>
						</li>
						<li>
							<Link to='all-blogposts'>
								<span className='badge badge-pill badge-primary float-right'>
									{blogposts.length}
								</span>
								All Blog Posts
							</Link>
						</li>
					</ul>
				</li>

				<li className='menu-title'>Settings</li>

				<li>
					<Link to='/activity' className='waves-effect'>
						<i className='ti-pulse'></i>
						<span>Activity</span>
					</Link>
				</li>
				<li>
					<Link to='/calendar' className='waves-effect'>
						<i className='ti-calendar'></i>
						<span>Calendar</span>
					</Link>
				</li>

				<li className='menu-title'>Components</li>
				<li>
					<Link to='/#' className='has-arrow waves-effect'>
						<i className='ti-package'></i>
						<span>UI Elements</span>
					</Link>
					<ul className='sub-menu' aria-expanded='false'>
						<li>
							<Link to='ui-alerts'>Alerts</Link>
						</li>
						<li>
							<Link to='ui-buttons'>Buttons</Link>
						</li>
						<li>
							<Link to='ui-cards'>Cards</Link>
						</li>
						<li>
							<Link to='ui-carousel'>Carousel</Link>
						</li>
						<li>
							<Link to='ui-dropdowns'>Dropdowns</Link>
						</li>
						<li>
							<Link to='ui-grid'>Grid</Link>
						</li>
						<li>
							<Link to='ui-images'>Images</Link>
						</li>
						<li>
							<Link to='ui-lightbox'>Lightbox</Link>
						</li>
						<li>
							<Link to='ui-modals'>Modals</Link>
						</li>
						<li>
							<Link to='ui-rangeslider'>Range Slider</Link>
						</li>
						<li>
							<Link to='ui-session-timeout'>Session Timeout</Link>
						</li>
						<li>
							<Link to='ui-progressbars'>Progress Bars</Link>
						</li>
						<li>
							<Link to='ui-sweet-alert'>Sweet-Alert</Link>
						</li>
						<li>
							<Link to='ui-tabs-accordions'>Tabs &amp; Accordions</Link>
						</li>
						<li>
							<Link to='ui-typography'>Typography</Link>
						</li>
						<li>
							<Link to='ui-video'>Video</Link>
						</li>
						<li>
							<Link to='ui-general'>General</Link>
						</li>
						<li>
							<Link to='ui-colors'>Colors</Link>
						</li>
						<li>
							<Link to='ui-rating'>Rating</Link>
						</li>
					</ul>
				</li>

				<li>
					<Link to='/#' className='has-arrow waves-effect'>
						<i className='ti-face-smile'></i>
						<span>Icons</span>
					</Link>
					<ul className='sub-menu' aria-expanded='false'>
						<li>
							<Link to='icons-material'>Material Design</Link>
						</li>
						<li>
							<Link to='icons-fontawesome'>Font Awesome</Link>
						</li>
						<li>
							<Link to='icons-ion'>Ion Icons</Link>
						</li>
						<li>
							<Link to='icons-themify'>Themify Icons</Link>
						</li>
						<li>
							<Link to='icons-dripicons'>Dripicons</Link>
						</li>
						<li>
							<Link to='icons-typicons'>Typicons Icons</Link>
						</li>
					</ul>
				</li>

				<li className='menu-title'>Extras</li>

				<li>
					<Link to='/#' className='has-arrow waves-effect'>
						<i className='ti-support'></i>
						<span> Extra Pages </span>
					</Link>
					<ul className='sub-menu' aria-expanded='false'>
						<li>
							<Link to='pages-directory'>Directory</Link>
						</li>
						<li>
							<Link to='pages-gallery'>Gallery</Link>
						</li>

						<li>
							<Link to='pages-faq'>FAQs</Link>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
};

const Sidebar = (props) => {
	const prevType = useRef();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getFolders());
		dispatch(getSeries());
		dispatch(getCategories());
		dispatch(getPreviews());
		dispatch(getBlogposts());
		dispatch(getNoticias());
	}, [dispatch]);

	const Folders = useSelector((state) => state.Folders);
	const { folders } = Folders;
	const Series = useSelector((state) => state.Series);
	const { series } = Series;
	const Categories = useSelector((state) => state.Categories);
	const { categories } = Categories;
	const Products = useSelector((state) => state.Products);
	const { previews } = Products;
	const Pages = useSelector((state) => state.Pages);
	const { pages } = Pages;
	const Blogposts = useSelector((state) => state.Blogposts);
	const { blogposts } = Blogposts;
	const Noticias = useSelector((state) => state.Noticias);
	const { noticias } = Noticias;

	useEffect(() => {
		prevType.current = props.type;

		const initMenu = () => {
			if (props.type !== 'condensed' || props.isMobile) {
				new MetisMenu('#side-menu');

				var matchingMenuItem = null;
				var ul = document.getElementById('side-menu');
				var items = ul.getElementsByTagName('a');
				for (var i = 0; i < items.length; ++i) {
					if (props.location.pathname === items[i].pathname) {
						matchingMenuItem = items[i];
						break;
					}
				}
				if (matchingMenuItem) {
					activateParentDropdown(matchingMenuItem);
				}
			}
		};

		if (props.type !== prevType.current) {
			initMenu();
		}

		return initMenu();
	}, [props.type, props.isMobile, props.location.pathname]);

	const activateParentDropdown = (item) => {
		item.classList.add('mm-active');
		const parent = item.parentElement;

		if (parent) {
			parent.classList.add('mm-active'); // li
			const parent2 = parent.parentElement;

			if (parent2) {
				parent2.classList.add('mm-show');

				const parent3 = parent2.parentElement;

				if (parent3) {
					parent3.classList.add('mm-active'); // li
					parent3.childNodes[0].classList.add('mm-active'); //a
					const parent4 = parent3.parentElement;
					if (parent4) {
						parent4.classList.add('mm-active');
					}
				}
			}
			return false;
		}
		return false;
	};

	return (
		<React.Fragment>
			{props.type !== 'condensed' ? (
				<SimpleBar style={{ maxHeight: '100%' }}>
					<SidebarContent
						folders={folders}
						series={series}
						categories={categories}
						previews={previews}
						pages={pages}
						blogposts={blogposts}
						noticias={noticias}
					/>
				</SimpleBar>
			) : (
				<SidebarContent
					folders={folders}
					series={series}
					categories={categories}
					previews={previews}
					pages={pages}
					blogposts={blogposts}
					noticias={noticias}
				/>
			)}
		</React.Fragment>
	);
};

export default withRouter(Sidebar);
