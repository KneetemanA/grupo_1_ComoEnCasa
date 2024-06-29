import Grafico from "./Grafico";

function CardLastDate({ name,price,user,nameuser,imgpro,imguser})  {
    return (
      <div className="d-flex w-100 justify-content-between mt-3">
        <div className="container-graficos-card p-3 ps-0">
          
          <Grafico />
          </div>
        <div className="container-last-date">
          <div className="user-last-date p-3">
           <div className="d-flex justify-content-between align-items-center">
           <span className="fs-6 text-secondary fw-bold">Ultimo usuario registrado</span>
           <i className="fas fa-eye fs-6 text-secondary"></i>
           </div>
            <div className="d-flex align-items-start gap-3 mt-3">
              <figure className="container-img-lastdate"><img src={"http://localhost:3030/images/"+imguser} alt="" /></figure>
              <div className="d-flex flex-column gap-2">
                <span>{user}</span>
                <span>{nameuser}</span>
              </div>
            </div>
          </div>
          <div className="product-last-date">
            <div className="user-last-date p-3">
            <div className="d-flex justify-content-between align-items-center">
           <span className="fs-6 text-secondary fw-bold">Ultimo producto agregado</span>
           <i className="fas fa-eye fs-6 text-secondary"></i>
           </div>
              <div className="d-flex align-items-start gap-3 mt-3">
                <figure className="container-img-lastdate"><img src={"http://localhost:3030"+imgpro} alt="" /></figure>
                <div className="d-flex flex-column gap-2">
                  <span>{name}</span>
                  <span>${price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default CardLastDate;
  