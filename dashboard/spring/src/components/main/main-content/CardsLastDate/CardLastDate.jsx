

function CardLastDate() {
  return (
    <div className="d-flex w-100 justify-content-between  mt-3">
    
    
    <div className="container-graficos-card p-3  " >Grafico</div>
    
    
    <div className=" container-last-date  ">
        <div className="user-last-date p-3 ">
         <span className="fs-6">Ultimo usuario registrado</span>
         <div className="d-flex align-items-center justify-content-between mt-3">
            <figure>imagen</figure>
        
         <div className="d-flex flex-column gap-2">
            <span>user</span>
            <span>nombre</span>
            
         </div>
         </div>


        </div>
        <div className="product-last-date ">
        <div className="user-last-date p-3  ">
         <span className="fs-6">Ultimo producto agregado</span>
         <div className="d-flex align-items-center justify-content-between mt-3">
            <figure>imagen</figure>
        
         <div className="d-flex flex-column gap-2">
            <span>titulo</span>
            <span>precio</span>
         </div>
         </div>
        </div>
        </div>
    </div>


    </div>
  )
}

export default CardLastDate
