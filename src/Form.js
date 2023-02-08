import React from "react";

const Form = (props) => {
  const { takimUyeleri, handleChange, handleSubmit, butonDisabledMi } = props;

  return (
    <>
      <h1>Üye Olun</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="isim">İsim: </label>
          <input
            id="isim"
            type="text"
            value={takimUyeleri.isim}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail: </label>
          <input
            id="email"
            type="email"
            value={takimUyeleri.email}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div>
          <label htmlFor="rol">Rol: </label>
          <input
            id="rol"
            type="text"
            value={takimUyeleri.rol}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <p>
          <input
            className="gonderButton"
            name="gonder"
            type="submit"
            disabled={butonDisabledMi}
          />
        </p>
      </form>
    </>
  );
};

export default Form;
