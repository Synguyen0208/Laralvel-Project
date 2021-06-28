import React from 'react';
import PropTypes from '../../utils/propTypes';

import { Card, CardText, CardTitle, Progress,Badge,ListGroupItem } from 'reactstrap';
import Typography from '../Typography';
import {MdShowChart} from 'react-icons/md';
import { getColor } from '../../utils/colors';
const NumberWidget = ({
  title,
  subtitle,
  number,
  color,
  isIncrease,
  progress: { value, label, persen },
  ...restProps
}) => {
  const primaryColor = getColor('primary');
  return (
    <Card body {...restProps}>
      <div className="d-flex justify-content-between">
        <CardText tag="div">
          <Typography className="mb-0">
            <strong>{title}</strong>
          </Typography>
          <Typography className="mb-0 text-muted small">{subtitle}</Typography>
        </CardText>
        <CardTitle className={`text-${color}`}>{number}</CardTitle>
      </div>
      <Progress value={value} color={color} style={{ height: '8px' }} />
      {isIncrease==true&&
      <ListGroupItem>
      <MdShowChart size={25} color={primaryColor} /> Increase{' '}
      <Badge color="secondary">{persen}</Badge>
    </ListGroupItem>
      }
      
      <CardText tag="div" className="d-flex justify-content-between">
        <Typography tag="span" className="text-left text-muted small">
          {label}
        </Typography>
        <Typography tag="span" className="text-right text-muted small">
          {/* {value} */}
        </Typography>
      </CardText>
    </Card>
  );
};

NumberWidget.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  number: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'light',
    'dark',
  ]),
  progress: PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string,
  }),
};

NumberWidget.defaultProps = {
  title: '',
  subtitle: '',
  number: 0,
  color: 'primary',
  progress: {
    value: 0,
    label: '',
  },
};

export default NumberWidget;
