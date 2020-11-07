// import React from 'react';
// import PropTypes from 'prop-types';

// const NavLink = ({ current, style, path, title }) => (
//   <li className={`${current} nav-item`}>
//     <a className='nav-link' style={style} href={path}>
//       {title}
//     </a>
//   </li>
// );

// NavLink.propTypes = {
//   current: PropTypes.string.isRequired,
//   path: PropTypes.string.isRequired,
//   style: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// };

// const Header = ({ data }) => {
//   const { store } = data;
//   const { style } = store.nav;
//   return (
//     <nav style={style.nav} className='navbar navbar-expand-lg sticky-top'>
//       {store.logo ? (
//         <a className='navbar-brand text-light' href='/'>
//           <img
//             src={store.logo}
//             width='30'
//             height='30'
//             className='d-inline-block align-top'
//             alt=''
//             loading='lazy'
//           />
//           {}
//         </a>
//       ) : (
//         <a className='navbar-brand text-light' href='/'>
//           {store.storeName}
//         </a>
//       )}
//       <button
//         className='navbar-toggler'
//         type='button'
//         data-toggle='collapse'
//         data-target='#navbarNav'
//         aria-controls='navbarNav'
//         aria-expanded='false'
//         aria-label='Toggle navigation'
//       >
//         <span className='navbar-toggler-icon' />
//       </button>
//       <div className='collapse navbar-collapse' id='navbarNav'>
//         <ul className='navbar-nav'>
//           {store.nav.links.map((i) => (
//             <NavLink
//               key={i.path}
//               title={i.title}
//               path={i.path}
//               style={style.link}
//             />
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// // Header.propTypes = {
// //   data: PropTypes.shape.isRequired({

// //   }),
// // };

// const Footer = () => {
//   const date = new Date();
//   const year = date.getFullYear();

//   return (
//     <div className='container mt-5 mb-4 dark_mode'>
//       <ul className='nav justify-content-center'>
//         <li className='nav-item'>
//           <a className='nav-link text-light' href='/'>
//             Contact
//           </a>
//         </li>
//         <li className='nav-item'>
//           <a className='nav-link text-light' href='/FAQ'>
//             FAQ
//           </a>
//         </li>
//       </ul>
//       <div className='d-flex justify-content-center'>
//         <span style={{ fontSize: '.75em' }} className='text-light'>
//           {year}
//         </span>
//       </div>
//     </div>
//   );
// };

// export { Header, Footer };
