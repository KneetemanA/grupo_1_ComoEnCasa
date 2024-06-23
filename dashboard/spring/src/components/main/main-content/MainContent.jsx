import CardsMap from "./Cards/CardsMaps";
import CardLastDate from "./CardsLastDate/CardLastDate";


function MainContent() {
  return (
    <main className="col-md-10 mt-5 m-auto col-lg-10 p-4 text-white">
      <div className="d-flex w-100 justify-content-between ">
        <CardsMap/>
      </div>
      <CardLastDate/>
    </main>
  );
}

export default MainContent;
