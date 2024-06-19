import Cards from "./Cards"

function MainContent() {
  return (
    <main className="col-md-10 col-lg-10 px-md-4 text-white">
      <div className="p-3 mt-5 ms-3 d-flex">
      <Cards/>
      <Cards/>
      <Cards/>
      </div>
    </main>
  );
}

export default MainContent;