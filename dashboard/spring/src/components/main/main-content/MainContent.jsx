import CardsMap from "./Cards/CardsMaps";

function MainContent() {
  return (
    <main className="col-md-10 mt-5 m-auto col-lg-10 p-4 text-white">
      <div className="d-flex w-100 justify-content-around ">
        <CardsMap/>
      </div>
    </main>
  );
}

export default MainContent;
