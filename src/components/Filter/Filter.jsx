import css from './filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <div className={css.filterWrapper}>
      <input
        className={css.filter}
        name="filter"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="search"
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
