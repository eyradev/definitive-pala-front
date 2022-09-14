import Image from 'next/image';
import logoCart from '../../../../public/images/cart.svg';
import logoIcon from '../../../../public/images/logoCart.svg';
import logoFull from '../../../../public/images/logoFull.svg';
import logoHorizontal from '../../../../public/images/logoText.svg';
import logoTypography from '../../../../public/images/logoTypography.svg';

interface Props {
  variant: 'horizontal' | 'full' | 'icon' | 'typography' | 'cart';
  width?: number;
  height?: number;
}

export default function Logo({ variant, width, height }: Props): JSX.Element {
  let img = logoIcon;

  switch (variant) {
    case 'horizontal':
      img = logoHorizontal;
      break;
    case 'full':
      img = logoFull;
      break;
    case 'typography':
      img = logoTypography;
      break;
    case 'cart':
      img = logoCart;
  }

  return (
    <div>
      <Image src={img} alt="palante" height={height} width={width} />
    </div>
  );
}
