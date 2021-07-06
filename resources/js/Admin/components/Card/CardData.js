import React from 'react';
import PropTypes from '../../utils/propTypes';

import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';

import Todos, { propTypes as TodosPropTypes } from '../../components/Todos';
import backgroundImage from '../../assets/img/bg/background_1920-2.jpg';
import Col from 'reactstrap/lib/Col';
class CardData extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Col md={6} sm={12}>
                <Card>
                    <div className="position-relative">
                        <CardImg src={backgroundImage} />
                        <CardImgOverlay className="bg-dark" style={{ opacity: 0.2 }}>
                            <CardTitle className="text-white">ỵytyt</CardTitle>
                            <CardText className="text-white">hgjhgjhg</CardText>
                        </CardImgOverlay>
                    </div>
                    
                </Card>
            </Col>
        );
    }
}

export default CardData;