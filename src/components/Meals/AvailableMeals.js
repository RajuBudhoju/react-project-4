import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useState } from 'react';


//formdata

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Velvet Truffle Delight',
    description: 'A decadent blend of dark chocolate and smooth truffle filling',
    price: 49.99,
  },
  {
    id: 'm2',
    name: 'SchHazelnut Haven Praline',
    description: 'Rich, nutty roasted hazelnuts embraced by a velvety praline layer',
    price: 99.5,
  },
  {
    id: 'm3',
    name: 'Espresso Elegance Truffle',
    description: 'Robust espresso-infused truffles, enveloped in dark chocolate',
    price: 29.99,
  },
  {
    id: 'm4',
    name: 'Almond Symphony Crunch',
    description: 'Roasted almonds meet velvety milk chocolate for a satisfying crunch',
    price: 9.99,
  },
];

const AvailableMeals = (props) => {

      const [meals, setMeals] = useState(DUMMY_MEALS);
      const [formData, setFormData] = useState({
        itemName: '',
        itemDescription: '',
        itemPrice: 0,
      });

      const mealsList = meals.map((meal) => (
        <MealItem
          key={meal.id}
          id={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      ));
      
      const handleSubmit = (e) => {
        e.preventDefault();
        setMeals((prevMeals) => [...prevMeals, {
          id: Date.now().toString(),
          name: formData.itemName,
          description: formData.itemDescription,
          price: formData.itemPrice,
        },
        ]);
        setFormData({
          itemName: '',
          itemDescription: '',
          itemPrice: 0,
        });
      }

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      }));
    };

      return (
        <section className={classes.meals}>   
          <div>
            <form className={classes.form} onSubmit={handleSubmit}>
                <input
                    id="itemName"
                    type="text"
                    name="itemName"
                    onChange={handleInputChange}
                    value={formData.itemName}
                    placeholder="Chocolate Name"
                />
                <input
                    id="itemDescription"
                    type="text"
                    name="itemDescription"
                    onChange={handleInputChange}
                    value={formData.itemDescription}
                    placeholder="Flavor"
                />
                <input
                    id="itemPrice"
                    type="number"
                    name="itemPrice"
                    onChange={handleInputChange}
                    value={formData.itemPrice}
                    placeholder="Each One price"
                />

                <button type="submit">Add</button>
            </form>

        </div>
        <Card>
            <ul>{mealsList}</ul>
        </Card>
      </section>
      );
};

export default AvailableMeals;