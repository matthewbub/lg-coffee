const LogInForm = () => {
  return (
    <form className='mt-3 mb-3 form-signin d-flex flex-column align-items-center'>
      <img
        className='mb-4'
        src='https://via.placeholder.com/150'
        alt
        width={72}
        height={72}
      />
      <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
      <label htmlFor='inputEmail' className='sr-only '>
        Email address
      </label>
      <input
        type='email'
        id='inputEmail'
        className='form-control mb-2'
        placeholder='Email address'
        required
        autofocus
      />
      <label htmlFor='inputPassword' className='sr-only'>
        Password
      </label>
      <input
        type='password'
        id='inputPassword'
        className='form-control mb-3'
        placeholder='Password'
        required
      />
      <div className='checkbox mb-3'>
        <label>
          <input type='checkbox' defaultValue='remember-me' /> Remember me
        </label>
      </div>
      <button className='btn btn-lg btn-primary btn-block' type='submit'>
        Sign in
      </button>
    </form>
  );
};

export { LogInForm };
