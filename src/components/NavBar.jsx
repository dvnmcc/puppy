import React from "react";

export default function NavBar() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
      </Routes>
    </BrowserRouter>
  );
}
