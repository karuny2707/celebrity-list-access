import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './App.css';

const calculateAge = (dob) => {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const App = () => {
  const initialCelebrities = [
    {
      name: "Aidan Wang",
      dob: "1973-10-16",
      gender: "Male",
      country: "New Zealand",
      description: "This character description generator will generate a fairly random description of a belonging to Aidan Wang. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Aidan Wang.",
      picture: "https://randomuser.me/api/portraits/med/men/93.jpg"
    },
      {
          "name": "Anna Horten",
          "dob": "1972-03-15",
          "gender": "Female",
          "country": "Norway",
          "description": "This character description generator will generate a fairly random description of a belonging to Anna Horten. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Anna Horten.",
          "picture": "https://randomuser.me/api/portraits/med/women/48.jpg"
      },
      {
          "name": "Max Arnold",
          "dob": "1954-04-22",
          "gender": "Male",
          "country": "Ireland",
          "description": "This character description generator will generate a fairly random description of a belonging to Max Arnold. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Max Arnold.",
          "picture": "https://randomuser.me/api/portraits/med/men/27.jpg"
      },
      {
          "name": "محمدپارسا صدر",
          "dob": "1953-06-01",
          "gender": "Male",
          "country": "Iran",
          "description": "This character description generator will generate a fairly random description of a belonging to محمدپارسا صدر. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of محمدپارسا صدر.",
          "picture": "https://randomuser.me/api/portraits/med/men/34.jpg"
      },
      {
          "name": "Emilia Gonzalez",
          "dob": "1949-10-07",
          "gender": "Female",
          "country": "Spain",
          "description": "This character description generator will generate a fairly random description of a belonging to Emilia Gonzalez. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Emilia Gonzalez.",
          "picture": "https://randomuser.me/api/portraits/med/women/90.jpg"
      },
      {
          "name": "Alicia Ma",
          "dob": "1995-11-23",
          "gender": "Female",
          "country": "Canada",
          "description": "This character description generator will generate a fairly random description of a belonging to Alicia Ma. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Alicia Ma.",
          "picture": "https://randomuser.me/api/portraits/med/women/91.jpg"
      },
      {
          "name": "یاسمن كامياران",
          "dob": "1985-06-24",
          "gender": "Female",
          "country": "Iran",
          "description": "This character description generator will generate a fairly random description of a belonging to یاسمن كامياران. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of یاسمن كامياران.",
          "picture": "https://randomuser.me/api/portraits/med/women/64.jpg"
      },
      {
          "name": "Reingard Barz",
          "dob": "1985-03-24",
          "gender": "Female",
          "country": "Germany",
          "description": "This character description generator will generate a fairly random description of a belonging to Reingard Barz. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Reingard Barz.",
          "picture": "https://randomuser.me/api/portraits/med/women/95.jpg"
      },
      {
          "name": "Felix Douglas",
          "dob": "1984-07-05",
          "gender": "Male",
          "country": "United Kingdom",
          "description": "This character description generator will generate a fairly random description of a belonging to Felix Douglas. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Felix Douglas.",
          "picture": "https://randomuser.me/api/portraits/med/men/53.jpg"
      },
      {
          "name": "Claire Robertson",
          "dob": "2006-04-16",
          "gender": "Female",
          "country": "United States",
          "description": "This character description generator will generate a fairly random description of a belonging to Claire Robertson. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Claire Robertson.",
          "picture": "https://randomuser.me/api/portraits/med/women/75.jpg"
      },
      {
          "name": "Ümit Taşlı",
          "dob": "2004-10-17",
          "gender": "Male",
          "country": "Turkey",
          "description": "This character description generator will generate a fairly random description of a belonging to Ümit Taşlı. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Ümit Taşlı.",
          "picture": "https://randomuser.me/api/portraits/med/men/80.jpg"
      },
      {
          "name": "Tiemo Monshouwer",
          "dob": "1956-09-11",
          "gender": "Male",
          "country": "Netherlands",
          "description": "This character description generator will generate a fairly random description of a belonging to Tiemo Monshouwer. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Tiemo Monshouwer.",
          "picture": "https://randomuser.me/api/portraits/med/men/16.jpg"
      },
      {
          "name": "Dorian Carpentier",
          "dob": "1963-10-06",
          "gender": "Male",
          "country": "France",
          "description": "This character description generator will generate a fairly random description of a belonging to Dorian Carpentier. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Dorian Carpentier.",
          "picture": "https://randomuser.me/api/portraits/med/men/77.jpg"
      },
      {
          "name": "آرمیتا موسوی",
          "dob": "1968-07-19",
          "gender": "Female",
          "country": "Iran",
          "description": "This character description generator will generate a fairly random description of a belonging to آرمیتا موسوی. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of آرمیتا موسوی.",
          "picture": "https://randomuser.me/api/portraits/med/women/59.jpg"
      },
      {
          "name": "Lias Korsvik",
          "dob": "1969-12-09",
          "gender": "Male",
          "country": "Norway",
          "description": "This character description generator will generate a fairly random description of a belonging to Lias Korsvik. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Lias Korsvik.",
          "picture": "https://randomuser.me/api/portraits/med/men/69.jpg"
      },
      {
          "name": "Florence Cooper",
          "dob": "1989-08-31",
          "gender": "Female",
          "country": "Ireland",
          "description": "This character description generator will generate a fairly random description of a belonging to Florence Cooper. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Florence Cooper.",
          "picture": "https://randomuser.me/api/portraits/med/women/19.jpg"
      },
      {
          "name": "Donald Harrison",
          "dob": "1947-12-20",
          "gender": "Male",
          "country": "United Kingdom",
          "description": "This character description generator will generate a fairly random description of a belonging to Donald Harrison. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Donald Harrison.",
          "picture": "https://randomuser.me/api/portraits/med/men/34.jpg"
      },
      {
          "name": "Michael Nichols",
          "dob": "1963-06-26",
          "gender": "Male",
          "country": "United Kingdom",
          "description": "This character description generator will generate a fairly random description of a belonging to Michael Nichols. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Michael Nichols.",
          "picture": "https://randomuser.me/api/portraits/med/men/76.jpg",
  
      },
       {
            "name": "Emile Miller",
            "dob": "2009-02-03",
            "gender": "Male",
            "country": "Canada",
            "description": "This character description generator will generate a fairly random description of a belonging to Emile Miller. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Emile Miller.",
            "picture": "https://randomuser.me/api/portraits/med/men/24.jpg"
        },
        {
            "name": "Marjella Stuijt",
            "dob": "2014-11-11",
            "gender": "Female",
            "country": "Netherlands",
            "description": "This character description generator will generate a fairly random description of a belonging to Marjella Stuijt. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Marjella Stuijt.",
            "picture": "https://randomuser.me/api/portraits/med/women/31.jpg"
        }
    ];

  const [celebrities, setCelebrities] = useState(
    initialCelebrities.map(celeb => ({
      ...celeb,
      age: calculateAge(celeb.dob)
    }))
  );

  const [searchTerm, setSearchTerm] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCelebrities = celebrities.filter(celeb =>
    celeb.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const handleEdit = (index) => {
    if (celebrities[index].age >= 18) {
      setIsEditing(index);
    } else {
      alert('You can only edit details of users who are adults.');
    }
  };

  const handleDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setCelebrities(celebrities.filter((_, i) => i !== index));
    }
  };

  const handleSave = (index, updatedCeleb) => {
    const updatedCelebrities = celebrities.map((celeb, i) =>
      i === index ? updatedCeleb : celeb
    );
    setCelebrities(updatedCelebrities);
    setIsEditing(null);
  };

  const handleCancel = () => {
    setIsEditing(null);
  };

  return (
    <div className="App">
      <h1>Celebrity List</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="celebrity-list">
        {filteredCelebrities.map((celeb, index) => (
          <div key={index} className="celebrity-item">
            <div className="accordion-header" onClick={() => toggleAccordion(index)}>
              <img src={celeb.picture} alt={celeb.name} />
              <h2>{celeb.name}</h2>
              <button className="toggle-icon">
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </button>
            </div>
            {activeIndex === index && (
              <div className="accordion-content">
                {isEditing === index ? (
                  <EditForm
                    celeb={celeb}
                    onSave={(updatedCeleb) => handleSave(index, updatedCeleb)}
                    onCancel={handleCancel}
                  />
                ) : (
                  <>
                    <p>Age: {celeb.age} Years</p>
                    <p>Gender: {celeb.gender}</p>
                    <p>Country: {celeb.country}</p>
                    <p>Description: {celeb.description}</p>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const EditForm = ({ celeb, onSave, onCancel }) => {
  const [formData, setFormData] = useState({ ...celeb });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
  };

  const isSaveDisabled = JSON.stringify(formData) === JSON.stringify(celeb);

  return (
    <div className="edit-form">
      <div>
        <label>Age: </label>
        <input type="text" value={formData.age} disabled />
      </div>
      <div>
        <label>Gender: </label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Transgender">Transgender</option>
          <option value="Rather not say">Rather not say</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label>Country: </label>
        <input type="text" name="country" value={formData.country} onChange={handleChange} />
      </div>
      <div>
        <label>Description: </label>
        <textarea name="description" value={formData.description} onChange={handleChange} />
      </div>
      <button onClick={handleSave} disabled={isSaveDisabled}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default App;
