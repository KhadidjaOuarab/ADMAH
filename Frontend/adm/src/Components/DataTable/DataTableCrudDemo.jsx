import React, { useState, useEffect, useRef } from "react";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "../DataTable/ProductService";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Toolbar } from "primereact/toolbar";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { InputNumber } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import "../DataTable/DataTableDemo.css";
import axios from "axios";
import { connect } from "react-redux";
import { useSelector } from "react-redux";

function DataTableCrudDemo(props) {
  let emptyADM = {
    id: null,
    admNumber: 0,
    agentCode: "",
    documentNumber: 0,
    admType: "",
    anomaly: "",
    currencyCode: "",
    totalAmount: 0,
    username: "",
    flightDate: null,
    flightNumber: 0,
    from: "",
    to: "",
    exchangeDate: null,
    exchangeDocument: 0,
    exchangeCoupon: 0,
    exchangeAgent: "",
    refundDate: null,
    refundDocument: 0,
    refundCoupon: 0,
    refundAgent: "",
  };

  const products = useSelector((state) => state.reducerSetProduct.state);

  const [productDialog, setProductDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
  const [product, setProduct] = useState(emptyADM);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);
  const productService = new ProductService();


  const openNew = () => {
    setProduct(emptyADM);
    setSubmitted(false);
    setProductDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const hideDeleteProductsDialog = () => {
    setDeleteProductsDialog(false);
  };

  const saveProduct = () => {
    setSubmitted(true);

    if (product.name.trim()) {
      let _products = [...products];
      let _product = { ...product };
      if (product.id) {
        const index = findIndexById(product.id);

        _products[index] = _product;
        toast.current.show({
          severity: "success",
          summary: "Successful",
          detail: "ADM Updated",
          life: 3000,
        });
      } else {
        _product.id = createId();
        _product.image = "product-placeholder.svg";
        _products.push(_product);
        toast.current.show({
          severity: "success",
          summary: "Successful",
          detail: "ADM Created",
          life: 3000,
        });
      }

      //setProducts(_products);
      setProductDialog(false);
      setProduct(emptyADM);
    }
  };

  const editProduct = (product) => {
    setProduct({ ...product });
    setProductDialog(true);
  };

  const confirmDeleteProduct = (product) => {
    setProduct(product);
    setDeleteProductDialog(true);
  };

  const copyProduct = (product) => {};

  const queryProduct = (product) => {};

  const deleteProduct = () => {
    let _products = products.filter((val) => val.id !== product.id);
    // setProducts(_products);
    setDeleteProductDialog(false);
    setProduct(emptyADM);
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Product Deleted",
      life: 3000,
    });
  };

  const findIndexById = (id) => {
    let index = -1;
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  };

  const createId = () => {
    let id = "";
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  };

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const confirmDeleteSelected = () => {
    setDeleteProductsDialog(true);
  };

  const deleteSelectedProducts = () => {
    let _products = products.filter((val) => !selectedProducts.includes(val));
    //  setProducts(_products);
    setDeleteProductsDialog(false);
    setSelectedProducts(null);
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Products Deleted",
      life: 3000,
    });
  };

  const rightToolbarTemplate = () => {
    return (
      <React.Fragment>
        <Button
          label="Export"
          icon="pi pi-upload"
          className="p-button-help"
          onClick={exportCSV}
        />
      </React.Fragment>
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <div className="flex flex-row">
        <Button
          icon="pi pi-info"
          className="p-button-rounded p-button-info mr-2"
          onClick={() => queryProduct(rowData)}
        />

        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success mr-2"
          onClick={() => editProduct(rowData)}
        />
        <Button
          icon="pi pi-copy"
          className="p-button-rounded p-button-help"
          onClick={() => copyProduct(rowData)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger"
          onClick={() => confirmDeleteProduct(rowData)}
        />
      </div>
    );
  };

  const productDialogFooter = (
    <React.Fragment>
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDialog}
      />
      <Button
        label="Save"
        icon="pi pi-check"
        className="p-button-text"
        onClick={saveProduct}
      />
    </React.Fragment>
  );
  const deleteProductDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteProductDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteProduct}
      />
    </React.Fragment>
  );
  const deleteProductsDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteProductsDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteSelectedProducts}
      />
    </React.Fragment>
  );
  return (
    <div>
      <div className="datatable-crud-demo">
        <Toast ref={toast} />

        <div className="card">
          <Toolbar
            className="ml-5 mr-5 h-4rem pb-6 "
            right={rightToolbarTemplate}
          ></Toolbar>

          <DataTable
            className="ml-5 mr-5"
            ref={dt}
            value={products}
            selection={selectedProducts}
            onSelectionChange={(e) => setSelectedProducts(e.value)}
            dataKey="id"
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            globalFilter={globalFilter}
            responsiveLayout="scroll"
          >
            <Column
              selectionMode="multiple"
              headerStyle={{ width: "1rem" }}
              exportable={false}
            ></Column>
            <Column
              field="admNo"
              header="ADM No"
              sortable
              style={{ minWidth: "6rem" }}
            ></Column>
            <Column
              field="agentCode"
              header="Agent Code"
              sortable
              style={{ minWidth: "6rem" }}
            ></Column>

            <Column
              field="documentNumber"
              header="Document Number"
              //body={priceBodyTemplate}
              sortable
              style={{ minWidth: "10rem" }}
            ></Column>
            <Column
              field="admType"
              header="ADM Type"
              sortable
              style={{ minWidth: "5rem" }}
            ></Column>
            <Column
              field="anomaly"
              header="Anomaly"
              //  body={ratingBodyTemplate}
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="currencyCode"
              header="Currency Code"
              //  body={statusBodyTemplate}
              sortable
              style={{ minWidth: "3rem" }}
            ></Column>
            <Column
              field="totalAmount"
              header="Total Amount"
              //   body={statusBodyTemplate}
              sortable
              style={{ minWidth: "10rem" }}
            ></Column>
            <Column
              field="Username"
              header="username"
              //  body={statusBodyTemplate}
              sortable
              style={{ minWidth: "4rem" }}
            ></Column>
            <Column
              body={actionBodyTemplate}
              exportable={false}
              style={{ minWidth: "5rem" }}
            ></Column>
          </DataTable>
        </div>

        <Dialog
          visible={productDialog}
          style={{ width: "450px" }}
          header="ADM Details"
          modal
          className="p-fluid"
          footer={productDialogFooter}
          onHide={hideDialog}
        ></Dialog>

        <Dialog
          visible={deleteProductDialog}
          style={{ width: "450px" }}
          header="Confirm"
          modal
          footer={deleteProductDialogFooter}
          onHide={hideDeleteProductDialog}
        >
          <div className="confirmation-content">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem" }}
            />
            {product && (
              <span>
                Are you sure you want to delete <b>{product.name}</b>?
              </span>
            )}
          </div>
        </Dialog>

        <Dialog
          visible={deleteProductsDialog}
          style={{ width: "450px" }}
          header="Confirm"
          modal
          footer={deleteProductsDialogFooter}
          onHide={hideDeleteProductsDialog}
        >
          <div className="confirmation-content">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem" }}
            />
            {product && (
              <span>Are you sure you want to delete the selected ADM?</span>
            )}
          </div>
        </Dialog>
      </div>
    </div>
  );
}

////////////// Se connecter au store pour récuperer le product for the datatable ////////
// Le state c'est l'état de notre magasin

/*const mapStateToProps = state => {
  return {
    products : state.products
  }
}*/ //

/*******************************************************************$ */

//export default connect(mapStateToProps) (DataTableCrudDemo);
export default DataTableCrudDemo;
