import React, { Fragment, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { useWindowWidth } from '@react-hook/window-size';

import transformerLogoLight from '../images/transformer-logo-light.svg';
import transformerLogoDark from '../images/transformer-logo-dark.svg';

const Header = ({ location, siteTitle }) => {
  console.log('location:', location);
  const [menuIsExpanded, setMenuIsExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const windowWidth = useWindowWidth();
  const isWorkPage = location.pathname.includes('/work/');

  const data = useStaticQuery(graphql`
    query DefaultNavQuery {
      allWpMenu {
        edges {
          node {
            menuItems {
              nodes {
                label
                path
              }
            }
          }
        }
      }
    }
  `);

  const toggleMenu = () => {
    if (!menuIsExpanded) {
      setMenuIsExpanded(true);
      setIsOpen(true);
    } else {
      setIsOpen(false);
      setTimeout(() => setMenuIsExpanded(false), 500);
    }
  };

  useEffect(() => {
    const handleEscPress = (event) => {
      if ((event.key === 'Escape' || event.keyCode === 27) && menuIsExpanded) {
        setIsOpen(false);
        setTimeout(() => setMenuIsExpanded(false), 500);
      }
    };

    if (menuIsExpanded && menuRef.current) menuRef.current.focus();

    if (windowWidth > 767) {
      setMenuIsExpanded(false);
      setIsOpen(false);
    }

    // close menu dropdown on ESC
    window.addEventListener('keydown', handleEscPress);

    return () => {
      window.removeEventListener('keydown', handleEscPress);
    };
  }, [menuIsExpanded, windowWidth]);

  return (
    <Fragment>
      <nav
        className={`nav nav--small ${isWorkPage ? 'nav--light' : ''} ${
          isOpen ? 'is-open' : ''
        }`}
        role="navigation"
        id="nav-list-small"
        hidden={windowWidth > 767 ? false : !menuIsExpanded}
      >
        <ul className="nav__list">
          {data.allWpMenu.edges[0].node.menuItems.nodes.map((item) => (
            <li className="nav__item" key={item.path}>
              <Link
                to={item.path}
                className="nav__link"
                ref={
                  item.path === location && location.pathname ? menuRef : null
                }
                tabIndex={menuIsExpanded ? 0 : -1}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <header
        className={`container header ${isWorkPage ? 'header--light' : ''} ${
          isOpen ? 'is-open' : ''
        }`}
        role="banner"
      >
        <button
          className="header__menu-button"
          type="button"
          aria-label="open site navigation"
          aria-controls="nav-list"
          aria-expanded={menuIsExpanded}
          onClick={toggleMenu}
        >
          Menu
        </button>

        <div className="header__logo-wrapper">
          <Link className="header__logo-link" to="/">
            <h1 className="visuallyhidden">{siteTitle}</h1>
            <img
              className="header__logo"
              src={isWorkPage ? transformerLogoLight : transformerLogoDark}
              alt="Transformer logo"
            />
          </Link>
        </div>

        <nav
          className={`nav nav--large ${isWorkPage ? 'nav--light' : ''} ${
            isOpen ? 'is-open' : ''
          }`}
          role="navigation"
          id="nav-list"
          hidden={windowWidth > 767 ? false : !menuIsExpanded}
        >
          <ul className="nav__list">
            {data.allWpMenu.edges[0].node.menuItems.nodes.map((item) => (
              <li className="nav__item" key={item.path}>
                <Link
                  to={item.path}
                  className="nav__link"
                  activeClassName="active"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
