import React from 'react'

import { Card } from 'antd'
import { Link } from 'react-router-dom';

const { Meta } = Card;

const MyCard = ( ) => {


    return (
        <Link to={"/details/" + props.id} >
            <Card
                style={{
                    width: 240,
                }}}
            >
                <Meta title={props.name.charAt(0).toUpperCase() + props.name.slice(1)} description={props.bodyPart + ", " + props.target} />
            </Card>
        </Link>
    )
}

export default MyCard