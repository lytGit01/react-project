import * as React from 'react';
import './index.scss'
import Aside from '../aside';
import Section from '../section';

class Content extends React.Component {
    constructor(props: any) {
        super(props);
    }
    public render () {
        return (
            <div className='Content'>
                <Aside/>
                <Section/>      
            </div>
        );
    }
}

export default Content;