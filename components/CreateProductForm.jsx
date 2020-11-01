const CreateProductForm = () => {
  return (
    <form className="mt-3 mb-3 form-signin d-flex flex-column align-items-center">
      <img
        className="mb-4"
        src="https://via.placeholder.com/150"
        alt
        width={72}
        height={72}
      />
      <h1 className="h3 mb-3 font-weight-normal">Create New Product</h1>

      {/* title  */}
      <label htmlFor="inputTitle" className="sr-only ">
        Product Title
      </label>
      <input
        type="text"
        id="inputTitle"
        className="form-control mb-2"
        placeholder="Product Name"
        required
        autofocus
      />

      {/* description */}
      <label htmlFor="inputDescription" className="sr-only">
        Product Description
      </label>
      <textarea
        className="form-control mb-2"
        placeholder="Description"
        id="inputDescription"
        rows={3}
        defaultValue={""}
      />

      {/* Price  */}
      <label htmlFor="inputPrice" className="sr-only ">
        Price Per Unit
      </label>
      <input
        type="text"
        id="inputPrice"
        className="form-control mb-2"
        placeholder="Price Per Unit"
        autofocus
      />

      {/* Qty  */}
      <label htmlFor="inputQty" className="sr-only ">
        Qty In Stock
      </label>
      <input
        type="number"
        id="inputQty"
        className="form-control mb-2"
        placeholder="Qty In Stock (optional)"
        min="0"
        autofocus
      />

      {/* Sku  */}
      <label htmlFor="inputPrice" className="sr-only ">
        Product Sku
      </label>
      <input
        type="text"
        id="inputSku"
        className="form-control mb-2"
        placeholder="Product Sku (optional)"
        autofocus
      />

      {/* images */}
      <div className="form-group">
        <label htmlFor="inputImage">Select Product Image</label>
        <input type="file" className="form-control-file" id="inputImage" />
      </div>

      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Create Product
      </button>
    </form>
  );
};

export { CreateProductForm };
