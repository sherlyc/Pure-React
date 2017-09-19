import React from 'react'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'
import './index.css'

function Nav({ children }) {
  // Verify that all children are NavItem components
  React.Children.forEach(children, child => {
    if(child.type !== NavItem) {
      throw new Error("Nav component only accepts NavItems as children");
    }
  });

  // Insert a separator between every NavItem
  let items = React.Children.toArray(children);
  for(let i = items.length - 1; i >= 1; i--) {
    items.splice(i, 0,
      <span key={i} className='separator'>|</span>
    );
  }

  return (
    <div>{items}</div>
  );
}
Nav.propTypes = {
  children: PropTypes.node.isRequired
};

// NavItem simply wraps an anchor tag, but it could
// be more interesting (with an icon, etc) if you wanted
function NavItem({ url, children }) {
  return (
    <a href={url}>{children}</a>
  );
}
NavItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]).isRequired
};

function Test() {
  return (
    <Nav>
      <NavItem url='http://google.com'>Google</NavItem>
      <NavItem url='http://twitter.com'>Twitter</NavItem>
      <NavItem url='http://daveceddia.com'>daveceddia.com</NavItem>
    </Nav>
  );
}

ReactDOM.render(<Test/>, document.querySelector('#root'));

