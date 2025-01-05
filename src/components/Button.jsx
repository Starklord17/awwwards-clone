import clsx from 'clsx';
import PropTypes from 'prop-types';

/**
 * Button component
 * @param {Object} props - Component props
 * @param {string} props.id - The id of the button
 * @param {string} props.title - The title of the button
 * @param {React.ReactNode} [props.rightIcon] - The icon to display on the right side of the button
 * @param {React.ReactNode} [props.leftIcon] - The icon to display on the left side of the button
 * @param {string} [props.containerClass] - Additional class names for the button container
 */
const Button = ({ id = '', title = '', rightIcon = null, leftIcon = null, containerClass = '' }) => {
  const buttonClassNames = "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black";
  return (
    <button
      id={id}
      className={clsx(buttonClassNames, containerClass)}
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>

      {rightIcon}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  rightIcon: PropTypes.node,
  leftIcon: PropTypes.node,
  containerClass: PropTypes.string,
};

export default Button;
