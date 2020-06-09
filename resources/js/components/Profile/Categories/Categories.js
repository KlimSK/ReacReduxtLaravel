import React, {Component} from "react";
import CategoriesTableHeader from "./CategoriesTableHeader";
import TableControls from "../inc/TableControls";
import {mainTableHeight, tableRowClick} from "../inc/tableFunctions";
import Pagination from "../inc/Pagination";
import CategoryModalContainer from "../Modals/CategoryModalContainer";
import {getCategories} from "../../../src/categoriesFunctions";
import Category from "./Category";


export default class Categories extends Component {

    componentDidMount() {
        mainTableHeight();

        getCategories().then(res => {
            this.props.getCategories(res);
        });
    }

    componentDidUpdate(){
        tableRowClick();
    }

    render() {

        let rows = this.props.categories.map((category, key) => {
            return <Category editCategoryModal={this.props.editCategoryModal} category={category} key={key} />;
        });

        return (
            <React.Fragment>
                <div>
                    <TableControls page="categories" addCategoryModal={this.props.addCategoryModal}/>
                    <div className="main-table category-table">
                        <table className=" ui table blue celled">
                            <CategoriesTableHeader/>
                            <tbody>

                            {rows}

                            </tbody>
                        </table>
                    </div>

                    <Pagination/>
                </div>

                <CategoryModalContainer/>
            </React.Fragment>
        )
    }
}