import PropTypes from 'prop-types';

// SVG 아이콘 가져오기
const icons = import.meta.glob('../assets/*.svg', { eager: true });

const Icon = ({ name, ...props }) => {
  const IconComponent = icons[`../assets/${name}.svg`];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return <img src={IconComponent} alt={name} {...props} />;
};

// PropTypes 정의
Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
