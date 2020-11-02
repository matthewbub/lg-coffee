const AccountSettingsForm = (props) => {
  return (
    <div>
      <form className="mt-3 mb-3 form-signin d-flex flex-column align-items-center">
        <img
          className="mb-4"
          src="https://via.placeholder.com/150"
          alt
          width={72}
          height={72}
        />
        <h1 className="h3 mb-3 font-weight-normal align-self-start">
          Account Settings
        </h1>

        {/* email  */}
        <label htmlFor="inputTitle" className="align-self-start">
          Update Email
        </label>
        <input
          type="text"
          id="inputEmail"
          className="form-control mb-2"
          placeholder={"demo@user.com"}
          autofocus
        />

        {/* password */}
        <label htmlFor="inputPassword" className="align-self-start">
          Update Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control mb-2"
          placeholder={"Password"}
          autofocus
        />

        {/* store name */}
        <label htmlFor="inputPassword" className="align-self-start">
          Update Store Name
        </label>
        <input
          type="text"
          id="inputStoreName"
          className="form-control mb-2"
          placeholder={"My Store"}
          autofocus
        />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Update Account
        </button>
      </form>
      <div className="alert alert-warning mt-5" style={{ width: "100%" }}>
        <h2 className="h3 mb-3font-weight-normal align-self-start">
          Danger Zone 🚧
        </h2>
        <details>
          <summary>Delete Account</summary>

          <form>
            <div className="form-group form-check mt-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Yes, I acknowledge that I am deleting my account.
              </label>
            </div>

            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Yes, I acknowledge that this action is permanent.
              </label>
            </div>

            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Yes, I acknowledge that I will lose permanently lose all data
                associated with this account.
              </label>
            </div>

            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Yes, I am sure I want to delete my Account.
              </label>
            </div>
            <button type="submit" className="btn btn-danger">
              🚨 &nbsp; Delete Account 🚨
            </button>
          </form>
        </details>
      </div>
    </div>
  );
};

export { AccountSettingsForm };
