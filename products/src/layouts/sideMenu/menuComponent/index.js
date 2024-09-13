import React from 'react';
import CustomizedAccordions from './accordian';
import BasicMenu from './basicMenu';

const MenuComponent = ({ items, open }) => {
  return (
    <div>
      {open ? (
        <CustomizedAccordions items={items} open={open} />
      ) : (
        <BasicMenu items={items} open={open} />
      )}
    </div>
  );
};

export default MenuComponent;
