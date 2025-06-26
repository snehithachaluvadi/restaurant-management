import React, { useState } from 'react';
import './OrderSuggestions.css';

const questions = [
  {
    question: "What type of meal are you in the mood for?",
    options: [{ text: "Light Snack", image: "https://img.freepik.com/premium-photo/lunch-go-with-fruits-box_1220-5284.jpg" },
      { text: "Full Meal", image: "https://images.picxy.com/cache/2020/7/12/4e03728d5f6f34978cfb626c3c29d772.jpg" },
      { text: "Dessert", image: "https://th.bing.com/th/id/OIP.UzC5U0kZ-0AiZ6_s2TNo2gHaHa?rs=1&pid=ImgDetMain" }]
  },
  {
    question: "What flavor profile do you prefer?",
    options: [{ text: "Spicy", image: "https://cdn.shopify.com/s/files/1/2182/2603/files/redchilipepper.jpg?v=1669750479" },
      { text: "Sweet", image: "https://cdn.britannica.com/73/239573-131-63075292/sugar-cubes.jpg" },
      { text: "Savory", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6Je0a0N68hEYAkv1vaIzvU4D5C2wy-NczA&s" }]
  },
  {
    question: "Do you have a dietary preference?",
    options: [{ text: "Vegetarian", image: "https://t3.ftcdn.net/jpg/06/09/29/66/360_F_609296627_cmZaL9QWAmnkfMzZZxmAqf7pHAUqR1Qx.jpg" },
      { text: "Non-Vegetarian", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYDq5zhyxlZi3V-ZgEfznuC676i_dYRNU3Ql2hgBJiXP2tgz19Vb_gHlinps9gVMRCcT4&usqp=CAU" },
      { text: "Vegan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeWAT-O6ocV17f7f-YD1doLDBpAN9Ve45jGQ&s" }]
  },
  {
    question: "Craving any particular cuisine?",
    options: [{ text: "Italian", image: "https://dcdn.thestagcompany.com/uploads/blog/lasagne-stag.jpg" },
      { text: "Indian", image: "https://www.contiki.com/six-two/app/uploads/2024/03/IMG-20240318-WA0007-e1710844435378.jpg" },
      { text: "American", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEZRM3UUpLofa_NGb3o8wAR4toe9vmHkH9QA&s" },
      { text: "Asian", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcgzNOwaKgRF4c2uixowLnb5JvS_xoX10WA&s" }]
  },
  {
    question: "How hungry are you?",
    options: [{ text: "Just a little", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Msw1FpAcDqO4-tD-G13nquOjRDiSs2TkIw&shttps://www.shutterstock.com/image-vector/50-percent-full-battery-charge-260nw-1814810930.jpg" },
      { text: "Normal hungry", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-9kgAGi_---TkIumQYvwlosDM3phX4iAkjw&s" },
      { text: "Starving", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhpZA9mFBZED71XNuYsnH2KtNh1LWbRBeIg&s" }]
  },
  {
    question: "What's your budget?",
    options: [{ text: "Low", image: "https://static.vecteezy.com/system/resources/previews/036/494/425/non_2x/rupee-icon-symbol-indian-currency-inr-rupee-symbol-free-vector.jpg" },
      { text: "Medium", image: "https://c8.alamy.com/comp/2RPBFDM/rupee-icon-symbol-in-light-medium-and-bold-size-2RPBFDM.jpg" },
      { text: "Premium", image: "https://cdn-icons-png.flaticon.com/512/10535/10535976.png" }]
  }
];
const dishSuggestions = [
    {
      name: "Spicy Ramen Bowl",
      tags: ["Spicy", "Full Meal", "Asian", "Non-Vegetarian"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBIVtQbwZ50eXHj-qI4iUUS8_BWsycYUWbpQ&s"
    },
    {
      name: "Vegan Buddha Bowl",
      tags: ["Vegan", "Healthy", "Full Meal"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbLJyQVR0ichX_JUVfkMIyV8OrgNgddh2WIQ&s"
    },
    {
      name: "Mini Churros",
      tags: ["Dessert", "Sweet", "Low"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0gZ4Im0vsQP7NHafRjy_h7Uhj0xHHxeLzyQ&s"
    },
    {
      name: "Grilled Cheese Sandwich",
      tags: ["Snack", "American", "Vegetarian"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5kzz62lAtCgRh9fcJSgMYdzJXj2UQdCDhKg&s"
    },
    {
      name: "Paneer Tikka",
      tags: ["Spicy", "Indian", "Vegetarian"],
      image: "https://www.gohealthyeverafter.com/wp-content/uploads/2023/05/Paneer-tikka-2.jpg"
    },
    {
      name: "Chocolate Lava Cake",
      tags: ["Dessert", "Sweet", "Premium"],
      image: "https://www.foodandwine.com/thmb/XdFd-DvTtouryLCjeCqwhfmmK-A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/molten-chocolate-cake-FT-RECIPE0220-0a33d7d0ab0c45588f7bfe742d33a9bc.jpg"
    },
    {
      name: "Classic Margherita Pizza",
      tags: ["Italian", "Vegetarian", "Full Meal"],
      image: "https://allforpizza.com/wp-content/uploads/2022/07/1460A7EC-CF3B-40E8-B05F-A21E12E85EC6-530x530.jpeg"
    },
    {
      name: "Beef Cheeseburger",
      tags: ["American", "Spicy", "Non-Vegetarian", "Full Meal"],
      image: "https://d31qjkbvvkyanm.cloudfront.net/images/recipe-images/angus-beef--bacon-chili-cheeseburger-detail-a18f903d.jpg"
    },
    {
      name: "Falafel Wrap",
      tags: ["Vegan", "Middle Eastern", "Snack"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbQmKcg9Nbln7Boh_PTZ0VWZq_HeUqK86HKQ&s"
    },
    {
      name: "Chicken Tikka Masala",
      tags: ["Indian", "Full Meal", "Non-Vegetarian"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_jxW7GIhqQ5V_bI-IGjkGeFhIBjHOsPuUg&s"
    },
    {
      name: "Sushi Platter",
      tags: ["Asian", "Premium", "Non-Vegetarian"],
      image: "https://i.redd.it/vhdfzhsgmsl61.jpg"
    },
    {
      name: "Pancake Stack",
      tags: ["Sweet", "Dessert", "Breakfast"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQVrSRs_N9RlAYj5ZeF1TJ4zX6dWzHekzjbw&s"
    },
    {
      name: "Caesar Salad",
      tags: ["Healthy", "Light", "Vegetarian"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV5Yp0uPt-uqJ5udVjAL71-ArAIvCzE84nYQ&s"
    }
  ];
  const OrderSuggestions = () => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);
  
    const handleAnswer = (answer) => {
      setAnswers([...answers, answer]);
      if (step + 1 < questions.length) {
        setStep(step + 1);
      } else {
        setShowResults(true);
      }
    };
  
    const getSuggestions = () => {
      const scoreMap = {};
  
      dishSuggestions.forEach((dish) => {
        let score = 0;
        answers.forEach((answer) => {
          if (dish.tags.includes(answer)) score += 1;
        });
        scoreMap[dish.name] = score;
      });
  
      const sorted = Object.entries(scoreMap)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([name]) => name);
  
      return sorted;
    };
  
    return (
      <div className="suggestion-container">
        {!showResults ? (
          <>
            <h2 className="suggestion-question">{questions[step].question}</h2>
            <div className="options-container">
            {questions[step].options.map((option, idx) => (
              <button
    key={idx}
    className="option-button"
    onClick={() => handleAnswer(option.text)}
  >
    <img src={option.image} alt={option.text} />
    <span>{option.text}</span>
  </button>
))}
            </div>
          </>
        ) : (
          <div className="results-container">
            <h2>Your Top Dish Suggestions</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
              {getSuggestions().map((dishName, idx) => {
                const dish = dishSuggestions.find(d => d.name === dishName);
                return (
                  <div key={idx} className="dish-card">
                    <img src={dish.image} alt={dish.name} className="dish-image" />
                    <div className="dish-details">
                      <h3 className="dish-name">{dish.name}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default OrderSuggestions;
