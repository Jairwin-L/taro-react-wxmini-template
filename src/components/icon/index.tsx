import { IconFont } from '@nutui/icons-react-taro';

interface IconProps {
  name: string;
  color?: string;
  size?: string;
}

export default function Icon(props: IconProps) {
  const { name = '', color = '', size = 20 } = props;
  if (!name) return null;
  return (
    <IconFont color={color} size={size} fontClassName="wxmini" classPrefix="wxmini" name={name} />
  );
}
