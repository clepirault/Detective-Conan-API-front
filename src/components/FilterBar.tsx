import React, { ReactElement } from 'react';

interface Props {
  type: string;
  name: string;
  firstItem: string;
  secondItem: string;
  thirdItem: string;
  firstValue: string;
  secondValue: string;
  thirdValue: string;
  handleGetCharacterByRole: any;
  allItems: string;
}

function FilterBar({
  type,
  name,
  firstItem,
  secondItem,
  thirdItem,
  firstValue,
  secondValue,
  thirdValue,
  handleGetCharacterByRole,
  allItems,
}: Props): ReactElement {
  return (
    <div>
      <form>
        <label htmlFor={allItems}>
          <input
            type={type}
            name={name}
            id={firstItem}
            value=''
            onChange={handleGetCharacterByRole}
          />
          <span>{allItems}</span>
        </label>
        <label htmlFor={firstItem}>
          <input
            type={type}
            name={name}
            id={firstItem}
            value={firstValue}
            onChange={handleGetCharacterByRole}
          />
          <span>{firstItem}</span>
        </label>
        <label htmlFor={secondItem}>
          <input
            type={type}
            name={name}
            id={secondItem}
            value={secondValue}
            onChange={handleGetCharacterByRole}
          />
          <span>{secondItem}</span>
        </label>
        <label htmlFor={thirdItem}>
          <input
            type={type}
            name={name}
            id={thirdItem}
            value={thirdValue}
            onChange={handleGetCharacterByRole}
          />
          <span>{thirdItem}</span>
        </label>
      </form>
    </div>
  );
}

export default FilterBar;
