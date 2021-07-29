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
}

function FilterBar({ type, name, firstItem, secondItem, thirdItem, firstValue, secondValue, thirdValue, handleGetCharacterByRole }: Props): ReactElement {
  return (
    <div>
      <form>
        <label htmlFor={firstItem}>
          <span>{firstItem}</span>
          <input type={type} name={name} id={firstItem} value={firstValue} onChange={handleGetCharacterByRole} />
        </label>
        <label htmlFor={secondItem}>
          <span>{secondItem}</span>
          <input type={type} name={name} id={secondItem} value={secondValue} onChange={handleGetCharacterByRole} />
        </label>
        <label htmlFor={thirdItem}>
          <span>{thirdItem}</span>
          <input type={type} name={name} id={thirdItem} value={thirdValue} onChange={handleGetCharacterByRole} />
        </label>
      </form>
    </div>
  )
}

export default FilterBar;
