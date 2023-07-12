import React, { useState } from 'react';

const TreeView = ({ data }) => {
  const [expandedItems, setExpandedItems] = useState([]);

  const handleItemsClick = (itemId) => {
    if (expandedItems.includes(itemId)) {
      setExpandedItems(expandedItems.filter((id) => id !== itemId));
    } else {
      setExpandedItems([...expandedItems, itemId]);
    }
  };

  const showItems = (items) => {
    const isExpandable = Array.isArray(items.children) && items.children.length > 0;
    const isExpanded = expandedItems.includes(items.id);

    return (
      <ul key={items.id}>
        <li
          onClick={() => handleItemsClick(items.id)}
          style={{ cursor: isExpandable ? 'pointer' : 'default' }}
        >
          {isExpandable ? (isExpanded ? '< ' :  '> ') : ''}
          {items.name}
        </li>
        {isExpandable && isExpanded && items.children.map(showItems)}
      </ul>
    );
  };

  return <div>{data.map(showItems)}</div>;
};

export default TreeView;
