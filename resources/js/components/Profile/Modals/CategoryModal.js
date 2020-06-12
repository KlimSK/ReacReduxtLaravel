import React, {Component} from "react";
import {Input, Modal, TransitionablePortal} from "semantic-ui-react";
import {errors, notification} from "../../../src/notifications";
import {addCategory, loadCategoryInfo, updateCategory} from "../../../src/categoriesFunctions";


export default class CategoryModal extends Component {

    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    

    componentDidUpdate(){

        if (this.props.categoryInfo.categoryModalType === 'edit' &&
            !this.props.categoryInfo.categoryName) {

            let loadCategoryInfoToState = this.props.loadCategoryInfo;

            loadCategoryInfo(this.props.categoryInfo.categoryID)
                .then(res => {
                    let category = res[0];
                    loadCategoryInfoToState({
                        name: category.name,
                        date: category.created_at.split('T')[0]
                    });
                });
        }
    }

    onChange(e, data) {
        if (e.target.name && e.target.value)
            this.props.updateCategoryInfo(e.target.name, e.target.value);
        else
            this.props.updateCategoryInfo(data.name, data.value);
    }


    onSubmit() {
        let category = this.props.categoryInfo;

        let categoryInfo = {
            name: category.categoryName,
        };


        let closeModal = this.props.closeCategoryModal;
        let addCategoryToState = this.props.addCategoryToState;
        let updateCategoryInState = this.props.updateCategoryInState;

        if (this.props.categoryInfo.categoryModalType === 'add') {
            addCategory(categoryInfo)
                .then(res => {
                    if (res.status !== 244) {
                        closeModal();
                        categoryInfo.id = res.data.id;
                        categoryInfo.created_at = res.data.date;
                        addCategoryToState(categoryInfo);
                        notification('success', 'checkmark', 'Success!', 'Category ' + categoryInfo.name + ' successfully added!');
                    }
                    else {
                        errors(res);
                    }
                });
        }
        else if (this.props.categoryInfo.categoryModalType === 'edit') {
            updateCategory(categoryInfo, this.props.categoryInfo.categoryID)
                .then(res => {
                    if (res.status !== 244) {
                        closeModal();
                        categoryInfo.id = res.data.id;
                        categoryInfo.created_at = res.data.date;

                        updateCategoryInState(categoryInfo);

                        notification('success', 'checkmark', 'Success!', 'Category ' + categoryInfo.name + ' successfully updated!');
                    }
                    else {
                        errors(res);
                    }
                });
        }
    }

    render() {
        return (

            <TransitionablePortal open={this.props.modalOpened}
                                  transition={{animation: 'scale', duration: 600}}>
                <Modal size="tiny" closeIcon onClose={this.props.closeCategoryModal} open={this.props.modalOpened}
                       className="modal-category" closeOnDimmerClick={true} closeOnEscape={true}>

                    <Modal.Header>
                        <div className="modal-head">
                            <h2 className="modal-title">
                                Category
                            </h2>
                        </div>
                    </Modal.Header>


                    <Modal.Content>
                        <div className="order-container">
                            <div className="ui one column stackable grid container">
                                <div className="column">
                                    <div className="order-setting-row">
                                        <label htmlFor="categoryName">
                                            Name <i className="ui icon tag"></i>
                                        </label>
                                        <div className="order-setting">
                                            <Input name="categoryName"
                                                   value={this.props.categoryInfo.categoryName}
                                                   onChange={this.onChange}/>
                                        </div>
                                    </div>


                                    <div className="column pt-3 text-align-center">
                                        <button
                                            onClick={this.onSubmit}
                                            className="ui primary button">
                                            Сохранить
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