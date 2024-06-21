import { useForm } from "react-hook-form";

function CreateProduct2() {
  const { register, handleSubmit,formState: { errors } } = useForm();

  const onSubmit=handleSubmit((data)=>{
    console.log(data)
})
console.log(errors)

  return (
    <form className="text-white" action=""  onSubmit={onSubmit}>
      <div>
        <label className="d-block" htmlFor="name">
          Nombre
        </label>
        <input type="text" id="name" name="name" {...register("name", { required: true })} />

        {errors.name?.type === "required" && <p className="text-danger">El nombre es requerido</p>}
        
      </div>
      <div>
        <label className="d-block" htmlFor="price">
          Precio
        </label>
        <input type="text" id="price" name="price" {...register("price",{required:{value:true,message:"El precio es requerido"}})} />

        {errors.price   && <p className="text-danger">{errors.price.message}</p>}
      </div>
      <div>
        <label className="d-block" htmlFor="discount">
          Descuento
        </label>
        <input
          type="text"
          id="discount"
          name="discount"
          {...register("discount")}
        />
      </div>

      <div>
        <label htmlFor="envioGratis">Envio Gratis</label>
        <div>
          <input
            type="radio"
            id="si"
            name="envioGratis"
            value="si"
            {...register("envioGratis")}
          />
          <label htmlFor="si">si</label>
        </div>
        <div>
          <input
            type="radio"
            id="no"
            name="envioGratis"
            value="no"
            {...register("envioGratis")}
          />
          <label htmlFor="no">no</label>
        </div>
      </div>
      <div>
        <label htmlFor="image">Foto del producto</label>
        <input type="file" id="image" name="image" {...register("image")} />
      </div>
      <div>
        <label htmlFor="categoria">Categorias</label>
        <div>
          <input
            type="radio"
            id="pizza"
            name="categoria"
            value="Pizza"
            {...register("categoria")}
          />
          <label htmlFor="pizza">Pizza</label>
        </div>
        <div>
          <input
            type="radio"
            id="hamburguesa"
            name="categoria"
            value="Hamburguesa"
            {...register("categoria")}
          />
          <label htmlFor="hamburguesa">Hamburguesa</label>
        </div>
        <div>
          <input
            type="radio"
            id="papas"
            name="categoria"
            value="Papas Fritas"
            {...register("categoria")}
          />
          <label htmlFor="papas">Papas Fritas</label>
        </div>
      </div>
      <div>
        <textarea id="detail" name="detail" {...register("detail")}></textarea>
      </div>

      <button type="submit">Crear</button>
    </form>
  );
}

export default CreateProduct2;
