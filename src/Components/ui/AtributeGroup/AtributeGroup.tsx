import React from 'react';
import { RadioGroup } from '@mui/material';
import AtributeItem from './../AtributeItem/AtributeItem';
import { CartObjType } from '../../../Pages/Cart/Cart';
import style from './AtributeGroup.module.scss';

const AtributeGroup = ({ CartObj }: { CartObj: CartObjType }) => {
  return (
    <div>
      {CartObj.attributes.map((atribute) => {
        return (
          <div key={atribute.id}>
            <h1 className={style.AtributeName}>{atribute.name}:</h1>
            <RadioGroup
              row
              key={atribute.id}
              defaultValue={atribute.items[0].value}
            >
              <AtributeItem atribute={atribute} />
            </RadioGroup>
          </div>
        );
      })}
    </div>
  );
};

export default AtributeGroup;
