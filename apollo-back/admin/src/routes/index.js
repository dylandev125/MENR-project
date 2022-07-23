import React from 'react';
import { Redirect } from 'react-router-dom';

// Pages Component
import Activity from '../pages/Administration/Activity';
import AllFolders from '../pages/Products/Folders/AllFolders';
import AddFolder from '../pages/Products/Folders/AddFolder';
import AllSeries from '../pages/Products/Series/AllSeries';
import AddSerie from '../pages/Products/Series/AddSerie';
import AllCategories from '../pages/Products/Categories/AllCategories';
import AddCategory from '../pages/Products/Categories/AddCategory';
import AllProducts from '../pages/Products/Products/AllProducts';
import AddProduct from '../pages/Products/Products/AddProduct';
import AllNoticias from '../pages/Noticias/AllNoticias';
import AddNoticia from '../pages/Noticias/AddNoticia';

// Post Types
import AllPages from '../pages/Pages/AllPages';
import AddPage from '../pages/Pages/AddPage';
import AllBlogposts from '../pages/Blogposts/AllBlogposts';
import AddBlogpost from '../pages/Blogposts/AddBlogpost';

// Authentication related pages
import Login from '../pages/Authentication/Login';
import Register from '../pages/Authentication/Register';
import ForgetPwd from '../pages/Authentication/FogetPassword';
import NotApproved from '../pages/Authentication/NotApproved';
import ChangePassword from '../pages/Authentication/ChangePassword';

import Dashboard from '../pages/Dashboard';

import Calendar from '../pages/Apps/Calendar/index';

import EmailInbox from '../pages/Apps/Email/inbox';
import EmailRead from '../pages/Apps/Email/read';
import EmailCompose from '../pages/Apps/Email/compose';

import Emailtemplatealert from '../pages/Apps/EmailTemplate/email-template-alert';
import Emailtemplatebasic from '../pages/Apps/EmailTemplate/email-template-basic';
import Emailtemplatebilling from '../pages/Apps/EmailTemplate/email-template-billing';

// UI Pages
import UiSweetAlert from '../pages/UI/UiSweetAlert';
import UiAlerts from '../pages/UI/Alerts';
import UiButtons from '../pages/UI/Buttons';
import UiCards from '../pages/UI/Cards';
import UiCarousel from '../pages/UI/Carousel';
import UiDropdown from '../pages/UI/Dropdown';
import UiGrid from '../pages/UI/Grid';
import UiImages from '../pages/UI/Images';
import UiLightbox from '../pages/UI/Lightbox';
import UiModals from '../pages/UI/Modals';
import UiRangeSlider from '../pages/UI/RangeSlider';
import UiSessionTimeout from '../pages/UI/SessionTimeout';
import Progressbar from '../pages/UI/Progressbar';
import TabsAccordion from '../pages/UI/TabsAccordion';
import Typography from '../pages/UI/Typography';
import Video from '../pages/UI/Video';
import General from '../pages/UI/General';
import Colors from '../pages/UI/Colors';
import Rating from '../pages/UI/Rating';

//iCons
import IconDripicons from '../pages/Icons/IconDripicons';
import IconFontAwesome from '../pages/Icons/IconFontAwesome';
import IconIon from '../pages/Icons/IconIon';
import IconMaterial from '../pages/Icons/IconMaterial';
import IconThemify from '../pages/Icons/IconThemify';
import IconTypicons from '../pages/Icons/IconTypicons';

// Extra Pages
import PagesTimeline from '../pages/ExtraPages/PagesTimeline';
import PagesDirectory from '../pages/ExtraPages/PagesDirectory';
import PagesPricing from '../pages/ExtraPages/PagesPricing';
import PagesGallery from '../pages/ExtraPages/PagesGallery';
import PagesFaq from '../pages/ExtraPages/PagesFaq';

const authProtectedRoutes = [
	// Administration
	{ path: '/activity', component: Activity },
	{ path: '/calendar', component: Calendar },

	// Clients
	{ path: '/all-folders', component: AllFolders },
	{ path: '/add-folder', component: AddFolder },
	{ path: '/all-series', component: AllSeries },
	{ path: '/add-serie', component: AddSerie },
	{ path: '/all-categories', component: AllCategories },
	{ path: '/add-category', component: AddCategory },
	{ path: '/all-products', component: AllProducts },
	{ path: '/add-product', component: AddProduct },

	// Post Types
	{ path: '/all-pages', component: AllPages },
	{ path: '/add-page', component: AddPage },
	{ path: '/all-blogposts', component: AllBlogposts },
	{ path: '/add-blogpost', component: AddBlogpost },
	{ path: '/all-noticias', component: AllNoticias },
	{ path: '/add-noticia', component: AddNoticia },

	// Email & Email Templates
	{ path: '/email-inbox', component: EmailInbox },
	{ path: '/email-read', component: EmailRead },
	{ path: '/email-compose', component: EmailCompose },

	// Email Template
	{ path: '/email-template-alert', component: Emailtemplatealert },
	{ path: '/email-template-basic', component: Emailtemplatebasic },
	{ path: '/email-template-billing', component: Emailtemplatebilling },

	// Ui Pages
	{ path: '/ui-sweet-alert', component: UiSweetAlert },
	{ path: '/ui-alerts', component: UiAlerts },
	{ path: '/ui-buttons', component: UiButtons },
	{ path: '/ui-cards', component: UiCards },
	{ path: '/ui-carousel', component: UiCarousel },
	{ path: '/ui-dropdowns', component: UiDropdown },
	{ path: '/ui-grid', component: UiGrid },
	{ path: '/ui-images', component: UiImages },
	{ path: '/ui-lightbox', component: UiLightbox },
	{ path: '/ui-modals', component: UiModals },
	{ path: '/ui-rangeslider', component: UiRangeSlider },
	{ path: '/ui-session-timeout', component: UiSessionTimeout },
	{ path: '/ui-progressbars', component: Progressbar },
	{ path: '/ui-tabs-accordions', component: TabsAccordion },
	{ path: '/ui-typography', component: Typography },
	{ path: '/ui-video', component: Video },
	{ path: '/ui-general', component: General },
	{ path: '/ui-colors', component: Colors },
	{ path: '/ui-rating', component: Rating },

	//Icons
	{ path: '/icons-dripicons', component: IconDripicons },
	{ path: '/icons-fontawesome', component: IconFontAwesome },
	{ path: '/icons-ion', component: IconIon },
	{ path: '/icons-material', component: IconMaterial },
	{ path: '/icons-themify', component: IconThemify },
	{ path: '/icons-typicons', component: IconTypicons },

	// Extra Pages
	{ path: '/pages-timeline', component: PagesTimeline },
	{ path: '/pages-directory', component: PagesDirectory },
	{ path: '/pages-pricing', component: PagesPricing },
	{ path: '/pages-gallery', component: PagesGallery },
	{ path: '/pages-faq', component: PagesFaq },

	{ path: '/dashboard', component: Dashboard },

	{ path: '/', exact: true, component: () => <Redirect to='/dashboard' /> },
];

const publicRoutes = [
	{ path: '/login', component: Login },
	{ path: '/forget-password', component: ForgetPwd },
	{ path: '/pages-register', component: Register },
	{ path: '/not-approved', component: NotApproved },
	{ path: '/change-password', component: ChangePassword },
];

export { authProtectedRoutes, publicRoutes };
