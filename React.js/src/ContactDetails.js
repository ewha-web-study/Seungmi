import React from 'react';

export default class ContactDetails extends React.Component {
      constructor(props){
         super(props);

         this.state = {
             isEdit: false
         };

         this.handleToggle = this.handleToggle.bind(this);
     }

    handleToggle() {
        this.setState({
            isEdit: !this.state.isEdit
        });
    }

    render(){

        // 선택되었을 때
        const details = (
            <div>
                <p>{ this.props.contact.name }</p>
                <p>{ this.props.contact.phone }</p>
            </div>
        );

        // 아무것도 선택되지 않았을 때
        const blank = (
            <div> Nothing is Selected </div>
        );

        return(
            <div>
                <h2>Details</h2>
                { this.props.isSelected ? details : blank }
                <button onClick ={this.props.onRemove}> Remove </button>
                <button> Edit</button>
             </div>
        );
    }
}

ContactDetails.defaultProps = {
    contact: {
        name: "",
        phone: ""
    }
}
