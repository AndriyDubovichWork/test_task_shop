import React from 'react';
import { Radio } from '@mui/material';
import { attributeItemType } from '../../../Pages/Category/Category/Category';
import OutlinedButton from '../OutlinedButton/OutlinedButton';

type AtributeItemProps = {
  items: attributeItemType[];
};

const AtributeItem = ({ items }: AtributeItemProps) => {
  return (
    <div>
      {items.map((item: attributeItemType) => {
        return (
          <>
            <Radio
              checkedIcon={
                <OutlinedButton
                  sx={{ backgroundColor: '#000', color: '#fff !important' }}
                >
                  {item.displayValue}
                </OutlinedButton>
              }
              icon={<OutlinedButton>{item.displayValue}</OutlinedButton>}
              key={item.id}
              value={item.value}
              inputProps={{
                'aria-label': 'RadioA',
              }}
            />
          </>
        );
      })}
    </div>
  );
};

export default AtributeItem;
