import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { CartObjType } from '../../../Pages/Cart/Cart';
import style from './ImagesGallery.module.scss';
import OutOfStock from '../../../HOCs/OutOfStock/OutOfStock';
const ImagesGallery = ({ CartObj }: { CartObj: CartObjType }) => {
  const [ImageIndex, setImageIndex] = useState(0);
  return (
    <div className={style.box}>
      <OutOfStock inStock={CartObj.inStock}>
        <img
          className={style.Image}
          src={CartObj.gallery[ImageIndex]}
          alt={CartObj.name}
        />
      </OutOfStock>
      <div className={style.Arrows}>
        <ArrowBackIosIcon
          className={style.Arrow}
          onClick={() => {
            if (CartObj.gallery.length === 1) return;
            if (ImageIndex === 0) {
              setImageIndex(CartObj.gallery.length - 1);
            } else {
              setImageIndex(ImageIndex - 1);
            }
          }}
        />
        <ArrowForwardIosIcon
          className={style.Arrow}
          onClick={() => {
            if (CartObj.gallery.length === 1) return;
            if (ImageIndex === CartObj.gallery.length - 1) {
              setImageIndex(0);
            } else {
              setImageIndex(ImageIndex + 1);
            }
          }}
        />
      </div>
    </div>
  );
};

export default ImagesGallery;
