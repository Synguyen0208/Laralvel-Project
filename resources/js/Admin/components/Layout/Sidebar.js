import logo200Image from '../../assets/img/logo/logo.png';
import sidebarBgImage from '../../assets/img/sidebar/sidebar-4.jpg';
import SourceLink from '../../components/SourceLink';
import React from 'react';
import {
  MdAccountCircle,
  MdArrowDropDownCircle,
  MdBorderAll,
  MdBrush,
  MdChromeReaderMode,
  MdDashboard,
  MdExtension,
  MdGroupWork,
  MdInsertChart,
  MdKeyboardArrowDown,
  MdNotificationsActive,
  MdPages,
  MdRadioButtonChecked,
  MdSend,
  MdStar,
  MdTextFields,
  MdViewCarousel,
  MdViewDay,
  MdViewList,
  MdWeb,
  MdWidgets,
  MdComputer,
  MdAccountBox,
  MdGroup,
  MdPictureInPicture,
  MdGroupAdd,
  MdViewModule,
  MdUpdate,
  MdFavorite,
  MdPayment
} from 'react-icons/md';
import { HiCloud } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from '../../utils/bemnames';

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const navComponents = [
  { to: '/admin/buttons', name: 'buttons', exact: false, Icon: MdRadioButtonChecked },
  {
    to: '/admin/button-groups',
    name: 'button groups',
    exact: false,
    Icon: MdGroupWork,
  },
  { to: '/admin/forms', name: 'forms', exact: false, Icon: MdChromeReaderMode },
  { to: '/admin/input-groups', name: 'input groups', exact: false, Icon: MdViewList },
  {
    to: '/admin/dropdowns',
    name: 'dropdowns',
    exact: false,
    Icon: MdArrowDropDownCircle,
  },
  { to: '/admin/badges', name: 'badges', exact: false, Icon: MdStar },
  { to: '/admin/alerts', name: 'alerts', exact: false, Icon: MdNotificationsActive },
  { to: '/admin/progress', name: 'progress', exact: false, Icon: MdBrush },
  { to: '/admin/modals', name: 'modals', exact: false, Icon: MdViewDay },
];
const navManage = [
  { to: '/admin/staff', name: 'staff', exact: false, Icon: MdAccountBox},
  { to: '/admin/partner', name: 'partner', exact: false, Icon: MdGroup},
  { to: '/admin/blog', name: 'blog', exact: false, Icon: MdPictureInPicture},
  { to: '/admin/partner_become', name: 'partner becomes', exact: false, Icon: MdGroupAdd},
  { to: '/admin/key_date', name: 'key dates', exact: false, Icon: MdUpdate},
  { to: '/admin/donator', name: 'Donators', exact: false, Icon: MdFavorite},
  { to: '/admin/transaction', name: 'Transaction donate', exact: false, Icon: MdPayment},
];

const navContents = [
  { to: '/admin/typography', name: 'typography', exact: false, Icon: MdTextFields },
  { to: '/admin/tables', name: 'tables', exact: false, Icon: MdBorderAll },
];
const pageContents = [
  { to: '/admin/login', name: 'login / signup', exact: false, Icon: MdAccountCircle },
  {
    to: '/admin/login-modal',
    name: 'login modal',
    exact: false,
    Icon: MdViewCarousel,
  },
];
const navItems = [
  { to: '/admin', name: 'dashboard', exact: true, Icon: MdDashboard },
  { to: '/admin/cards', name: 'cards', exact: false, Icon: MdWeb },
  { to: '/admin/charts', name: 'charts', exact: false, Icon: MdInsertChart },
  { to: '/admin/widgets', name: 'widgets', exact: false, Icon: MdWidgets },
  { to: '/admin/data', name: 'data', exact: false, Icon: MdViewModule },
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenManage: true,
    isOpenContents: true,
    isOpenPages: true,
  };
  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };
  render() {
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar>
            <SourceLink className="navbar-brand d-flex">
              <img
                src={logo200Image}
                width="40"
                height="30"
                className="pr-2"
                alt=""
              />
              <span className="text-white">
                Admin PNV
              </span>
            </SourceLink>
          </Navbar>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Manage')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdComputer className={bem.e('nav-item-icon')} />
                  <span className=" align-self-start">Manage</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenManage
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenManage}>
              {navManage.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Components')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdExtension className={bem.e('nav-item-icon')} />
                  <span className=" align-self-start">Components</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenComponents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenComponents}>
              {navComponents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Contents')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdSend className={bem.e('nav-item-icon')} />
                  <span className="">Contents</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenContents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenContents}>
              {navContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Pages')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdPages className={bem.e('nav-item-icon')} />
                  <span className="">Pages</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenPages
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenPages}>
              {pageContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
