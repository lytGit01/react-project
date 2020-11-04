import * as React from 'react';
import Tree from '../../materialUi/tree';


class Aside extends React.Component {
    constructor (arg :any) {
        super(arg)
    }
    public render () {
        return (
            <aside className='Aside'>
                <Tree/>
            </aside>
        )
    }
}

export default Aside;