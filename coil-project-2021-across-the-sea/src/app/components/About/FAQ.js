import React from "react";
import styled from "styled-components";

const QA = () => {
  return (
    <section>
      <h2>FAQ</h2>

      <ul>
        <li>
          <p>Where are you available?</p>

          <p>
            We are currently operating in Belgium and plan on expanding to
            Canada.
          </p>
        </li>

        <li>
          <p>What currency do you accept?</p>

          <p>We currently only accept Euros</p>
        </li>

        <li>
          <p>What are the costs?</p>

          <p>
            Farmers and producers set the cost of goods and we charge a small
            delivery fee to make sure you get your goods on time! Fees and costs
            vary depending on seller costs and by delivery distances, weather,
            and external circumstances.
          </p>
        </li>

        <li>
          <p>What do you sell?</p>

          <span>We offer local produce such as:</span>

          <ul>
            <li>Vegetables</li>

            <li>Fruit</li>

            <li>Breads</li>

            <li>Meats</li>

            <li>Dairy</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default QA;
