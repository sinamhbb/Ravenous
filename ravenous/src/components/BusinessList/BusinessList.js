import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';


class BusinessList extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props.businesses)
    }
        
    render(){
        return(
            <div className="BusinessList">
                {
                this.props.businesses.map((business) => {return <Business business={business} key={business.id}/>})
                }
            </div>
        )
    }
};

export default BusinessList;