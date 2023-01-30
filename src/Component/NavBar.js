import React from 'react';

const NavBar = ({ filterItem, menuList }) => {
    return (
        <nav className="navbar">
            <div menuList="btn-group">
                {menuList.map((item) => {
                    return (
                        <button className="btn-group__item" onClick={() => filterItem(item)}>{item}</button>
                    )
                })}
            </div>
        </nav>
    )

}

export default NavBar;