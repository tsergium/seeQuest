import React, {Component} from "react";
import {browserHistory} from "react-router";

class Start extends Component {
    constructor (props) {
        super(props);
        this.state = { modalActive: false }
    }

    openModal () {
        this.setState({ modalActive: true })
    }

    closeModal () {
        this.setState({ modalActive: false })
    }

    redirectTo() {
        browserHistory.push('/map');
    }
    render() {
        return(
            <div>
            <div className="startScreen" onClick={this.openModal.bind(this)}>
            </div>
            <div className="modal-windows">
                {this.state.modalActive && (
                    <div className='modal-dialog'>
                        <img className="cat-modal-details" src="/questSidebarHeaderCat.png" />
                        <a className="modal-close" title='Close' onClick={this.closeModal.bind(this)}>X</a>
                        <p>Name: Pint</p>
                        <p>4 years old, boy cat. He might be close to good craft beer places because he loves beer!</p>
                        <p>(60min)</p>
                        <a className="to-map-button" href="#" onClick={this.redirectTo.bind(this)}></a>
                    </div>
                )}
            </div>
        </div>
        );
    }
}

export default Start;