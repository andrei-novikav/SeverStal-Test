import React from "react";

type menuItem = {
    label: string,
    value: string
}
type Props = {
    menuItems: menuItem[],
    activeFilter: string,
    setActiveFilter: (value: string) => void,
}

const Buttons = ({ setActiveFilter, activeFilter, menuItems }: Props) => {
    return (
        <>
            <div className="filterWrapper">
                {menuItems.map(({value, label}, id) => {
                    return (
                        <button
                            className={`filterButton ${activeFilter === value && "activeFilterButton"}`}
                            onClick={() => setActiveFilter(value)}
                            key={id}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>
        </>
    );
};

export default Buttons;
