import React, { Component } from 'react';
import NewBottom from'./new_bottom';
import NewTop from './new_top';
class New extends Component {
    render() {
        return (
            
            <div className="container-news">
                <section id="new" className="new">
                <NewTop/>
                <NewBottom/>
            </section>
                
            </div>
            
           
       
            
        );
    }
}

export default New;

