import React from 'react';
import { Radio } from '@mui/material';
import {
  atributesType,
  attributeItemType,
} from '../../../Pages/Category/Category/Category';
import OutlinedButton from '../OutlinedButton/OutlinedButton';

type AtributeItemProps = {
  atribute: atributesType;
};

const AtributeItem = ({ atribute }: AtributeItemProps) => {
  return (
    <>
      {atribute.items.map((item: attributeItemType) => {
        return (
          <div key={item.id}>
            <Radio
              checkedIcon={
                <OutlinedButton
                  sx={{
                    width: atribute.name === 'Color' ? '20px !important' : '',
                    height: atribute.name === 'Color' ? '20px !important' : '',
                    backgroundColor:
                      atribute.name !== 'Color' ? '#000' : item.value,
                    border:
                      atribute.name !== 'Color'
                        ? '2px solid #000'
                        : '3px solid #5aee87 !important',

                    color: '#fff !important',
                  }}
                >
                  {atribute.name !== 'Color' ? item.displayValue : ''}
                </OutlinedButton>
              }
              icon={
                <OutlinedButton
                  sx={{
                    width: atribute.name === 'Color' ? '20px !important' : '',
                    height: atribute.name === 'Color' ? '20px !important' : '',
                    backgroundColor:
                      atribute.name !== 'Color' ? '#fff' : item.value,
                  }}
                >
                  {atribute.name !== 'Color' ? item.displayValue : ''}
                </OutlinedButton>
              }
              key={item.id}
              value={item.value}
              inputProps={{
                'aria-label': 'RadioA',
              }}
            />
          </div>
        );
      })}
    </>
  );
};

export default AtributeItem;
