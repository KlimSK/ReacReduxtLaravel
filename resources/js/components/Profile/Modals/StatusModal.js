import React, {Component} from "react";
import {Button, Icon, Input, Modal, TransitionablePortal} from "semantic-ui-react";
import {SwatchesPicker} from 'react-color';
import {errors, notification} from "../../../src/notifications";
import {addStatus, loadStatusInfo, updateStatus} from "../../../src/statusesFunctions";
import {tableRowClick} from "../inc/tableFunctions";


export default class StatusModal extends Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onColorChange = this.onColorChange.bind(this);
        this.onColorTextChange = this.onColorTextChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.toggleColorPopup = this.toggleColorPopup.bind(this);
        this.toggleColorTextPopup = this.toggleColorTextPopup.bind(this);
    }


    componentDidUpdate() {
        if (this.props.statusInfo.statusModalType === 'edit' &&
            !this.props.statusInfo.statusName) {
            let loadStatusInfoToState = this.props.loadStatusInfo;

            loadStatusInfo(this.props.statusInfo.statusID)
                .then(res => {
                    let status = res[0];
                    loadStatusInfoToState({
                        name: status.name,
                        color: status.color,
                        colorText: status.colorText,
                        order: status.order,
                        locked: status.locked,
                    });
                });
        }
    }

    toggleColorPopup() {
        this.props.updateStatusInfo('colorPopup', !this.props.statusInfo.colorPopup);
    }

    toggleColorTextPopup() {
        this.props.updateStatusInfo('colorTextPopup', !this.props.statusInfo.colorTextPopup);
    }

    onColorChange(color) {
        this.props.updateStatusInfo('color', color.hex);
    }

    onColorTextChange(color) {
        this.props.updateStatusInfo('colorText', color.hex);
    }

    onChange(e, data) {
        if (e.target.name && e.target.value)
            this.props.updateStatusInfo(e.target.name, e.target.value);
        else
            this.props.updateStatusInfo(data.name, data.value);
    }


    onSubmit() {
        let status = this.props.statusInfo;

        let statusInfo = {
            name: status.statusName,
            color: status.color,
            colorText: status.colorText,
        };


        let closeModal = this.props.closeStatusModal;
        let addStatusToState = this.props.addStatusToState;
        let updateStatusInState = this.props.updateStatusInState;

        if (this.props.statusInfo.statusModalType === 'add') {
            addStatus(statusInfo)
                .then(res => {
                    console.log(res);
                    if (res.status !== 244) {
                        closeModal();
                        statusInfo.id = res.data.id;
                        statusInfo.order = res.data.order;
                        addStatusToState(statusInfo);
                        tableRowClick();
                        notification('success', 'checkmark', 'Success!', 'Status ' + statusInfo.name + ' successfully added!');
                    }
                    else {
                        errors(res);
                    }
                });
        }
        else if (this.props.statusInfo.statusModalType === 'edit') {
            updateStatus(statusInfo, this.props.statusInfo.statusID)
                .then(res => {
                    if (res.status !== 244) {
                        closeModal();
                        statusInfo.id = res.data.id;
                        statusInfo.created_at = res.data.date;

                        updateStatusInState(statusInfo);

                        notification('success', 'checkmark', 'Success!', 'Status ' + statusInfo.name + ' successfully updated!');
                    }
                    else {
                        errors(res);
                    }
                });
        }
    }

    render() {
        const popover = {
            position: 'absolute',
            zIndex: '9999',
            top: '20px',
        };
        const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        };


        return (

            <TransitionablePortal open={this.props.modalOpened}
                                  transition={{animation: 'scale', duration: 600}}>
                <Modal size="tiny" closeIcon onClose={this.props.closeStatusModal} open={this.props.modalOpened}
                       className="modal-status" closeOnDimmerClick={true} closeOnEscape={true}>

                    <Modal.Header>
                        <div className="modal-head">
                            <h2 className="modal-title">
                                Status
                            </h2>
                        </div>
                    </Modal.Header>


                    <Modal.Content>
                        <div className="order-container">
                            <div className="ui one column stackable grid container">
                                <div className="column">

                                    <div className="order-setting-row">
                                        <label htmlFor="statusName">
                                            Preview <Icon name='eye'/>
                                        </label>
                                        <div className="order-setting status-preview">
                                            <Button style={
                                                {
                                                    backgroundColor: this.props.statusInfo.color,
                                                    color: this.props.statusInfo.colorText
                                                }
                                            }>
                                                {this.props.statusInfo.statusName}
                                            </Button>
                                        </div>
                                    </div>


                                    <div className="order-setting-row">
                                        <label htmlFor="statusName">
                                            Name <Icon name='tag'/>
                                        </label>
                                        <div className="order-setting">
                                            {this.props.statusInfo.locked ?
                                                <Input
                                                    disabled
                                                    name="statusName"
                                                    value={this.props.statusInfo.statusName}
                                                    onChange={this.onChange}/>
                                                :
                                                <Input
                                                    name="statusName"
                                                    value={this.props.statusInfo.statusName}
                                                    onChange={this.onChange}/>
                                            }


                                        </div>
                                    </div>

                                    <div className="order-setting-row">
                                        <label htmlFor="color">
                                            Color <Icon name='eye dropper'/>
                                        </label>
                                        <div className="order-setting">
                                            <Button size="tiny" onClick={this.toggleColorPopup}
                                                    style={{
                                                        width: "20px",
                                                        height: "15px",
                                                        border: "1px solid black",
                                                        backgroundColor: this.props.statusInfo.color
                                                    }}
                                            />
                                            {this.props.statusInfo.colorPopup ? <div style={popover}>
                                                <div style={cover} onClick={this.toggleColorPopup}/>
                                                <SwatchesPicker
                                                    color={this.props.statusInfo.color}
                                                    onChange={this.onColorChange}
                                                />
                                            </div> : null}
                                        </div>
                                    </div>


                                    <div className="order-setting-row">
                                        <label htmlFor="color">
                                            Text color <Icon name='font'/>
                                        </label>
                                        <div className="order-setting">
                                            <Button size="tiny" onClick={this.toggleColorTextPopup}
                                                    style={{
                                                        width: "20px",
                                                        height: "15px",
                                                        border: "1px solid black",
                                                        backgroundColor: this.props.statusInfo.colorText
                                                    }}
                                            />
                                            {this.props.statusInfo.colorTextPopup ? <div style={popover}>
                                                <div style={cover} onClick={this.toggleColorTextPopup}/>
                                                <SwatchesPicker
                                                    color={this.props.statusInfo.colorText}
                                                    onChange={this.onColorTextChange}
                                                />
                                            </div> : null}
                                        </div>
                                    </div>


                                    <div className="column pt-3 text-align-center">
                                        <button
                                            onClick={this.onSubmit}
                                            className="ui primary button">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Content>
                </Modal>
            </TransitionablePortal>
        )
    }
}