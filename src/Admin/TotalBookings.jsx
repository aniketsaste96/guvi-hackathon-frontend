import React from "react";
import AdminHome from "./AdminHome";
export const TotalBookings = () => {
  return (
    <>
      <AdminHome />
      <div>
        <table class="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">SR NO</th>
              <th scope="col">City</th>
              <th scope="col">Theater Name</th>
              <th scope="col">Collections</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Chennai</td>
              <td>Nivyasa</td>
              <td>₹80,000</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mumbai</td>
              <td>ITC</td>
              <td>₹100,000</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mumbai</td>
              <td>Netra</td>
              <td>₹100,000</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Delhi</td>
              <td>Hayat</td>
              <td>₹60,000</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Hydrabad</td>
              <td>Mangal</td>
              <td>₹200,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
